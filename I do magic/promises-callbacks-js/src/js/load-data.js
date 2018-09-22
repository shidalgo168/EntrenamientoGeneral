function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (xhr.status == 200) {
        // Resolve the promise with the response text
        resolve(xhr.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(xhr.statusText));
      }
    };

    // Handle network errors
    xhr.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    xhr.send();
  });
}

function getAgents(url){
  
  get(url).then(function(response) {
    var templateX = $('#template').html();
    var userInput = document.getElementsByName("Location")[0].value;
    var data = JSON.parse(response);
    if (userInput){
      userInput = userInput.toUpperCase();
      var newFilter = {"companies" : []};
      for(var i = 0; i < data.companies.length; i++){
        if(data.companies[i].name.toUpperCase().includes(userInput)){
          newFilter.companies.push(data.companies[i]);
        }
      }
      var html = Mustache.to_html(templateX, newFilter);
    }else{
      var html = Mustache.to_html(templateX, data);
    }
  $('#agent-section').html(html);
}, function(error) {
  alert(error);
});
}

