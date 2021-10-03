import { combineReducers } from "redux";
import { alertReducer } from "./Reducers";
import { userReducer } from "./Reducers";

const reducers = combineReducers({
    alerts: alertReducer,
    user: userReducer,
})

const rootReducer = (state, action) => {
    return reducers(state, action)
}

export default rootReducer