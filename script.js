//console.dir(document)
//console.log(document.doomain);

console.log(document.title)
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
