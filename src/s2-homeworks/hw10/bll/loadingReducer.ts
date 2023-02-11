import {AppStoreType} from "./store";

const initState: initStateType = {
    isLoading: false,
}

export type initStateType = {
    isLoading: boolean
}



export const loadingReducer = (state= initState, action: actionType): initStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING": {
            return {...state, isLoading: action.isLoading}
        }

        default:
            return state
    }
}
export type actionType = LoadingActionType


export type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
