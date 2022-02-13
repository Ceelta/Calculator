import React from 'react'
import ScreenComponent from "./screen-component"
import NumbersComponent from "./numbers-component"
import OperatorsComponent from "./operators-component"

class MainComponent extends React.Component {
    render() {
        return (<div className='main'>
            <ScreenComponent />
            <NumbersComponent />
            <OperatorsComponent />
        </div>)
    }
}
export default MainComponent