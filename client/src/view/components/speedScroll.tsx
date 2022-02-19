import React from 'react';
import { scroller } from "react-scroll";

interface Props{
    text:string
    id:string
}

export const SpeedScroll = (props:Props) => {
    
    function handleClick(){
        console.log(props.id)
        scroller.scrollTo(props.id, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    }

    return <div className='p-5 text-subcontrast hover:text-contrast' onClick={handleClick}>
        {props.text}
    </div>
}
