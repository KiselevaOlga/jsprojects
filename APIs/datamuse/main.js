// declare the link according to datamuse guide
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';

// initialize HTML elements to work with 
const inputField = document.getElementById('inputField');
const responseField = document.getElementById('responseField');
const submitBtn = document.getElementById('submit');

// renderResponse function will help to output text in neat format
const renderResponse = (result)=>{
    if(!result){
        console.log(result.status)
    }
    if(!result.length){
        responseField.innerHTML='<p>Try again. There were no suggestions found</p>';
        return;
    }
    
    let wordList = [];
    for(let i=0; i < Math.min(result.length, 10); i++) {
        wordList.push(`<li>${result[i].word}</li>`)
    }
    wordList = wordList.join('');
    
    responseField.innerHTML = `<p>You might be interested in: </p><ol>${wordList}</ol>`
    return
}

// getSuggestions takes a word from input field in form , 
// endpoint with example is: https://api.datamuse.com/words?rel_jjb=example for searchings
const getSuggestions = async ()=>{
    const inputWord = inputField.value;
    const endpoint = url+queryParams+inputWord;

    try{
        const response = await fetch(endpoint, {cache: 'no-cache'})
        if (response.ok){
            const jsonResponse = await response.json();
            renderResponse(jsonResponse);
        }
    }catch(error){
        console.log(error)
    }
}

const displaySuggestions = (event) => {
    // event.preventDefault helps to prevent actions from happening
    event.preventDefault()
    while(responseField.firstChild){
        responseField.removeChild(responseField.firstChild)
        getSuggestions()
    }
}

// call function on click event
submitBtn.addEventListener('click', displaySuggestions);