var obj = {
    a: 1,
    b: 2
};

Object.preventExtensions(obj);
obj.c = 'Ok';

console.log(obj);

obj.a = 10;
console.log(obj);

delete obj.b;
console.log(obj);



console.log(Object.isExtensible( obj ));