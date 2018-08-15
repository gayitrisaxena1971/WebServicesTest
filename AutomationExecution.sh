echo "Running from Git Script for Customer Search Web Service with new option"
newman run AutomationWebServicesConsolidated.postman_collection.json -e RealWebServiceMainURL.postman_environment.json -d AutomationInputFileConsolidated.json --reporters junit --reporter-junit-export newman.xml
