import './style-noticias.css';
const left = document.querySelector("#leftgroup")



export const initNews = () => {
    getNews();
  }

const getNews = async () => {
    
    try {
      const responseNews = await fetch('https://newsapi.org/v2/everything?q=serie-rick-morty&apiKey=64914d1e897643de882139d4cc51cb8f');
      const responseNewsToJson = await responseNews.json();
      tranformNews(responseNewsToJson);
    } catch (error) {
      console.log(error)
    }
  }
 
  const tranformNews = (news) => {
    let elementsTransformed = news.articles.map((noticia) => {
      return {
        newsTitle: noticia.title,
        description: noticia.description,
        imagen: noticia.urlToImage,
      }
    })
    // Llammos a la función de pintado -> template 
    fillNews(elementsTransformed);
    
  }


  const fillNews = (news) => { 
    news.forEach((noticia) =>{
         // Recogemos en una variable los elementos
      const leftNews = `
            <div class="news">
                <h2>${noticia.newsTitle}</h2>
                <img src="${noticia.imagen}"></img>
                <p>${noticia.description}</p>
            </div>
      `
      // Los añadimos en el contenedor -> ul
      left.innerHTML += leftNews;
    })};
  