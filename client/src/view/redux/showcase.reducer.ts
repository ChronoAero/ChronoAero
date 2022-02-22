import { Socket } from "socket.io-client";
import { io } from 'socket.io-client';

export enum Pages{
    NULL,
    EQUATION_GEN,
    WEBHOOK,
    VIDEOCALL
}

export type Types = "showcase/equation_gen" | "showcase/webhook" | "showcase/videocall" | "showcase/increment" | "showcase/decrement" | "showcase/equation_rendr" | "showcase/socket_setup" | "showcase/append_requests";

interface Action{
    type:Types
    payload? :any
}

export interface State{
    page: Pages
    equation: any
    socket: Socket
    setupDone: boolean
    requests: any[]
}

export const showcaseReducer = (state:State = {
    page:NaN,
    equation:"",
    socket: io('http://localhost:4201'),
    setupDone: false,
    requests: []
}, action:Action) => {
    switch(action.type){
        case "showcase/equation_gen":
            return {...state, page : Pages.EQUATION_GEN}
        case "showcase/webhook":
            return {...state, page : Pages.WEBHOOK}
        case "showcase/videocall":
            return {...state, page : Pages.VIDEOCALL}
        case "showcase/decrement":
            return {...state, page: state.page - 1 || 1}
        case "showcase/increment":
            return {...state, page: state.page + 1 >= Object.keys(Pages).length/2 - 1 ? Object.keys(Pages).length/2 - 1 : state.page + 1}
        case "showcase/equation_rendr":
            return {...state, equation: action.payload || "[Error, nothing to render!]"}
        case "showcase/socket_setup":
            return {...state, setupDone: true};
        case "showcase/append_requests":
            return {...state, requests: [...state.requests, action.payload]}
        default:
            return state
    }
}