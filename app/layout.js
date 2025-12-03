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
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }) {

  return (

    <html lang="en">

      <body className={`${geistSans.variable}`}>

        <main id="content" className="content">

          {children}

          <Footer />

        </main>

      </body>

      <Analytics />

      <SpeedInsights />

    </html>

  );

}
