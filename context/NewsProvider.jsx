import axios from 'axios';
import { useState, useEffect, createContext } from 'react';

export const NewsContext = createContext();

const NewsProvider = ({children}) => {

    const [category, setCategory] = useState('general');
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [totalNews, setTotalNews] = useState(0);

    useEffect(() => {
        const getNews = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

            const { data } = await axios(url);
            
            setNews(data.articles);
            setTotalNews(data.totalResults);
        }
        getNews();
    }, [category]);

    useEffect(() => {
        const getNews = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}&page=${page}`

            const { data } = await axios(url);
            
            setNews(data.articles);
            setTotalNews(data.totalResults);
        }
        getNews();
    }, [page]);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setPage(1)
    }

    const handlePageChange = (e) => {
        setPage(e.target.textContent)
    }

    return (
        <NewsContext.Provider value={{
            category,
            handleCategoryChange,
            news,
            totalNews,
            handlePageChange,
            page,
        }}>
            {children}
        </NewsContext.Provider>
    )
}

export default NewsProvider;