import React, { Component } from "react"
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableHighlight } from 'react-native'
import { getCoverFromApi } from './Api'
import { connect } from 'react-redux'

export default class DisplayBook extends Component {

    toggleFavorite(book) {
        const action = { type: "TOGGLE_STATE", value: book}
        this.props.dispatch(action)
    }

    displayText(text){
        console.log(text)
    }

    displayHeart(book) {
        //On affiche le coeur uniquement si le livre fait partie des favoris
        if(this.props.favoritesBook.findIndex(item => item.title === book.title) !== -1){
            return(
                <Image
                    style={styles.favorite}
                    source={require('./Images/favorite_plein.png')}
                />

            )
        }
    }

    render() {
        const { book } = this.props
        return (
            <TouchableOpacity style={styles.mainContainer} onPress={() => this.toggleFavorite(book)}>
                <Image
                    style={styles.image}
                    source={{uri: getCoverFromApi(book.cover_i)}}
                />
                <View style={styles.description}>
                    <Text>{book.title}</Text>
                    {this.displayHeart(book)}
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },
    description: {
        flex: 1,
        flexDirection: 'column'
    },
    favorite: {
        width: 50,
        height: 50,
    }
})


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

export default connect(mapStateToProps, mapDispatchToProps)(DisplayBook)