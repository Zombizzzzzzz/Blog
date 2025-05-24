import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer.jsx";
import "./globals.css";
import { Inter } from "next/font/google";
import { ContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/provider/ThemeProvider";
import AuthProvider from "@/provider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <AuthProvider>
        <ContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ContextProvider>
       </AuthProvider>
      
      
      </body>
    </html>
  );
}
