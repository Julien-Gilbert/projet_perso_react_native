import React, { Component } from "react"
import { Svg, Polygon } from 'react-native-svg'

export class StarIcon extends Component {
    computeViewBox(zoom) {
        var width = 100 / zoom
        var height = 100 / zoom
        return "0 0 " + width.toString() + " " + height.toString()
    }

    render() {
        const { zoom } = this.props
        return(
           <Svg width="100" height="100" viewBox={this.computeViewBox(zoom)}>
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