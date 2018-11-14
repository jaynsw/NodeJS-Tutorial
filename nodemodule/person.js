var _name = null;

function sayHello() {
    console.log('hello...');
}

function setName(name) {
    _name = name;
}

function getName() {
    return _name;
}

module.exports = {
    sayHello,
    setName,
    getName,
};