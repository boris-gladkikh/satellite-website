import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

// News posts live in /content/news/*.md with frontmatter:
//   title, date (YYYY-MM-DD), excerpt, heroImage (optional)
// Swap this module for a CMS or database later; pages only use these functions.

const NEWS_DIR = path.join(process.cwd(), 'content', 'news');

function formatDate(iso) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

function readPost(file) {
  const raw = fs.readFileSync(path.join(NEWS_DIR, file), 'utf8');
  const { data, content } = matter(raw);
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date);
  return {
    slug: file.replace(/\.md$/, ''),
    title: data.title,
    date,
    dateLabel: formatDate(date),
    excerpt: data.excerpt ?? '',
    heroImage: data.heroImage ?? null,
    content,
  };
}

// Newest first.
export function getAllNews() {
  return fs
    .readdirSync(NEWS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map(readPost)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getNewsPost(slug) {
  const all = getAllNews();
  const index = all.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  const post = all[index];
  return {
    ...post,
    html: marked.parse(post.content),
    // List is newest first, so "previous" is the newer post and "next" the older one.
    previous: all[index - 1] ?? null,
    next: all[index + 1] ?? null,
  };
}
