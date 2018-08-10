echo "New Script"
newman run RealAutomationWebServices.postman_collection.json -e RealWebServiceMainURL.postman_environment.json -d RealConverted.json -r html
