import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from "react-redux";
//import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'; //из dev dependensy
//import { store } from "./store";
//import { Context } from './components/Context'
import { Portal } from './components/Portal';
import './index.css';


export const history = createBrowserHistory();

ReactDOM.render(
    <Portal/>,
    document.getElementById('root')
);

// ReactDOM.render(
//     <Context/>,
//     document.getElementById('root')
// );

// ReactDOM.render(
//     <Provider store={store}>
//         <Router history={history}>
//             <Main/>
//         </Router>
        
//     </Provider>,
//     document.getElementById('root')
// );