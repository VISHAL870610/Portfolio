var arrow=document.getElementById("arrow_up");
function showArrowButton(){
    if(window.scrollY>100){
        arrow.style.display="block";
    }
    else{
        arrow.style.display="none";  
    }

}
function arrowup(){
    window.scrollTo({top:0,behavior:"smooth"});
}
window.addEventListener("scroll", showArrowButton);
showArrowButton();

function toggleMenu() {
    const navlinks = document.getElementById("navlinks");
    navlinks.classList.toggle("show");
}