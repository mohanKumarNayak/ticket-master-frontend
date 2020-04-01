import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../action/userAction'



 
class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email:this.state.email,
            password:this.state.password
        }
        const redirect = () => {
            return this.props.history.push('/dashboard')
        }
        this.props.dispatch(startLogin({formData,redirect}))

        
    }

    render(){
        return(
            <div  className="container">
                <h3>User Login </h3>
                <form onSubmit={this.handleSubmit}> 
                    <label htmlFor="email">email</label><br />
                    <input type="email" value={this.state.email} name="email" onChange={this.handleChange} id="email" /><br />
                    <label htmlFor="password">password</label><br />
                    <input type="password" value={this.state.password} name="password" onChange={this.handleChange} id="password" /><br />
                    <input type="submit" value="login" />
                </form>
            </div>
        )
    }
}


export default connect()(Login)