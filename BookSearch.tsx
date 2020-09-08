import React, { Component } from "react"
import { StyleSheet, Text, TextInput, View, StatusBar, FlatList } from 'react-native'
import getBooksFromApiWithText from './Api'
import DisplayBook from './DisplayBook'

export default class BookSearch extends Component {

    constructor(props) {
        super(props)
        this.state = { books: [], searchedText: "" }
    }

    getBooks() {
    //componentDidMount() {
        if(this.state.searchedText !== "") {
            getBooksFromApiWithText(this.state.searchedText).then(data => {
                this.setState({ books: data.docs })
            })
        }
    }

    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content" />
                <TextInput 
                    onSubmitEditing={() => this.getBooks()}
                    placeholder="Rechercher"
                    onChangeText={(text) => this.setState({searchedText: text})} /> 
                <FlatList
                    data={this.state.books}
                    renderItem={({item}) => <DisplayBook book={item}/>}
                />
            </View>
        )
    }
}