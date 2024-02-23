import React from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../api/axios';
import { useState, useEffect } from 'react';
import { imageBasePath } from '../../components/constant';

const DetailPage = () => {
  
  const {movieId} = useParams();
const [movie, setMovie] = useState(null);  

  useEffect(() => {
    async function fetchData(){
      const response = await axios.get(
        `/movie/${movieId}`
      );
      setMovie(response.data);
    }
    fetchData();
  }, [movieId])
  
  if(!movie) return null;

  return (
    <section>
      <img
      src={`${imageBasePath}${movie.backdrop_path}`}
      alt = "detail"
      ></img>

    </section>
  )
}

export default DetailPage