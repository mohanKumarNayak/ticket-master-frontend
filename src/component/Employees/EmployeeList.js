import React from 'react'
import {connect} from 'react-redux'
import {startGetEmployeee,startRemoveEmployee} from '../../action/employeeAction'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'

function EmployeeList(props){
    if(props.employee.length == 0) {
        props.dispatch(startGetEmployeee())
    }
    const handleRemove = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result)=>{
              if(result.value){
                props.dispatch(startRemoveEmployee(id))
              }
          })
        
    }
    return (
        <div className="container">
            <h2>Employee List - {props.employee ? props.employee.length : 'loading' }</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Department</th>
                        <th>Actions</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.employee.map(emp=>{
                            return(<tr key={emp._id}>
                                        <td>{emp._id}</td>
                                        <td>{emp.name}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.mobile}</td>
                                        <td>{emp.department.name}</td>
                                        <td><button className="btn btn-info"><Link style={{color:"white"}} to={`/employee/${emp._id}`}>show</Link></button></td>
                                        <td><button className="btn btn-danger" onClick={()=>{handleRemove(emp._id)}}>Remove</button></td>
                            </tr>)
                        })
                    }
                </tbody>

            </table>
            <Link to="/employee/new">add employee</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        employee : state.employees
    }
}

export default connect(mapStateToProps)(EmployeeList)