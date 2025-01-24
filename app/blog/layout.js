
export const metadata = {
    title: "Proglobby | Login",
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