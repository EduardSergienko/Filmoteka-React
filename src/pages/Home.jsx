import { fetchTrandingFilms } from 'services/MovieApi';
import { useEffect, useState } from 'react';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { MovieList } from 'components/MovieList/MovieList';
import Contaimer from 'components/Container/Container';
import { HomeTitle } from 'components/HomeTitle/HomeTitle';

export default function Home() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    async function showTrandingFilms() {
      try {
        const { data } = await fetchTrandingFilms();

        setMoviesData(data.results);
      } catch (error) {}
    }
    showTrandingFilms();
  }, []);
  function cutFilmTitle(title) {
    if (title.length > 30) {
      return title.slice(0, 30) + '...';
    } else {
      return title;
    }
  }
  return (
    <Contaimer>
      <HomeTitle />
      <MovieList>
        {moviesData.map(({ id, title, poster_path, release_date }) => {
          return (
            <MovieItem
              key={id}
              filmTitle={cutFilmTitle(title)}
              movieId={id}
              moviePoster={poster_path}
              movieDate={release_date.slice(0, 4)}
            />
          );
        })}
      </MovieList>
    </Contaimer>
  );
}
