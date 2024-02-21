console.log("***** SELECTORS *****")

document.title = "FS16"


//*===========================================
//*            GETELEMENTBYID()
//*===========================================

// ?id'si add-new-item olan elenemti seçer.
console.log(document.getElementById("add-new-item"));
const headertext = document.getElementById("add-new-item")
console.log( headertext );
// !seçilen elementin style propertisini manupüle ettik.
// ?HER ŞEY key -value  şeklinde yazılır.
document.getElementById("add-new-item").style.color="blue"
document.getElementById("add-new-item").style.backgroundColor = "yellow";
headertext.style.border = "2px solid red"
headertext.style = "font-family: tahoma; font-size: 30px " //?css vari erişim.bunu çok görmeyiz ama 
// !NOT propertiylerde kebapcase değil camelCase kullanılır.

// ?id'si btn olan elementi seçer.
const addId = document.getElementById("btn")
console.log(addId);

// ?içerikleri okuma ve yer değiştirme 
const htmlLi = document.getElementById("html-li")
htmlLi.style.color ="red"

// html li elementinin contentini okuyp değiştirebilirz.bir text elemnetinin içeriği aşağıdaki atribütlerle değiştirebilir.
// !texcontent ,innertext,innerHTML
console.log(htmlLi.textContent);
htmlLi.textContent = "HTML5" 
document.getElementById("js-li").innerText = "JS"
document.getElementById("js-li").innerText = "<h2>JS</h2>"
document.getElementById("react-li").innerHTML = "REACT-JS"
document.getElementById("react-li").innerHTML = "<h2 style='color:blue'>REACT-JS </h2>" //bu riskli bir durum bunu html olarak algılar ve html dosyası gibi kulalnılabilir. ama bu güvenli dğil.









//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* ========================================
//*              QUERYSELECTOR()
//* ========================================

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================