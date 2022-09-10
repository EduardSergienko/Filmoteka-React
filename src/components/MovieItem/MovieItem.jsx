import { Link, useLocation } from 'react-router-dom';
import styles from './MovieItem.module.scss';
import PropTypes from 'prop-types';
export const MovieItem = ({
  filmTitle,
  movieId,
  moviePoster,
  movieDate,
  genres,
}) => {
  const location = useLocation();
  let src = `https://image.tmdb.org/t/p/original/${moviePoster}`;

  return (
    <Link
      className={styles.itemLink}
      to={`/movies/${movieId}`}
      state={{ from: location }}
    >
      <li className={styles.item}>
        <img className={styles.poster} src={src} alt="" />
        <p className={styles.title}>{filmTitle}</p>
        <p className={styles.release}>
          {movieDate} | {genres}
        </p>
      </li>
    </Link>
  );
};
MovieItem.propTypes = {
  // filmTitle: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
};
