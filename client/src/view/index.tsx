import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { showcaseReducer } from "./redux/showcase.reducer"
import { Provider } from 'react-redux'
import { Cover } from './components/cover'
import { Navbar } from './components/navbar'
import { Section } from './components/section'
import { Showcase } from './components/showcase'
import { motion } from 'framer-motion';


export let rootStore = createStore(showcaseReducer, composeWithDevTools());

class AppRoot extends Component{

    render(): React.ReactNode {
        return <div className='overflow-x-hidden'>
            <Navbar></Navbar>
            <Cover></Cover>
            <div className="px-6 py-24 sm:px-24 bg-primary shadow-lg">
                <Section right={true} id="aboutme" title="About Me" desc={[
                    <>I'm a high school student and simply a <del>hacker</del> programmer</>,
                    "I've been working and experimenting around the amazing field of programming since junior high school.",
                    "I'm someone with a rather calm and serious nature that helps me to be a better listener when it comes to projects and urges me to try my best on delivering my work output.",
                    "I might not be that really extroverted one, but I'm open to programming discussions. Since you reach me out this way, this means we should understand each other well.",
                    "Looking forward to working together with you."
                ]}></Section>
            </div>
            <div className="px-6 py-24 sm:px-24 bg-secondary shadow-lg">
                <Section right={false} id="prologue" title="How I Started" desc={[
                    "It started from my interest towards games, and I once wanted to make one myself.",
                    "I, well, accidentally, learnt JavaScript and got my hands into the basics of programming a few years ago. It wasn't something I expected to work with though, at the time, and I started learning about game development instead of more JavaScript.",
                    "During the process I've learnt more about the basic concepts of programming languages (e.g. types). However, then I got somewhat sidetracked to web development due to some stuff related to making bots, but that just expanded the area I can experiment around, and I ended up here."
                ]}></Section>
            </div>
            <div className="px-6 py-24 sm:px-24 bg-primary shadow-lg">
                <Section right={true} id="doing" title="Currently Working on..." desc={[
                    "Currently, I'm still learning as a high school student. I still enjoy learning subjects taught at school. Some even helped me to build my programming logic, especially mathematics, and their science manifestations (physics and chemistry for example).",
                    "To me, learning is a never ending process, there is still a lot to learn even when you think you have learnt quite a lot. There is just always something new. Same thing happens when I learn to code, there's just stuff related to syntax, algorithm efficiency, and much more, and if you ever work with installed modules, you know what I've mentioned is not the end.",
                    "Currently I am learning more about web related things (it of course revolves around JavaScript), and sometimes, game development. I'm also excited to learn other fields of programming as well.",
                    "So far, I just enjoy what I do."
                ]}></Section>
            </div>
            <div className="px-6 py-24 sm:px-24 bg-secondary shadow-lg">
                <Section right={false} id="plans" title="Planning on..." desc={[
                    "I just plan to keep learning around programming, and I hope I can find an interesting field that I can work on and learn more about in the future.",
                    "I also wish I actually can collaborate with others on something, to at least understand more about conventions when people work together.",
                    "Also, due to my initial motivation, I'm hoping that I can really finish a game (trust me, I'm trying).",
                ]}></Section>
            </div>
            <div className="px-6 py-24 sm:px-24 bg-primary shadow-lg">
                <motion.div 
                    initial={{opacity:0, x:"-150px"}}
                    whileInView={{opacity:1, x:"0"}}
                    transition={{ type: "spring", duration: 1, stiffness:500, damping:25}} 
                    viewport={{once:true}}
                className="font-bold text-3xl p-1 py-6 text-subcontrast showcase">Showcase</motion.div>
                <Provider store={rootStore}>
                    <Showcase></Showcase>
                </Provider>
            </div>
            <div className="px-6 py-24 sm:px-24 bg-secondary shadow-lg">
                <Section right={true} id="contacts" title="Want to reach me out?" desc={[
                    "Let me know if you want to work on something together :)",
                    "Here are my contacts:",
                    "{Discord: \"Chrono#9327\", Github: \"ChronoAero\", Email: \"tanjoshua13tj@gmail.com\"}"
                ]}></Section>
            </div>
        </div>
    }

}

ReactDOM.render(<AppRoot/>, document.getElementById('root')) 