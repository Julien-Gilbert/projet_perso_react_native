import { createBottomTabNavigator } from "react-navigation-tabs"
import { createAppContainer } from 'react-navigation'
import Favorites from "./Favorites"
import BookSearch from "./BookSearch"
import  {Image, StyleSheet} from 'react-native'
import React, { Component } from "react"
import { Animation } from "./Animation"

const BooksTabNavigator = createBottomTabNavigator({
    BookSearch: {
        screen: BookSearch,
        navigationOptions: {
            title: "Recherche",
            tabBarIcon: () => {
                return <Image
                    source={require('./Images/book.png')} 
                    style={styles.icon}
                    />
            }
        }
    },
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            title: "Favoris", 
            tabBarIcon: () => {
                return <Image
                    source={require('./Images/favorite_plein.png')}
                    style={styles.icon} />
            }
        }
    },
    Animation: {
        screen: Animation,
        navigationOptions: {
            title: "Animation",
            tabBarIcon: () => {
                return <Image
                    source={require('./Images/animation.png')}
                    style={styles.icon} />
            }
        }
    }
})

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})

export default createAppContainer(BooksTabNavigator)