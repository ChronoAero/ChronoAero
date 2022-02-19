import React from "react"

interface Props{
    title : string
    desc : any[]
    id : string
    right : boolean
}

export const Section = (props: Props) => {
    return(
        <div className={`flex items-stretch ${props.right? "flex-row-reverse" : ""}`}>
            <div className="flex-[5]">
                <div className={`font-bold text-3xl p-1 py-6 text-subcontrast ${props.id}`}>{props.title}</div>
                {props.desc.map( (t:any, index) => {
                    return <div key={index} className={`p-1 text-subcontrast`}>{t}</div>
                })}
                </div>
            <div className="flex-[3] p-4 grid place-items-center">
                <img className="rounded-xl shadow-lg w-full max-w-xs" src="https://avatars.githubusercontent.com/u/75560157?v=4" alt="Profile Picture"></img>
            </div>
        </div>
    )
}