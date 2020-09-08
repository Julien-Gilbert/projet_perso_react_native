import React, { Component } from "react"
import { View, Text, Image, StyleSheet } from 'react-native'
import { getCoverFromApi } from './Api'

export default class DisplayBook extends Component {

    render() {
        const { book } = this.props

        return (
            <View style={styles.main_container}>
                <Image
                    style={styles.image}
                    source={{uri: getCoverFromApi(book.cover_i)}}
                />
                <Text>{book.title}</Text>
            </View>
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
    }
})