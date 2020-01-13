import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import './index.css';

import algorithmReducer from './reducers/algorithmReducer';
import barsReducer from './reducers/barsReducer';
import heightReducer from './reducers/heightReducer';
import playbackReducer from './reducers/playbackReducer';
import speedReducer from './reducers/speedReducer';

const reducers = combineReducers({
	algorithm: algorithmReducer,
	barCount: barsReducer,
	height: heightReducer,
	playback: playbackReducer,
	speed: speedReducer,
});

const store = createStore(reducers);

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root')
);