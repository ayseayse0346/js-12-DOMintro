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

// !input'arın değerinin okunması /yazılması 
const myInput = document.getElementById("input")
console.log(myInput.value);
// !bir inputun değeri value propu ile okunur

const addBtn = document.getElementById("btn") 
addBtn.value = "SUBMİT" //değiştirdik ADD submit oldu





//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

const allLi = document.getElementsByTagName("li")
console.log(allLi); //?HTML collection 


// ?tek tek nasıl erişiriz.html collectiondaki her bir elemente inisleme ile erişilebilir.
console.log(allLi[1].textContent);


// ? toplu bir erişim için for yapılaı kullanılabilir.
for (let li of allLi ){
    console.log(li.textContent);
    allLi[2].textContent ="JS-REACTT" //bu şekilde değiştirebilirz.
} //her bir linin tex contentini içeriğini dön


// !array -like grubunda direk array metodları kullanılmaz.
// çözüm olarak array-like grubu araraya çevrilebilir.
// ?alternatif olarak 

// ?1-spread 
const arrALLli = [...allLi]
console.log(arrALLli);

arrALLli.forEach((li)=>(li.style.color = "fuchsia"))


// ? array.from()
Array.from(allLi).map((li)=>(li.style.backgroundColor="green"))


//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================
const myList = document.getElementsByClassName("list") //html collections
myList[0].innerText="HTML dersleri"
document.getElementsByClassName("item-list")[0].style.color = "hotpink"






//* ========================================
//*              QUERYSELECTOR()
//* ========================================
// !qery selector ile ıd ,tag,class seçilebilir.
// !bu seçici akıştaki gördüğü ilk elemnti alır.
// ?id almak için # 

console.log(document.querySelector("#btn"));

// ? class almak için  .
console.log(document.querySelector(".item-list"));

// ?tag almak için 
console.log(document.querySelector("li")); //ilk gördüğü elementi seçer.


// ? CSS selektörleri query selector ile kullanlıabilir.

const myH3 =document.querySelector("main section.item-list h3")
console.log(myH3);

const react = document.querySelector("ul li:nth-child(4)")

react.style.backgroundColor = "gray"



//* ========================================
//*              QUERYSELECTORALL()
//* ========================================

const liste = document.querySelectorAll(".item-list .list")
console.log(liste); //?Nodelist
//* querySelectorAll bir nodelist dondurur. Nodelist dahili olarak forEach metodunu barindirir. Ama istenirse spread veya Array.from() ile yine Array'e donusum yapilabilir.
liste.forEach((li) => console.log(li.innerText))