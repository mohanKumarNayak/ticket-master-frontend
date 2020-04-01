import React from 'react'

class CustomerForm extends React.Component {
    constructor(props){
        super(props)
        if(props.customer){
        console.log('edit show',this.props.customer)
        }
        this.state = {
            name:this.props.customer ? this.props.customer.name : '',
            email:this.props.customer ? this.props.customer.email :'',
            mobile:this.props.customer ? this.props.customer.mobile :''
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
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile

        }
        this.props.handleAddData(formData)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" onChange={this.handleChange} value={this.state.name} name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" onChange={this.handleChange} value={this.state.email} name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input type="number" className="form-control" id="mobile" onChange={this.handleChange} value={this.state.mobile} name="mobile" />
                    </div>
                    <input type="submit" value="submit" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}

export default CustomerForm