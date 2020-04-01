import React from 'react'
import {withRouter,Link,} from 'react-router-dom'
import {connect} from 'react-redux'
import TicketAll from './CustomerAll'

function Show(props){
    const id=props.match.params.id
    return(
        <div className="container">
            <h2>customer - {props.customer ? props.customer.name : 'loading'}</h2>
            <Link to={`/customer/edit/${id}`}>edit customer</Link>
            <TicketAll id={id} />
        </div>
            
    )
}

const mapStateToProps = (state,props) => {
    return {
        customer : state.customers.find(cust=>cust._id == props.match.params.id)
    }
}


export default withRouter(connect(mapStateToProps)(Show))