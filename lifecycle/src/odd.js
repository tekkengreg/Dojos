import React, {Component} from 'react';


class Odd extends Component {
    constructor(props){
        super (props)
        console.log("Odd constructor")

    }
 
    shouldComponentUpdate(nextProps,nextState){
        
        console.log(nextProps,nextState)
        return this.isOdd(this.props.nbr)!==this.isOdd(nextProps.nbr)
    }

    isOdd = (number) =>(number %2===0).toString()

    render(){
        console.log("Odd render",this.props.nbr)
        return(
            <div>
                Odd à la vie
                <br/>
                <p>{this.isOdd(this.props.nbr)}</p>

            </div>

        )
    }

}
export default Odd;