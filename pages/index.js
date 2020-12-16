import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import Header from "../components/Header";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}
