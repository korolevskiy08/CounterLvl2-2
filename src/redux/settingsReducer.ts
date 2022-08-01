export type SettingsType = {
    maxValue: number
    minValue: number
    currentValue: number
}

export type CounterActionType = ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setMinValueAC>
    | ReturnType<typeof setCurrentValueAC>

const initialState: SettingsType = {
    maxValue: 5,
    minValue: 0,
    currentValue: 0
}

export const settingsReducer = (state = initialState, action: CounterActionType): SettingsType => {
    switch (action.type) {
        case "SET-MAX-VALUE": {
            return {
                ...state,
                maxValue: action.value
            }
        }
        case 'SET-MIN-VALUE' : {
            return {
                ...state,
                minValue: action.value
            }
        }
        case 'SET-CURRENT-VALUE' : {
            return {
                ...state,
                currentValue: action.value
            }
        }
        default:
            return state
    }
}

export const setMaxValueAC = (value: number) => {
    return {
        type: "SET-MAX-VALUE", value
    } as const
}
export const setMinValueAC = (value: number) => {
    return {
        type: 'SET-MIN-VALUE', value
    } as const
}
export const setCurrentValueAC = (value: number) => {
    return {
        type: 'SET-CURRENT-VALUE', value
    } as const
}
