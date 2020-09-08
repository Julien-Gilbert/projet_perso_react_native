import React, { Component } from "react"
import { View, Text } from 'react-native'

export default class DisplayBook extends Component {

    render() {
        const { book } = this.props

        return (
            <View>
                <Text>Titre du livre: {book.title}</Text>
            </View>
        )
    }
}