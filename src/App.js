import './App.css';
import { useEffect, useState } from 'react';
import FilmList from './components/FilmList';

function App() {

  const API_KEY = "015fd93f4d188c0da451f74cea61f7cd";
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const [movieInfo, setMovieInfo] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
    )
    .then((response) => response.json())
    .then((data) => {
      setMovieInfo(data.results)
      console.log(data)
    });
  }, []);

  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-12">
          <div className="search-box text-center">
          <input
            className="search" 
            type="text" 
            placeholder="search movie.."
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          </div>
        </div>
      </div>

      <div className="row"> 
          { 
            movieInfo.filter(
              (item) => item.title.toLowerCase().includes(value)
              )
              .map((item, index)=>(
                <FilmList key={index} name={item.title} overview={item.overview}
                          vote={item.vote_average} date={item.release_date} poster={IMG_API + item.backdrop_path}
                />
            ))
          }
      </div>

    </div>
  );
}

export default App;
