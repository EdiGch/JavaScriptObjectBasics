var obj ={
  a: 2,
  b: 'Ok',
  c: true
};

//reading
console.log(obj);
console.log(obj.b);


//record
obj.b = 'false';
console.log(obj);

var keyObj = {
  a: 2,
  b: 'Ok',
  c: true,
  1: 'One',
  '1-1': 'One One'
}

console.log(keyObj["c"]);
console.log(keyObj['1-1']);
