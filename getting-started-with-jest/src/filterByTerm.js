function filterByTerm(inputArr, searchTerm){
    if(!searchTerm) throw new Error('You must specify a search term');
    if (!inputArr.length) throw Error("inputArr cannot be empty"); 
    const regex = new RegExp(searchTerm,'i')
    return inputArr.filter(function(arrayElement){
        return arrayElement.url.match(regex)
    })
}

module.exports = filterByTerm;