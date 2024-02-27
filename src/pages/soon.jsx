import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

function Soon() {
    return (
        <div className="signup relative">
            <Head>
                <title>Yukthi '24 Teams</title>
            </Head>
            <Header />
            <main className="h-screen w-screen">
                <div className="h-screen w-screen font-clash flex gap-4 flex-col items-center justify-center">
                    <Image
                        src="/soon.jpg"
                        alt="Coming Soon"
                        width={500}
                        height={500}
                        className="p-6"
                    />
                    <h1 className="text-[1.5rem] md:text-4xl font-semibold text-white">
                        Teams will be updated soon
                    </h1>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Soon;
