#Cognitive Search

### Wymagane elementy
   - Cognitive Services
   - Cognitive Search
   - Blob Storage
      
### Blob Storage w Azure Portal
  
   Kroki:
   - Utworzenie kontenera z danymi - https://docs.microsoft.com/pl-pl/azure/storage/blobs/storage-quickstart-blobs-portal
   - Upload danych
   - W celu skorzystania z możliwości pobierania plików w aplikacji **Knowledge Mining Browser** należy:
        - zmienić poziom dostępu utworzonego kontenera z **Private** na **Blob**
   
### Cognitive Search w Azure Portal

   Kroki:
   - Utworzenie **Cognitive Services** - https://docs.microsoft.com/pl-pl/azure/search/cognitive-search-attach-cognitive-services
        - powiązanie Cognitive Search z Blob Storage
        - wzbogacenie indeksu poprzez powiększony skillset
   - Utworzenie wzbogaconego indeksu - https://docs.microsoft.com/pl-pl/azure/search/search-get-started-portal
        - wybór pól indeksu istotnych w rozwiązaniu:
             - metadata_storage_content_type - typ pliku
             - metadata_storage_last_modified - data modyfikacji pliku
             - metadata_storage_name - nazwa pliku
             - metadata_storage_path - ścieżka do pliku w base64, którą należy zdekodować
             - metadata_storage_file_extension - rozszerzenie pliku
             - metadata_language - rozpoznany język pliku(Cognitive Search)
             - locations(Cognitive Search)
             - organizations(Cognitive Search)
             - keyphrases(Cognitive Search)
             - people(Cognitive Search)
   - Wymagana konfiguracja aplikacji REST
        Elementy:
        - utworzony klucz **query key** - <API-KEY>
        - nazwa searcha - <COGNITIVE-SEARCH-NAME>
        - nazwa indeksu - <INDEX-NAME>
   
     ```
        const config = {
           headers: {
               'Content-Type': 'application/json'
           }
        };
        const apiKey = "<API-KEY>";
        return axios.get(`https://<COGNITIVE-SEARCH-NAME>.search.windows.net/indexes/<INDEX-NAME>/docs?api-version=2020-06-30&search=${inputText}&api-key=${apiKey}`, config);
     ```
                   
           
       

