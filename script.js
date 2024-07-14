
let textcontainer = document.querySelector(".text-container");
let createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");



createbtn.addEventListener("click", () =>{
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true")
    img.src = "images/bin.png"
    textcontainer.appendChild(inputbox).appendChild(img);
    savedata();

})

textcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        savedata();
    }
})

function savedata(){
    localStorage.setItem("notes", textcontainer.innerHTML);
}
function showdata(){
    textcontainer.innerHTML = localStorage.getItem("notes");

}
showdata();
