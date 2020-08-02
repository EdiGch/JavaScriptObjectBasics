var user = {
    id: 1,
    role: 'author'
};
Object.defineProperty(user, 'id', {
    writable:false
});


var newUser = Object.assign({}, user);

console.log(newUser);

user.id = 20;
newUser.id = 145;
console.log(user);
console.log(newUser);

console.log(Object.getOwnPropertyDescriptor(newUser, 'id'));