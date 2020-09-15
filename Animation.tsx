import React, { Component } from "react";
import { Animated, View, Text, Button, StyleSheet, Image } from "react-native";
import FlipCard from 'react-native-flip-card'

export class Animation extends Component {
    render() {
        return (
                
            <FlipCard 
                style={styles.flipCard}
                friction={6}
                perspective={1000}
                flipHorizontal={true}
                flipVertical={false}
                flip={false}
                clickable={true}
            >
                
                    <Image
                        style={styles.card}
                        source={require('./Images/page_couverture.png')}
                    />
               

                
                    <Image
                        style={styles.card}
                        source={require('./Images/4eme_page.png')}
                    />
                
            </FlipCard>
        )
    }
}

const styles = StyleSheet.create({
    flipCard: {
        flex:1,
        alignItems:'center'
    },
    card: {
        marginTop: 30,
        width: 300,
        height: 450,
        resizeMode: 'stretch'
    }
})
