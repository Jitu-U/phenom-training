import * as actiontypes from '../actionTypes/actionTypes'

export default function reducer(state = [], action) {
    switch (action.type) {
        case actiontypes.API_RESPONSE_RECIEVED: {
            if (action.payload.data) {
                let arr = action.payload.data
                arr.sort((a, b) => (a.id.kind > b.id.kind) ? 1 : ((b.id.kind > a.id.kind) ? -1 : 0));
                return arr;
            }
        }

        default:
            return state
    }
}