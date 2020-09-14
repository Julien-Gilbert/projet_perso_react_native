import React, { Component } from "react"
import { Animated, View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableHighlight } from 'react-native'
import { getCoverFromApi } from './Api'
import { connect } from 'react-redux'
import { StarIcon } from './StarIcon'

AnimatedStar = Animated.createAnimatedComponent(StarIcon);

export default class DisplayBook extends Component {

    constructor(props) {
        super(props)
        const { book } = this.props
        if(this.props.favoritesBook.findIndex(item => item.title === book.title) !== -1) {
            //this.setState({fadeAnim: 1})
            //this.setState({zoomAnim: 1})
            this.state = {
                fadeAnim: new Animated.Value(1),
                zoomAnim: new Animated.Value(1)
            }
        }
        else {
            this.state = {
                fadeAnim: new Animated.Value(0),
                zoomAnim: new Animated.Value(1)
            }
        }

    }

    toggleFavorite(book) {
        console.log(this.state.fadeAnim)
        if(this.props.favoritesBook.findIndex(item => item.title === book.title) === -1) {
            console.log("Afficher")
            Animated.timing(this.state.fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false
            }).start()

            Animated.sequence([
                Animated.timing(this.state.zoomAnim, {
                    toValue: 2,
                    duration: 500,
                    useNativeDriver: false
                }),
                Animated.timing(this.state.zoomAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: false
                })
            ]).start()
        }
        else {
            console.log("Effacer")
            Animated.timing(this.state.fadeAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false
            }).start()
        }

        const action = { type: "TOGGLE_STATE", value: book}
        this.props.dispatch(action)


        console.log(this.state.fadeAnim)
        console.log("")
    }

    displayText(text){
        console.log(text)
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

                    <Animated.View
                        style={[styles.star_icon, {
                            opacity: this.state.fadeAnim,
                            flex: 2
                        }]} >

                        <AnimatedStar zoom={this.state.zoomAnim}/>

                    </Animated.View>
                    
                </View>
            </TouchableOpacity>
            //</View>
        )
    }
}

//<View style={styles.star_icon}>

const styles = StyleSheet.create({
    main_container: {
        flexDirection: 'row',
        flex: 1
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