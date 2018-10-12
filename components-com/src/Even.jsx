import React, { Component } from 'react'
import App from './App'

class Even extends Component {
    constructor() {
        super()
        this.state = {
            numberType: "",
        }

    }

    isOddOrEven = nbr => this.setState({ numberType: (nbr % 2 === 0) ? "even" : "odd" })

    render() {
        return (
            <div style={{ padding: "50px" }}>
                <h1>Mon nombre pair ou impair ?</h1>
                <h2>--> <App isOddOrEven={this.isOddOrEven} /> is <i style={{ color: this.state.numberType === "even" ? "green" : "red" }}>{this.state.numberType}</i></h2>
            </div>
        )
    }
}

export default Even