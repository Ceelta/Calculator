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

    #renderButton(operator) {
        return (<button onClick={() => { this.props.buttonOperatorClick(operator) }}>{operator}</button>)
    }

    render() {
        return (<div>
            {this.#renderButton("C")}
            {this.#renderButton("+")}
            {this.#renderButton("-")}
            {this.#renderButton("x")}
            {this.#renderButton("/")}
            {this.#renderButton("=")}
        </div>)
    }
}
export default connect(OperatorsComponent.mapStateToProps, OperatorsComponent.mapDispatchToProps)(OperatorsComponent)