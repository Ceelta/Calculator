class OperatorsReducer {
    static processAction(state, action) {
        switch (action.type) {
            case OperatorsReducer.OPERATOR_CLICK:
                state = this._operatorClick(state, action)
                break
        }
        return state
    }

    static _operatorClick(state, action) {
        switch (action.data.operator) {
            case "C":
                state = this._setState(state, null, null, null)
                break
            case "+":
            case "-":
            case "x":
            case "/":
                state = this._setState(state, null, state.number, action.data.operator)
                break
            case "=":
                var resultOperation = this._processOperation(state)
                state = this._setState(state, resultOperation, resultOperation, null)
                break

        }
        return state
    }

    static _processOperation(state) {
        var result = 0
        switch (state.operator) {
            case "+":
                result = state.result + state.number
                break
            case "-":
                result = state.result - state.number
                break
            case "x":
                result = state.result * state.number
                break
            case "/":
                result = state.result / state.number
                break
        }
        return result
    }

    static _setState(state, number, result, operator) {
        state.number = number
        state.result = result
        state.operator = operator
        return state
    }

    static NAME = "OPERATORS_REDUCER"
    static OPERATOR_CLICK = "OPERATOR_CLICK"
}
export default OperatorsReducer