import './style.css'
import  {navPrincipal}  from './componets/navegador-principal/nav-princ-comp.js'
import {initNews} from './componets/noticias/noticias-comp.js';










//---------------Implementar-----------------------------
const head = document.querySelector("#header")
head.innerHTML = navPrincipal






initNews()