import Container from '../components/container'
import Intro from '../components/intro'
import About from '../components/about'
import Layout from '../components/layout'
import Head from 'next/head'

export default function Index() {    
  return (
    <>
      <Layout>
        <Head>
          <title>Easy</title>
        </Head>
        <Container>
          <Intro />
          <About />                              
        </Container>
      </Layout>
    </>
  )
}
