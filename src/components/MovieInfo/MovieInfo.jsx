import styles from './MovieInfo.module.scss';
import PropTypes from 'prop-types';

export function MovieInfo({
  movieTitle,
  movieOverview,
  movieRait,
  moviePoster,
  movieGenres,
  movieDate,
  movieTrailer,
  country,
}) {
  const movieCountry = country.map(item => item.name);
  const movScore = Math.round(movieRait * 10);
  let videoSrc = `https://www.youtube.com/embed/${movieTrailer}`;
  let src = `https://image.tmdb.org/t/p/w500${moviePoster}`;
  if (moviePoster === null) {
    src =
      'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
  }
  return (
    <div className={styles.movieInfoWrap}>
      <div className={styles.posterWrap}>
        <img className={styles.movieInfoPoster} src={src} alt="" />
      </div>
      <div className={styles.movieAbout}>
        <h2 className={styles.movieTitle}>{movieTitle}</h2>
        <p className={styles.overview}>
          Country:{'  '}
          <span className={styles.additionalOverview}>{movieCountry}</span>
        </p>
        <p className={styles.overview}>
          Year: <span className={styles.additionalOverview}>{movieDate}</span>
        </p>
        <p className={styles.overview}>
          User Score:{'  '}
          <span className={styles.additionalOverview}>{movScore}%</span>
        </p>
        <p className={styles.overview}>
          Genres:{'  '}
          <span className={styles.additionalOverview}>{movieGenres}</span>
        </p>

        <p className={styles.overview}>Overview</p>
        <p className={styles.overviewContent}>{movieOverview}</p>
      </div>
      <div>
        <iframe
          width="560"
          height="315"
          title="This is a unique title"
          src={videoSrc}
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}

MovieInfo.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieOverview: PropTypes.string.isRequired,
  movieRait: PropTypes.number.isRequired,
  moviePoster: PropTypes.string.isRequired,
  movieGenres: PropTypes.string.isRequired,
  movieDate: PropTypes.string.isRequired,
  movieTrailer: PropTypes.string.isRequired,
};
