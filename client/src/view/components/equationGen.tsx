import React from "react";
import { State } from "../reducers/showcase.reducer";
import { useDispatch, useSelector } from 'react-redux'; 

export const EquationGen = () => {

    const equation = useSelector( (state:State) => state.equation);
    const dispatch = useDispatch();

    const gen = () => {

        function rand(){
            return Math.floor( (Math.random() * 20) - 10) || 1;
        }

        let answer = [rand(), rand(), rand()];

        function stringifyCoeff(isFirst:boolean, coeff:number){
            let c:string = `${coeff}`;
            if(coeff == 1 || coeff == -1){
                c = c.replace(/1/g, '')
            }
            if(isFirst || coeff < 0)
                return c
            return `+${c}`;
        }

        let vars = 3;
        let varsletter = ['x', 'y', 'z'];
        let sc = []

        for(let i=0; i<vars; i++){
            let coeff = [rand(), rand(), rand()];
            let c = 0;
            let s = "";
            for(let j=0; j<vars; j++){
                c += coeff[j]*answer[j];
                s += `${(stringifyCoeff(j==0, coeff[j]))}${varsletter[j]}`;
            }
            s += ` = ${c}\n`;
            sc[i] = <div key={i}>{s}</div>;
        }

        return sc;
    }

    return <div className="flex gap-12">
        <div className="flex-1">
            <div className="font-bold">Equation Generator</div>
            <div>Generates a three variable linear equation, I use this myself for my test practice once. I like to solve my school problems with coding sometimes</div>
            <div className="grid place-items-center" onClick={() => dispatch({type:"showcase/equation_rendr", payload:gen()})}>
                <button className="my-5 px-5 py-2 bg-subcontrast text-white rounded-md">Generate!</button>
            </div>
        </div>
        <div className="flex-1">
            <div>Result:</div>
            {equation}
        </div>
    </div>
}