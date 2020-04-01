import React from 'react'
import TicketForm from './TicketForm'
import {connect} from 'react-redux'
import {startUpdateTicket} from '../../action/ticketAction'

function EditTicket(props){
    const id=props.match.params.id
    const redirect = () => {
        return props.history.push('/tickets')
    }
    const handleSubmit = (formData) => {
        props.dispatch(startUpdateTicket({formData,id,redirect}))
    }
    return(
        <div className="container"> 
            <h2>Edit Ticket</h2>
            <TicketForm id={id} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default connect()(EditTicket)