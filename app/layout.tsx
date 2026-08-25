import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: "Glowfit Women's Fitness Studio | Premier Ladies Gym in Pathankot",
  description: "Glowfit is Pathankot's premier exclusive women's fitness gym and studio at Patel Chowk. Offering strength training, aerobics, Zumba, yoga, HIIT, and safe female-only fitness programs.",
  keywords: [
    "Women's Fitness Gym",
    "Women's Gym Pathankot",
    "Women's Fitness Studio",
    "Ladies Gym Pathankot",
    "Female Gym Patel Chowk",
    "Women's Fitness Classes",
    "Aerobics for Women Pathankot",
    "Zumba Classes Pathankot",
    "Women's Strength Training",
    "Glowfit Pathankot"
  ],
  authors: [{ name: "Glowfit Women's Fitness Studio" }],
  openGraph: {
    title: "Glowfit Women's Fitness Studio | Women's Gym in Pathankot",
    description: "4.8 ★ Rated Women-Only Gym in Pathankot offering strength training, aerobics, Zumba, and yoga in a vibrant, safe sanctuary.",
    type: 'website',
    locale: 'en_IN',
    siteName: "Glowfit Women's Fitness Studio",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Glowfit Women's Fitness Studio | Pathankot",
    description: "Empowering women to become stronger, healthier, and more confident at Patel Chowk, Pathankot.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased min-h-screen">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

