
import './globals.css';

export const metadata = {
  title: 'NutriCute | Mug cakes naturels en 60 secondes',
  description: 'NutriCute prépare des mug cakes gourmands, simples et rapides : 60 g de préparation, 60 ml d’eau, 60 secondes au micro-ondes.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
