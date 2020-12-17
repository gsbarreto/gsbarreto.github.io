import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />
    </ThemeProvider>
  );
}
