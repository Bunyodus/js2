var ism = prompt("Ismingizni kiriting:");
var yosh = +prompt("Yoshingizni kiriting:");
var a = +prompt("9 + 2 =");
var b = +prompt("9 - 24 =");
var c = +prompt("9 * 12 =");
var d = +prompt("7 / 2 =");
var o1 = +prompt("Son kiriting:");
var o2 = +prompt("Son kiriting:");
var o3 = +prompt("Son kiriting:");
console.log(`Sizning ismingiz : ${ism}`);
if (yosh >= 0 && yosh <= 18) {
    console.log(`Sizning yoshingiz : ${yosh} (Yoshsiz. O'qishingiz kerak.)`);
} else if (yosh > 18 && yosh <= 50) {
    console.log(`Sizning yoshingiz : ${yosh} (Ishlashingiz kerak.)`);
} else if (yosh > 50 && yosh <= 59) {
    console.log(`Sizning yoshingiz : ${yosh} (Yaqinda pensiyaga chiqasiz.)`);
} else if (yosh >= 60 && yosh <= 150) {
    console.log(`Sizning yoshingiz : ${yosh} (Pensionerga o'xshaysiz, agar tirik bo'lsangiz :))`);
} else {
    console.log("Ustoz hila qimen son yozin 😂");
}

if (a === 11) {
    console.log(`Sizning javobingiz to'g'ri: ${a}`);
} else {
    console.log(`Sizning javobingiz noto'g'ri: 9 + 2 = ${a}. To'g'ri javob: 11`);
}

if (b === -15) {
    console.log(`Sizning javobingiz to'g'ri: ${b}`);
} else {
    console.log(`Sizning javobingiz noto'g'ri: 9 - 24 = ${b}. To'g'ri javob: -15`);
}

if (c === 108) {
    console.log(`Sizning javobingiz to'g'ri: ${c}`);
} else {
    console.log(`Sizning javobingiz noto'g'ri: 9 * 12 =  ${c}. To'g'ri javob: 108`);
}

if (d === 3.5) {
    console.log(`Sizning javobingiz to'g'ri: ${d}`);
} else {
    console.log(`Sizning javobingiz noto'g'ri: 7 / 2 = ${d}. To'g'ri javob: 3.5`);
}


if ((o1 >= o2 && o1 <= o3) || (o1 <= o2 && o1 >= o3)) {
    console.log(`O'rta son: ${o1}`);
} else if ((o2 >= o1 && o2 <= o3) || (o2 <= o1 && o2 >= o3)) {
    console.log(`O'rta son: ${o2}`);
} else if ((o3 >= o1 && o3 <= o2) || (o3 <= o1 && o3 >= o2)) {
    console.log(`O'rta son: ${o3}`);
} else {
    console.log("Ustoz hila qimen yozin 😂");
}
alert("Kiritgan malumotlaringizni consoleda korishingiz mumkun")