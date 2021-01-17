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
        - dodanie odwołania do Custom Skilli, przykładowo:
        
     ```
     {
           "@odata.type": "#Microsoft.Skills.Custom.WebApiSkill",
           "name": "#9",
           "description": "File names and ext analysis",
           "context": "/document",
           "uri": "https://customskillappweu.azurewebsites.net/api/CustomSkill2_HttpTrig?code=u3hDV/7NtFXuzHwZtnb0D8rPae95fJXM7wVb4c1qDJp2wP3peyZAtg==",
           "httpMethod": "POST",
           "timeout": "PT30S",
           "batchSize": 1,
           "degreeOfParallelism": 1,
           "inputs": [
             {
               "name": "file_ext",
               "source": "/document/metadata_storage_file_extension"
             },
             {
               "name": "file_name",
               "source": "/document/metadata_storage_name"
             }
           ],
           "outputs": [
             {
               "name": "file_type",
               "targetName": "file_type"
             },
             {
               "name": "name_type",
               "targetName": "name_type"
             }
           ],
           "httpHeaders": {}
         }
     ```     
   - Utworzenie wzbogaconego indeksu - https://docs.microsoft.com/pl-pl/azure/search/search-get-started-portal
        - wybór pól indeksu istotnych w rozwiązaniu:
             - metadata_storage_content_type - typ pliku
             - metadata_storage_last_modified - data modyfikacji pliku
             - metadata_storage_name - nazwa pliku
             - metadata_storage_path - ścieżka do pliku w base64, którą należy zdekodować
             - metadata_storage_file_extension - rozszerzenie pliku
             - metadata_language - rozpoznany język pliku(Cognitive Services)
             - locations(Cognitive Services)
             - organizations(Cognitive Services)
             - keyphrases(Cognitive Services)
             - people(Cognitive Services)
        - oznaczenie powiązanych pól indeksu z Cognitive Services do filtracji, tworzenia i wyszukiwania
        - dodanie pól powiązanych z Custom Skill
             - file_type(1. Custom Skill)
             - name_type(1. Custom Skill)
   - Aktualizacja indeksera
        - utworzenie indeksera poszerzonego o pola indeksera Custom Skilli, przykładowo:
     
     ```
        {
            "sourceFieldName": "/document/file_type",
            "targetFieldName": "file_type"
        },
        {
            "sourceFieldName": "/document/name_type",
            "targetFieldName": "name_type"
        }
     
     ```   
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
                   
           
       

