import { useState, useEffect, createContext } from 'react';

export const NewsContext = createContext();

const NewsProvider = ({children}) => {
    return (
        <NewsContext.Provider value={{}}>
            {children}
        </NewsContext.Provider>
    )
}

export default NewsProvider;