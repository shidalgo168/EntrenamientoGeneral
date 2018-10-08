const ENTER_KEY = 13;
const URL_TO_RETIREVE_DATA = 'https://api.myjson.com/bins/uptto';

// Event handlers
window.addEventListener('load', function() {
  getAgents(URL_TO_RETIREVE_DATA);
});

document.getElementById('lensButton').onclick = function() {
  getAgents(URL_TO_RETIREVE_DATA);
};

document.getElementById('searchText').onkeypress = (event) => {
  if (event.keyCode===ENTER_KEY) {
    getAgents(URL_TO_RETIREVE_DATA);
  }
};


function get(url) {
  return new Promise((resolve, reject) => {
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
    // Getting the input of the textbox
    var userInput = document.getElementById("searchText").value;

    // Filtering the data
    var data = JSON.parse(response);
    if (userInput){
      userInput = userInput.toUpperCase();
      var newFilter = {"companies" : []};
      newFilter.companies = data.companies.filter(agent => agent.name.toUpperCase().includes(userInput));
      injectData(newFilter);
    }
    else{
      injectData(data);
    }
    // Injecting the agent-objects into the html
    
  }, (error) => {
    alert(error);
  });
}

function injectData(data) {
  const TEMPLATE = fetch('../mustache/template.mustache').then(response => {return response.text();});
  Promise.all([data, TEMPLATE]).then(response => {
    resolvedData = response[0];
    resolvedTemplate = response[1];
    Mustache.parse(resolvedTemplate);
    const output = Mustache.render(resolvedTemplate, resolvedData);
    document.getElementById('agent-section').innerHTML = output;
  }).catch(error => console.log('Unable to retrieve all the template data: ', error.message));
}



