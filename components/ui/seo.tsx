import Head from "next/head";

export const Seo = ({ title = "SPPI" }) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
);
