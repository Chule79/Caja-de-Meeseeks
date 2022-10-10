import './style-noticias.css';
import {getNews} from '../../apis/apis.js';

export const fetchData = async () => {

  const data = await getNews()  
  tranformNews(data)
  
}


const left = document.querySelector("#ultimasNoticias")
 
  const tranformNews = async (data) => {
    let elementsTransformed = data.articles.map((noticia) => {
      return {
        newsTitle: noticia.title,
        description: noticia.description,
        imagen: noticia.urlToImage,
      }
      
    })
    // Llammos a la función de pintado -> template 
    fillNews(elementsTransformed);
    
  }


  const fillNews = (data) => { 
    data.forEach((noticia) =>{
         // Recogemos en una variable los elementos
         
      const ultimaNoticias = `
            <div class="news">
                <h2>${noticia.newsTitle}</h2>
                <img src="${noticia.imagen}"></img>
                <p>${noticia.description}</p>
            </div>
      `
      // Los añadimos en el contenedor -> ul
      left.innerHTML += ultimaNoticias; 
    })};
 
  