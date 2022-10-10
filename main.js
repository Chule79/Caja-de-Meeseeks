import './style.css'
import  {navPrincipal}  from './componets/navegador-principal/nav-princ-comp.js'
import {getNews} from './apis/apis.js';
import { fetchData } from './componets/noticias/noticias-comp';









//---------------Implementar-----------------------------
const head = document.querySelector("#header")
head.innerHTML = navPrincipal





fetchData()
getNews()