// // let secilenYol = prompt("lütfen yolu sec:")
// // if(secilenYol==1){
// //     console.log("secilen yol"+secilenYol+".yoldur");
// // }
// // else if(secilenYol==2){
// //     console.log("secilen yol"+secilenYol+".yoldur");
// // }
// // else if(secilenYol==3){
// //     console.log("secilen yol"+secilenYol+".yoldur");
// // }
// // else{
// //     alert("lütfen adam gibi bir sayi gir")
// // }

// //DO WHILE
// // let sayac = 1;
// // do {
// //     console.log(sayac);
// //     sayac++;
// // } while (sayaç<=10);

// // let yas = +prompt("Lütfen yas gir")
// // do {
// //     console.log("Ehliyeti alabilirsiniz");

// // } while (yas>=25);
// // 1 den 20 ye kadar olan tek sayilarin toplamini bulalim
// let sayac = 1;
// let toplam= 0;
// do {
//     if ( sayac%2==1){
//         toplam+=sayac;
//     }
//     sayac++;
// } while (sayac<=20);
// console.log("Toplam:",toplam);
// const sayi = Number(prompt);
// console.log(sayi==100 ? "doğru":"yanlis");
const renk = prompt("Renk seçin:");
if(renk=="mavi"){
    console.log(`Seçilen renk : ${renk}`);
}else if (renk=="yeşil"){
    console.log(`Seçilen renk:${renk}`);
}else{
    console.log("Herhangi bir renk seçilemedi");
}