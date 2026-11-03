import styles from './page.module.css';

export const metadata = { title: 'About' };

const facts = [
  { label: 'Project of', value: 'Boris Gladkill' },
  { label: 'Genre', value: 'Downtempo / IDM' },
  { label: 'Latest', value: 'Medusa' },
];

export default function About() {
  return (
    <section className={styles.about} aria-labelledby="about-title">
      <div>
        <h1 id="about-title" className="page-title">
          About
        </h1>
      </div>
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
        <dl className={styles.facts}>
          {facts.map((f) => (
            <div key={f.label} className={styles.fact}>
              <dt className="meta-label">{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
