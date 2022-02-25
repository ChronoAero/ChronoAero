import React, {useEffect} from "react";
import { Types, State, Pages } from "../redux/showcase.reducer"
import { useDispatch, useSelector } from 'react-redux'; 
import { EquationGen } from './equationGen';
import { Webhook } from './webhook'
import { motion } from "framer-motion";
import { UnderConstruction } from "./underConstruction";

interface Props{

}

const types : Types[] = [ "showcase/equation_gen" , "showcase/webhook" , "showcase/videocall"]
const navContent :any[] = [
    "Equation Generator",
    "Webhook",
    "Video Call",
]

const spinChar = ['|', '/', '-', '\\']

export const Showcase = (props: Props) => { 

    const page = useSelector( (state:State) => state.page);
    const spinner = useSelector( (state:State) => state.spinner);
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
          dispatch({type:"showcase/spin"});
        }, 100);
        return () => clearInterval(interval);
      }, []);


    return <div>
        <motion.div 
            initial={{opacity:0, x:"-150px"}}
            whileInView={{opacity:1, x:"0"}}
            transition={{ type: "spring", duration: 1, stiffness:500, damping:25}} 
            viewport={{once:true}}
        className="p-1 text-subcontrast font-bold">Web-Related</motion.div>
        <motion.div 
            initial={{opacity:0, x:"-150px"}}
            whileInView={{opacity:1, x:"0"}}
            transition={{ type: "spring", duration: 1, stiffness:500, damping:25}} 
            viewport={{once:true}}
        className="bg-secondary flex flex-row h-12 items-center mx-1 p-1 overflow-x-auto overflow-y-hidden">
            {types.map((type, index) => {
                return <motion.button
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.95}}
                    initial={{opacity:0, y:"-50px"}}
                    animate = {{opacity:1, y:"0"}}
                    transition={{ type: "spring", duration: 0.5, stiffness:500, damping:25}} 
                key={index} onClick={ () => {dispatch({type: type}) }} className="text-subcontrast p-5 hover:text-contrast w-auto whitespace-nowrap">{navContent[index]}</motion.button>
            })}
        </motion.div>
        <motion.div
            initial={{opacity:0, scale: 0.3}}
            whileInView={{opacity:1, scale: 1}}
            transition={{ ease: "easeOut", duration: 0.5}} 
            viewport={{once:true}}
        className="bg-secondary h-56 rounded-md my-5 mx-1 p-5 overflow-y-auto">
            <div className="text-subcontrast font-mono">
                {((page) => {
                    switch(page){
                        case Pages.EQUATION_GEN:
                            return <EquationGen></EquationGen>
                        case Pages.WEBHOOK:
                            return <Webhook></Webhook>
                        case Pages.VIDEOCALL:
                            return <UnderConstruction></UnderConstruction>
                        default:
                            return <div>Shell is ready, waiting for your commands...<span className="text-symbols">{spinChar[spinner]}</span></div>
                    }
                })(page)}
            </div>
        </motion.div>
        <motion.div 
            initial={{opacity:0, x:"-150px"}}
            whileInView={{opacity:1, x:"0"}}
            transition={{ type: "spring", duration: 1, stiffness:500, damping:25}} 
            viewport={{once:true}}
        className="p-1 text-subcontrast font-bold">In for a challenge?</motion.div>
        <motion.div
            initial={{opacity:0, scale: 0.3}}
            whileInView={{opacity:1, scale: 1}}
            transition={{ ease: "easeOut", duration: 0.5}} 
            viewport={{once:true}}
        className="bg-secondary h-56 rounded-md my-5 mx-1 p-5 overflow-y-auto">
             <UnderConstruction></UnderConstruction>
        </motion.div>
        <motion.div
            initial={{opacity:0, x:"-150px"}}
            whileInView={{opacity:1, x:"0"}}
            transition={{ type: "spring", duration: 1, stiffness:500, damping:25}} 
            viewport={{once:true}}
        className="p-1 text-subcontrast font-bold">Game Development</motion.div>
        <motion.div
            initial={{opacity:0, scale: 0.3}}
            whileInView={{opacity:1, scale: 1}}
            transition={{ ease: "easeOut", duration: 0.5}} 
            viewport={{once:true}}
        className="bg-secondary h-56 rounded-md my-5 mx-1 p-5 overflow-y-auto">
            <UnderConstruction></UnderConstruction>
        </motion.div>
    </div>
}