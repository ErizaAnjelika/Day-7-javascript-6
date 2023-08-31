/**spread operator
 * menggabungkan 2 array atau 2 object atau lebih menjadi satu.
 */

const number = [1,2,3];
const newNumber = [4,5,6];

// console.log([...number, ...newNumber]);

// for (let i = 0; i < newNumber.length; i++) {
//     number.push(newNumber[i]);
// }
// console.log(number);

// let name = 'lala';
// let age = 20;

// console.log(`${name} ${age}`);

const word1 = ["a","b"];
const word2 = ["z", ...word1, "r", "t"];
console.log(word2);//[ 'z', 'a', 'b', 'r', 't' ]

const obj1 = {foo :"bar", x:42}
const obj2 = {foo :"baz", y:13}
const merge = (...object)  => ({...object});

const mergeObj1 = merge(obj1, obj2)
console.log(mergeObj1);//{ '0': { foo: 'bar', x: 42 }, '1': { foo: 'baz', y: 13 } }
const mergeObj2 = merge({}, obj1, obj2);
console.log(mergeObj2); //{ '0': {}, '1': { foo: 'bar', x: 42 }, '2': { foo: 'baz', y: 13 } }


// const obj = {key1 : "value1"};
// const array = [...obj];
// console.log(obj);//TypeError: obj is not iterable


const array = [1,2,3];
const obj = {...array};
console.log(obj);//{ '0': 1, '1': 2, '2': 3 }


const objek1 = {foo : "bar", x:42}
const objek2 = {foo : "baz", y:13}

const cloneObjek ={...objek1};
console.log(cloneObjek);//{ foo: 'bar', x: 42 }
const mergeObjek = {...objek1, ...objek2};
console.log(mergeObjek);//{ foo: 'baz', x: 42, y: 13 }



