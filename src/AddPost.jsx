import React, { useContext, useState } from 'react';
import { PublicacionContext } from './PublicacionContext';

const AddPost = () => {
  const { addPublicacion } = useContext(PublicacionContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPublicacion({ title, body, id: Date.now() });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Publicación</h2>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

    <input
        type="text"
        placeholder="id"
        value={id}
        onChange={(e) => set(e.target.value)}
      />
      <textarea
        placeholder="Cuerpo"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddPost;