// Styles
import "@/styles/main.scss";

// Fonts
import { Geist } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Metadata
export const metadata = {
  title: "Nakhvamdis Georgia | Second Hand Items at a Great Price!",
  description: "Online garage sale. Great deals!",
};

// Components
import Footer from "@/components/layouts/footer";

export default function RootLayout({ children }) {

  return (

    <html lang="en">

      <body className={`${geistSans.variable}`}>

        <main id="content" className="content">

          {children}

          <Footer />

        </main>

      </body>

    </html>

  );

}
