import { userConstants } from "../Constants"

let initState = {
    user: {},
    repos: {},
    error: {},
    processing: true
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        // User Reducers
        case userConstants.SUCCESS:
            return { ...state, user: action.payload.data, processing: false }
        case userConstants.ERROR:
            return { ...state, error: { data: action.payload }, processing: false }
        case userConstants.PROCESSING:
            return { ...state, processing: action.payload }

        // user repos reducer

        case userConstants.REPO_SUCCESS:
            return { ...state, repos: action.payload.data, processing: false }
        case userConstants.REPO_ERROR:
            return { ...state, error: { data: action.payload.data }, processing: false }
        case userConstants.REPO_PROCESSING:
            return { ...state, processing: action.payload }

        default:
            return state
    }
}