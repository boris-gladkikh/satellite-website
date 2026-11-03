import Image from 'next/image';
import NewsCard from '@/components/NewsCard';
import NewsletterForm from '@/components/NewsletterForm';
import SpotlightPlayer from '@/components/SpotlightPlayer';
import { getAllNews } from '@/lib/news';
import { spotlight } from '@/lib/releases';
import styles from './page.module.css';

export default function Home() {
  const news = getAllNews().slice(0, 3);

  return (
    <>
      <section className={styles.spotlight} aria-labelledby="spotlight-title">
        <Image
          src={spotlight.cover}
          alt={`${spotlight.title} cover art`}
          width={600}
          height={600}
          priority
          sizes="(max-width: 640px) 200px, 300px"
          className={styles.cover}
        />
        <div className={styles.spotlightText}>
          <span className="eyebrow">New single · Out now</span>
          <h1 id="spotlight-title" className={styles.display}>
            {spotlight.title}
          </h1>
          <p className={styles.intro}>Downtempo transmissions and IDM explorations from deep orbit.</p>
          <SpotlightPlayer title={spotlight.title} src={spotlight.audio} duration={spotlight.duration} />
          <ul className={styles.streams}>
            {spotlight.streams.map((s) => (
              <li key={s.label}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-link">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.news} aria-labelledby="news-title">
        <h2 id="news-title" className="page-title">
          News
        </h2>
        <div className={styles.newsGrid}>
          {news.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className={styles.newsletter} aria-labelledby="newsletter-title">
        <h2 id="newsletter-title" className="page-title">
          Transmissions
        </h2>
        <p className={styles.newsletterCopy}>New releases, live dates and studio notes, sent rarely. No noise.</p>
        <NewsletterForm />
      </section>
    </>
  );
}
