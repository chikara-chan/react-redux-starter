import { GET_ORDER } from '../constants/ActionTypes';

const initialState = [{
    id: 1,
    text: 'Use Redux'
}, {
    id: 2,
    text: 'Use Flux'
}];

export default function orders(state = initialState, action) {
    switch (action.type) {
        case GET_ORDER:
            return action.orders;
        default:
            return state;
    }
};
