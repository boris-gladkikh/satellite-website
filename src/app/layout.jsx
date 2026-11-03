import Navigation from '@/components/Navigation';
import './globals.css';

export const metadata = {
  title: 'Satellite Respond',
  description: 'Satellite Respond',
  icons: { apple: '/logo192.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
