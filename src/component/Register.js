import React from 'react'
import {connect} from 'react-redux'
import {startUsers} from '../action/userAction'

 
class Register extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleCheck = () => {
        this.setState((prevState)=>{
            return{
                check : !prevState.check
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.password === this.state.confirmPassword){
        const formData = {
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        const redirect = () => {
            return this.props.history.push('/users/login')
        }
        this.props.dispatch(startUsers({formData,redirect}))
    }
    else{
        alert('passwords doesnt match')
    }

        
    }

    render(){
        return(
            <div  className="container">
                <h3>User Register</h3>
                <form onSubmit={this.handleSubmit}> 
                    <label htmlFor="username">username</label><br />
                    <input type="text" value={this.state.username} name="username" onChange={this.handleChange} id="username" /><br />
                    <label htmlFor="email">email</label><br />
                    <input type="email" value={this.state.email} name="email" onChange={this.handleChange} id="email" /><br />
                    <label htmlFor="password">password</label><br />
                    <input type={this.state.check ? "text" : "password"} value={this.state.password} name="password" onChange={this.handleChange} id="password" /><br />
                    <label htmlFor="confirm password">password confirm</label><br />
                    <input type={this.state.check ? "text" : "password"} value={this.state.confirmPassword} name="confirmPassword" onChange={this.handleChange} id="confirmPassword" /><br />
                    <input type="checkbox" onChange={this.handleCheck} checked={this.state.check}/><label>see password</label><br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}


export default connect()(Register)