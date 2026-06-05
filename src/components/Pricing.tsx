import styles from './Pricing.module.css';

export default function Pricing() {
  return (
    <section id="tarifs" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Billetterie & <span className="gradient-text">Tarifs</span></h2>
          <p className={styles.subtitle}>Choisissez l'expérience qui vous correspond pour profiter du plus grand parc aquatique d'Afrique.</p>
        </div>
        
        <div className={styles.grid}>
          <div className={`${styles.card} glass-panel`}>
            <h3>Pass Découverte</h3>
            <div className={styles.price}>25.000 <span>CFA</span></div>
            <ul className={styles.features}>
              <li>Accès à toutes les attractions standards</li>
              <li>Accès aux zones de détente</li>
              <li>Casier standard inclus</li>
            </ul>
            <button className={styles.btnOutline}>Réserver</button>
          </div>

          <div className={`${styles.card} ${styles.premium} glass-panel`}>
            <div className={styles.badge}>Recommandé</div>
            <h3>Pass Premium VIP</h3>
            <div className={styles.price}>50.000 <span>CFA</span></div>
            <ul className={styles.features}>
              <li>Accès prioritaire (Coupe-file)</li>
              <li>Accès exclusif à l'Oasis Premium</li>
              <li>Cabana réservée & Serviette VIP</li>
              <li>Cocktail de bienvenue inclus</li>
            </ul>
            <button className={styles.btnPrimary}>Réserver VIP</button>
          </div>

          <div className={`${styles.card} glass-panel`}>
            <h3>Pass Famille</h3>
            <div className={styles.price}>80.000 <span>CFA</span></div>
            <p className={styles.desc}>Pour 2 adultes et 2 enfants</p>
            <ul className={styles.features}>
              <li>Accès à toutes les attractions standards</li>
              <li>Repas inclus (Menu Family)</li>
              <li>Casiers familiaux</li>
            </ul>
            <button className={styles.btnOutline}>Réserver Famille</button>
          </div>
        </div>
      </div>
    </section>
  );
}
