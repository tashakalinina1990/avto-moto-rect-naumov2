import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/reducers/root-reducer';
import App from './components/app/app';
import './assets/scss/style.scss';
import {STORE_POPUP_DATA_NAME} from './const';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.onbeforeunload = () => {
  localStorage.removeItem(STORE_POPUP_DATA_NAME);
};

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
