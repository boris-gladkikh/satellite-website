import { Archivo, Jost } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Starfield from '@/components/Starfield';
import './globals.css';

const jost = Jost({ subsets: ['latin'], weight: ['200', '300', '400'], variable: '--font-jost' });
const archivo = Archivo({ subsets: ['latin'], weight: ['300', '400'], variable: '--font-archivo' });

export const metadata = {
  title: {
    default: 'Satellite Respond',
    template: '%s — Satellite Respond',
  },
  description: 'Downtempo transmissions and IDM explorations from deep orbit.',
  icons: { apple: '/logo192.png' },
};

export const viewport = {
  themeColor: '#000000',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jost.variable} ${archivo.variable}`}>
      <body>
        <Starfield />
        <div className="shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
