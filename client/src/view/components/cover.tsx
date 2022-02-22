import React from "react";
import { motion } from "framer-motion";

export const Cover = () => {
    return <div className="h-96 bg-secondary">
        <motion.div 
            initial={{opacity:0, x:"100vw"}}
            animate = {{opacity:1, x:"0"}}
            transition={{ type: "spring", duration: 0.5, stiffness:500, damping:25}} 
        className="text-contrast font-bold text-6xl text-center p-24">&lt;ChronoAero/&gt;</motion.div>
        <motion.div 
            initial={{opacity:0, x:"-100vw"}}
            animate = {{opacity:1, x:"0"}}
            transition={{ type: "spring", duration: 0.5, stiffness:500, damping:25}} 
        className="p-24">
            <img className="rounded-xl shadow-lg" src="https://avatars.githubusercontent.com/u/75560157?v=4" alt="Profile Picture"></img>
        </motion.div>
    </div>
}
