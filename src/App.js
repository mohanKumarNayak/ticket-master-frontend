import React from 'react';
import Register from './component/Register'
import {BrowserRouter,Link,Route,Switch,withRouter} from 'react-router-dom'
import Login from './component/Login'
import DashBoard from './component/DashBoard'
import Home from './component/Home'
import {connect} from 'react-redux'
import CustomerList from './component/customer/CustomersList'
import AddCustomer from '../src/component/customer/AddCustomer'
import ShowCustomer from '../src/component/customer/ShowCustomer'
import EditCustomer from '../src/component/customer/EditCustomer'
import DepartmentList from '../src/component/department/DepartmentList'
import DepartmentShow from '../src/component/department/DepartmentShow'
import EditDepartment from '../src/component/department/DepartmentEdit'
import EmployeeList from '../src/component/Employees/EmployeeList'
import EmployeeAdd from '../src/component/Employees/EmployeeAdd'
import EmployeeShow from '../src/component/Employees/EmployeeShow'
import EditEmployee from '../src/component/Employees/EmployeeEdit'
import TicketLists from '../src/component/Tickets/TicketLists'
import AddTicket from '../src/component/Tickets/AddTicket'
import ShowTicket from './component/Tickets/ShowTicket'
import EditTicket from './component/Tickets/EditTicket'
import {startLogoutUser} from '../src/action/userAction'


function App(props) {
  const handleLogout = () => {
    const confirm = window.confirm('are you sure you want to logout')
    if(confirm){
    props.dispatch(startLogoutUser())
    }
  }
  return (
    <BrowserRouter>
    <div>
          {
            Object.keys(props.user).length>0 ? (<div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light" >
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <a className="navbar-brand">Ticket Master</a>
              <ul className="navbar-nav">
              <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item active">
              <Link className="nav-link" to="/customer">customer</Link>
              </li>
              <li className="nav-item active">
              <Link className="nav-link" to="/department">department</Link>
              </li>
              <li className="nav-item active">
              <Link className="nav-link" to="/employee">employee</Link>
              </li>
              <li className="nav-item active">
              <Link className="nav-link" to="/tickets">tickets</Link>
              </li>
              <li className="nav-item active">
              <Link className="nav-link" onClick={handleLogout}>logout</Link>
              </li>
              </ul>
              </div>
              </nav>

            </div>) : (<div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light" >
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <a className="navbar-brand">Ticket Master</a>
              <ul className="navbar-nav">
              <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item active">
              <Link className="nav-link" to="/users/register">register</Link>
              </li>
              <li className="nav-item active">
              <Link className="nav-link" to="/users/login">login</Link>
              </li>
              </ul>
              </div>
              </nav>
            </div>)
          }
        <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/users/register" component={Register} exact={true}/>
        <Route path="/users/login" component={Login} exact={true}/>
        <Route path="/dashboard" component={DashBoard} />

        <Route path="/customer" component={CustomerList} exact={true}/>
        <Route path="/customer/new" component={AddCustomer} />
        <Route path="/customer/edit/:id" component={EditCustomer}/>
        <Route path="/customer/:id" component={ShowCustomer} />

        <Route path="/department" component={DepartmentList} exact={true} />
        <Route path="/department/edit/:id" component={EditDepartment} />
        <Route path="/department/:id" component={DepartmentShow} />

        <Route path="/employee" component={EmployeeList} exact={true}/>
        <Route path="/employee/new" component={EmployeeAdd} />
        <Route path="/employee/edit/:id" component={EditEmployee} />
        <Route path="/employee/:id" component={EmployeeShow} />

        <Route path="/tickets" component={TicketLists} exact={true} />
        <Route path="/ticket/new" component={AddTicket} />
        <Route path="/tickets/edit/:id" component={EditTicket} />
        <Route path="/tickets/:id" component={ShowTicket} />
        
        
        </Switch>
        
        
    </div>
  </BrowserRouter>
  
  
  );
}

const mapStateToProps = (state) => {
  return {
    user : state.users
  }
}

export default connect(mapStateToProps)(App)
