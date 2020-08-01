var keyObj = {
    a: 2,
    b: 'Ok',
    c: true,
    1: 'One',
    '1-1': 'One One'
}

for(const key in keyObj){
    if(keyObj.hasOwnProperty(key)){
        console.log(keyObj[key]);
    }
}
console.log("=============================")
for(const key in keyObj){
    if(keyObj.hasOwnProperty(key)){
        console.log(key);
    }
}
console.log("=============================")
console.log(Object.keys(keyObj));
console.log(Object.getOwnPropertyNames(keyObj));

