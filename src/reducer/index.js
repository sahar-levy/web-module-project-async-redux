// 2 things that always go in reducers
//   1. initial state - the structure of state
//   2. reducer object - governs how we change the state/all of the different situations (actions) that cause state to change

import data from './../data/data'

const initialState = {
    plantNames: data,
    loading: false
}

const reducer = (state =initialState, action ) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default reducer;