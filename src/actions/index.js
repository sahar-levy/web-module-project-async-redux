/** creating actions:
 * 1. action constant (name of action)
 * 2. action creator fxn -- this is what's called in order to trigger the action
*/

import axios from "axios"

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'

// thunk action - returns a fxn!
// this demonstrates a finite state machine
export const getPlantNames = (searchTerm) => {
    const URL = `https://perenual.com/api/species-list?key=sk-qwYX65d2cf42b69164239&q=${searchTerm}`
    return(dispatch => {
        // props.fetchStart()
            dispatch(fetchStart())
            axios.get(URL)
            .then(res => {
                // props.fetchSuccess(res.data.data)
                dispatch(fetchSuccess(res.data.data))
            })
            .catch(() => {
                // props.fetchFail()
                dispatch(fetchFail())
            })
        }
    );
}


export const fetchStart = () => {
    return ({type: FETCH_START});
    // look in reducer -- the case for FETCH_START has no payload, it just dispatches the action of changes loading from false to true
}

export const fetchSuccess = (plantNames) => {
    return({type: FETCH_SUCCESS, payload: plantNames})
    // this payload gets passed to the reducer with this action case
}

export const fetchFail = () => {
    return ({type: FETCH_FAIL})
} 