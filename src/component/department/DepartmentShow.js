import React from 'react'
import {connect} from 'react-redux'
import {departmentFind} from '../../selectors/departmentSelectors'
import {Link,withRouter} from 'react-router-dom'
import AllDepartmentTicket from '../department/AllDepartmentTicket'

function DepartmentShow(props){
    const id = props.match.params.id
    return(
        <div className="container">
            <h2>Name - {props.department ? props.department.name : 'loading'}</h2>
            <Link to={`/department/edit/${id}`} className="display-4" style={{fontSize:"35px"}}>edit</Link>
            <AllDepartmentTicket id={id}/>

        </div>
    )
}

const mapStateToProps = (state,props) =>{
    const id = props.match.params.id
    return { 
        department : departmentFind(state.departments,id)
    }
}

export default withRouter(connect(mapStateToProps)(DepartmentShow))