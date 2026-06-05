import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Aqua <span className={styles.logoHighlight}>Mbodiène</span>
        </Link>
        <div className={styles.links}>
          <Link href="#attractions" className={styles.link}>Attractions</Link>
          <Link href="#premium" className={styles.link}>Premium</Link>
          <Link href="#restauration" className={styles.link}>Restauration</Link>
          <Link href="#hebergement" className={styles.link}>Hébergement</Link>
          <Link href="#tarifs" className={styles.link}>Tarifs</Link>
        </div>
        <div className={styles.actions}>
          <button className={styles.langBtn}>FR</button>
          <button className={styles.ctaBtn}>Réserver</button>
        </div>
      </div>
    </nav>
  );
}
