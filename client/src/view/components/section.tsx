import { motion } from "framer-motion"
import React from "react"

interface Props{
    title : string
    desc : any[]
    id : string
    right : boolean
    img : string
    alt : string
}

export const Section = (props: Props) => {
    return(
        <div className={`flex flex-col-reverse items-stretch ${props.right? "sm:flex-row-reverse" : "sm:flex-row"}`}>
            <motion.div 
                initial={{opacity:0, x:"-150px"}}
                whileInView={{opacity:1, x:"0"}}
                transition={{ type: "spring", duration: 1, stiffness:500, damping:25}} 
                viewport={{once:true}}
            className="flex-[5]">
                <div className={`font-bold text-3xl p-1 py-6 text-subcontrast ${props.id}`}>{props.title}</div>
                {props.desc.map( (t:any, index) => {
                    return <div key={index} className={`p-1 text-subcontrast`}>{t}</div>
                })}
            </motion.div>
            <motion.div 
                initial={{opacity:0, scale: 0.3}}
                whileInView={{opacity:1, scale: 1}}
                transition={{ ease: "easeOut", duration: 0.5}}  
                viewport={{once:true}}
            className="flex-[3] p-4 grid place-items-center">
                <img className="rounded-xl w-full max-w-xs text-subcontrast pixel" src={props.img} alt={props.alt}></img>
            </motion.div>
        </div>
    )
}