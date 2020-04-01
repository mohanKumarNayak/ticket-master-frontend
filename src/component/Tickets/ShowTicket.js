import React from 'react'
import {connect} from 'react-redux'
import {withRouter,Link} from 'react-router-dom'
import {ticketFind } from '../../selectors/ticketSelector'




function ShowTicket(props){
    const id = props.match.params.id
   
    return(
        <div className="container">
            <h2>ticket code - {props.ticket ? props.ticket.code : 'loading'}</h2>
            <ul className="list-group">
                    <li className="list-group-item">customer - {props.ticket ? props.customer.find(cust=>cust._id == props.ticket.customer).name:'loading'}</li>
                    <li className="list-group-item">department - {props.ticket ? props.department.find(depart=>depart._id == props.ticket.department).name:"loading"}</li>
                    <li className="list-group-item">employee - {props.employee.length !==0 ? props.ticket.employees.map(tick=>{
                        return props.employee.find(emp=>emp._id == tick._id).name
                    }) : 'loading'}</li>
                    <li className="list-group-item">priority - {props.ticket ? props.ticket.priority : 'loading'}</li>
                    <li className="list-group-item">message - {props.ticket ? props.ticket.message : 'loading'}</li>
                    <li className="list-group-item">priority - {props.ticket ? props.ticket.priority : 'loading'}</li>

                    
            </ul>
            
            <Link to={`/tickets/edit/${id}`}>edit Ticket</Link>

           
        </div>
    )
}

const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    return {
        ticket : ticketFind(state.tickets,id),
        customer : state.customers,
        department : state.departments,
        employee : state.employees
    }
}

export default withRouter(connect(mapStateToProps)(ShowTicket))