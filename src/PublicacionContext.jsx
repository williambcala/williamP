import  { createContext, useState } from 'react';

export const PublicacionContext = createContext();

export const PublicacionProvider = ({ children }) => {
  const [publicaciones, setPublicaciones] = useState([]);

  const addPublicacion = (publicacion) => {
    setPublicaciones([...publicaciones, publicacion]);
  };

  return (
    <PublicacionContext.Provider value={{ publicaciones, addPublicacion }}>
      {children}
    </PublicacionContext.Provider>
  );
};
