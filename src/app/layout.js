import NavBar from "@/components/navbar/NavBar";
import "./../styles/globals.scss";

export const metadata = {
  title: "Latinas in tech's job board.",
  description: 'A job application for latinas to find opportunities.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
