import React from "react"
import { connect } from "react-redux"
import DataReducerModel from "../models/data-reducer-model"
import NumbersReducer from "../reducers/numbers-reducer"

class NumbersComponent extends React.Component {
    static mapStateToProps(state) {
        return state
    }

    static mapDispatchToProps(dispatch) {
        var result = {
            buttonNumberClick(number) {
                var dataReducer = new DataReducerModel(NumbersReducer.NAME, NumbersReducer.NUMBER_CLICK, { number })
                dispatch({ type: dataReducer.type, data: dataReducer })
            }
        }
        return result
    }

    #renderButton(number) {
        return (<button className="button buttonNumber" onClick={() => { this.props.buttonNumberClick(number) }}>{number}</button>)
    }

    render() {
        return (<div className="numbers">
            <div>
                {this.#renderButton(1)}
                {this.#renderButton(2)}
                {this.#renderButton(3)}
                {this.#renderButton(4)}
                {this.#renderButton(5)}
            </div>
            <div>
                {this.#renderButton(6)}
                {this.#renderButton(7)}
                {this.#renderButton(8)}
                {this.#renderButton(9)}
                {this.#renderButton(0)}
            </div>
        </div>)
    }


}
export default connect(NumbersComponent.mapStateToProps, NumbersComponent.mapDispatchToProps)(NumbersComponent)