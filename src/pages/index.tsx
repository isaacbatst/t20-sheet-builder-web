import Header from '@/application/components/Header/Header';
import SheetBuilderForm from '@/application/components/SheetBuilderForm/SheetBuilderForm'
import SheetPreview from '@/application/components/SheetPreview/SheetPreview';
import Head from 'next/head'
import { useState } from 'react';
import 'react-tabs/style/react-tabs.css';

export default function Home() {
  const [isShowingPreview, setIsShowingPreview] = useState(false)

  const togglePreview = () => {
    setIsShowingPreview(!isShowingPreview)
  }

  return (
    <>
      <Head>
        <title>Ficha de T20</title>
        <meta name="description" content="Construa sua ficha do zero" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="A1PBUnkWuS_DQFxOtFEs984kX9ClcJV8JRASYzZY4Ao" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='text-center min-h-screen'>
        <Header  
          isShowingPreview={isShowingPreview}
          togglePreview={togglePreview}
        />
        <div className='pt-8'>
          {isShowingPreview && <SheetPreview />}
          {!isShowingPreview && <SheetBuilderForm />}
        </div>
      </main>
    </>
  )
}
