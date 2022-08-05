import styles from './Container.module.scss';

export default function Contaimer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
