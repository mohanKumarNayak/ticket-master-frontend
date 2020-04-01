import React from 'react'
import {connect} from 'react-redux'
import {ticketFindCode} from '../../selectors/ticketSelector'
import {startRemoveTicketSearch,startUpdateStatus} from '../../action/ticketAction'
import {Link,withRouter} from 'react-router-dom'
import Swal from 'sweetalert2'

class SearchTicket extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
     
     handleRemove = (id) => {
        const redirect = () => {
            return this.props.history.push('/tickets')
        }
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
                this.props.handleSearch()
                this.props.dispatch(startRemoveTicketSearch({id,redirect}))
              }
          })
        
    }
     handleChange = (id) => {
        const status = {
            isResolved: !this.props.ticket.isResolved
        }
        this.props.dispatch(startUpdateStatus({id,status}))
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
                        <tr>
                            <td>{this.props.ticket && this.props.ticket.code}</td>
                            <td>{this.props.customer.length !== 0 && this.props.customer.find(cust=>cust._id==this.props.ticket.customer).name }</td>
                            <td>{this.props.department.length !== 0 && this.props.department.find(depart=>depart._id==this.props.ticket.department).name }</td>
                            <td>{this.props.employee.length !== 0 && this.props.ticket.employees.map(tick=>{
                                return this.props.employee.find(emp=>emp._id == tick._id).name
                            })}</td>
                            <td>{this.props.ticket && this.props.ticket.message}</td>
                            <td>{this.props.ticket && this.props.ticket.priority}</td>
                            <td><Link to={`/tickets/${this.props.ticket._id}`}><button className="btn btn-info">show</button></Link></td>
                            <td><button className="btn btn-danger" onClick={()=>{this.handleRemove(this.props.ticket._id)}}>remove</button></td>
                            <td><input type="checkbox" checked={this.props.ticket.isResolved} onChange={()=>{this.handleChange(this.props.ticket._id)}} name="isResolved"/></td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
                }
}

const mapStateToProps = (state,props) => {
    const code = props.code
    return {
        ticket : ticketFindCode(state.tickets,code),
        customer : state.customers,
        department : state.departments,
        employee : state.employees
    }
}

export default withRouter(connect(mapStateToProps)(SearchTicket))