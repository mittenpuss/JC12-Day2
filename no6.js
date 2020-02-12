

var a=new Date()
console.log("Hari ini tanggal: "+a.getDate()+" - "+a.getMonth()+1+" - "+a.getFullYear())
console.log("Besok tanggal: "+parseInt(a.getDate()+1)+" - "+a.getMonth()+1+" - "+a.getFullYear())
console.log("Kemarin tanggal: "+parseInt(a.getDate()-1)+" - "+a.getMonth()+1+" - "+a.getFullYear())
