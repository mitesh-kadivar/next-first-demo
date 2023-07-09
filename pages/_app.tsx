import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components' // styled-components for used CSS in JS

const theme = {
  colors: {
    primary: '#355C7D',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
}
