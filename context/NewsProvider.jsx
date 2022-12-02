import { useState, useEffect, createContext } from 'react';

export const NewsContext = createContext();

const NewsProvider = ({children}) => {

    const [category, setCategory] = useState('general');

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    return (
        <NewsContext.Provider value={{
            category,
            handleCategoryChange
        }}>
            {children}
        </NewsContext.Provider>
    )
}

export default NewsProvider;