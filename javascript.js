// declaration des variables et reciuperation des elements html
let troisbarre=document.querySelector(".bar");
let list_nav=document.querySelector("nav");
// creer levenement entre léelement et la barre de navigation


troisbarre.addEventListener("click",function(){
 list_nav.classList.toggle("bleu")
});