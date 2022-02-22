import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ids } from "webpack";
import { State } from "../redux/showcase.reducer";

export const Webhook = () => {

    const dispatch = useDispatch();
    const socket = useSelector( (state:State) => {return state.socket});
    const requests = useSelector( (state: State) => {return state.requests});
    const setupDone = useSelector( (state:State) => {return state.setupDone});

    if(!setupDone){
        socket.on('webhook/request_data', (data:string) => {
            dispatch({type: "showcase/append_requests", payload: data});
        })
        dispatch({type:"showcase/socket_setup"});
    }

    return <div className="flex gap-12">
        <div className="flex-1">
            send the request to http://localhost:4201/webhook/{socket.id}
        </div>
        <div className="flex-1">
            Incoming Request(s):
            {requests.map( (r:any, index) => {
                return <div className="p-5" key={index}>
                    <div>The shell received a {r.method || ""} request!</div>
                    <div>
                        <div>Headers:</div>
                        <div>Content-Type: {r["headers"]["content-type"] || "Not sent"}</div>
                        <div>Content-Length: {r["headers"]["content-length"] || "Not sent"}</div>
                    </div>
                    <div>
                        <div>Body:</div>
                        <div>{JSON.stringify(r["body"])}</div>
                        {JSON.stringify(r["body"]) === '{}' ? <div>The shell doesn't seem to support your content-type, it supports JSON and url enconded only...</div> : <></>}
                    </div>
                </div>
            })}   
        </div>
    </div>
}