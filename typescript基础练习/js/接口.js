"use strict";
function greeting1(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user1 = {
    firstName: 'Xiaofeng',
    lastName: 'Huang'
};
console.log(greeting1(user1));
