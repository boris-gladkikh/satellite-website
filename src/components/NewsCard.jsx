import Link from 'next/link';
import MediaTile from './MediaTile';
import styles from './NewsCard.module.css';

export default function NewsCard({ post }) {
  return (
    <article className={styles.card}>
      <MediaTile src={post.heroImage} ratio="3 / 2" sizes="(max-width: 640px) 100vw, 400px" />
      <time className="meta-label" dateTime={post.date}>
        {post.dateLabel}
      </time>
      <h3 className={styles.title}>
        <Link href={`/news/${post.slug}`} className={styles.link}>
          {post.title}
        </Link>
      </h3>
      <p className={styles.excerpt}>{post.excerpt}</p>
    </article>
  );
}
