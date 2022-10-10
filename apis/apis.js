

export const getNews = async () => {
    
    try {
      const responseNews = await fetch('https://newsapi.org/v2/everything?q=serie-rick-morty&apiKey=64914d1e897643de882139d4cc51cb8f');
      const responseNewsToJson = await responseNews.json();
      return responseNewsToJson
    } catch (error) {
      console.log(error)
    }
  }




export const initVideos = () => {
    getVideos();
  }

const getVideos = async () => {
    
    try {
      const responseVideos = await fetch('https://www.googleapis.com/youtube/v3/videos');
      const responseVideosToJson = await responseVideos.json();
      console.log(responseVideosToJson);
      tranformVideos(responseVideosToJson);
    } catch (error) {
      console.log(error)
    }
  }


  initVideos()