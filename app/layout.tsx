import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Marceli Reis | Psicologia online para adultos',
  description: 'Conheça o atendimento psicológico online para adultos com Marceli Reis. Um espaço de escuta e acolhimento para a sua história.',
  icons: { icon: '/favicon.svg' },
  // Ajustar quando os dados profissionais estiverem completos e o site for publicado.
  robots: { index: false, follow: false },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

