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


export let rootStore = createStore(showcaseReducer, composeWithDevTools());

class AppRoot extends Component{

    render(): React.ReactNode {
        return <div className='overflow-x-hidden'>
            <Navbar></Navbar>
            <Cover></Cover>
            <div className="p-24 bg-primary shadow-lg">
                <Section right={false} id="aboutme" title="About Me" desc={[
                    <>I'm a high school student and simply a <del>hacker</del> programmer</>,
                    "I've been working and experimenting around the amazing field of programming since junior high school.",
                    "It started from my interest towards games, and I once wanted to make one myself.",
                    "During the process I've learnt about the basic concepts of programming languages. Despite getting somewhat sidetracked to web development, that just expanded the area I can experiment around.",
                    "I'm someone with a rather calm and serious nature that helps me to be a better listener when it comes to projects and urges me to try my best on delivering my work output.",
                    "I might not be that really extroverted one, but I'm open to programming discussions. Since you reach me out this way, this means we should understand each other well.",
                    "Looking forward to working together with you."
                ]}></Section>
            </div>
            <div className="p-24 bg-secondary shadow-lg">
                <Section right={true} id="aboutlife" title="About Life" desc={[
                    "I just live my typical high school life, with all the common ups and downs. I'm more focused on my ability on subjects at school though, mostly mathematics and physics (as a form of applied mathematics) which helps me to build logic and understand the idea of programming better."
                ]}></Section>
            </div>
            <div className="p-24 bg-primary shadow-lg">
                <div className="font-bold text-3xl p-1 py-6 text-subcontrast showcase">Showcase</div>
                <Provider store={rootStore}>
                    <Showcase></Showcase>
                </Provider>
            </div>
            <div className="p-24 bg-secondary shadow-lg">
                <Section right={false} id="contacts" title="Want to reach me out?" desc={[
                    "Let me know if you want to work on something together :)",
                    "Here are my contacts:"
                ]}></Section>
            </div>
        </div>
    }

}

ReactDOM.render(<AppRoot/>, document.getElementById('root')) 