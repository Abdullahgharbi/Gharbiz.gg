import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Added Toaster

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'زهرة براندينج | تصميم شعار وموقع احترافي',
  description: 'نصمم لك هوية بصرية وموقع ويب يعكس جمال علامتك التجارية في عالم التجميل. احجزي الآن عرض تصميم الشعار والموقع في 10 أيام فقط!',
  keywords: ['تصميم شعار', 'تصميم موقع', 'هوية بصرية', 'علامة تجارية', 'مستحضرات تجميل', 'عطور', 'عناية بالبشرة', 'تسويق رقمي', 'سيدات أعمال', 'الشرق الأوسط', 'براندنج', 'زهرة براندينج'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
