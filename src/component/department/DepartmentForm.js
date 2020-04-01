import React from 'react' 

class DepartmentForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name : this.props.departmentData ? this.props.departmentData.name : ''
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
            name : this.state.name
        }
        this.setState({name:''})
        this.props.handleSubmit(formData)
    }

    render(){
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                        <input type="text" className="form-control" id="name" onChange={this.handleChange} value={this.state.name} name="name" style={{width:"20%"}} />
                </div>
                <input type="submit" value="submit" className="btn btn-success" />
                </form>
            </div>
        )
    }
}

export default DepartmentForm