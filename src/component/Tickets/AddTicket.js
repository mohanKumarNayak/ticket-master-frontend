import React from 'react'
import TicketForm from './TicketForm'
import {startAddTicket} from '../../action/ticketAction'
import {connect} from 'react-redux'

function AddTicket(props){
    const redirect = () => {
        return props.history.push('/tickets')
    }
    const handleSubmit = (formData) => {
        props.dispatch(startAddTicket({formData,redirect}))
    }
    return (
        <div className="container">
            <h2>Add Ticket</h2>
            <TicketForm handleSubmit={handleSubmit}/>
        </div>
    )
}

export default connect()(AddTicket)