import React from 'react'
import EmployeeForm from '../Employees/EmployeeForm'
import {startAddEmployee} from '../../action/employeeAction'
import {connect} from 'react-redux'

function EmployeeAdd(props){
    const redirect = () => {
        return props.history.push("/employee")
    }
    const handleSubmit = (formData) => {
        props.dispatch(startAddEmployee({formData,redirect}))
    }
    return(
        <div className="container">
            <h2>Add Employee</h2>
            <EmployeeForm handleSubmit={handleSubmit}/>
        </div>
    )
}

export default connect()(EmployeeAdd)