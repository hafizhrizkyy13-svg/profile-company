//VARIABEL VAR
var namaVar = "Hafizh";
var umurVar = 16;

console. log ("nama Awal " + namaVar);
console. log ("umur Awal " + umurVar);

namaVar = "Udin";
umurVar = 111;

console. log ("nama Akhir " + namaVar);
console. log ("umur Akhir " + umurVar);

console.log("...............................");

//VARIABEL LET

let namaLet = "Hafizh";
let umurLet = 16;

console. log ("nama Let " + namaLet);
console. log ("umur Let " + umurLet);

namaLet = "Udin";
umurLet = 111;

console. log ("nama let " + namaLet);
console. log ("umur let " + umurLet);

console.log("...............................")

//VARIABEL CONST

//const namaConst = "Hafizh";
//const umurConst = 16;

//console. log ("nama Const " + namaConst);
//console. log ("umur Const " + umurConst);

namaConst = "Udin";
umurConst = 21;

console. log ("nama Const " + namaConst);
console. log ("umur Const " + umurConst);

console.log("...............................")

//PERCABANGAN
var usiaIca = 17;
if (usiaIca > 20) {
    console.log("anda sudah dewasa");
} else {
    console.log("anda belum dewasa");
}

console.log("...............................")
//PERCABANGAN MENGGUNAKAN VARIABEL 
var usiaIca = 19;
if (usiaIca > 21) {
    console.log("anda sudah dewasa" + usiaIca + "tahun");
} else {
    console.log("anda belum dewasa" + usiaIca + "tahun");
}

console.log("...............................")

//VARIABEL MENGGUNAKAN VARIABEL LET (BLOCK SCOPE)
if (1 > 21) {
    let numerik = true;
    console.log(numerik);
} else {
    let numerik = false;
    console.log(numerik);
}

console.log("...............................")

//VARIABEL MENGGUNAKAN VARIABEL CONST (BLOCK SCOPE)
if (1 > 21) {
    let numerik = true;
    console.log(numerik);
} else {
    let numerik = false;
    console.log(numerik);
}

console.log("...............................")

//TIPE DATA
var angka =10;
var huruf = "A";
var boolean = true;
var array = [1,2,3];
var object = {
    a:1,
     b:2,
      c:3
};
var arrayObject = [
    {
        a:1,
        b:2,
        c:3
    },
    {
        a:4,
        b:5,
        c:6
    }
]
var nullVar = null;
var underfineVar;


console.log(angka);
console.log(huruf);
console.log(boolean);
console.log(array);
console.log(object);
console.log(arrayObject);
console.log(nullVar);
console.log(underfineVar);


console.log("...............................")

//OPERATOR LOGIKA
// && == AND OR != ! !

//&&
var angka1 = 10;
var angka2 = 20;
if (angka1 > 5 && angka > 15) {
    console.log("benar");
} else {
    console.log("salah");
}

//!!
var nilaiAwal = 10;
var nilaiAkhir = 20;
if (nilaiAwal > 5 || nilaiAkhir > 20) {
    console.log("benar");
} else {
    let numerik = false;
    console.log("salah");
}

console.log("...............................")

//FUNCTION
function peoplename(parameter) {
    return parameter
}

console.log (peoplename("Lila"));
let nickname = peoplename("Lisa");
console.log (nickname);

//IF IN FUNCTION
function getDataSiswa(namaSiswa, nilaiSiswa) {
    if (nilaiSiswa > 90) {
        console.log("NamaSiswa " + namaSiswa + "memiliki nilai diatas KKM")
    } else if (nilaiSiswa >= 80) {
        console.log("NamaSiswa " + namaSiswa + "memiliki nilai KKM")
    } else {
        console.log("NamaSiswa " + namaSiswa + "memiliki nilai KKM")
    }
        
}
getDataSiswa("cici", 90);
getDataSiswa("lala", 80);
getDataSiswa("lulu", 70);

//PERCABANGAN SWICH CASE
let nilaiRapot = 90;
switch (nilaiRapot) {
    case 90:
        console.log("Nilai Rapot A");
        break;
    case 80:
        console.log("Nilai Rapot B");
        break;
    case 70:
        console.log("Nilai Rapot C");
        break;
    default:
        console.log("Nilai Rapot D");
    
}

//PERULANGAN FOR
for (let i = 0; i < 5; i++) {
    console.log("Perulangan ke " + i);
    // 12345
}

let arrayPerulangan = ["A", "B", "C", "D", "E"];
for (let i = 0; i < arrayPerulangan.length; i++) {
    console.log("Perulangan ke " + arrayPerulangan[i]);
}

console.log("-----------------------");

let arrayObjectFor = [
    {
        namaLet: "Budi",
        umur: 20,
    },
    {
        namaLet: "Ica",
        umur: 21,
    },
    {
        namaLet: "Lala",
        umur: 22,
    },
];

//PERULANGAN WHILE
let j = 0;
while (j < 5) {
    console.log("Perulangan ke " + j);
    j++;
}

console.log("-----------------------");

//PERULANGAN DO WHILE
let k = 0;
do {
    console.log("Perulangan ke " + k);
    k++;
} while (k < 5);

console.log("-----------------------");

//STUDI KASUS
let dataSiswa = [
    {
        namaLet: "nisa",
        nilai: 90,
    },
    {
        namaLet: "defi",
        nilai: 80,
    },
    {
        namaLet: "mila",
        nilai: 70,
    },
    
]
//Berdasarkan data diatas tampilkan setiap siswa yang memiliki nilai di bawah KKM 85

for (let i = 0; i < dataSiswa.length; i++){
    if (dataSiswa[i].nilai < 85 ) {
        console.log(dataSiswa[i].namaLet + "memiliki nilai di bawah KKM")
    }
}
