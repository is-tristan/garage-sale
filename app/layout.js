import { Geist } from "next/font/google";
import "@/styles/main.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nakhvamdis Georgia | Second Hand Items at a Great Price!",
  description: "Online garage sale. Great deals!",
};

export default function RootLayout({ children }) {

  return (

    <html lang="en">

      <body className={`${geistSans.variable}`}>

        {children}

      </body>

    </html>

  );

}
