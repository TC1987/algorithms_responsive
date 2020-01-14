import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import './index.css';

import algorithmReducer from './reducers/algorithmReducer';
import barsReducer from './reducers/barsReducer';
import colorsReducer from './reducers/colorsReducer';
import heightsReducer from './reducers/heightsReducer';
import playbackReducer from './reducers/playbackReducer';
import sidebarReducer from './reducers/sidebarReducer';
import speedReducer from './reducers/speedReducer';

const reducers = combineReducers({
	algorithm: algorithmReducer,
	barCount: barsReducer,
	colors: colorsReducer,
	heights: heightsReducer,
	isRunning: playbackReducer,
	sidebarOpen: sidebarReducer, 
	speed: speedReducer,
});

const store = createStore(reducers);

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root')
);