// let soru = {
//     soruMetni : "hangisi js paket yonetim uygulamasi",
//     cevapSecenekler: {
//         a: "node",
//         b: "type",
//         c: "npm"
//     },
//     dogruCevap : "c",
//     cevabiKontrolEt :function(cevap){
//         return  cevap == this.dogruCevap;
//     } 
// }
// console.log(soru.soruMetni);
// console.log(soru.cevabiKontrolEt("c"));

function Soru(soruMetni, cevapSecenekler, dogruCevap){
//yukaridakiler parametredir
this.soruMetni  = soruMetni;
this.cevapSecenekler = cevapSecenekler;
this.dogruCevap = dogruCevap;

}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap == this.dogruCevap;
}

let soru1 = new Soru("hangisi js paket yonetim uygulamasi",{a: "node",b: "type",c: "npm"},"c");

let sorular = [
    new Soru("1-hangisi js paket yonetim uygulamasi",{a: "node",b: "type",c: "npm"},"c"),
    new Soru("2-hangisi java paket yonetim uygulamasi",{a: "node",b: "type",c: "npm"},"b"),
    new Soru("3-hangisi .net paket yonetim uygulamasi",{a: "node",b: "type",c: "npm"},"c"),
    new Soru("4-hangisi c++ paket yonetim uygulamasi",{a: "node",b: "type",c: "npm"},"c")
];

console.log(soru1.soruMetni);
console.log(sorular[1].soruMetni);
console.log(soru1.cevabiKontrolEt("c"));
console.log(sorular[1].cevabiKontrolEt("b"));