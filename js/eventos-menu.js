//abre e fecha do menu lateral mobile
let menu = document.getElementById("menu");
let fecha = document.getElementById("fechar")
let links = document.getElementsByClassName("links-menu")

function abrir(){
    menu.style.display = "flex"
    menu.style.width = "80%";
 }   

function fechar(){
   menu.style.display = "none";
}   