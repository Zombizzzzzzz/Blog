"use client"

import { createContext, useState,useEffect } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if (typeof window !== "undefined") {
        const value = localStorage.getItem("theme");
        if (value === "dark" || value === "light") {
            return value;
        }
        
        const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
        return prefersLight ? "dark" : "light";
    }
    return null; 
}

export const ContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => getFromLocalStorage());
  

    const toggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

     useEffect(() => {
        const preferred = getFromLocalStorage();
        setTheme(preferred || "light");
    }, []);
  
    useEffect(() => {
        localStorage.setItem("theme", theme);
        
    }, [theme]);
    
   if(!theme) return null; 

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>

    );
}