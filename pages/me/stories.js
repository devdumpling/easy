import Container from '../../components/container'
import LayoutBanner from '../../components/layout-banner'
import { getAllPosts } from '../../lib/api'
import Head from 'next/head'
import YourStories from '../../components/your-stories'

export default function Stories({ allPosts }) {
    const yourPosts = allPosts;
    return (
        <>
            <LayoutBanner>
                <Container>
                    <Head>
                        <title>Stories</title>
                    </Head>                                        
                    {yourPosts.length > 0 && <YourStories posts={yourPosts} />}
                </Container>
            </LayoutBanner>
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
        'readTime',
        'publication',
    ])

    return {
        props: { allPosts },
    }
}