import React from 'react'
import {connect} from 'react-redux'
import {Link,withRouter} from 'react-router-dom'
import {employeeFind} from '../../selectors/employeeSelectors'
import AllEmployeeTickets from '../Employees/AllEmployeeTickets'

function EmployeeShow(props){
    const id = props.match.params.id
    return(
        <div className="container">
            <h2>Name - {props.employee ? props.employee.name : 'loading'}</h2>
            <Link to={`/employee/edit/${id}`} className="display-4" style={{fontSize:"35px"}}>edit</Link>
            <AllEmployeeTickets id={id} />

        </div>
    )
}

const mapStateToProps = (state,props) =>{
    const id = props.match.params.id
    return { 
        employee : employeeFind(state.employees,id)
    }
}

export default withRouter(connect(mapStateToProps)(EmployeeShow))