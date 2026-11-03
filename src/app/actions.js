'use server';

import { contactTopics } from '@/lib/site';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const text = (formData, key) => String(formData.get(key) ?? '').trim();

// Newsletter signup (Home → Transmissions).
export async function subscribe(prevState, formData) {
  // Honeypot: real people never fill this in. Pretend it worked.
  if (text(formData, 'website')) return { status: 'success' };

  const email = text(formData, 'email');
  if (!EMAIL_RE.test(email)) {
    return { status: 'error', errors: { email: 'Enter a valid email address.' }, values: { email } };
  }

  // TODO: send `email` to the mailing-list provider (Buttondown, Mailchimp, etc.).
  console.info('[subscribe]', email);

  return { status: 'success' };
}

// Contact form (/contact). Routes by topic.
export async function sendContact(prevState, formData) {
  if (text(formData, 'website')) return { status: 'success' };

  const values = {
    topic: text(formData, 'topic'),
    name: text(formData, 'name'),
    email: text(formData, 'email'),
    message: text(formData, 'message'),
  };

  const topic = contactTopics.find((t) => t.value === values.topic) ?? contactTopics[0];
  const errors = {};
  if (!values.name) errors.name = 'Enter your name.';
  if (!EMAIL_RE.test(values.email)) errors.email = 'Enter a valid email address.';
  if (!values.message) errors.message = 'Enter a message.';
  if (Object.keys(errors).length) return { status: 'error', errors, values };

  // TODO: deliver via an email service (Resend, Postmark, etc.) to `topic.routeTo`,
  // with reply-to set to the sender.
  console.info('[contact]', { to: topic.routeTo, ...values });

  return { status: 'success' };
}
