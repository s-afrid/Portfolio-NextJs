import "./globals.css";

export const metadata = {
  title: "Syed Afrid",
  description: "This is the portfolio website of Syed Afrid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=''
      >
        <div className="bg-black opacity-60">
          <video src="bg.mp4" autoPlay loop muted className="h-full w-full"></video>
        </div>
        
        {children}
      </body>
    </html>
  );
}
