import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Set the theme to daisyUI's lofi theme
    <ThemeProvider defaultTheme="lofi">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
