import React from 'react'
import CustomerForm from './CustomerForm'
import {connect} from 'react-redux'
import {startAddCustomer} from '../../action/customerAction'

function AddCustomer(props){
    const handleAddData = (formData) => {
        const redirect = () => {
            return props.history.push('/customer')
        }
        props.dispatch(startAddCustomer({formData,redirect}))
    }
    return(
        <div className="container">
            <h2>Add Customer</h2>
            <CustomerForm handleAddData={handleAddData}/>
        </div>
    )
}

export default connect()(AddCustomer)