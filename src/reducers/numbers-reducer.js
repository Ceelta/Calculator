
class NumbersReducer {
    static processAction(state, action) {
        switch (action.type) {
            case NumbersReducer.NUMBER_CLICK:
                state = this._numberClick(state, action)
                break
        }
        return state
    }

    static _numberClick(state, action) {
        state.number = state.number == null ? action.data.number : (state.number * 10) + action.data.number
        return state
    }

    static NAME = "NUMBERS_REDUCER"
    static NUMBER_CLICK = "NUMBER_CLICK"
}

export default NumbersReducer
