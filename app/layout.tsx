import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });

import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
