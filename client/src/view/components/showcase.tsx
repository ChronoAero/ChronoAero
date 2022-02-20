import React from "react";
import { Types, State, Pages } from "../reducers/showcase.reducer"
import { useDispatch, useSelector } from 'react-redux'; 
import { EquationGen } from './equationGen';
import { Webhook } from './webhook'

interface Props{

}

const types : Types[] = [ "showcase/equation_gen" , "showcase/webhook" , "showcase/videocall"]
const navContent :any[] = [
    "Equation Generator",
    "Webhook",
    "Video Call",
]


export const Showcase = (props: Props) => { 

    const page = useSelector( (state:State) => state.page);
    const dispatch = useDispatch();

    return <div>
        <div className="p-1 text-subcontrast font-bold">Web-Related</div>
        <div className="bg-secondary flex flex-row h-12 items-center mx-1 p-1 overflow-x-auto overflow-y-hidden">
            {types.map((type, index) => {
                return <div key={index} onClick={ () => {dispatch({type: type}) }} className="text-subcontrast p-5 hover:text-contrast w-auto whitespace-nowrap">{navContent[index]}</div>
            })}
        </div>
        <div className="bg-secondary h-56 rounded-md my-5 mx-1 p-5 overflow-y-auto">
            <div className="text-subcontrast font-mono">
                {((page) => {
                    switch(page){
                        case Pages.EQUATION_GEN:
                            return <EquationGen></EquationGen>
                        case Pages.WEBHOOK:
                            return <Webhook></Webhook>
                        case Pages.VIDEOCALL:
                            return <div>Video Call</div>
                        default:
                            return <div>Shell is ready, waiting for your commands...</div>
                    }
                })(page)}
            </div>
        </div>
        <div className="flex">
            <div onClick={() => {dispatch({type: "showcase/decrement"})}} className="text-contrast"> -
            </div>
            <div onClick={() => {dispatch({type: "showcase/increment"})}} className="ml-auto text-contrast" > + 
            </div>
        </div>
        <div className="p-1 text-subcontrast font-bold">In for a challenge?</div>
        <div className="bg-secondary h-56 rounded-md my-5 mx-1 p-5 overflow-y-auto"></div>
        <div className="p-1 text-subcontrast font-bold">Game Development</div>
        <div className="bg-secondary h-56 rounded-md my-5 mx-1 p-5 overflow-y-auto"></div>
    </div>
}