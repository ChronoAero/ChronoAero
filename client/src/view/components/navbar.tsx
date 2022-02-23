import React from 'react';
import { SpeedScroll } from './speedScroll';

export const Navbar = () => {
    return <div className="h-12 shadow-lg flex items-center bg-primary overflow-x-auto overflow-y-hidden">
        <SpeedScroll text="About Me" id="aboutme"></SpeedScroll>
        <SpeedScroll text="Prologue" id="prologue"></SpeedScroll>
        <SpeedScroll text="Doing" id="doing"></SpeedScroll>
        <SpeedScroll text="Plans" id="plans"></SpeedScroll>
        <SpeedScroll text="Showcase" id="showcase"></SpeedScroll>
        <SpeedScroll text="Contacts" id="contacts"></SpeedScroll>
    </div>
}

