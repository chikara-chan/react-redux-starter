import { SHOW_ALERT, HIDE_ALERT } from '../constants/ActionTypes';

const initialState = {
	text: '',
	show: false
};

export default function orders(state = initialState, action) {
    switch (action.type) {
        case SHOW_ALERT:
            return {
                text: action.text,
                show: true
            };
        case HIDE_ALERT:
            return {
                text: '',
                show: false
            };
        default:
            return state;
    }
};
