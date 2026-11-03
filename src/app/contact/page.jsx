import ContactForm from '@/components/ContactForm';
import { contactEmails } from '@/lib/site';
import styles from './page.module.css';

export const metadata = { title: 'Contact' };

const emails = [
  { label: 'Booking', address: contactEmails.booking },
  { label: 'Press & management', address: contactEmails.press },
];

export default function Contact() {
  return (
    <section className={styles.contact} aria-labelledby="contact-title">
      <div className={styles.left}>
        <h1 id="contact-title" className="page-title">
          Contact
        </h1>
        <dl className={styles.emails}>
          {emails.map((e) => (
            <div key={e.label} className={styles.email}>
              <dt className="meta-label">{e.label}</dt>
              <dd>
                <a href={`mailto:${e.address}`}>{e.address}</a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div>
        <ContactForm />
      </div>
    </section>
  );
}
