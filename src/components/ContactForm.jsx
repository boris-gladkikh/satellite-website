'use client';

import { useActionState, useState } from 'react';
import { sendContact } from '@/app/actions';
import { contactTopics } from '@/lib/site';
import { validateForm } from '@/lib/validate';
import styles from './ContactForm.module.css';

function Field({ name, label, error, as: Tag = 'input', ...props }) {
  const id = `contact-${name}`;
  return (
    <div>
      <label htmlFor={id} className="visually-hidden">
        {label}
      </label>
      <Tag
        id={id}
        name={name}
        required
        placeholder={label}
        className="underline-input"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="field-error">
          {error}
        </p>
      )}
    </div>
  );
}

function ContactFormInner({ onReset }) {
  const [state, formAction, pending] = useActionState(sendContact, { status: 'idle' });
  const [clientErrors, setClientErrors] = useState({});

  if (state.status === 'success') {
    return (
      <div className={styles.success} role="status">
        <span className="eyebrow">Received</span>
        <h2 className={styles.successTitle}>Transmission logged.</h2>
        <p className={styles.successText}>Thanks for reaching out. Expect a reply within a few days.</p>
        <button type="button" className="underline-link" onClick={onReset}>
          Send another
        </button>
      </div>
    );
  }

  const values = state.values ?? {};
  const serverErrors = state.status === 'error' ? state.errors ?? {} : {};
  const errors = { ...serverErrors, ...clientErrors };

  const onSubmit = (event) => {
    const found = validateForm(event.currentTarget);
    setClientErrors(found);
    if (Object.keys(found).length) event.preventDefault();
  };

  return (
    <form action={formAction} onSubmit={onSubmit} noValidate className={styles.form}>
      <fieldset className={styles.topics}>
        <legend className="visually-hidden">Topic</legend>
        {contactTopics.map((t) => (
          <label key={t.value} className={styles.topic}>
            <input
              type="radio"
              name="topic"
              value={t.value}
              defaultChecked={(values.topic ?? 'booking') === t.value}
              className="visually-hidden"
            />
            <span>{t.label}</span>
          </label>
        ))}
      </fieldset>
      <Field name="name" label="Name" autoComplete="name" defaultValue={values.name} error={errors.name} />
      <Field
        name="email"
        label="Email"
        type="email"
        autoComplete="email"
        defaultValue={values.email}
        error={errors.email}
      />
      <Field name="message" label="Message" as="textarea" rows={4} defaultValue={values.message} error={errors.message} />
      <div className="honeypot" aria-hidden="true">
        <label>
          Website <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button type="submit" className={`pill-button ${styles.send}`} disabled={pending}>
        {pending ? 'Sending…' : 'Send'}
      </button>
    </form>
  );
}

// Remounting via `key` resets the action state for "Send another".
export default function ContactForm() {
  const [round, setRound] = useState(0);
  return <ContactFormInner key={round} onReset={() => setRound((r) => r + 1)} />;
}
