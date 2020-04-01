import React from 'react'
import {connect} from 'react-redux'
import CustomerForm from './CustomerForm'
import {startUpdateData} from '../../action/customerAction'
import {withRouter} from 'react-router-dom'


function EditCustomer(props){
    const customer = props.customer.find(cust=>cust._id==props.match.params.id)
    const redirect = () => {
        return props.history.push('/customer')
    }

    const handleUpdateData = (formData) => {
        const id=customer._id
        props.dispatch(startUpdateData({formData,redirect,id}))
    }
    return(
        <div className="container">
            <h2>Edit Customer</h2>
            <CustomerForm customer={customer} handleAddData={handleUpdateData}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        customer : state.customers 
    }
}

export default withRouter(connect(mapStateToProps)(EditCustomer))