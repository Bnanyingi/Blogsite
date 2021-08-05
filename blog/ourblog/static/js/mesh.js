let menuOpen = false

const harmburger = document.getElementsByClassName("harmburger")[0]
const phoneMenu = document.getElementsByClassName("phone-menu")[0]

harmburger.addEventListener('click', ()=>{
    if(!menuOpen){
        menuOpen = true
        harmburger.classList.add('open')
        phoneMenu.classList.add('open')
    } else {
        menuOpen = false
        harmburger.classList.remove('open')
        phoneMenu.classList.remove('open')
    }
})