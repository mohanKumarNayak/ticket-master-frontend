const intialState = []

const departmentReducer = (state=intialState,action) => {
    switch(action.type){
        case 'SET_DEPARTMENT' : {
            return [...action.payload]
        }
        case 'ADD_DEPARTMENT' : {
            return [...state,action.payload]
        }
        case 'REMOVE_DEPARTMENT' : {
            return state.filter(department=>department._id!==action.payload._id)
        }
        case 'UPDATE_DEPARTMENT' : {
            return state.map(department=>{
                if(department._id == action.payload._id){
                    return action.payload
                }
                else{
                    return department
                }
            })
        }
        default : {
            return [...state]
        }
    }
}

export default departmentReducer