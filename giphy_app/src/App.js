import React, {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CardGif from './CardGif';
import SearchBar from './SearchBar';

function App() {
  const URL = 'https://api.giphy.com/v1/gifs/search?api_key=HPvqqnT8mYhBwvVGOrxhW03XoLoipkVg&q='
  const[search,setSearch] = useState('gatitos');//este va a guardar el valor a buscar de los gifs
  const[gifs,setGifs] = useState([]);// este va a guardar los gifs de la api

  useEffect(()=>{
    console.log('Desde useEffect')
    //console.log(search)
    axios.get(URL+search).then((response)=>{
      setGifs(response.data.data)
    }).catch((error)=>{
      console.log(error)
    })
  },[])
    

  const findGif=(event)=>{
    event.preventDefault()//evita que se recargue la pagina al momento de hacer submit al formulario
    //llamar a la API
    axios.get(URL+search).then((response)=>{
      setGifs(response.data.data)
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className='App'>
      <h2>Giphy App</h2>
      <div className='container my-5'>
        <div className='row justify-content-center'>
          <div className='col 12 col-sm-8 col-md-8 col-lg-8'>
             <SearchBar
              gifSearch={findGif}
              evento={(event)=>setSearch(event.target.value)}
              busqueda={search}
             />
          </div>
        </div>
        <div className='row mt-5'>
          {gifs.length > 0 ? gifs.map((gif)=>{
            return (
              <CardGif title={gif.title} url={gif.images.downsized_large.url} />
            )
          }) : (
              <div className='col 12'>
                <h1>No hay resultados en tu busqueda 😢</h1>
              </div>
              )
          } 
        </div>
      </div>
    </div>
  );
}

export default App;
