// enter your api key 

const apiKey = ""; // enter your key from app.rebrandly.com
// main url to take data from
const url = 'https://api.rebrandly.com/v1/links';

// initialize variables to work with
const inputField = document.querySelector('#input');
const shortenBtn = document.querySelector('#shorten');
const responseField = document.getElementById('responseField');

// write functions which outputs in right format
const renderResponse = (result) => {
    if (result.errors){
        responseField.innerHTML = '<p>Sorry, could not format your URL</p><p>Try again</p>';
    }else{
        responseField.innerHTML = `<p>Your shortened URL is: </p><p>${result.shortUrl}</p>`
    }
}

// write a function which takes url passed to input field and outputs short url
const shortenUrl = ()=>{
    const longUrl = inputField.value;
    const data = JSON.stringify({destination: longUrl})
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'apiKey': apiKey
        },
        body: data
    })
    .then(response=>{
        if(response.ok){
            return response.json();
        }
        throw new Error('Request failed!')
    }, networkError=>{
        console.log(networkError.message)
    })
    .then(JSONresponse=>{
        renderResponse(JSONresponse);
    })
}

// write a function which clears a page and call AJAX functions
const displayShortUrl = (event) => {
    event.preventDefault();
    while (responseField.firstChild){
        responseField.removeChild(responseField.firstChild);
    }
    shortenUrl();
}

// call function when button is clicked
shortenBtn.addEventListener('click', displayShortUrl)