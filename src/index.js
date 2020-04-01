import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import configureStore from './store/configureStore'
import {startLoggedIn} from './action/userAction'
import {startGetCustomers} from './action/customerAction'
import {startDepartmentGetData} from '../src/action/departmentAction'
import {startGetEmployeee} from '../src/action/employeeAction'
import {startGetTickets} from '../src/action/ticketAction'

const store = configureStore()

store.subscribe(()=>{
    console.log(store.getState())
})
console.log(store.getState())

if(localStorage.getItem('token')){
    store.dispatch(startLoggedIn(localStorage.getItem('token')))
    store.dispatch(startGetCustomers())
    store.dispatch(startDepartmentGetData())
    store.dispatch(startGetEmployeee())
    store.dispatch(startGetTickets())
}

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'));

