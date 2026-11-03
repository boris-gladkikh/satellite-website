import Image from 'next/image';
import styles from './page.module.css';

export const metadata = { title: 'About' };

export default function About() {
  return (
    <section className={styles.about} aria-labelledby="about-title">
      <h1 id="about-title" className="page-title">
        About
      </h1>
      <div className={styles.row}>
        <Image
          src="/img/boris-canon-one.jpg"
          alt="Boris Gladkill"
          width={1500}
          height={1000}
          sizes="(max-width: 800px) 100vw, 560px"
          priority
          className={styles.photo}
        />
        <div className={styles.body}>
          <p>
            Satellite Respond is the downtempo and IDM project of Boris Gladkill. The music drifts between
            slow-motion soundscapes and intricate, glitching rhythm work, built from processed field recordings,
            analog synthesis and patient, unresolved melodies.
          </p>
          <p>
            Each release is framed as a transmission: a fragment picked up from somewhere far away, cold at the
            edges and warm at the core. The project takes its cues from science fiction, orbital mechanics and the
            long silences between stations.
          </p>
          {/* TODO: remove once the final bio is in. */}
          <p className={styles.note}>[Placeholder bio — replace with final copy.]</p>
        </div>
      </div>
    </section>
  );
}
