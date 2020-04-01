import axios from '../config/axios'
import Swal from 'sweetalert2'

export const setDepartment = (department) => {
    return {type:'SET_DEPARTMENT',payload:department}
}

export const startDepartmentGetData = () =>{
    return(dispatch)=>{
        axios.get('/departments',{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            dispatch(setDepartment(response.data))
        })
    }
}

export const addDepartment = (department) => {
    return {type:'ADD_DEPARTMENT',payload:department}
}

export const startAddDepartment = (obj) => {
    return(dispatch)=>{
        axios.post('/departments',obj.formData,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            Swal.fire(
                'Added',
                'Department successfully added',
                'success'
            )
            dispatch(addDepartment(response.data))
        })
    }
}

export const removeDepartment = (department) => {
    return {type:'REMOVE_DEPARTMENT',payload:department}
}

export const startRemoveDepartment = (id) => {
    return(dispatch)=>{
        axios.delete(`/departments/${id}`,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            Swal.fire(
                'Deleted',
                'Department successfully deleted',
                'success'
            )
            dispatch(removeDepartment(response.data))
        })
    }
}

export const updateDepartment = (department) => {
    return {type:'UPDATE_DEPARTMENT',payload:department}
}

export const startEditDepartment = (obj) => {
    return(dispatch)=>{
        axios.put(`/departments/${obj.id}`,obj.formData,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            Swal.fire(
                'Updated',
                'Department successfully Updated',
                'success'
            )
            dispatch(updateDepartment(response.data))
            obj.redirect()
        })
    }
}


