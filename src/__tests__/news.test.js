import { getAllNews, getNewsPost } from '@/lib/news';

test('lists posts newest first', () => {
  const dates = getAllNews().map((p) => p.date);
  expect(dates).toEqual([...dates].sort().reverse());
});

test('first post has no previous; last has no next', () => {
  const all = getAllNews();
  expect(getNewsPost(all[0].slug).previous).toBeNull();
  expect(getNewsPost(all.at(-1).slug).next).toBeNull();
});

test('renders markdown and returns null for unknown slugs', () => {
  expect(getNewsPost('medusa-out-now').html).toContain('<blockquote>');
  expect(getNewsPost('does-not-exist')).toBeNull();
});
