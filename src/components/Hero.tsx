import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgImage}>
        <Image 
          src="/hero_waterpark_v2.png" 
          alt="Vue aérienne du parc aquatique" 
          fill 
          style={{ objectFit: 'cover' }}
          priority 
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={`container ${styles.content}`}>
        <span className={styles.badge}>Sénégal • Mbodiène</span>
        <h1 className={styles.title}>
          Le Plus Grand Parc Aquatique <br/>
          <span className="gradient-text">d'Afrique</span>
        </h1>
        <p className={styles.subtitle}>
          24 hectares d'attractions innovantes, de sensations fortes et d'espaces de détente premium, nichés au cœur d'une forêt de milliers de cocotiers.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Découvrir l'Expérience</button>
          <button className={styles.secondaryBtn}>Voir la Vidéo</button>
        </div>
      </div>
    </section>
  );
}
