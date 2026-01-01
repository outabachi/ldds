const apropos = document.getElementById("aapropos");

apropos.addEventListener("click", function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    const page2section = document.getElementById("page2section");
    const pageapropos = document.getElementById("apropossection");
    if (page2section.classList.contains("visible")) {
        // Si l'élément a la classe 'visible', fais quelque chose
        page2section.classList.add("moving-div");
        pageapropos.classList.add("moving-div1");
        page2section.classList.remove('visible');
        pageapropos.classList.add('visible');
        pageapropos.classList.remove("moving-div2");
        page2section.classList.remove("moving-div3");
    
    } 
});

const logo = document.getElementById('logo');

logo.addEventListener('click',function(event) {
event.preventDefault();
const page2section = document.getElementById("page2section");
const pageapropos = document.getElementById("apropossection");

if (page2section.classList.contains("visible")) {
   
} else {
    pageapropos.classList.add("moving-div2");
    page2section.classList.add("moving-div3");
    pageapropos.classList.remove('visible');
    page2section.classList.add('visible');
    page2section.classList.remove("moving-div");
        pageapropos.classList.remove("moving-div1");
}
    
} )