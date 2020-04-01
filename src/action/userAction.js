import axios from "../config/axios";
import {connect} from 'react-redux'

export const startUsers = (obj) =>{
    return()=>{
        axios.post(`/users/register`,obj.formData)
        .then((respone)=>{
            const user = respone.data
            if(user._id){
                alert('sucessfully registered')
                obj.redirect()
            }
            else{
                alert(respone.data.message)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const setUser = (user) => {
    return {type:'SET_USER',payload:user}
}
export const startLoggedIn = (t_data) => {
    return(dispatch)=>{
        axios.get('/users/account',{
            headers : {
                'x-auth' : t_data
            }
        })
        .then((response)=>{
            dispatch(setUser(response.data))
        })
        
    }
}
        
export const startLogin = (obj) => {
    return(dispatch)=>{
        axios.post('/users/login',obj.formData)
        .then((respone)=>{
            const user_auth = respone.data
            if(user_auth.token){
                localStorage.setItem('token',user_auth.token)
                axios.get('/users/account',{
                    headers : {
                        "x-auth" : localStorage.getItem('token')
                    }
                })
                .then((response)=>{
                    if(response.data._id){
                        dispatch(setUser(response.data))
                        alert('sucessfully logged-in')
                        return obj.redirect()

                    }
                })
            }
            else{
                alert(user_auth.error)
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startLogoutUser = (redirect) => {
    return(dispatch)=>{
        axios.delete('/users/logout', {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            alert('successfully logout')
            localStorage.removeItem('token')
            window.location.href="/users/login"
        })
    }
}
