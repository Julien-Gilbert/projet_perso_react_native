export default function getBooksFromApiWithText(text){
    const url = 'http://openlibrary.org/search.json?title=' + text;
    
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}

export function getCoverFromApi(idCover) {
    return 'http://covers.openlibrary.org/b/id/' + idCover + '-L.jpg'
}