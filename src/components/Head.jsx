import Head from "next/head";
import { useRouter } from "next/router";

export default function Title({ title, description }) {
    const router = useRouter()
    return <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/png" />

        <meta name="title" content={title} />
        <meta name="description" content={description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://yukthi.org${router.pathname}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/favicon.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="/twitter.png" />
        <meta property="twitter:url" content={`https://yukthi.org${router.pathname}`} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/favicon.png" />
    </Head>
}