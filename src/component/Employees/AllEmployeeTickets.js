import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import AllTicket from './EmployeeTicket/AllEmployeeTicket'
import CompletedTicket from './EmployeeTicket/CompletedEmployeeTicket'
import PendingTicket from './EmployeeTicket/PendingEmployeeTicket'



class AllEmployeeTicket extends React.Component{
    constructor(props){
        super(props)
        this.state = {
                all:true,
                completed:false,
                pending:false

        }
    }
    handleall = () => {
        this.setState({
                all:true,
                completed:false,
                pending:false
        })
    }
    handleComplete = () => {
        this.setState({
            all:false,
            completed:true,
            pending:false
    })

    }
    handlePending = () => {
        this.setState({
            all:false,
            completed:false,
            pending:true
    })

    }

render(){
   return(
       <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
              <li className="nav-item active">
              <button className="nav-link btn btn-info" onClick={this.handleall}>all<span class="sr-only">(current)</span></button>
              </li>
              <li className="nav-item active">
              <button className="nav-link btn btn-success" onClick={this.handleComplete}>Completed</button>
              </li>
              <li className="nav-item active">
              <button class="nav-link btn btn-danger" onClick={this.handlePending}>pending</button>
              </li>
              </ul>
              </div>
              </nav>
           {this.state.all && <AllTicket id={this.props.id} />}
           {this.state.pending && <PendingTicket id={this.props.id} />}
           {this.state.completed && <CompletedTicket id={this.props.id} />} 
       </div>
   ) 
}
}



export default withRouter(connect()(AllEmployeeTicket))