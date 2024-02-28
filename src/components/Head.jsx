import Head from "next/head";
import { useRouter } from "next/router";

export default function Title({ title, description }) {
    const router = useRouter()
    const domain = "https://yukthi.org"

    return <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href={`${domain}/favicon.ico`} type="image/png" />

        <meta name="title" content={title} />
        <meta name="description" content={description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${domain}${router.pathname}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${domain}/twitter.png`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${domain}${router.pathname}`} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={`${domain}/twitter.png`} />
    </Head>
}