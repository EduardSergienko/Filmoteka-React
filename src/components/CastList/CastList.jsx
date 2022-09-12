import styles from './CastList.module.scss';

export function CastList({ children }) {
  return (
    <div className={styles.castsWrap}>
      <ul className={styles.castsList}>{children}</ul>
    </div>
  );
}
