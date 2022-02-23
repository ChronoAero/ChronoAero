import React from 'react';
import { scroller } from "react-scroll";
import { motion } from 'framer-motion';

interface Props{
    text:string
    id:string
}

export const SpeedScroll = (props:Props) => {
    
    function handleClick(){
        scroller.scrollTo(props.id, {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    }

    return <motion.button 
        whileHover={{scale:1.05}}
        whileTap={{scale:0.95}}
        initial={{opacity:0, y:"-50px"}}
        animate = {{opacity:1, y:"0"}}
        transition={{ type: "spring", duration: 0.5, stiffness:500, damping:25}} 
    className='p-5 text-subcontrast hover:text-contrast whitespace-nowrap' onClick={handleClick}>
        {props.text}
    </motion.button>
}
