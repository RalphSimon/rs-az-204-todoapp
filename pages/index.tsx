/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from 'theme-ui'
import Head from 'next/head'

import { AppHeader } from '../components/AppHeader'

export const Home = (): JSX.Element => (
  <article className="container">
    <Head>
      <title>AZ 204 - ToDo</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <AppHeader title="todos" />
  </article>
)

export default Home
