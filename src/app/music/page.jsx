import MediaTile from '@/components/MediaTile';
import { bandcampEmbedUrl, releases } from '@/lib/releases';
import { BANDCAMP_URL } from '@/lib/site';
import styles from './page.module.css';

export const metadata = { title: 'Music' };

export default function Music() {
  return (
    <section className={styles.music} aria-labelledby="music-title">
      <div className={styles.header}>
        <h1 id="music-title" className="page-title">
          Music
        </h1>
        <a href={BANDCAMP_URL} target="_blank" rel="noopener noreferrer" className="underline-link">
          Full discography on Bandcamp
        </a>
      </div>

      <div className={styles.list}>
        {releases.map((release, i) => (
          <article key={release.slug} className={styles.release}>
            <MediaTile
              src={release.cover}
              alt={`${release.title} cover art`}
              label="Cover art"
              sizes="(max-width: 640px) 100vw, 360px"
              priority={i === 0}
              className={styles.cover}
            />
            <div className={styles.info}>
              <span className="meta-label">
                {release.type} · {release.year}
              </span>
              <h2 className={styles.title}>{release.title}</h2>
              <div className={styles.panel}>
                {release.bandcampTrackId || release.bandcampAlbumId ? (
                  <iframe
                    title={`${release.title} on Bandcamp`}
                    src={bandcampEmbedUrl(release)}
                    className={styles.embed}
                    loading="lazy"
                    seamless
                  />
                ) : (
                  <span className={styles.embedPlaceholder}>Player coming soon</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
