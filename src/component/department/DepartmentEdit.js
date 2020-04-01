import React from 'react'
import {connect} from 'react-redux'
import DepartmentForm from '../../component/department/DepartmentForm'
import {withRouter} from 'react-router-dom'
import {departmentFind} from '../../selectors/departmentSelectors'
import {startEditDepartment} from '../../action/departmentAction'
 
function EditDepartment(props){
    const redirect = () => {
        return props.history.push('/department')
    }
    const id = props.match.params.id
    const handleSubmit = (formData) => {
        return props.dispatch(startEditDepartment({formData,redirect,id}))
    }
    return(
        <div className="container">
            <h2>Edit Department</h2>
            <DepartmentForm handleSubmit={handleSubmit} departmentData={props.department} />

        </div>
    )
}

const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    return{
        department : departmentFind(state.departments,id)
    }
}

export default withRouter(connect(mapStateToProps)(EditDepartment))