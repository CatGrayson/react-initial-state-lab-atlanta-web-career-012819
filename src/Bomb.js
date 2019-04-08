// your Bomb code here!
import React from 'react'

// In the src/Bomb.js file, create a Bomb React component.
class Bomb extends React.Component {
    constructor(props) {
        super()

        // Its initial state should have a property called secondsLeft.
        this.state = {
            // The initial value of secondsLeft is set by passing in an initialCount prop to the Bomb component. Don't forget to pass the argument props into the constructor (i.e., constructor(props)).
            secondsLeft: props.initialCount
        }
    }
    // It should render the text '<SECONDS_LEFT> seconds left before I go boom!', where <SECONDS_LEFT> is the value of secondsLeft.
    render() {
        // If secondsLeft equals 0, it should render 'Boom!' instead.
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`

        return (
            <div>{message}</div>
        )
    }
}
export default Bomb
