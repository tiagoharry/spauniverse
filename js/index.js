import { Router } from "./route.js"

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universo", "/pages/universo.html")
router.add("/exploracao", "/pages/exploracao.html")
router.add("/404", "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

const menuMobile = document.querySelector('.menuContainer')

document.querySelector('.menu').addEventListener('click', ()=> {
  document.querySelector('.menu').classList.add("hide")
  document.querySelector('.close').classList.remove("hide")
  menuMobile.style.display = 'block';
})

document.querySelector('.close').addEventListener('click', (event)=> {
  
  document.querySelector('.menu').classList.remove("hide")
  document.querySelector('.close').classList.add("hide")
  menuMobile.style.display = 'none';
    
})

menuMobile.addEventListener('click', (event)=> {
  menuMobile.style.display = 'none';
  document.querySelector('.menu').classList.remove("hide")
  document.querySelector('.close').classList.add("hide")

  if (event.target !== menuMobile) {
    menuMobile.style.display = 'none';
    } 
})
