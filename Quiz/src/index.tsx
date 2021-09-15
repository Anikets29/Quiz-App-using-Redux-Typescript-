import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import {createStore} from "redux"
import Reducer from "./Reducer/Reducer";
import './style.css';
import App from './Main/App';


const reducer = createStore(Reducer);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={reducer}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

