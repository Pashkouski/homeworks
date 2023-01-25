import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return action.payload === 'up' ?
                [...state].sort((a, b) => a.name.localeCompare(b.name))
                : action.payload === 'down'
                    ? [...state].sort((a, b) => b.name.localeCompare(a.name))
                    : state
            // need to fix
        }
        case 'check': {

            return state.filter(el => el.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
