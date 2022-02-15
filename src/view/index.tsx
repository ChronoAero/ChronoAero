import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class AppRoot extends Component{

    render(): React.ReactNode {
        return <div>Ready to go!</div>
    }

}

ReactDOM.render(<AppRoot/>, document.getElementById('root')) 