'use client';

import { useActionState, useState } from 'react';
import { subscribe } from '@/app/actions';
import { validateForm } from '@/lib/validate';
import styles from './NewsletterForm.module.css';

export default function NewsletterForm() {
  const [state, formAction, pending] = useActionState(subscribe, { status: 'idle' });
  const [clientErrors, setClientErrors] = useState({});

  if (state.status === 'success') {
    return (
      <p className={styles.success} role="status">
        Signal received — you&rsquo;re on the list
      </p>
    );
  }

  const error = clientErrors.email ?? (state.status === 'error' ? state.errors?.email : undefined);

  const onSubmit = (event) => {
    const errors = validateForm(event.currentTarget);
    setClientErrors(errors);
    if (Object.keys(errors).length) event.preventDefault();
  };

  return (
    <form action={formAction} onSubmit={onSubmit} noValidate className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="newsletter-email" className="visually-hidden">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email address"
          defaultValue={state.values?.email}
          className="underline-input"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? 'newsletter-email-error' : undefined}
        />
        {error && (
          <p id="newsletter-email-error" className="field-error">
            {error}
          </p>
        )}
      </div>
      <div className="honeypot" aria-hidden="true">
        <label>
          Website <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button type="submit" className="pill-button" disabled={pending}>
        {pending ? 'Sending…' : 'Subscribe'}
      </button>
    </form>
  );
}
