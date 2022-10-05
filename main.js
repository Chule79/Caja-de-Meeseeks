import './style.css'
import  {navPrincipal}  from './componets/navegador-principal/nav-princ-comp.js'
import {headerComp} from './componets/header/header-comp.js';
import {initNews} from './componets/noticias/noticias-comp.js';








//---------------Implementar-----------------------------
const head = document.querySelector("#header")
head.innerHTML = headerComp

const navi = document.querySelector("#navi")
navi.innerHTML = navPrincipal




initNews()