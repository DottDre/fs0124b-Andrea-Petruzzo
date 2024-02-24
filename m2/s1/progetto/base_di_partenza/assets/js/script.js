function CambiaColore() { 
    const header = document.querySelector('.header')
    const button = document.querySelector('.button-black')
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) { 
        header.style.backgroundColor = "white"
        button.style.backgroundColor = "green"
    } else { 
        header.style.backgroundColor = " #FFC017"
        button.style.backgroundColor = "black"
    } 
}
window.addEventListener('scroll', CambiaColore);



