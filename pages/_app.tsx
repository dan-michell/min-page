import React, { useRef, useState, useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="flex flex-col items-center">
        <Header />
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
