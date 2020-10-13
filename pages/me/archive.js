import Container from '../../components/container'
import LayoutBanner from '../../components/layout-banner'
import { getAllPosts, getAllDrafts } from '../../lib/api'
import Head from 'next/head'
import YourStories from '../../components/your-stories'
import YourDrafts from '../../components/your-drafts'
import Search from '../../components/search'
import { useState, useCallback } from 'react'
import cn from 'classnames'

export default function Archive({ allPosts, allDrafts }) {
    const yourPosts = allPosts;
    const yourDrafts = allDrafts;
    const allEntries = allPosts.concat(allDrafts);
    const [showDrafts, setShowDrafts] = useState(true);
    const [searchActive, setSearchActive] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    function toggleDrafts() { setShowDrafts(!showDrafts) };

    const onSearchFocus = useCallback(() => {
        setSearchActive(true);
    }, [])

    const onSearchBlur = useCallback(() => {
        setSearchActive(false)
    }, [])

    return (
        <>
            <LayoutBanner>
                <Container>
                    <Head>
                        <title>Stories</title>
                    </Head>
                    <h2 className="mt-16 mb-12 text-5xl font-bold font-roboto leading-tight">
                        Your stories
                    </h2>
                    <div className="flex justify-between mb-2">
                        <div className="flex flex-row justify-start">
                            <p onClick={toggleDrafts} className={cn("pr-4 cursor-pointer", {
                                'text-gray-900': showDrafts,
                                'text-gray-600 hover:text-gray-900': !showDrafts,
                            })}>Drafts {yourDrafts.length}</p>
                            <p onClick={toggleDrafts} className={cn("pr-4 cursor-pointer", {
                                'text-gray-600 hover:text-gray-900': showDrafts,
                                'text-gray-900': !showDrafts,
                            })}>Published {yourPosts.length}</p>
                        </div>
                        <div onFocus={onSearchFocus} onBlur={onSearchBlur}>
                            <Search setResults={setSearchResults} posts={allEntries} />
                        </div>
                    </div>
                    <hr className="border-accent-2 mb-4" />
                    <div>
                        {searchResults.length > 0 && <YourDrafts drafts={searchResults} />}
                    </div>
                    <div className={cn({
                        'hidden': showDrafts,
                        'flex': !showDrafts,
                    })}>
                        {!searchActive && yourPosts.length > 0 && <YourStories posts={yourPosts} />}
                    </div>
                    <div className={cn({
                        'flex': showDrafts,
                        'hidden': !showDrafts,
                    })}>
                        {!searchActive && yourDrafts.length > 0 && <YourDrafts drafts={yourDrafts} />}
                    </div>
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

    const allDrafts = getAllDrafts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
        'subtitle',
        'readTime',
    ])


    return {
        props: {
            allPosts,
            allDrafts,
        },
    }
}