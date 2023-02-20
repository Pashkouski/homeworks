const initState = {
    themeId: 1,
}
export type initStateType = {
    themeId: number
}

export type actionType = changeThemeIdType

export const themeReducer = (state = initState, action: actionType): initStateType => {
    switch (action.type) {
        case "SET_THEME_ID": {
            return {...state, themeId: action.id }
        }
        default:
            return state
    }
}

type changeThemeIdType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id })
