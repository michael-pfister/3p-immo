import { AppProps } from "https://deno.land/x/fresh@1.1.1/server.ts";
import { Head } from "$fresh/runtime.ts";
import AppBar from "../islands/AppBar.tsx";
import Footer from "../components/Footer.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>3P Immobilienentwicklung GmbH</title>
        <meta name="description" content="Ihr Ansprechpartner für qualitativ hochwertige Immobilien" />
        <link rel="icon" href="logo.svg" />
      </Head>
      <header>
        <AppBar />
      </header>
      <main>
        <Component />
      </main>
      <Footer />
    </>
  );
}
