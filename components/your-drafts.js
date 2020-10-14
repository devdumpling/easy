import ArchivePreview from './archive-preview'

export default function YourDrafts({ drafts }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:col-gap-16 lg:col-gap-32 row-gap-10 md:row-gap-4 mb-8">
        {drafts.map((draft) => (
          <ArchivePreview
            key={draft.slug}
            title={draft.title}
            date={draft.date}
            slug={draft.slug}
            excerpt={draft.excerpt}
            subtitle={draft.subtitle}
            readTime={draft.readTime}
            draft={draft.draft}
          />
        ))}
      </div>
    </section>
  )
}
