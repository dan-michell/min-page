import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "../components/ThemeContext";
import Background from "../components/Background";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <ThemeProvider initialTheme="dark">
        <Background>
          <Header />
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Background>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
