import Image from 'next/image';
import styles from './Accommodation.module.css';

export default function Accommodation() {
  return (
    <section id="hebergement" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.imageCol}>
          <div className={styles.imageGrid}>
            <div className={styles.mainImage}>
              <Image 
                src="/accommodation_hotel_v3.png" 
                alt="L'Hôtel Aqua Resort" 
                fill 
                style={{ objectFit: 'cover' }} 
                className={styles.image}
              />
            </div>
          </div>
        </div>
        <div className={styles.contentCol}>
          <span className={styles.badge}>Séjournez sur place</span>
          <h2 className={styles.title}>L'Hôtel <span className="gradient-text">Aqua Resort</span></h2>
          <p className={styles.text}>
            Prolongez l'expérience en séjournant dans notre charmant hôtel. Offrant des chambres confortables et une ambiance paisible à deux pas du parc aquatique et de la forêt de cocotiers, c'est l'endroit idéal pour se reposer en toute sérénité.
          </p>
          <ul className={styles.features}>
            <li>✨ Chambres confortables avec vue sur la nature</li>
            <li>🚀 Accès facile et direct aux attractions du parc</li>
            <li>🏊‍♂️ Piscine calme et espaces de détente familiaux</li>
            <li>🍽️ Restauration conviviale aux saveurs locales et internationales</li>
          </ul>
          <button className={styles.btn}>Réserver votre suite</button>
        </div>
      </div>
    </section>
  );
}
