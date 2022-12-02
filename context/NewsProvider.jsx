import axios from 'axios';
import { useState, useEffect, createContext } from 'react';

export const NewsContext = createContext();

const NewsProvider = ({children}) => {

    const [category, setCategory] = useState('general');
    const [news, setNews] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

            const { data } = await axios(url);
            
            setNews(data.articles);
        }
        getNews();
    }, [category]);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    return (
        <NewsContext.Provider value={{
            category,
            handleCategoryChange,
            news,
        }}>
            {children}
        </NewsContext.Provider>
    )
}

export default NewsProvider;