import React, { Component } from "react"
import { StyleSheet, Text, TextInput, View, StatusBar, FlatList } from 'react-native'
import getBooksFromApiWithText from './Api'
import DisplayBook from './DisplayBook'
import books from './book_test'

class BookSearch extends Component {

    constructor(props) {
        super(props)
        this.state = { books: [] }
        this.searchedText = ""
    }

    getBooks() {
        getBooksFromApiWithText(this.searchedText).then(data => {
            this.setState({ books: data.docs })
        })
    }

    searchTextInputChanged(text){
        this.searchedText = text;
    }

    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content" />
                <TextInput 
                    onSubmitEditing={(text) => this.getBooks()} 
                    placeholder="Rechercher"
                    onChangeText={(text) => this.searchTextInputChanged(text) }/>
                <FlatList
                    data={this.state.books}
                    renderItem={({item}) => <DisplayBook book={item}/>}
                />
            </View>
        )
    }
}

export default BookSearch