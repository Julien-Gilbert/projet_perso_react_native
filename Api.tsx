export default function getBooksFromApiWithText(text){
    const url = 'http://openlibrary.org/search.json?q=' + text;

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}
