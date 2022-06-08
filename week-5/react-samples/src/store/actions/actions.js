import * as actiontypes from '../actionTypes/actionTypes'


export const apiResponseRecieved = (data) => ({
    type: actiontypes.API_RESPONSE_RECIEVED,
    payload: {
        data: data
    }
})