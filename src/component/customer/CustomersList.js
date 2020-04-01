import React from 'react'
import {connect} from 'react-redux'
import {startGetCustomers,startRemoveCustomer} from '../../action/customerAction'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'


function CustomerList(props){
    if(props.customer.length == 0) {
        props.dispatch(startGetCustomers())
        console.log(props.customer)
    }
    const handleRemove = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result)=>{
              if(result.value){
                props.dispatch(startRemoveCustomer(id))
              }
          })
    }
    return(
        <div className="container">
            <h3>Customers - {props.customer.length}</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.customer.map(cust=>{
                            return(<tr key={cust._id}>
                                        <td>{cust._id}</td>
                                        <td>{cust.name}</td>
                                        <td>{cust.email}</td>
                                        <td>{cust.mobile}</td>
                                        <td><button className="btn btn-info"><Link style={{color:"white"}} to={`/customer/${cust._id}`}>show</Link></button></td>
                                        <td><button className="btn btn-danger" onClick={()=>{handleRemove(cust._id)}}>Remove</button></td>
                            </tr>)
                        })
                    }
                </tbody>

            </table>
            <h4><Link to="/customer/new">add customer</Link></h4>
        </div>
    )
}

const mapStateToProps = (state,props) => {

    return {
        customer : state.customers
    }
}

export default connect(mapStateToProps)(CustomerList)

