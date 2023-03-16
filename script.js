//console.dir(document)
//console.log(document.doomain);

/*console.log(document.title)
document.title="Novi sajt"


console.log(document.all)

console.dir(document.all(8))
document.all(8).textContent = "Nesto drugo"
console.log(document.getElementById("main-title"));
//get item by id
document.getElementById("main-title").textContent="Drugi naslov"
let mainTitle=document.getElementById("main-title");
mainTitle.textContent="Treci naslov"
//get element by class
console.log(document.getElementsByClassName("list-item"))
let items=document.getElementsByClassName("list-item")
console.log(items)
items[2].textContent="zamenio sam drugi element"
items[2].style.backgroundColor="red"
for (let i = 0; i< items.length; i++) {
    if(i%2 ==0){
        items[i].style.backgroundColor="grey"
    }
}
//get Elements by TagName
console.log(document.getElementsByTagName("h2"))
let naslovi=document.getElementsByTagName("h2");
naslovi[1].style.color="red"

//querySelektor
console.log(document.querySelector("#prvo p"));
let prviParagraf = document.querySelector("#prvo p");
prviParagraf.style.color = "brown"
console.log(document.querySelector("list-item"))
console.log(document.querySelectorAll("list-item"));
let lista = document.querySelector("list-item")
lista[2].style.backgroundColor = "red"

// parentNode

console.log(document.getElementById("items").parentNode)
let div=document.getElementById("items").parentNode
div.style.backgroundColor="red"

//child

console.log(document.getElementById("items").childNodes)
lsitItems[5].style.backgroundColor = "brown"

// element

console.log(document.getElementById("items").children)
let listItemsElement = document.getElementById("items").children
listItemsElement[2].style.backgroundColor="yellow"

//first last child
console.log(document.getElementById("items").firstChild);//node
console.log(document.getElementById("items").firstElementChild);//element

console.log(document.getElementById("items").lastChild);//node //text
console.log(document.getElementById("items").lastElementChild);//element

//sibling

let listaH2= document.getElementsByClassName("title")[1];
listaH2.nextElementSibling.getElementsByClassName.getElementsByClassName="pink"
listaH2.previousElementSibling.getElementsByClassName.getElementsByClassName="greem"

//kreiranje novih elemenata


let newDiv= document.createElement("div");
let textNode=document.createTextNode("neki tekst");
newDiv.appendChild(textNode);
let container = document.getElementById("container")
let form =document.getElementsByClassName("form-inline")[0]
container.insertBefore(newDiv,form)

//EVENT

button=document.getElementById("submit-button")
textFrom = document.getElementById("text-from")
let addToList=function(){
 let li =document.createEvent(1)
 let text=document.createTextNode("textForm.value")
 let.appendChild("text");
let ul=document.getElementById("items")
ul.insertBefore(li,ul.lastChild,nexSibling) 

}
button.addEventListener("click",addToList)

textFrom.value=""
let paragraf = document.querySelector("#prvo  p")
let isClicked = false;
let promeniBoju = function () {
    isClicked = !isClicked;
    if (isClicked)
        paragraf.style.backgroundColor = "yellow"
    else {
        paragraf.style.backgroundColor = "white"
    }

}

paragraf.addEventListener("click", promeniBoju)*/
let boja="#";
let paragraf = document.querySelector("#prvo  p")
let isClicked = false;
let promeniBoju = function () {
    
    let random = Math.Floor(Math.random()*1000000)
        boja +=String(ranodm)
        paragraf.style.backgrounColor=boja;
    }
