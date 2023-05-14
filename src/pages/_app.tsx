import store from '@/application/store'
import '@/application/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { Alegreya_Sans_SC } from 'next/font/google';

const alegreyaSansSC = Alegreya_Sans_SC({weight: ['300', '400', '500', '700'], subsets: ['latin']});

export default function App({ Component, pageProps }: AppProps) {
  return <main className={alegreyaSansSC.className}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </main>
  
}
