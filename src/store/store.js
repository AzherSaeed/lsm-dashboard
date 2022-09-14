import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import callApi from '../middlewares/apiCall';

const initialState = {};

const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware, callApi)
	)
);

export default store;