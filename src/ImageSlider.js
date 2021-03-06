// your ImageSlider code here!
import React from 'react'

// In the src/ImageSlider.js file, create an ImageSlider React component.
class ImageSlider extends React.Component {
    constructor() {
        super()

        // Its initial state should have a property called currentSlideIndex that starts at 0.
        this.state = {
            currentSlideIndex: 0
        }
    }
    // It should only render out the text 'I am on slide <CURRENT_SLIDE>', where <CURRENT_SLIDE> is the value of this.state.currentSlideIndex.
    render() {
        return (
            <h1>I am on slide {this.state.currentSlideIndex}</h1>
        )
    }
}
export default ImageSlider
