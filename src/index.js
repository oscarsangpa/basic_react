import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



import { Provider } from 'react-redux';
import { createAppStore } from './store/config/storeConfig';
import { rootReducer } from "./store/reducers/rootReducer";
imporr reducer

let appStore = createAppStore({reducer})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider state={appStore}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
