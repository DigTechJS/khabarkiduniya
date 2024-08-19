import { useEffect, useState } from "react"
import { NewsItem } from "./NewsItem";
import image from '../assets/news.jpg'

export const NewsBoard = ({category,query}) => {
    const [articles, setArticles]=useState([]);
    useEffect(()=>{
        console.log(query);
        
        if(!query){

            let url=`https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
            console.log(url);
            
            fetch(url).then(response=>response.json()).then((data)=>{
            
                data.articles.map((d)=>{if(d.urlToImage===null)d.urlToImage=image})
                setArticles(data.articles)
            })
        }
        else{
            let url=`https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
            console.log(url);
            
            fetch(url).then(response=>response.json()).then((data)=>{
            
                data.articles.map((d)=>{if(d.urlToImage===null)d.urlToImage=image})
                setArticles(data.articles)
            })

        }
        // console.log(url);
        
   
    },[category,query])
  return (
    <div>
        <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
        {
            articles.map((news, index)=>{
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
            })
        }
    </div>
  )
}
