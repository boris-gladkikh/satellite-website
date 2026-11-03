import { vi } from 'vitest';
import { sendContact, subscribe } from '@/app/actions';

vi.spyOn(console, 'info').mockImplementation(() => {});

const form = (fields) => {
  const fd = new FormData();
  for (const [k, v] of Object.entries(fields)) fd.set(k, v);
  return fd;
};

test('subscribe rejects invalid email and accepts a valid one', async () => {
  expect((await subscribe(null, form({ email: 'nope' }))).status).toBe('error');
  expect((await subscribe(null, form({ email: 'a@b.co' }))).status).toBe('success');
});

test('contact form reports each missing field and keeps values', async () => {
  const result = await sendContact(null, form({ topic: 'press', name: 'Ada', email: '', message: '' }));
  expect(result.status).toBe('error');
  expect(Object.keys(result.errors).sort()).toEqual(['email', 'message']);
  expect(result.values.name).toBe('Ada');
});

test('contact form routes Other to the press inbox', async () => {
  await sendContact(null, form({ topic: 'other', name: 'Ada', email: 'a@b.co', message: 'Hi' }));
  expect(console.info).toHaveBeenLastCalledWith('[contact]', expect.objectContaining({ to: 'press@satelliterespond.com' }));
});

test('honeypot submissions are silently dropped', async () => {
  console.info.mockClear();
  const result = await sendContact(null, form({ website: 'spam', name: 'x', email: 'x', message: 'x' }));
  expect(result.status).toBe('success');
  expect(console.info).not.toHaveBeenCalled();
});
