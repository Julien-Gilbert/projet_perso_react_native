import React, { Component } from "react"
import { Svg, Polygon } from 'react-native-svg'

export class StarIcon extends Component {
    render() {
        return(
           <Svg height="100" width="100">
                <Polygon
                    points="15,0 20,9 30,9 22,18 28,27 15,22 2,27 8,18 0,9 10,9"  
                    fill="none"
                    stroke="green"
                    strokeWidth="3"
                />
            </Svg>
        )
    }
}