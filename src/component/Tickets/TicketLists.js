import React from 'react'
import {connect} from 'react-redux'
import {startGetTickets} from '../../action/ticketAction'
import PendingTicket from './PendingTicket'
import CompletedTicket from './CompletedTicket'
import {withRouter,Link} from 'react-router-dom'
import PieChart from './TicketPieChart'
import BarChart from './TicketBarChart'
import SearchTicket from './SearchTicket'


class TicketLists extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pending : true,
            complete : false,
            searchTicket : false,
            percentage : '',
            search : ''
        }
    }
    
    
    handleChange = (e) => {
        this.setState({search : e.target.value})
    }
    handlePending = () => {
        this.setState({
            pending : true,
            complete : false,
            searchTicket : false
        })
        
    }
     handleComplete = () =>{
        this.setState({
            pending : false,
            complete : true,
            searchTicket : false
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
       this.setState({
        pending : false,
        complete : false,
        searchTicket : true
       })
    }
    handleSearch = () => {
        this.setState({
            pending:true,
            complete : false,
            searchTicket : false,
            search : ''
        })
    }
    render(){
        if(this.props.tickets.length == 0) {
            this.props.dispatch(startGetTickets())
        }
    return(
        <div className="container">
            <h2>Listing Tickets - {this.props.tickets ? this.props.tickets.length : 'loading'}</h2>
            <form onSubmit={this.handleSubmit} align="right">
                <input type="text" value={this.state.search} onChange={this.handleChange} /><input type="submit" value="search" style={{background:"green",color:"white"}} />
                </form>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
              <li className="nav-item active">
              <button class="nav-link" onClick={this.handlePending}>Pending<span class="sr-only">(current)</span></button>
              </li>
              <li className="nav-item active">
              <button class="nav-link" onClick={this.handleComplete}>Completed</button>
              </li>
              </ul>
              </div>
              </nav>
              
              {
                  this.state.pending && <PendingTicket /> 
              }
              {
                  this.state.complete && <CompletedTicket />
              }
              {
                  this.state.searchTicket && <SearchTicket code={this.state.search} handleSearch={this.handleSearch} />
              }

              <Link to="/ticket/new">add ticket</Link>
              <br />
              <br />
              

              <progress className="progress-bar" value={this.props.tickets.filter(tick=>tick.isResolved).length/this.props.tickets.length*100} max="100" style={{width:"100%"}}></progress>
              <br />
              <h3 align="center">Data on Pending Ticket</h3>
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                         <PieChart />
                      </div>
                      <div className="col-md-6">
                         <BarChart />
                      </div>

                  </div>

              </div>
              
              

        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        tickets : state.tickets  
    }
}

export default withRouter(connect(mapStateToProps)(TicketLists))