import Image from 'next/image';
import styles from './Premium.module.css';

export default function Premium() {
  return (
    <section id="premium" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Une Oasis de <span className="gradient-text">Détente Premium</span></h2>
          <p className={styles.text}>
            Échappez à l'adrénaline et plongez dans notre Rivière Lente cristalline qui serpente à travers la forêt tropicale de Mbodiène. 
            Découvrez nos Cabanas VIP privées offrant un service 5 étoiles, des jacuzzis exclusifs et une restauration haut de gamme.
          </p>
          <ul className={styles.list}>
            <li>🌴 Cabanas VIP avec service dédié et intimité</li>
            <li>🌊 Rivière Lente de 1.5 km sous les cocotiers</li>
            <li>🍸 Spa aquatique et lounges exclusifs</li>
          </ul>
          <button className={styles.btn}>Voir les Offres VIP</button>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imageBorder}>
            <Image 
              src="/lazy_river_premium.png" 
              alt="Rivière Lente Premium" 
              fill 
              style={{ objectFit: 'cover' }} 
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
