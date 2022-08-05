import PropTypes from 'prop-types';
import styles from './MovieList.module.scss';
export function MovieList({ children }) {
  return <ul className={styles.movieList}>{children}</ul>;
}

MovieList.propTypes = {
  children: PropTypes.node,
};
