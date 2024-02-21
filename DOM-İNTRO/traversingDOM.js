console.log("**** TRAVERSING DOM ****")

//*===========================================
//*            TRAVERSING DOM
//*===========================================
// karşıdan karşıya geçemek anlamı var aslında ingilizcesi
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------
//! parentElement, parentNode

// h2 nin parentena gitmek istiyorum
const h2 = document.getElementById("add-new-item")
console.log(h2.parentNode); //out section parent elenent ile de verebilirz.
console.log(h2.parentElement); //out section
console.log(h2.parentNode.parentNode.parentNode); //out body (parentenın parentı gibi..) 
// !parentnode ile dokumante kadar çıkarız aama parent elemnle html e kadar çıkabiliriz.

// ? element:closest googldan bak.en yakınını seçiyor.

const htmlLi = document.querySelector("ul li:nth-child(1")
console.log(htmlLi);


console.log(htmlLi.parentNode.parentNode); //section.item-list bana bulur.
console.log(htmlLi.closest("section")); //bana en yakın sectionu bul demek ve buldu o da section.item-list
console.log(htmlLi.closest("main").querySelector("section"));// htmlli elemnetinin en yakın mainine ulaş dedik bunun içerisinde de qery selectorle sectionu bul dedik

//* 2- Asagi Yonde traverse
//*----------------------------------------------
//? Children, firstElementChild, lastElementChild


const section = document.querySelector("section.add-item")
console.log(section)

console.log(section.firstElementChild) //? h2
console.log(section.firstChild) //? text yazı içern html elementlerinin yazsına erisir

console.log(section.lastElementChild)

console.log(section.children) //? tum cocuklarını HTML Collectio olarak doner
//? HTMLCollection(3) [h2#add-new-item, input#input, input#btn, add-new-item: h2#add-new-item, input: input#input, btn: input#btn]

//* 3- Yatay Yonde traverse
//*----------------------------------------------
//! nextElementSibling ,previousElementSibling
// previous bir önceki kardeş
console.log(htmlLi.nextElementSibling.innerText) // CSS
console.log(htmlLi.nextElementSibling.nextElementSibling.innerText)
console.log(
  htmlLi.nextElementSibling.nextElementSibling.previousElementSibling.innerText
)



