import React, { Component } from "react"
import { View, Text } from 'react-native'

class DisplayBook extends Component {

    const { film } = this.props

    render() {
        return (
            <View>
                <Text>Titre du livre: {film.title}</Text>
                <Text>Nom de l'auteur: {film.author_name}</Text>
                <Text>Annee de publication: {film.publish_year}</Text>
            </View>
        )
    }
}

export default DisplayBook