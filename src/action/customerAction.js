import axios from '../config/axios'
import Swal from 'sweetalert2'

export const startGetCustomers = () => {
    return(dispatch)=>{
        axios.get('/customers',{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            dispatch(setCustomer(response.data))
        })
    }
}

export const setCustomer = (customer) => {
    return {type:'SET_CUSTOMER',payload:customer}
}

export const startAddCustomer = (obj) => {
    return(dispatch) => {
        axios.post('/customers',obj.formData,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response)=>{  
            if(response.data.errors){
                alert(response.data.message)
            }
            else{
                  Swal.fire(
                      'Registered',
                      'customer successfully reigistered',
                      'success'
                  )
                  dispatch(startGetCustomers())
                  obj.redirect()
            }
        })
    }
}

export const removeCustomer=(id)=>{
    return {type:'REMOVE_CUSTOMER',payload:id}
}

export const startRemoveCustomer = (id) => {
    return(dispatch)=>{
        axios.delete(`/customers/${id}`,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            Swal.fire(
                'Deleted',
                'customer successfully deleted',
                'success'
            )
            dispatch(removeCustomer(response.data._id))
        })
    }
}

export const updateCustomer=(customer)=>{
    return {type:'UPDATE_CUSTOMER',payload:customer}
}

export const startUpdateData = (obj) => {
    return(dispatch)=>{
        axios.put(`/customers/${obj.id}`,obj.formData,{
            headers : {
                'x-auth' :localStorage.getItem('token')
            }
        })
        .then((response)=>{
            Swal.fire(
                'Updated',
                'customer successfully updated',
                'success'
            )
            dispatch(updateCustomer(response.data))
            obj.redirect()

        })
    }
}