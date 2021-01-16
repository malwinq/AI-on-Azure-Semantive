# Custom Skills Implementation

https://docs.microsoft.com/pl-pl/azure/developer/python/tutorial-vs-code-serverless-python-01 - Azure Functions Configuration

https://docs.microsoft.com/pl-pl/azure/search/search-what-is-an-index - Creating Search service and Storage service

Summary:

1. Create Azure Storage with Blob Storage - import all files into the storage
2. Create Azure Search service - inside define one index for files, and create indexer (to have full control, I did not set it for periodic use)
3. Azure SkillSets - default skills that can be applied like finding info about people, locations, numbers and adresses.

Up to this point the task was pretty straightforward and consisted mostly of following the path laid in the second attached link. Following steps are more complicated, the Custom Skills are created via the Azure Function service

