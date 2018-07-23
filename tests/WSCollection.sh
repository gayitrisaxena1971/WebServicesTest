echo 'This Shell Script will run collection file with JUnit Reporter'
newman run /Users/amitsaxena/Desktop/WebServicesAssignment/WebServiceAssignmentSource/tests/WebServicesForTest.postman_collection.json --reporters junit --reporter-junit-export /Users/amitsaxena/newman/newman.xml
