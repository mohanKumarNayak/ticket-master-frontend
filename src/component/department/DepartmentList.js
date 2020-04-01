import React from 'react'
import {connect} from 'react-redux'
import { startDepartmentGetData } from '../../action/departmentAction';
import DepartmentForm from './DepartmentForm'
import {startAddDepartment,startRemoveDepartment} from '../../action/departmentAction'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'

function DepartmentList(props){
    const router = () => {
        return props.history.push('/department')
    }
    const handleSubmit = (formData) => {
        props.dispatch(startAddDepartment({router,formData}))
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
                props.dispatch(startRemoveDepartment(id))
              }
          })
        
    }
    if(props.department.length == 0){
        props.dispatch(startDepartmentGetData())
    }
    return (
        <div className="container">
            <h3>department List - {props.department.length}</h3><br />
            <ul className="list-group">
            {
                props.department.map(depart=>{
                    return (<li key={depart._id} className="list-group-item">{depart.name}
                    <button className="float-right mr-5 btn btn-danger" onClick={()=>{handleRemove(depart._id)}}>remove</button>
                    <button className="float-right btn btn-info"><Link to={`/department/${depart._id}`} style={{color:"white"}}>show</Link></button></li>)
                })
            }
            <br />
            <h3>Add department</h3>
            <DepartmentForm handleSubmit={handleSubmit}/>
            </ul>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        department : state.departments
    }
}

export default connect(mapStateToProps)(DepartmentList)

