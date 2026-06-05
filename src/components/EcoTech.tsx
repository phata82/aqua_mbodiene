import Image from 'next/image';
import styles from './EcoTech.module.css';

export default function EcoTech() {
  return (
    <section id="innovation" className={`container ${styles.section}`}>
      <div className={styles.grid}>
        <div className={styles.imageCol}>
          <div className={`${styles.imageWrapper} glass-panel`}>
            <Image 
              src="/eco_tech_nature_v4.png" 
              alt="Innovation et Nature" 
              fill 
              style={{ objectFit: 'cover' }} 
              className={styles.image}
            />
            <div className={styles.techOverlay}></div>
          </div>
        </div>
        
        <div className={styles.contentCol}>
          <h2 className={styles.title}>
            L'Alliance de <span className="gradient-text">l'Innovation & Nature</span>
          </h2>
          <p className={styles.text}>
            À Aqua Mbodiène, l'expérience se fond dans la nature. Notre parc de 24 hectares est conçu autour d'une forêt exceptionnelle de milliers de cocotiers, préservant l'écosystème local.
          </p>
          
          <div className={styles.features}>
            <div className={`${styles.featureCard} glass-panel`}>
              <div className={styles.icon}>🌴</div>
              <div>
                <h3>Intégration Paysagère</h3>
                <p>Architecture biomimétique et ombrage naturel grâce à la préservation de la flore sénégalaise.</p>
              </div>
            </div>
            
            <div className={`${styles.featureCard} glass-panel`}>
              <div className={styles.icon}>⌚</div>
              <div>
                <h3>Bracelet Connecté "Aqua-Pass"</h3>
                <p>Gérez vos files d'attente, vos paiements, et l'accès à votre casier d'un simple geste. Une fluidité absolue sans contact.</p>
              </div>
            </div>
            
            <div className={`${styles.featureCard} glass-panel`}>
              <div className={styles.icon}>💧</div>
              <div>
                <h3>Filtration Éco-Responsable</h3>
                <p>Système de recyclage des eaux de dernière génération permettant d'économiser 80% d'eau par rapport aux parcs traditionnels.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
