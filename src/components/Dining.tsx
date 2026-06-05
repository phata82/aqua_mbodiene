import Image from 'next/image';
import styles from './Dining.module.css';

export default function Dining() {
  return (
    <section id="restauration" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.contentCol}>
          <span className={styles.badge}>Gastronomie</span>
          <h2 className={styles.title}>Restauration & <span className="gradient-text">Détente</span></h2>
          <p className={styles.text}>
            Après l'adrénaline, place aux saveurs. Découvrez nos espaces de restauration variés, allant de la gastronomie locale aux snacks sur le pouce, le tout dans un cadre exceptionnel.
          </p>
          <ul className={styles.features}>
            <li>🍹 <strong>Swim-up Bar</strong> : Dégustez votre cocktail sans sortir de l'eau.</li>
            <li>🍽️ <strong>Le Baobab Panoramique</strong> : Notre restaurant signature avec vue sur la lagune.</li>
            <li>🍕 <strong>Food-Trucks Tropicaux</strong> : Snacks et spécialités locales à emporter.</li>
          </ul>
          <button className={styles.btn}>Découvrir les menus</button>
        </div>
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/dining_restaurant_v2.png" 
              alt="Restaurant et Swim-up Bar" 
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
