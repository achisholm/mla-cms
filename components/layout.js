import Head from "next/head";
import Navbar from "../components/navbar.js";


export default function Layout({
  children,
  title = "This is the default title",
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="stylesheet" href="https://use.typekit.net/efe0zmx.css"/>
      </Head>

      <Navbar />

      {children}
      
      <footer className="page-footer">
        <div className="site-width-wrapper">
            footer
        </div>
      </footer>

    </div>
  );
}

