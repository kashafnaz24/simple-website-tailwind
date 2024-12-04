
import "./globals.css";
import Navbar from "./Navbar/page";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className="bg-black">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}