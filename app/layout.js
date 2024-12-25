import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./Components/NavBar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Proglobby",
  description: "Programming Lobby for everyone",
  
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className="h-screen w-screen flex flex-col">
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
