import React, { Component } from 'react'
import Caract from './Caract.jsx'

const style = {
    display: 'flex',
    flexDirection: 'column',
}
class componentName extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            ref: Math.round(Math.random() * this.props.rows),
        }
    }

    getOpacity(ref, count, i) {
        const op = Math.cos(Math.PI * 0.5 * (ref + count - i) / this.props.rows);
        if (op > 0 && op < 1)
            return op * op * op
        else {
            return 0
        }
    }



    render() {

        const { rows, count } = this.props;
        const { ref } = this.state;

        return (
            <div className="column" style={style}>
                {
                    [...Array(rows)].map((x, i) =>
                        <Caract key={"caract" + i} index={i} currentIndex={(ref + count) % rows} />
                    )
                }
            </div>
        )
    }
}

export default componentName