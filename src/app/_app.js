import Head from "next/head";

export const metadata = {
  title: "Latinas in tech's job board.",
  description: 'A job application for latinas to find opportunities.',
}

function MyApp({ Component, pageProps }) {
return (
<>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  <Component {...pageProps} />
</>
);
}
export default MyApp;