/**rekursi function
 * - konsep dimana suatu fungsi dapat memanggil dirinya sendiri untuk
 *   menyelesaikan tugas tertentu
 * - Dalam JavaScript, rekursi dapat digunakan untuk menyelesaikan masalah yang dapat dipecahkan dalam bentuk yang lebih kecil atau serupa. 
 * - Namun, penggunaan rekursi harus dilakukan dengan hati-hati agar tidak mengakibatkan stack overflow atau performa yang buruk.
 */

/**
 * Kelebihan Rekursi:
- Solusi Elegan: Beberapa masalah lebih mudah dipahami dan dipecahkan menggunakan pendekatan rekursif.
- Mengatasi Perulangan Bersarang: Rekursi dapat menggantikan perulangan bersarang yang sulit dielakkan.
- Mengatasi Masalah yang Terpecahkan secara Alami: Beberapa masalah alami lebih baik dipecahkan dengan rekursi, seperti struktur data seperti pohon dan graf.

Kekurangan Rekursi:
- Kinerja: Rekursi bisa memakan banyak memori dan waktu jika tidak dikelola dengan baik. Setiap panggilan rekursif menambahkan frame baru ke dalam stack pemanggilan, dan terlalu banyak frame bisa menyebabkan stack overflow.
- Kesulitan Debugging: Jika tidak diimplementasikan dengan benar, rekursi bisa sulit untuk dianalisis dan didebug.
- Kompleksitas Kode: Terkadang, solusi rekursif bisa lebih kompleks dibandingkan solusi iteratif.
 */

// [INSTRUCTION] 
/*Membuat sebuah function dengan 2 parameter dengan tipe data number.
Parameter pertama akan dikalikan sebanyak parameter kedua

hitung(2, 2); // 4
hitung(2, 3); // 8
hitung(2, 4); // 16
*/

//fungsi perulangan

function hitung(x,n) {
    let result = 1;
    for (let i = 0; i < n ; i++) {
        result *= x;
    }
    return result;
}

console.log(hitung(2, 2));//4

// fungsi rekursi

function hitung1(a, b) {
    if (b === 1) {
        return a;
    }else{
        return a * hitung (a,b-1);
    }
}

console.log(hitung1(2, 2));//4


function berhitung(y,z){
    if (z == 1) {
        return y;
    }else{
        return y * berhitung (y,z-1)
    }
}
// y * berhitung (y,z-1)
//-------- y = 3
// x * berhitung()
//-------- y = 2
//x * berhitung()
//-------- y = 1

console.log(hitung(3,4));//81(3x3x3)

function hitung2(c,d){
    let result=1;
    for (let i = 0; i < d; i++) { 
        result = result * c;
    }
    return result;
}
console.log(hitung2(5,3));

//buat variabel tampung result 
//loop i sebanyak d, index i = d
//-----tampung variabel = tampung * param1
// i++
//

