import Head from 'next/head'
import Grid from '@material-ui/core/Grid';
import styles from '../styles/Home.module.css'
import Header from './common/Header';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Lato',
      'san-serif'
    ].join(','),
  },
})


export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <Header />
    </ThemeProvider>
  )
}
