import Head from "next/head";

export const Seo = ({ title = "Create Next App" }) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
);
