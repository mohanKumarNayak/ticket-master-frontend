import React from 'react'
import {connect} from 'react-redux'
import {ticketFind} from '../../selectors/ticketSelector'

class TicketForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            code : this.props.ticket ? this.props.ticket.code : '',
            customer : this.props.ticket ? this.props.ticket.customer : '',
            department : this.props.ticket ? this.props.ticket.department : '',
            employee : '',
            message : this.props.ticket ? this.props.ticket.message : '',
            priority : this.props.ticket ? this.props.ticket.priority : ''


        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            code : this.state.code,
            customer : this.state.customer,
            department : this.state.department,
            employees : [].concat({_id:this.state.employee}),
            message : this.state.message,
            priority : this.state.priority
        }
        this.props.handleSubmit(formData)
    }

    render(){
        return(
            <div>
                 <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="code-no">Code</label>
                        <input type="text" className="form-control" id="code-no" onChange={this.handleChange} value={this.state.code} name="code" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="customer">customer</label>
                        <select id="customer" value={this.state.customer} className="form-control" name="customer" onChange={this.handleChange}>
                            <option key="one">select</option>
                            
                            {
                                this.props.customer ? this.props.customer.map(cust=>{
                                    return (<option value={cust._id} key={cust._id}>{cust.name}</option>)
                                }) : 'loading'
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">department</label>
                        <select id="department" value={this.state.department} className="form-control" name="department" onChange={this.handleChange}>
                            <option key="one">select</option>
                            
                            {
                                this.props.department ? this.props.department.map(depart=>{
                                    return (<option value={depart._id} key={depart._id}>{depart.name}</option>)
                                }) : 'loading'
                            }

                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">employee</label>
                        <select id="employee" value={this.state.employee} className="form-control" name="employee" onChange={this.handleChange}>
                            <option key="one">select</option>
                            
                            {
                                this.props.employee ? this.props.employee.filter(emp=>emp.department._id == this.state.department).map(emp=>{
                                    return <option value={emp._id} key={emp._id}>{emp.name}</option>
                                }) : 'loading'
                            }

                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">message</label>
                        <textarea type="text" rows="3" cols="50" className="form-control" id="code-no" onChange={this.handleChange} value={this.state.message} name="message" />
                    </div>
                    <div className="form-group">
                            <p>Priority</p>
                            <input type="radio" name="priority" value="high" id="high" onClick={this.handleChange}/>
                            <label htmlFor="high">high</label><br />
                            <input type="radio" name="priority" value="medium" id="medium" onClick={this.handleChange}/>
                            <label htmlFor="medium">medium</label><br />
                            <input type="radio" name="priority" value="low" id="low" onClick={this.handleChange}/>
                            <label htmlFor="low">low</label><br />
                    </div>
                    
                    
                    
                    <input type="submit" value="submit" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    const id = props.id
    return {
        customer : state.customers,
        department : state.departments,
        employee : state.employees,
        ticket : ticketFind(state.tickets,id)
    }
}

export default connect(mapStateToProps)(TicketForm)

