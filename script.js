// DECLARING A VARIABLES 
const navItem = document.querySelector(".nav_item");
const quotation =document.querySelector(".quotation");
const openQuote = document.querySelector("#open-quote")
const button = document.querySelector(".button");
const nav = document.querySelector("nav");
const closeQuotes = document.querySelector(".close-quote");

// ADDING EVENTLITERNER TO VARIABLES DECLEARED 
button.addEventListener("click", openNav);
document.addEventListener("click", bodyCloseNav);
closeQuotes.addEventListener("click", closeQuote);
openQuote.addEventListener("click", openQuotes);
window.onscroll = viewNav;

// FUNCTION 

function openNav(){
    navItem.classList.toggle("active");
    button.classList.toggle("change");
};

function bodyCloseNav(e){
    if(!navItem.contains(e.target) && !button.contains(e.target)){
        navItem.classList.remove("active");
        button.classList.remove("change");
    };
}

function closeQuote(){
    quotation.classList.remove("open");
};

function openQuotes (){
    quotation.classList.add("open");
};

// for scrolling to the top 

function viewNav(){
    let navLinks = document.querySelectorAll("nav a");
    if(window.scrollY > 100){
        nav.classList.add("changeNav");
        for(links of navLinks){
            links.style.color = "#000"
        }
    }else{
        nav.classList.remove("changeNav");
        for(links of navLinks){
            links.style.color = ""
        }
    }
}