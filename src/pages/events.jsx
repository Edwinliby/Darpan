import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Events() {
  return (
    <div className='h-screen w-screen bg-soothing_black'>
      <Head>
        <title>Darpan</title>
        <link rel="shortcut icon" href="/Darpan.png" type="image/png" />
      </Head>
      <Header />

      <main>
        <Image src="/Event_banner.png" 
          width={1920}
          height={1080}
          alt="Event Banner"
        />
      </main>
      <Footer />
    </div>
  )
}
