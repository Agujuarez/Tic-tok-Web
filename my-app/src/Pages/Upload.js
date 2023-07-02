import axios from 'axios';
import React, { useCallback } from 'react';
import { useNavigate } from "react-router-dom";

export function Upload () {

  const navigate = useNavigate();

  const activeBackend = useCallback((servidorActivo) => {
    console.log('hola');
    console.log(servidorActivo);
    navigate('/');
  
  }, [])

  const uploadClick = useCallback(() => {
    axios.get('http://localhost:3000/')
      .then(response => {
        activeBackend(response.data);
      })
      .catch(error => {
        // Manejo de errores
        console.error(error);
      })
  }, []);

    return <div>
            <p>upload</p>
            <button onClick={uploadClick}>Hacer clic</button>
          </div>
  }
