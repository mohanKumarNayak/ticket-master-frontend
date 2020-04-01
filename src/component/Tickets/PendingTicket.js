import React from 'react'
import {connect} from 'react-redux'
import {startUpdateStatus,startRemoveTicket} from '../../action/ticketAction'
import {withRouter,Link} from 'react-router-dom'
import Swal from 'sweetalert2'

class PendingTicket extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           
        }
    }
    handleChange = (id) => {
        const status = {
            isResolved: true
        }
        this.props.dispatch(startUpdateStatus({id,status}))
    }
    handleRemove = (id) => {
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
                this.props.dispatch(startRemoveTicket(id))
              }
          })
        
    }
    render(){
    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Code No</th>
                        <th>Customer</th>
                        <th>Department</th>
                        <th>Employees</th>
                        <th>Message</th>
                        <th>Priority</th>
                        <th>Actions</th>
                        <th>Remove</th>
                        <th>Complete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.tickets.map(ticket=>{
                            if(!ticket.isResolved){
                                return (<tr key={ticket._id}>
                                    <td>{ticket.code}</td>
                                    <td>{this.props.customer.length !== 0 ? this.props.customer.find(cust=>cust._id == ticket.customer).name : 'loading'}</td>
                                    <td>{this.props.department.length !== 0 ? this.props.department.find(dept=>dept._id == ticket.department).name : 'loading'}</td>
                                    <td>{this.props.employee.length !== 0 && ticket.employees.map((tick,i)=>{
                                        return (
                                            <p key={i}>
                                                {
                                                    this.props.employee.length !== 0 && this.props.employee.find(ele=> ele._id == ticket.employees[i]._id).name
                                                }
                                            </p>

                                        )
                                    })}</td>
                                    <td>{ticket.message}</td>
                                    <td>{ticket.priority}</td>
                                    <td><Link to={`/tickets/${ticket._id}`}><button className="btn btn-info">show</button></Link></td>
                                    <td><button className="btn btn-danger" onClick={()=>{this.handleRemove(ticket._id)}}>remove</button></td>
                                    <td><input type="checkbox" checked={ticket.isResolved} onChange={()=>{this.handleChange(ticket._id)}} name="isResolved"/></td>

                                </tr>)
                            }
                        })
                    }
                </tbody>
            </table>
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        employee : state.employees,
        tickets : state.tickets,
        customer : state.customers,
        department : state.departments
        
        
    }
}

export default withRouter(connect(mapStateToProps)(PendingTicket))