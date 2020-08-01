var obj = {
    id: 1,
    name: 'Marek'
};


Object.defineProperty(obj, 'id', {
    value: 10,
    writable: false,
    enumerable: false
});

console.log(obj.id);

obj.id = 15;

console.log(obj.id);

console.log("=================================");

for(const key in obj){
    if(obj.hasOwnProperty(key)){
        console.log(key);
    }
}