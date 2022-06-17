interface Person{
    firstName:string
    lastName:string
}

function greeting1(person:Person){
    return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let user1 = {
    firstName: 'Xiaofeng',
    lastName: 'Huang'
}

console.log(greeting1(user1))
