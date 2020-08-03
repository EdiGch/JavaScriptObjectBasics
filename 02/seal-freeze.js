var obj = {
    a: 1,
    b: 2
};

Object.seal(obj);
obj.c = 'Ok';
console.log(obj);

obj.a = 'Ok';
console.log(obj);
delete obj.a;




console.log(Object.getOwnPropertyDescriptor(obj, 'a'));

Object.freeze(obj);
console.log(Object.getOwnPropertyDescriptor(obj, 'a'));
obj.a = 2;