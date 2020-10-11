import ArchivePreview from './archive-preview'

export default function YourStories({ posts }) {
  return (
    <section>      
      <div className="grid grid-cols-1 md:col-gap-16 lg:col-gap-32 row-gap-10 md:row-gap-4 mb-8">
        {posts.map((post) => (          
            <ArchivePreview
              key={post.slug}              
              title={post.title}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
              subtitle={post.subtitle}
              readTime={post.readTime}              
              publication={post.publication}
            />          
        ))}
      </div>
    </section>
  )
}
