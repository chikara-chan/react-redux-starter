import * as types from '../constants/ActionTypes';
import store from '../store/configureStore';

export function showAlert(text) {
	store.dispatch({
		type: types.SHOW_ALERT,
		text
	});
};

export function hideAlert() {
	store.dispatch({
		type: types.HIDE_ALERT,
	});
};

