// 2 things that always go in reducers
//   1. initial state - the structure of state
//   2. reducer object - governs how we change the state/all of the different situations (actions) that cause state to change

/** setting up an API call
 * 1. loading state
 * 2. success state - data is rendering
 * 3. error state
 */

import data from './../data/data'

import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from './../actions'

const initialState = {
    plantNames: data,
    loading: false,
    error: ''
}

const reducer = (state = initialState, action ) => {
    switch(action.type) {
        // fetch data - show loading screen
        case FETCH_START:
            return {
                ...state,
                loading: true,
                error: '' //clears any existing errors
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                plantNames: action.payload,
                error: ''
            }
        case FETCH_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Failed to submit, please try again..'
            }
        default:
            return state;
    }
}

export default reducer;