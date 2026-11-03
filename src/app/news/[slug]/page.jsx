import Link from 'next/link';
import { notFound } from 'next/navigation';
import MediaTile from '@/components/MediaTile';
import { getAllNews, getNewsPost } from '@/lib/news';
import styles from './page.module.css';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllNews().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getNewsPost(slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function NewsPost({ params }) {
  const { slug } = await params;
  const post = getNewsPost(slug);
  if (!post) notFound();

  return (
    <article className={styles.article}>
      <Link href="/" className={styles.back}>
        ← All news
      </Link>

      <header className={styles.header}>
        <time className="eyebrow" dateTime={post.date}>
          {post.dateLabel}
        </time>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.standfirst}>{post.excerpt}</p>
      </header>

      <MediaTile src={post.heroImage} ratio="16 / 9" sizes="(max-width: 880px) 100vw, 880px" priority />

      <div className={styles.body} dangerouslySetInnerHTML={{ __html: post.html }} />

      {(post.previous || post.next) && (
        <nav className={styles.pager} aria-label="More news">
          {post.previous && (
            <Link href={`/news/${post.previous.slug}`} className={styles.pagerLink}>
              <span className="meta-label">← Previous</span>
              <span className={styles.pagerTitle}>{post.previous.title}</span>
            </Link>
          )}
          {post.next && (
            <Link href={`/news/${post.next.slug}`} className={`${styles.pagerLink} ${styles.pagerNext}`}>
              <span className="meta-label">Next →</span>
              <span className={styles.pagerTitle}>{post.next.title}</span>
            </Link>
          )}
        </nav>
      )}
    </article>
  );
}
