import React, { Component } from "react";
import { StyleSheet, Animated, Text, Button, View, ScrollView } from "react-native";

export class Credit extends Component {

    marginTopInit = -100

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
            <View style={{flex: 1, backgroundColor: "gray"}}>
                <ScrollView style={{flex: 2}}>
                    <Animated.View style={[{
                        marginTop: this.state.scrollAnim
                    }]}>
                        <Text style={styles.text2}>
                            Avec le soutien de: {"\n"} Guillaume Piedigrossi {"\n"}
                                                Christophe Menager {"\n"} {"\n"}
                                                Développeur: Julien Gilbert {"\n"}
                        </Text>
                        <Text style={styles.text}>
                            Projet perso React Native
                        </Text>
                    </Animated.View>
                </ScrollView>
               
               <View style={styles.buttonContainer}>
                    <Button color="black" title="Launch" onPress={this.launchScrollCredit} />
                    <Button color="black" title="Reset" onPress={Animated.timing(this.state.scrollAnim).reset} />
               </View>

            </View>
        )
    }
}



const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 30
    },
    text2: {
        textAlign: 'center',
        fontSize: 15
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})