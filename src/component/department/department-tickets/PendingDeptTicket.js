import React from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import {departmentFilter} from '../../../selectors/ticketSelector'

function PendingTicket(props){
    return(
        <div>
            {
                props.ticket && props.ticket.map(tick=>{
                    if(!tick.isResolved){
                    return(
                        <div style={{background : tick.isResolved ? 'green' : 'red',width : "35%",float:'left',border:'1px solid black'}} className="container" >
                            <h5>code - {tick.code}</h5>
                            <h5>customer - {props.customer.length !==0 && props.customer.find(cust=>cust._id == tick.customer).name}</h5>
                            <h5>employees - {props.employee.length !== 0 && props.ticket && tick.employees.map(employ => {
                               return  props.employee && props.employee.find(emp=>emp._id==employ._id).name
                            })}</h5>
                            <h5>department - {props.department.length !==0 && props.department.find(depart=>depart._id == tick.department).name}</h5>
                            <h5>message - {props.ticket && tick.message}</h5>
                            <h5>priority - {props.ticket && tick.priority}</h5>
                            <br />
                        </div>
                    )
                        }
                })
            }
        </div>
    )
}

const mapStateToProps = (state,props) => {
    const id = props.id
    return {
        ticket : departmentFilter(state.tickets,id),
        customer : state.customers,
        employee : state.employees,
        department : state.departments

    }
}

export default withRouter(connect(mapStateToProps)(PendingTicket))