import type { Metadata } from "next";
import "./globals.css";
import redHatText from 'next/font/local'

const redHat = redHatText({
  src: [
    {
      path: '../../assets/fonts/static/RedHatText.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../assets/fonts/static/RedHatTextRegular.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../../assets/fonts/static/RedHatTextSemiBold.ttf',
      style: 'bold',
      weight: '600',
    },
    {
      path: '../../assets/fonts/static/RedHatTextBold.ttf',
      style: 'bold',
      weight: '700',
    },
    {
      path: '../../assets/fonts/static/RedHatTextItalic.ttf',
      style: 'italic',
      weight: '400',
    }
  ]
})

export const metadata: Metadata = {
  title: "Product With Cart",
  description: "Frontend Mentor Layout Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={redHat.className}>
      <body>{children}</body>
    </html>
  );
}
