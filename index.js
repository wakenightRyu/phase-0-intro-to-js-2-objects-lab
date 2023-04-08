let employee = {
    name: "benny",
    streetAddress: "Civic Center Drive"
}

function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const newEm = {...employee}
    delete newEm[key]
    return newEm
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key]
    return employee
}