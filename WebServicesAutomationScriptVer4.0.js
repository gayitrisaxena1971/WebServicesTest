
if (responseCode.code === 200 || responseCode.code === 201 || responseCode.code === 202) {

    tests[data["TestCase"] + ":- Request Sent Successfully!!"] = true;

    //Check for matching status code as per input file
    if(data["ExpectedStatusCode"] != "x"){
    tests[data["TestCase"] + ": " + data["Description"] +" | Input File Status Code:"+ data["ExpectedStatusCode"] + ", Response Status Code: " + responseCode.code] = responseCode.code === (data["ExpectedStatusCode"]);
    }

    //First Expected Result Check
    if(data["ExpectedResult1"] != "x") {
       var resultValue = responseBody.has(data["ExpectedResult1"]);
       if(resultValue)
       {
           tests[data["TestCase"] + ":- Test Passed - Expected Value Found: " + data["ExpectedResult1"]] = true;
       }
       else
       {
          tests[data["TestCase"] + ":- Test Failed - Expected Value Not Found: " + data["ExpectedResult1"] + " :- Response Body as Received: " + responseBody] = false;
       }
    }

    //Second Expected Result Check
    if(data["ExpectedResult2"] != "x") {
       var resultValue = responseBody.has(data["ExpectedResult2"]);
       if(resultValue)
       {
           tests[data["TestCase"] + ":- Test Passed - Expected Value Found: " + data["ExpectedResult2"]] = true;
       }
       else
       {
         tests[data["TestCase"] + ":- Test Failed - Expected Value Not Found: " + data["ExpectedResult2"] + " :- Response Body as Received: " + responseBody] = false;

       }
    }

    //Third Expected Result Check
    if(data["ExpectedResult3"] != "x") {
       var resultValue = responseBody.has(data["ExpectedResult3"]);
       if(resultValue)
       {
           tests[data["TestCase"] + ":- Test Passed - Expected Value Found: " + data["ExpectedResult3"]] = true;
       }
       else
       {
         tests[data["TestCase"] + ":- Test Failed - Expected Value Not Found: " + data["ExpectedResult3"] + " :- Response Body as Received: " + responseBody] = false;

       }
    }

    //Fourth Expected Result Check
    if(data["ExpectedResult4"] != "x") {
       var resultValue = responseBody.has(data["ExpectedResult4"]);
       if(resultValue)
       {
           tests[data["TestCase"] + ":- Test Passed - Expected Value Found: " + data["ExpectedResult4"]] = true;
       }
       else
       {
         tests[data["TestCase"] + ":- Test Failed - Expected Value Not Found: " + data["ExpectedResult4"] + " :- Response Body as Received: " + responseBody] = false;

       }
    }

    //Fifth Expected Result Check
    if(data["ExpectedResult5"] != "x") {
       var resultValue = responseBody.has(data["ExpectedResult5"]);
       if(resultValue)
       {
           tests[data["TestCase"] + ":- Test Passed - Expected Value Found: " + data["ExpectedResult5"]] = true;
       }
       else
       {
           tests[data["TestCase"] + ":- Test Failed - Expected Value Not Found: " + data["ExpectedResult5"] + " :- Response Body as Received: " + responseBody] = false;

       }
    }


}

else if(responseCode.code === 400 || responseCode.code === 404)
{
  if(data["ExpectedStatusCode"] != "x"){
  tests[data["TestCase"] + ": " + data["Description"] +" | Input File Status Code: "+ data["ExpectedStatusCode"] + ", Response Status Code: " + responseCode.code] = responseCode.code === (data["ExpectedStatusCode"]);
  }

  tests[data["TestCase"] + ":- Request could not be sent successfully!!"] = true;
}

else if(responseCode.code === 500)
{
  if(data["ExpectedStatusCode"] != "x"){
  tests[data["TestCase"] + ": " + data["Description"] +" | Input File Status Code: "+ data["ExpectedStatusCode"] + ", Response Status Code: " + responseCode.code] = responseCode.code === (data["ExpectedStatusCode"]);
  }

  tests[data["TestCase"] + ":- Server side problem!!"] = true;
}
else
{
  if(data["ExpectedStatusCode"] != "x"){
  tests[data["TestCase"] + ": " + data["Description"] +" | Input File Status Code: "+ data["ExpectedStatusCode"] + ", Response Status Code: " + responseCode.code] = responseCode.code === (data["ExpectedStatusCode"]);
  }
  tests[data["TestCase"] + ":- Unknown Response Code: " + responseCode.code] = true;
}
