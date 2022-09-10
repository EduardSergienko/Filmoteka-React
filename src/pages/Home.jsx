import { fetchTrandingFilms } from 'services/MovieApi';
import { useEffect, useState } from 'react';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { MovieList } from 'components/MovieList/MovieList';
import Contaimer from 'components/Container/Container';
import { HomeTitle } from 'components/HomeTitle/HomeTitle';
import { getMovieGenres } from 'services/MovieApi';
export default function Home() {
  const [moviesData, setMoviesData] = useState([]);
  const [genres, setGenres] = useState();
  useEffect(() => {
    async function showTrandingFilms() {
      try {
        const { data } = await fetchTrandingFilms();
        const { data: result } = await getMovieGenres();
        console.log(data);
        setMoviesData(data.results);
        setGenres(result.genres);
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
  function getGenresNames(genreArray, dataIds) {
    const genresNames = genreArray
      .filter(genre => dataIds.includes(genre.id))
      .map(genre => genre.name);

    if (genresNames.length > 2) {
      return genresNames.slice(0, 2).join(', ').concat([', Other']);
    }
    return genresNames.join(', ') || 'No Genre';
  }
  return (
    <Contaimer>
      <HomeTitle />
      <MovieList>
        {moviesData.map(
          ({ id, title, poster_path, release_date, genre_ids }) => {
            return (
              <MovieItem
                key={id}
                filmTitle={cutFilmTitle(title)}
                movieId={id}
                moviePoster={poster_path}
                movieDate={release_date.slice(0, 4)}
                genreArray={genres}
                genres={getGenresNames(genres, genre_ids)}
              />
            );
          }
        )}
      </MovieList>
    </Contaimer>
  );
}
