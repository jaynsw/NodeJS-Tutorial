var person = require('./person');

person.sayHello();
person.setName('Jay');
var name = person.getName();
console.log('name is %s', name);