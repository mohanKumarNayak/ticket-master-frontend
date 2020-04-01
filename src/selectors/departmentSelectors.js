export const departmentFind=(department,id)=>{
   return department.find(depart=>depart._id==id)
}