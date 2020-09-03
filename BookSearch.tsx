import React, { Component } from "react"
import { Text } from 'react-native'
import getBooksFromApiWithText from './Api'

class BookSearch extends Component {

    getBooks() {
        getBooksFromApiWithText("Potter").then(data => console.log(data));
    }
    
    render() {
        this.getBooks();
        return (
            <Text>
                BookSearch
            </Text>

        )
    }
}

export default BookSearch
