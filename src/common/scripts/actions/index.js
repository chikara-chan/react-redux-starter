import * as types from '../constants/ActionTypes';

export function getOrder(text) {
    return {
        type: types.GET_ORDER,
        text
    };
};