import ArchivePreview from './archive-preview'
import Filter from './filter'
import { useState } from 'react'

export default function YourStories({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  return (
    <section className="w-full">
      <Filter entries={posts} filterEntries={setFilteredPosts} />
      <div className="grid grid-cols-1 md:col-gap-16 lg:col-gap-32 row-gap-10 md:row-gap-4 mb-8">
        {filteredPosts.map((post) => (
          <ArchivePreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
            subtitle={post.subtitle}
            readTime={post.readTime}
            draft={post.draft}
            publication={post.publication}
            partnered={post.partnered}
            submitted={post.submitted}
          />
        ))}
      </div>
    </section>
  )
}
