
const initialState = { favoritesBook: [] }

export default function toggleFavorite(state = initialState, action) {
    let nextState;

    switch(action.type) {
        case ("TOGGLE_STATE"):
            const bookIndex = state.favoritesBook.findIndex(item => item.title === action.value.title)

            if(bookIndex !== -1){ //The book is already in the favorites
                nextState = { ...state, favoritesBook: state.favoritesBook.filter( (item, index) => index !== bookIndex)}
            }
            else { //The book is not in the favorites
                nextState = { ...state, favoritesBook: [ ...state.favoritesBook, action.value ] }
            }

            return nextState || state
        default:
            return state
    }
}