let elModal = document.querySelector(".header__modal")
let elManuBtn = document.querySelector(".header__menu-btn")
let elCloseBtn = document.querySelector(".close__bg")


elManuBtn.addEventListener("click", function(){
    elModal.classList.add("show")
    document.body.style = "overflow:hidden"
})

elCloseBtn.addEventListener("click", function(){
    elModal.classList.remove("show")
    document.body.style = "overflow:auto"
})