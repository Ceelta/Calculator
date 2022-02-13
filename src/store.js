import { createStore } from "redux"
import StateModel from "./models/state-model"
import NumbersReducer from "./reducers/numbers-reducer"
import OperatorsReducer from "./reducers/operators-reducer"

class Store {
    static reducers(state, action) {
        var result = state

        //init
        if (result == null) {
            result = new StateModel()
        }

        //processAction
        if (action.data != null) {
            result = Store._processAction(state, action.data)
        }
        return Object.assign({}, result)
    }

    static _processAction(state, dataReducer) {
        var result = state
        switch (dataReducer.reducerName) {
            case NumbersReducer.NAME:
                result = NumbersReducer.processAction(state, dataReducer)
                break
            case OperatorsReducer.NAME:
                result = OperatorsReducer.processAction(state, dataReducer)
                break
        }
        return result
    }
}
export default createStore(Store.reducers)