import store from '@/application/store'
import '@/application/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return <main className={inter.className}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </main>
  
}
