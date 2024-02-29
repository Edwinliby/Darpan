import Head from "next/head";

export async function getServerSideProps(context) {
    const title = 'Yukthi';
    const description = 'Solve. Create. Thrive';
    const domain = "https://yukthi.org";
    const url = `${domain}${context.req.url}`;
  
    return {
      props: {
        meta: {
          title,
          description,
          url,
          image: `${domain}/twitter.png`,
        },
      },
    };
  }
  
  export default function Title({ meta }) {
    return (
      <Head>
        <title>{meta.title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />
  
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
  
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={meta.url} />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={meta.image} />
      </Head>
    );
  }
  