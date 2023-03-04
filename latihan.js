let pemainbolaterbaik =  'messi'
let tinggaldi = 'barcelona dan argentina'

let paragraf = `dia adalah ${pemainbolaterbaik}. dia tinggal di kota yang indah yaitu ${tinggaldi}`
console.log (paragraf)


//
let perkenalan = {
    'nama':'lionel messi',
    'tinggal_di':'Fc Barcelona',
    'lahir':`dia adalah pemin hebat sejak 30 tahun terakhir 
    di eranya dan sangan memikat hati para penonton`,
}
console.log(perkenalan)


//
const rl = require('readline-sync')

let angka1 = rl.question('masukan angka yang kamu mau: ')
let angka2 = rl.question('masukan angka yang kamu mau: ')

    console.log(angka1 + angka2)
    console.log(angka1 - angka2)
    console.log(angka1 * angka2)
    console.log(angka1 / angka2)
    console.log(angka1 && angka2)
    console.log(angka1 === angka2)
    console.log(angka1 ** angka2)
    console.log(angka1 != angka2)


//
const rl = require('readline-sync')

let nama= rl.question('masukan nama: ')
let password= rl.question('masukan password: ', {
    hideEchoBack: false,
})
let umur= rl.questionInt('input usia: ', {
    limitMessage: 'Input harus angka!'
})
console.log(`Hallo aku adalah ${nama}, usia ku adalah ${umur} `)

//if
const rl = require('readline-sync')

let umur = rl.question('masukan umur bebas: ')
if (umur >= 17){
    alert(`"sudah saatnya punya KTP"`)
}


//if - else if - else
const rl = require('readline-sync')

let angka = rl.question('masukan angka bebas: ') //misal 50
if (angka >= 0 && angka <= 30){
    alert("NILAI C")
}
else if (angka > 30 && angka <= 70){
    alert("NILAI B")
}
else if (angka > 70 && angka <= 100){
    alert("NILAI A")
}
else {alert("salah input angka")}


//if - else if - else // kelas 
let nilai = 200

if (nilai >= 0 && nilai <= 20){
   console.log(`Grade E Tidak Lulus`)
}
else if (nilai >= 21 && nilai <= 40){
   console.log(`Grade D Tidak Lulus`)
}
else if (nilai >= 41 && nilai <= 60){
   console.log(`Grade C Tidak Lulus`)
}
else if (nilai >= 61 && nilai <= 80){
   console.log(`Grade B Lulus`)
}
else if (nilai >= 81 && nilai <= 100){
   console.log(`Grade A Luluss`)
}
else {
   console.log(`salah input nilai`)
}
 //
 
let nilai = 45
let keterangan = ``

if (nilai >= 0 && nilai <= 20){
    keterangan = `Grade E Tidak lulus`
}
else if (nilai >= 21 && nilai <= 40){
    keterangan = `Grade D Tidak lulus`
}
else if (nilai >= 41 && nilai <= 60){
    keterangan = `Grade C Tidak lulus`
}
else if (nilai >= 61 && nilai <= 80){
    keterangan = `Grade B Anda Lulus`
}
else if (nilai >= 81 && nilai <= 100){
    keterangan = `Grade A Anda Lulus`
}
else {
    keterangan = `input salah`
}
console.log(keterangan)

//switch - case
const rl = require('readline-sync')

let angka = rl.question('masukan angka bebas: ')
switch (true) {
    case angka <= 50:
    alert("nilai = B")
    break
    
    case angka >= 50 && angka <= 100:
    alert("nilai = A")
    break
    
    default:
    alert("input nilai salah")
    break
}

//for
for (var i = 0; i <= 1000; i++){
    document.write(i +"_hallo");
}
//
var buah = ["mango", "apel", "bayam"];

for (var i = 0; i < buah.length; i++){
    document.write(buah[i] +"_hallo");
}

//while
let i = 0
while (i <= 100){
    document.write(`hallo`)
    i++
}

//array 1
let kumpulanarray = ["mangga","stoberi","apel"]
let hitungarray = kumpulanarray.length //menghitung banyaknya kolom
let textkumpulanarray = kumpulanarray.toString() //mengubah menjadi string
let textkumpulanarray2 = kumpulanarray.join("=") //mengubah menjadi string dan bisa mengubah tanda baca koma


console.log(kumpulanarray)
console.log(hitungarray)
console.log(textkumpulanarray)
console.log(textkumpulanarray2)

//array 2

let kumpulanarray = ["mangga","stoberi","apel","pisang","semangka"]

kumpulanarray.pop() //pop akan menghapus dari belakang
kumpulanarray.shift() //shift akan menghapus dari depan
kumpulanarray.push("udang", "molen") //object akan menambah dari belakang
kumpulanarray.unshift("udang") // object akan bertambah dari depan
kumpulanarray.splice(1, 2, "melon", "pepaya") // menabah dan menghapus (kolom 1 untuk tata letak memilih/menambah, kolom 2 untuk menghapus yang di hitung dari kolom satu yang telah di tentukan)
kumpulanarray.splice(3, 1) 

console.log(kumpulanarray)

//array 3
let buah1 = ["apel","mangga"]
let buah2 = ["pisang","jeruk","stoberi"]
let buah3 = ["semangka","melon"]

let hasil = buah1.concat(buah2,buah3) //menggabungkan array 1 dan 2 dengan concat
let hasil = buah1.concat(`pod dewa messi`) //bisa menambahkan objek pada array

console.log(buah1)
console.log(hasil)



//slice
let buah = ["apel","mangga","jeruk","pisang","semangka","stoberi"]
let buahbaru = buah.slice(1,4) // membuat array baru dengan mengambil array sebelumnya, kolom 1 untuk menentukan titik mulai dan kolom 2 untuk menentukan barisan terakhir array tapi di kurang 1 barisan(di hitung normal dari 1 bukan dari 0)

console.log(buah)
console.log(buahbaru)

hasil
[ 'apel', 'mangga', 'jeruk', 'pisang', 'semangka', 'stoberi' ]
[ 'mangga', 'jeruk', 'pisang' ]


//object
let mobil = {
    merk : 'leksus',
    tipe : 'sedan',
    warna : 'hitam',
    berjalan : function(){
        return 'gasin';
    }
}
console.log(mobil.merk) //hanya mengambil merek mobil
//  hasil
//  leksus
console.log(mobil.berjalan)// tidak memanggil function
//  hasil
// [Function: berjalan]
console.log(mobil.berjalan()) //dengan memanggil function
//  hasil
//  gasin
console.log(mobil.silinder = `1300cc`) //menambahkan object silinder
//hasil
//  merk: 'leksus',
//  tipe: 'sedan',
//  warna: 'hitam',
//  berjalan: [Function: berjalan],
//  silinder: '1300cc'
console.log(delete mobil.warna) //menghapus object warna
console.log(mobil)
//hasil
//  true
//  { merk: 'leksus', tipe: 'sedan', berjalan: [Function: berjalan] }


//function
