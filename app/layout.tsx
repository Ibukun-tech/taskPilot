import type { Metadata } from "next";
import { useContext } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import { StoreProvider as Provider } from "./Components/Context/StoreProvider";
// import ContextProvider from "./Components/Context/ContextProvider";
import SideBar from "./Components/SideBar/SideBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <div className={styles.layOut}>
            <SideBar />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
