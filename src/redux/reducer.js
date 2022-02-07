const defaultState = {
    examples: []
}
export const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD':
            const inCart = state.examples.find((item) => item.name === action.payload.name ? true : false)
            return {
                ...state, 
                examples: inCart ? state.examples.map(item => 
                    item.name === action.payload.name 
                    ? {...item, count: item.count + 1} : item) : [...state.examples, {...action.payload, count: 1}]
            }
        case 'SUB': 
            return {
                ...state, 
                examples: state.examples.map(item => 
                    item.name === action.payload.name 
                    ? {...item, count: action.payload.count} : item)
            }
        default: 
            return state
    }
}