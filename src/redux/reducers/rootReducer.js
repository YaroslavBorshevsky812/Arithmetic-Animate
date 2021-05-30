

const initialState = {
    setActions: [
        { action: 'A + A', amount: 0 },
        { action: 'AA + A', amount: 0 },
        { action: 'AA + AA', amount: 0 },

        { action: 'A - A', amount: 0 },
        { action: 'AA - A', amount: 0 },
        { action: 'AA - AA', amount: 0 },

        { action: 'A x A', amount: 0 },
        { action: 'AA x A', amount: 0 },
        { action: 'AA x AA', amount: 0 },

        { action: 'A / A', amount: 0 },
        { action: 'AA / A', amount: 0 },
        { action: 'AA / AA', amount: 0 },
    ],
}

export default function navigationReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD':
            return {
                ...state,
                setActions: {
                    ...state.setActions,
                    [action.index]: {
                        ...state.setActions[action.index],
                        amount: state.setActions[action.index].amount + 1
                    }
                }
            }
            
        case 'SUB':
            return {
                ...state,
                setActions: {
                    ...state.setActions,
                    [action.index]: {
                        ...state.setActions[action.index],
                        amount: state.setActions[action.index].amount - 1
                    }
                }
            }
    }
    return state
}