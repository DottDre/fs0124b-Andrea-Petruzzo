function CambiaColore() { 
    const header = document.querySelector(".header")
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) { 
        header.style.backgroundColor = "white"
    } else { 
        header.style.backgroundColor = " #FFC017"
    } 
}
window.addEventListener('scroll', CambiaColore);



