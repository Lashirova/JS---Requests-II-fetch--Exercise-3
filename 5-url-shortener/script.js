// Information to reach API
const apiKey = '<Your API Key>';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const url = 'https://api.rebrandly.com/v1/links';

  const requestBody = {
    destination: "https://www.youtube.com/channel/UCHK4HD0ltu1-I212icLPt3g"
  }

  let requestHeaders = {
    "Content-Type": "application/json",
    apikey: "04779b7ec73c414388f1535a43d63dd5",
  }

  const data = {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: requestHeaders
  }


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

  fetch(url, data).then(handleSuccess, handleFailure).then(handleJsonResponse);
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);