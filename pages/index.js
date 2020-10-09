import Container from '../components/container'
import Intro from '../components/intro'
import About from '../components/about'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

export default function Index({ allPosts }) {    
  return (
    <>
      <Layout>
        <Head>
          <title>Easy: A redesign of Medium's Stories page.</title>
        </Head>
        <Container>
          <Intro />
          <About />                              
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'subtitle',
  ])

  return {
    props: { allPosts },
  }
}
