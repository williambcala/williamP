import  { useContext } from 'react';
import { PublicacionContext } from './PublicacionContext';


const PostList = () => {
  const { publicaciones } = useContext(PublicacionContext);

  return (
    <div>
      <h1>Lista de Publicaciones</h1>
      {publicaciones.map((publicacion) => (
        <div key={publicacion.id}>
          <h2>{publicacion.title}</h2>
          <p>{publicacion.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;