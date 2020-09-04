import React, { Component } from "react"
import { ScrollView, Text } from 'react-native'

class DisplayBook extends Component {

    render() {
        const { book } = this.props

        return (
            <ScrollView>
                <Text>Titre du livre: {book.title}</Text>
            </ScrollView>
        )
    }
}

export default DisplayBook