import React from "react"
import { connect } from "react-redux"
import DataReducerModel from "../models/data-reducer-model"
import OperatorsReducer from "../reducers/operators-reducer"

class OperatorsComponent extends React.Component {
    static mapStateToProps(state) {
        return state
    }

    static mapDispatchToProps(dispatch) {
        var result = {
            buttonOperatorClick(operator) {
                var dataReducer = new DataReducerModel(OperatorsReducer.NAME, OperatorsReducer.OPERATOR_CLICK, { operator })
                dispatch({ type: dataReducer.type, data: dataReducer })
            }
        }
        return result
    }

    #renderButton(operator, className) {
        return (<button className={className} onClick={() => { this.props.buttonOperatorClick(operator) }}>{operator}</button>)
    }

    render() {
        return (<div>
            <div>
                {this.#renderButton("C", "button buttonOperation")}
                {this.#renderButton("+", "button buttonOperation")}
                {this.#renderButton("-", "button buttonOperation")}
                {this.#renderButton("x", "button buttonOperation")}
                {this.#renderButton("/", "button buttonOperation")}
            </div>
            <div>
                {this.#renderButton("=", "buttonEqual buttonOperation")}
            </div>
        </div>)
    }
}
export default connect(OperatorsComponent.mapStateToProps, OperatorsComponent.mapDispatchToProps)(OperatorsComponent)