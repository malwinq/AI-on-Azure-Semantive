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

![Image](images/architektura.png)

## Opis działania aplikacji
Pliki dokumentów będą przechowywane w bazie Azure Blob Storage. Z użyciem Function App i Cognitive Services (Text Analytics
oraz Form Recognizer) utworzymy Custom Skille. Wyciągnięte meta-dane będą wyszukiwane poprzez Cognitive Search zintegrowanym 
z API Management. Użytkownik będzie mieć dostęp do dokumentów i ich meta-danych poprzez aplikację webową (Web App), do której
dostęp będzie ograniczony poprzez Active Directory.

Stack: Node, JS, React

## Dataset

Zbiór dokumentów zawierających raporty Unii Europejskiej i rządu USA: http://www.tamirhassan.com/html/dataset.html

### Podział obowiązków

- Michał: preprocessing danych
- Michał: utworzenie Custom Skilli
- Piotr: Cognitive Search
- Piotr/Malwina: integracja z API Management
- Malwina: utworzenie UI wyszukiwarki
- Piotr/Malwina: autoryzacja użytkowników

### Harmonogram

Pierwszy kamień milowy - 24.12
* pierwsza ekstrakcja danych - Michał
* działająca baza danych zintegrowana z searchem - Piotr
* proste wyszukiwanie + UI - Malwina


Drugi kamień milowy - 18.01
* ekstrakcja danych w pełni dopasowana do naszych potrzeb 
* autoryzacja użytkowników
* ładny, działający UI
