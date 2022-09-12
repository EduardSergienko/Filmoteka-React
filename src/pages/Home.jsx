import { fetchTrandingFilms } from 'services/MovieApi';
import { useEffect, useState } from 'react';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { MovieList } from 'components/MovieList/MovieList';
import Contaimer from 'components/Container/Container';
import { HomeTitle } from 'components/HomeTitle/HomeTitle';
import { getMovieGenres } from 'services/MovieApi';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home() {
  const [moviesData, setMoviesData] = useState([]);
  const [genres, setGenres] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function showTrandingFilms() {
      try {
        const { data } = await fetchTrandingFilms(page);
        const { data: result } = await getMovieGenres();
        setMoviesData(prewState => [...prewState, ...data.results]);
        console.log(data);
        setGenres(result.genres);
      } catch (error) {}
    }

    showTrandingFilms();
  }, [page]);
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
  function handleShowMore() {
    setPage(page + 1);
  }

  return (
    <Contaimer>
      <HomeTitle />
      <MovieList>
        <InfiniteScroll
          dataLength={moviesData.length}
          next={handleShowMore}
          hasMore={true}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            margin: '-15px',
          }}
        >
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
        </InfiniteScroll>
      </MovieList>
    </Contaimer>
  );
}
