var obj = {
    id: 1,
    name: 'Something'
};

obj.name = 'Ok';

console.log(Object.getOwnPropertyDescriptors(obj, 'id'));
console.log(Object.getOwnPropertyDescriptors(obj, 'name'));

obj.name = 'Ok';
console.log(Object.getOwnPropertyDescriptors(obj, 'name'));

for(const key in obj){
    if(obj.hasOwnProperty(key)){
        console.log(key);
    }
}