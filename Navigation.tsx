import { createBottomTabNavigator } from "react-navigation-tabs"
import { createAppContainer } from 'react-navigation'
import Favorites from "./Favorites"
import BookSearch from "./BookSearch"

const BooksTabNavigator = createBottomTabNavigator({
    BookSearch: {
        screen: BookSearch
    },
    Favorites: {
        screen: Favorites
    }
})

export default createAppContainer(BooksTabNavigator)