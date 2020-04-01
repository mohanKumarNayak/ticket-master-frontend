const intialState = []

const customerReducer = (state=intialState,action) => {
    switch(action.type){
        case 'SET_CUSTOMER' : {
            return [...action.payload]
        }
        case 'UPDATE_CUSTOMER' : {
            return state.map(customer=>{
                if(customer._id == action.payload._id){
                    return action.payload
                }
                else{
                    return customer
                }
            })
        }
        case 'REMOVE_CUSTOMER' : {
            return state.filter(customer=>customer._id!=action.payload)
        }
        default : {
            return [...state]
        }
    }
}

export default customerReducer