export const employeeFind=(employee,id)=>{
    return employee.find(depart=>depart._id==id)
 }