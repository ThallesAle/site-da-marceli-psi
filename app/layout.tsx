import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Marceli Reis | Psicologia online para adultos',
  description: 'Conheça o atendimento psicológico online para adultos com Marceli Reis. Um espaço de escuta e acolhimento para a sua história.',
  icons: { icon: '/favicon.svg' },
  ...(process.env.SITE_URL ? { metadataBase: new URL(process.env.SITE_URL) } : {}),
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}



