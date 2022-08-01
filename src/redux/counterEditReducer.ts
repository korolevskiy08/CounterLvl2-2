export type MinValueType = {
    editMode: boolean
}

export type CounterActionType = ReturnType<typeof editModeAC>

const initialState: MinValueType = {
    editMode: false
}

export const counterEditReducer = (state = initialState, action: CounterActionType): MinValueType => {
    switch (action.type) {
        case "EDIT-MODE": {
            return {
                ...state,
                editMode: action.valueEditMode
            }
        }
        default: return state
    }
}

export const editModeAC = (valueEditMode: boolean) => {
    return {
        type: "EDIT-MODE", valueEditMode
    } as const
}