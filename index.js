var totalHari=485
var tahun=485/360
var sisaHari=485%360
var bulan=sisaHari/30
var sisaHariBulan=sisaHari%30

var minggu=sisaHariBulan/7
var sisaHariMinggu=sisaHariBulan%7


console.log("Tahun: "+Math.floor(tahun))
console.log("Bulan: "+Math.floor(bulan))
console.log("Minggu: "+Math.floor(minggu))
console.log("Hari: "+sisaHariMinggu)

    var apple=prompt("Masukkan jumlah Apple: ")
    var grape=prompt("Masukkan jumlah Grape: ")
    var orange=prompt("Masukkan jumlah Jeruk: ")
    var hargaApple=apple*10000
    var hargaGrape=grape*15000
    var hargaOrange=orange*20000
    var totalHarga=hargaApple+hargaGrape+hargaOrange

    alert("Detail Belanja\n\nApple: "+apple+" x 10000 = "+hargaApple+"\nGrape: "+grape+" x 15000 = "+hargaGrape+"\nOrange: "+orange+" x 20000 = "+hargaOrange+"\n\nTotal: "+totalHarga)
