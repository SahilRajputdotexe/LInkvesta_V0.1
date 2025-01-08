import './globals.css';


import { ThemeProvider } from '@/components/providers/theme-provider';

export const metadata = {
  title: 'The Growth Square',
  description: 'Empowering Brands to Grow',
};

export default function RootLayout({  
  children,
}: {
  children: React.ReactNode;
}) {
  return (  
    <html lang="en" suppressHydrationWarning>
      <body className="flex  flex-col min-h-screen w-full">
        <ThemeProvider 
        attribute="class"
        defaultTheme="dark" 
        enableSystem={false}
        storageKey='theme'>
        
        <main className="flex-grow">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
