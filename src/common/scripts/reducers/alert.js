import { GET_ORDER } from '../constants/ActionTypes';

const initialState = 'sb';

export default function orders(state = initialState, action) {
    switch (action.type) {
        case GET_ORDER:
            return action.text;
        default:
            return state;
    }
};
