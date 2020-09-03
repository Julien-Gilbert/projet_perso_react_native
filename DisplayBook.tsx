import React, { Component } from "react"
import { View, Text } from 'react-native'

class DisplayBook extends Component {
    render() {
        return (
            <View>
                <Text>Titre du livre</Text>
                <Text>Nom de l'auteur</Text>
                <Text>Annee de publication</Text>
            </View>
        )
    }
}

export default DisplayBook