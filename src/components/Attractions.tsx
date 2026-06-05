import Image from 'next/image';
import styles from './Attractions.module.css';

export default function Attractions() {
  return (
    <section id="attractions" className={`container ${styles.section}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>Attractions & Sensations</h2>
      </div>

      <div className={styles.grid}>
        <div className={`${styles.card} glass-panel`}>
          <div className={styles.imageWrapper}>
            <Image src="/thrill_slide.png" alt="Toboggan sensation forte" fill style={{ objectFit: 'cover' }} />
            <div className={styles.tag}>Sensation Extrême</div>
          </div>
          <div className={styles.cardContent}>
            <h3>La Tour du Baobab</h3>
            <p>Une chute vertigineuse à plus de 80km/h depuis notre réplique d'un baobab géant. Adrénaline garantie pour les plus téméraires.</p>
          </div>
        </div>

        <div className={`${styles.card} glass-panel`}>
          <div className={styles.imageWrapper}>
            <Image src="/wave_pool_family.png" alt="Piscine à vagues en famille" fill style={{ objectFit: 'cover' }} />
            <div className={styles.tag}>En Famille</div>
          </div>
          <div className={styles.cardContent}>
            <h3>Lagune aux Vagues</h3>
            <p>Une des plus grandes piscines à vagues d'Afrique, entourée d'une plage de sable fin et de dizaines de palmiers.</p>
          </div>
        </div>

        <div className={`${styles.card} glass-panel`}>
          <div className={styles.imageWrapper}>
            <Image src="/kids_water_village.png" alt="Jeux aquatiques pour enfants" fill style={{ objectFit: 'cover' }} />
            <div className={styles.tag}>Enfants</div>
          </div>
          <div className={styles.cardContent}>
            <h3>Aqua-Village Junior</h3>
            <p>Des mini-toboggans et des jeux d'eau interactifs sécurisés, parfaits pour l'éveil et l'amusement des plus petits.</p>
          </div>
        </div>

        <div className={`${styles.card} glass-panel`}>
          <div className={styles.imageWrapper}>
            <Image src="/activity_surf.png" alt="Simulateur de surf" fill style={{ objectFit: 'cover' }} />
            <div className={styles.tag}>Sensation & Sport</div>
          </div>
          <div className={styles.cardContent}>
            <h3>Simulateur de Surf</h3>
            <p>Défiez la vague parfaite. Que vous soyez débutant ou pro, surfez dans des conditions idéales sous le soleil sénégalais.</p>
          </div>
        </div>

        <div className={`${styles.card} glass-panel`}>
          <div className={styles.imageWrapper}>
            <Image src="/activity_zipline.png" alt="Tyrolienne au-dessus du parc" fill style={{ objectFit: 'cover' }} />
            <div className={styles.tag}>Aérien</div>
          </div>
          <div className={styles.cardContent}>
            <h3>La Tyrolienne des Cimes</h3>
            <p>Volez au-dessus des toboggans et de la canopée de cocotiers. Une vue panoramique incroyable sur le parc à plus de 50km/h.</p>
          </div>
        </div>

        <div className={`${styles.card} glass-panel`}>
          <div className={styles.imageWrapper}>
            <Image src="/activity_snorkeling.png" alt="Plongée dans le lagon" fill style={{ objectFit: 'cover' }} />
            <div className={styles.tag}>Découverte</div>
          </div>
          <div className={styles.cardContent}>
            <h3>Le Lagon Corallien</h3>
            <p>Plongez avec masque et tuba dans notre bassin immersif. Nagez au milieu de poissons tropicaux colorés dans une eau parfaitement cristalline.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
