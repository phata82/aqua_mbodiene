import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.col}>
          <h3 className={styles.logo}>
            Aqua <span className="gradient-text">Mbodiène</span>
          </h3>
          <p className={styles.desc}>
            Le plus grand et le plus innovant parc aquatique d'Afrique, niché dans une forêt de milliers de cocotiers. Une destination incontournable alliant sensations fortes, détente et nature.
          </p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.title}>Navigation</h4>
          <ul className={styles.links}>
            <li><Link href="#attractions">Attractions & Sensations</Link></li>
            <li><Link href="#premium">Expérience Premium</Link></li>
            <li><Link href="#hebergement">Hébergement</Link></li>
            <li><Link href="#innovation">Innovation & Nature</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.title}>Informations</h4>
          <ul className={styles.info}>
            <li>📍 Mbodiène, Sénégal</li>
            <li>📞 +221 00 000 00 00</li>
            <li>✉️ contact@aquambodiene.sn</li>
            <li>🕒 Ouvert tous les jours (9h00 - 18h00)</li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.title}>Newsletter</h4>
          <p className={styles.desc}>Inscrivez-vous pour recevoir nos offres exclusives et les dates d'ouverture.</p>
          <form className={styles.form}>
            <input type="email" placeholder="Votre adresse email" className={styles.input} />
            <button type="button" className={styles.btn}>S'inscrire</button>
          </form>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Aqua Mbodiène. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
