import styles from './CastItem.module.scss';
import PropTypes from 'prop-types';
export function CastItem({ actorName, character, actorPhoto }) {
  let src = `https://image.tmdb.org/t/p/original${actorPhoto}`;
  if (actorPhoto === null) {
    src =
      'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
  }
  return (
    <li className={styles.profile}>
      <img className={styles.profileImg} src={src} alt="" />
      <div className={styles.profileInfo}>
        <p className={styles.profileTitle}>
          Actor: <span className={styles.profileText}>{actorName}</span>
        </p>
        <p className={styles.profileTitle}>
          Character: <span className={styles.profileText}>{character}</span>
        </p>
      </div>
    </li>
  );
}
CastItem.propTypes = {
  actorName: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  actorPhoto: PropTypes.string,
};
