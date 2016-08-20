import * as types from '../constants/ActionTypes';
import { SHOW_DANGER, SHOW_WARN, SHOW_REJECT, SHOW_TIMEOUT } from '../constants/PrimaryOrderTypes.js';
import { SHOW_DANGER_ALL, SHOW_DANGER_NO_REACH, SHOW_DANGER_NO_RECEIVE, SHOW_DANGER_NO_SEND } from '../constants/DangerOrderTypes.js';
import request from 'superagent';

export function getOrder(primaryOrderType, secondaryOrderType) {
  	return dispatch => {
	 	let a, b;
	    switch (primaryOrderType) {
	        case SHOW_DANGER:
	            a=1;
	            break;
	        case SHOW_WARN:
	            a=2;
	            break;
	        case SHOW_REJECT:
	            a=3;
	            break;
	        case SHOW_TIMEOUT:
	            a=4;
	            break;
	        default:
	            a=1;
	    }
	    switch (secondaryOrderType) {
	        case SHOW_DANGER_ALL:
	            b=1;
	            break;
	        case SHOW_DANGER_NO_REACH:
	            b=2;
	            break;
	        case SHOW_DANGER_NO_RECEIVE:
	            b=3;
	            break;
	        case SHOW_DANGER_NO_SEND:
	            b=4;
	            break;
	        default:
	            b=1;
	    }
	    request.post('/user')
	        .send({ a, b })
	        .end((err, res) => {
	            if (err) {
	                // alert('请求服务器异常');
	            // } else if (!res.status) {
	                // alert(res.message);
	            // } else {
	            	dispatch({ 
	                	type: types.GET_ORDER, 
	                	orders: [{
		                    id: 1,
		                    text: 'SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'
			            }, {
			                id: 2,
			                text: 'SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'
		                }]
	            	});
	            }
	    	});
  	};
};
