import NavBar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (

    <html>
      <body>
        <header>
          <NavBar/>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  
  );
}
