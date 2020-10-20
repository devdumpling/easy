import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllDrafts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Draft({ draft, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !draft?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {draft.title} | Easy
                </title>                
              </Head>
              <PostHeader
                title={draft.title}
                coverImage={draft.coverImage}
                date={draft.date}
                author={draft.author}
              />
              <PostBody content={draft.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const draft = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',    
    'content',        
  ], true)
  const content = await markdownToHtml(draft.content || '')

  return {
    props: {
      draft: {
        ...draft,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const drafts = getAllDrafts(['slug'])

  return {
    paths: drafts.map((draft) => {
      return {
        params: {
          slug: draft.slug,
        },
      }
    }),
    fallback: false,
  }
}