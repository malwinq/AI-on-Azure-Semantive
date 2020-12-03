# Knowledge Mining with Cognitive Services

Projekt zewnętrzny dla firmy Semantive realizowany w ramach przedmiotu na PW

## Zespół

* Malwina Kubas
* Michał Bogacz
* Piotr Szubert

Trello: https://trello.com/b/Ta5WQgHy/semantive

## Opis projektu

Wiele organizacji boryka się z problemem zarządzania wiedzą w organizacji. O ile dane dostępne w hurtowniach danych są zrozumiałe dla analityków biznesowych, to dane zamknięte w dokumentach, prezentacjach, obrazach i innych danych unstructured często nie są zarządzane, a wiedza na ich temat jest zamknięta w silosach organizacyjnych. Duża część czasu pracowników jest stracona na manualne, czasochłonne wyszukiwanie właściwego dokumentu. Celem projektu jest zaimplementowanie rozwiązania, które robi ekstrakcję wiedzy z danych Unstructured. Zalecane jest skorzystanie z Cognitive Search Services i przygotowanie Custom Skills, które wyciągają dodatkowe metadane z dokumentów oprócz już dostępnych Skill’i. Rozwiązanie powinno być dostępne jako aplikacja typu Power App, do której można wgrać dowolny dokument i uzyskać metadane. Za konkretny przykład może posłużyć wykrywanie marek (brand) z obrazów lub lokalizowanie (geolocation) dokumentów w oparciu o treści w nich zawarte. Oczekuje się, że studenci przetestują takie rozwiązanie w oparciu o dostępne otwarte danei ustalą konkretny use-case, który wykorzystuje co najmniej 2 Custom Skille. 

## Funkcjonalności aplikacji
* ekstrakcja danych z dokumentów unstructured
* przechowywanie dokumentów i ich metadanych w bazie danych
* wyszukiwarka danych i dokumentów w postaci aplikacji webowej

## Architektura rozwiązania
(wstępna wersja)

![Image](images/architektura.png)

Serwisy:
* Function App, Azure AD, Graph API - do przygotowania danych (zapis w jednolitym formacie itp.)
* Cognitive Services, Form Recognition (i/lub Document Extraction) - do wstępnej ekstrakcji danych
* Azure Databricks - do połączenia Form Recognition z naszym własnym modelem sieci neuronowej i zapisania wyników w bazie danych
* Blob Storage - baza danych przechowująca pliki wraz z ich metadanymi
* Elastic Search App - klaster Elasticsearcha, który implementuje inteligentne wyszukiwanie
* Web App - aplikacja webowa (wyszukiwarka)

## Opis działania

### 1. Przygotowanie Danych

Azure Function App -> Azure AD -> Microsoft Graph

Przykład: https://docs.microsoft.com/en-us/graph/api/driveitem-get-content-format?view=graph-rest-beta&tabs=http
https://docs.microsoft.com/pl-pl/azure/active-directory/identity-protection/howto-identity-protection-graph-api

### 2. Ekstrakcja danych

Form Recognizer (Cognitive Services):

https://azure.microsoft.com/en-us/services/cognitive-services/form-recognizer/

https://techcommunity.microsoft.com/t5/azure-ai/accelerate-extraction-of-text-data-and-structure-from-your/ba-p/1507365

https://docs.microsoft.com/en-us/azure/cognitive-services/form-recognizer/overview?tabs=v2-0

Inne:
- Document Extraction (Cognitive Services) 
https://docs.microsoft.com/en-us/azure/search/cognitive-search-skill-document-extraction

Możemy użyć tego serwisu jako pierwszy etap ekstrakcji, a potem dostosować wyniki do naszych potrzeb 
(coś hardcodowanego lub sieć neuronowa).

Dodatkowa ekstrakcja/model sieci - możemy użyć jakiś gotowych serwisów i funkcjonalności Azure (np. AML, Cognitive Services)
i/lub wytrenować własny model sieci neuronowej (jako meta-learning) - na Databricksach lub lokalnie i wgrać gotowy model.

Azure Databricks - możemy z poziomu jednego Notebooka odwołać się do REST API z Form Recognizer, następnie przerobić te dane (lub przepuścić przez model ML) i zapisać wynik do bazy.

### 3. Przechowywanie danych

* Blob Storage - prosta baza, można w niej przechowywać pliki
* CosmosDB - fajna baza NoSQL, ale droga

Porównanie: https://stackshare.io/stackups/azure-cosmos-db-vs-azure-storage

Inne magazyny danych: https://docs.microsoft.com/en-us/azure/architecture/data-guide/technology-choices/data-storage

### 4. Silnik wyszukiwania

Elasticsearch - na Azure 'Elastic Cloud'/'Elastic Stack' lub 'Elastic App Search'

https://azure.microsoft.com/en-us/overview/linux-on-azure/elastic/#customer-stories

https://www.elastic.co/blog/elasticsearch-service-on-elastic-cloud-now-generally-available-on-microsoft-azure

Połączenie z Blob Storage: 
https://azure.microsoft.com/pl-pl/blog/archive-elasticsearch-indices-to-azure-blob-storage-using-the-azure-cloud-plugin/

Jeśli nie uda się z gotowym serwisem Azurowym to można utworzyć VMke na Azure i tam utworzyć klaster ES. 

Jeśli będzie to działać to teoretycznie nie jest nam potrzebny Blob Storage (ani inna sql-owa baza)

Ewentualnie możemy użyć najzwyklejszego indexera na Blob Storage: 
https://azure.microsoft.com/en-us/blog/azure-search-indexer-for-azure-blob-storage-now-in-public-preview/
ale myślę, że warto spróbować, ale np. zostawić to jako ostatni etap projektu, a najpierw zadbać o podstawową funkcjonalność.

### 5. Aplikacja webowa

Stack: Node, JS, React/Angular 

Serwisy, których prawdopodobnie użyjemy:
- App Service
- Web App/Static Web App
- Azure Function

Linki:

https://azure.microsoft.com/pl-pl/resources/videos/build-and-deply-nodejs-and-react-apps-with-vscode-appservice-and-cosmosdb/

https://docs.microsoft.com/pl-pl/learn/modules/publish-app-service-static-web-app-api/

https://www.pluralsight.com/guides/deploy-a-react-app-to-azure 

deployowanie apki na Spring Boot i React do Azure:
https://abdul-mannan.medium.com/deploying-a-spring-boot-react-app-to-azure-5b4d844a8d35

### Podział obowiązków

- Michał: preprocessing danych
- Michał: użycie Form Recognition (Databricks)
- Michał/Piotr/Malwina: meta-learning (ostateczna ekstrakcja cech)
- Piotr: zapis wyniku do Blob Storage (Databricks)
- Piotr/Malwina: implementacja Azure Searcha
- Malwina: implementacja serweru do strony internetowej
- Malwina: utworzenie UI wyszukiwarki

+ (dodatkowo, na końcu) implementacja elasticsearcha

### Harmonogram

Pierwszy kamień milowy - 24.12
* ujednolicenie danych + ekstrakcja przez Form Recognition - Michał
* działająca baza danych - Piotr
* proste wyszukiwanie + UI - Malwina


Drugi kamień milowy - 18.01
* ekstrakcja danych dopasowana do naszych potrzeb 
* inteligentne wyszukiwanie po cechach dokumentów
* ładny, działający UI