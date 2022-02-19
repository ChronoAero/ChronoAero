export enum Pages{
    NULL,
    EQUATION_GEN,
    WEBHOOK,
    VIDEOCALL
}

export type Types = "showcase/equation_gen" | "showcase/webhook" | "showcase/videocall" | "showcase/increment" | "showcase/decrement" | "showcase/equation_rendr" ;

interface Action{
    type:Types
    payload? :any
}

export interface State{
    page: Pages
    equation: any
}

export const showcaseReducer = (state:State = {page:NaN, equation:""}, action:Action) => {
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
        default:
            return state
    }
}