// Information to reach API


// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const url = 'https://api.datamuse.com/words?rel_rhy=' + inputField.value;

  const handleSuccess = response => {
    if(response.ok){
      return response.json();
    } 
    throw new Error('Request failed')
  }

  const handleFailure = networkError => {
    console.log(networkError.message)
  }

  const handleJsonResponse = jsonResponse => {
    renderResponse(jsonResponse)
  }

  fetch(url).then(handleSuccess, handleFailure).then(handleJsonResponse);
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);
