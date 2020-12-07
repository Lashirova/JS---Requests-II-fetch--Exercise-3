// Let's recreate the boilerplate code necessary to create a GET request using the async and await.

async function getData() {
  try {
    const response = await fetch('https://api.datamuse.com/words?rel_rhy=forgetful');
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