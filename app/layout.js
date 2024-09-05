import "./globals.css";


export const metadata = {
  title: "Carbin Christophe - Développeur Web",
  description: "Développeur web en freelance, expert en React et Symfony",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body> {children}</body>
    </html>
  );
}
