/** rest-operator
 * menggabungkan semua parameter pada function ke adalam satu array.
 */

function penjumlahan(x,y){
    return x+y;
}
console.log(penjumlahan(5,3,2));


function penjumlahan(...param) {
    let result = 0;
    for (let i = 0; i < param.length; i++) {
        result = result + param[i];
    }
    return result;
}
console.log(penjumlahan(5,3,2,4));

