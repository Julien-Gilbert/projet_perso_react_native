import React, { Component } from "react"
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableHighlight } from 'react-native'
import { getCoverFromApi } from './Api'
import { connect } from 'react-redux'
import { StarIcon } from './StarIcon'

export default class DisplayBook extends Component {

    toggleFavorite(book) {
        const action = { type: "TOGGLE_STATE", value: book}
        this.props.dispatch(action)
    }

    displayText(text){
        console.log(text)
    }

    componentDidUpdate() {
        console.log("componentDidUpdate : ")

        for(let i=0 ; i<this.props.favoritesBook.length ; i++) {
            console.log(this.props.favoritesBook[i].title)
        }
    }

    render() {
        const { book } = this.props
        return (
            //<View style={styles.main_container}>
            <TouchableOpacity style={styles.main_container} onPress={() => this.toggleFavorite(book)}>
                <Image
                    style={styles.image}
                    source={{uri: getCoverFromApi(book.cover_i)}}
                />
                <View style={styles.title_container}>
                    <Text style={styles.title}>{book.title}</Text>
                    <View style={styles.star_icon}>
                        <StarIcon/>
                    </View>
                </View>
            </TouchableOpacity>
            //</View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flexDirection: 'row'
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },
    title_container: {
        flex: 1,
        flexDirection: "row"
    },
    star_icon: {
        flex: 1
    },
    title: {
        flex: 5
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