const intialState = []

const employeeReducer = (state=intialState,action) => {
    switch(action.type){
        case 'GET_EMPLOYEE' : {
            return [...action.payload]
        }
        case 'REMOVE_EMPLOYEE' : {
            return state.filter(emp=>emp._id !== action.payload._id)
        }
        case 'EDIT_EMPLOYEE' : {
            return state.map(emp=>{
                if(emp._id == action.payload._id){
                    return action.payload
                }
                else{
                    return emp
                }
            })
        }
        default : {
            return [...state]
        }
    }
}

export default employeeReducer