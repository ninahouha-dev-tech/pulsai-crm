import "@/styles/globals.css";
// Styles par défaut de NProgress (nous les customiserons via CSS global si besoin)
import "nprogress/nprogress.css"; 

import { useEffect } from "react";
import { useRouter } from "next/router";
import { Ubuntu, Unbounded } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import NProgress from "nprogress";

// Configuration NProgress (pas de spinner, juste la barre)
NProgress.configure({ showSpinner: false });

// Polices
const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Gestion des événements de route pour la barre de chargement
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <main className={`${ubuntu.variable} ${unbounded.variable} font-sans antialiased`}>
      {/* 
        mode="wait" : attend que la page de sortie finisse son anim 
        avant de charger la nouvelle (transition ultra-lisse) 
      */}
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </main>
  );
}