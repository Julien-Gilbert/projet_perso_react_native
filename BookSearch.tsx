import React, { Component } from "react"
import { StyleSheet, Text, TextInput, View, StatusBar } from 'react-native'
import getBooksFromApiWithText from './Api'

class BookSearch extends Component {

    getBooks(text) {
        getBooksFromApiWithText(text).then(data => console.log(data));
    }

    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content" />
                <TextInput onSubmitEditing={(text) => this.getBooks(text)} placeholder="Tester"/>
            </View>
        )
    }
}

export default BookSearch
