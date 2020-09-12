import React, { Component } from "react";
import { Animated, Text, Button, View, ScrollView } from "react-native";

export class Credit extends Component {

    marginTopInit = -20

    state = {
        scrollAnim: new Animated.Value(this.marginTopInit)
    } 

    launchScrollCredit = () => {
        Animated.timing(this.state.scrollAnim, {
            toValue: 1000,
            duration: 10000,
            useNativeDriver: false
        }).start()
    }

    render() {
        return (
            <View style={{flex: 1}}>
            <ScrollView>
                <Animated.View style={[{
                    marginTop: this.state.scrollAnim
                }]}>
                    <Text>Test</Text>
                </Animated.View>
            </ScrollView>
               
                <Button title="Test" onPress={this.launchScrollCredit} />
                <Button title="Reset" onPress={Animated.timing(this.state.scrollAnim).reset} />
            </View>
        )
    }
}

