/*
Vale

query.httpDataMethod = function httpDataMethod(url, successCallback, errorCallback, params, json, $formLoading, httpMethod) {
       var request = new XMLHttpRequest();

       request.open(httpMethod, url, true);

       if (json) {
           request.setRequestHeader(‘Content-Type’, ‘application/json’);
       }

       request.onload = function onload() {
           toggleLoading($formLoading);

           if (request.status >= 200 && request.status < 400) {
               if (request.response) {
                   if (query.isJSON(request.response)) {
                       successCallback(JSON.parse(request.response));
                   } else {
                       successCallback(request.response);
                   }
               } else {
                   successCallback();
               }
           } else {
               // Server was reached, but it returned an error
               if (query.isJSON(request.response)) {
                   errorCallback(JSON.parse(request.response));
               } else {
                   errorCallback(request.response);
               }
           }
       };

       request.onerror = function() {
           toggleLoading($formLoading);

           var data = {
               status: request.status,
               errorMsg: request.response
           };

           errorCallback(data);
       };

       toggleLoading($formLoading, true);

       request.send(params);
   };
*/

function loadJSON() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      var JSONObject = JSON.parse(xmlhttp.responseText);
      document.getElementById("FirstName").innerHTML = JSONObject.companies[0].name;
      document.getElementById("LastName").innerHTML = JSONObject.companies[1].name;
    }
  }
  xmlhttp.open("GET","http://akurey.com/trainings/companies.json",true);
  xmlhttp.send();
}