import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Changed from Cairo to Inter
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ // Changed font
  subsets: ['latin'], // Inter supports latin, arabic might need a different font or approach
  variable: '--font-inter', // Changed variable name
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'غربي براندينج | تصميم وتطوير رقمي', // Updated title
  description: 'نساعدك على بناء حضور رقمي قوي لعلامتك التجارية. تصميم مواقع، هويات بصرية، واستراتيجيات تسويق.', // Updated description
  keywords: ['تصميم مواقع', 'هوية بصرية', 'تسويق رقمي', 'براندنج', 'تطوير ويب', 'Gharbi Branding', 'غربي براندينج'], // Updated keywords
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
