import React, { Component } from "react";
import { Animated, View, Text, Button, StyleSheet } from "react-native";
import FlipCard from 'react-native-flip-card'

export class Animation extends Component {
    
    render() {
        return (
            <FlipCard 
                //style={styles.card}
                friction={6}
                perspective={1000}
                flipHorizontal={true}
                flipVertical={false}
                flip={false}
                clickable={true}
                onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
            >
                {/* Face Side */}
                <View>
                    <Text>The Face</Text>
                </View>
                
                {/* Back Side */}
                <View>
                    <Text>The Back</Text>
                </View>
            </FlipCard>
        )
    }
}