import React, { Component } from "react"
import { StyleSheet, Text, TextInput, View, StatusBar, FlatList } from 'react-native'
import DisplayBook from "./DisplayBook"
import { connect } from 'react-redux'

export default class favorites extends Component {
    render() {
        return(
            <FlatList
                data={this.props.favoritesBook}
                renderItem={({item}) => <DisplayBook book={item}/>}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        favoritesBook: state.favoritesBook
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(favorites)