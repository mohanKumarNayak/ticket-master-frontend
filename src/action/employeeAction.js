import axios from '../config/axios'
import Swal from 'sweetalert2'

export const getEmployee = (employee) => {
    return {type:'GET_EMPLOYEE',payload:employee}
}

export const startGetEmployeee = () => {
    return(dispatch)=>{
        axios.get('/employees',{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            dispatch(getEmployee(response.data))
        })
    }
}

export const startAddEmployee = (obj) => {
    return(dispatch)=>{
        axios.post('/employees',obj.formData,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            console.log(response.data)
            if(response.data.errors){
                alert(response.data.message)
            }
            else{
                Swal.fire(
                    'Added',
                    'Employee successfully added',
                    'success'
                )
                dispatch(startGetEmployeee())
                obj.redirect()
            }
        })
    }
}

export const removeEmployee = (employee) => {
    return {type:"REMOVE_EMPLOYEE",payload:employee}
}

export const startRemoveEmployee = (id) => {
    return(dispatch)=>{
        axios.delete(`/employees/${id}`,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            Swal.fire(
                'Deleted',
                'Employee successfully deleted',
                'success'
            )
            dispatch(removeEmployee(response.data))
        })
    }
}

export const editEmployee = (employee) => {
    return {type : "EDIT_EMPLOYEE" , payload : employee}
}

export const startEditEmployee=(obj)=>{
    return(dispatch)=>{
        axios.put(`/employees/${obj.id}`,obj.formData,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            console.log(response.data)
            Swal.fire(
                'Updated',
                'Employee successfully Updated',
                'success'
            )
            dispatch(startGetEmployeee())
            dispatch(editEmployee(response.data))
            obj.redirect()
        })
    }
}