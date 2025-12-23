import "./globals.css";
import Navbar from "./components/Navbar";
import { Manrope, JetBrains_Mono, Share_Tech_Mono } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})


const shareTech = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-share-tech',
  display: 'swap',
})

export const metadata = {
  title: "Syed Afrid",
  description: "This is the portfolio website of Syed Afrid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${shareTech.variable} ${jetbrains.variable} antialiased`}
      >
        <div className="bg-black opacity-55 -z-10 fixed">
          <video src="bg.mp4" autoPlay loop muted className="h-screen w-screen object-cover"></video>
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
