// Task 9: Use array methods for iteration

const names =['lola', 'glory', 'matthew', 'grace', 'ola']

names.forEach(function(name) {
    console.log("Name:", name);
});

let uppercasedNames = names.map(function(name) {
    return name.toUpperCase();
});
console.log("Uppercased Names:", uppercasedNames);

let longNames = names.filter(function(name) {
    return name.length > 3;
});
console.log("Long Names:", longNames);
