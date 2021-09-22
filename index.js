const mobileNav = document.querySelector('.mobileNav')
let open = false
mobileNav.addEventListener('click', () =>{

})
function myFunction(x) {
    x.classList.toggle("change");
    if(!open){
        mobileNav.style.transform = ' translateX(0)'
        open = true
    }else{
    mobileNav.style.transform = ' translateX(100%)'
        open = false
    }
  }
