import React, { createContext, useState, useEffect } from 'react';

/* 
    Программаная навигация - когда пользователя перенаправляют куда-то из кода.
*/

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const listener = () => {
      const path = window.location.pathname;
      setCurrentPath(path);

    }

    window.addEventListener('popstate', listener);

    return () => {
      window.removeEventListener('popstate', listener);
    }
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  }

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>)
}
