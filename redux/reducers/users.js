import { USERS_STATE } from '../constants';

const initialState = {
    users: null,
}

export const users = (state=initialState, action) => {
    switch(action.type){
        case USERS_STATE:
            return {
                ...state,
                users: action.users,
            }
        default:
            return state;    
    }
}