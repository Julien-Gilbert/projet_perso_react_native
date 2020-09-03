import React, { Component } from "react"
import { StyleSheet, Text, TextInput, View, StatusBar, FlatList } from 'react-native'
import getBooksFromApiWithText from './Api'
import DisplayBook from './DisplayBook'
import books from './book_test'

class BookSearch extends Component {

    getBooks(text) {
        getBooksFromApiWithText(text).then(data => console.log(data));
    }

    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content" />
                <TextInput onSubmitEditing={(text) => this.getBooks(text)} placeholder="Tester"/>
                <FlatList
                    data={books}
                    renderItem={({item}) => <Text>{item.title}</Text>}
                />
            </View>
        )
    }
}

export default BookSearch