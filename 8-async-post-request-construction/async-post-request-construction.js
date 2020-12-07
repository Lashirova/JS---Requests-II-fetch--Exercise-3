// Let's piece together a POST request using async and await.

const url = 'https://api.datamuse.com/words?rel_rhy=forgetful';

const requestOptions = {
  method: 'POST',
  body: JSON.stringify({
    "word": "fretful",
    "score": 398,
    "numSyllables": 2
  }),
  headers: {
    "Content-Type": "application/json",
  }
}

async function postData() {
  try {
    const response = await fetch(url, requestOptions);
    if(response.ok) {
      const jsonResponse = await response.json();
      // console.log(jsonResponse);
      for(let i=0; i<jsonResponse.length; i++) {
        console.log(jsonResponse[i])
      }
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error)
  }
}