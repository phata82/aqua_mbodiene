import styles from './WeatherWidget.module.css';

export default function WeatherWidget() {
  return (
    <div className={`${styles.widget} glass-panel`}>
      <div className={styles.icon}>☀️</div>
      <div className={styles.info}>
        <div className={styles.location}>Mbodiène</div>
        <div className={styles.temp}>32°C</div>
      </div>
      <div className={styles.water}>
        <span>🌊</span> Eau: 28°C
      </div>
    </div>
  );
}
