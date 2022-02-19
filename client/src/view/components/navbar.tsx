import React from 'react'
import { SpeedScroll } from './speedScroll'

export const Navbar = () => {
    return <div className="h-12 shadow-lg flex items-center bg-primary">
        <SpeedScroll text="About Me" id="aboutme"></SpeedScroll>
        <SpeedScroll text="About Life" id="aboutlife"></SpeedScroll>
        <SpeedScroll text="Showcase" id="showcase"></SpeedScroll>
    </div>
}

