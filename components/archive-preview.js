import DateFormatter from './date-formatter'
import Link from 'next/link'

export default function ArchivePreview({
  title,
  date,
  subtitle,
  readTime,
  publication,
  slug,
}) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <p className="text-md text-gray-600 font-medium leading-relaxed pr-2 mb-2">{subtitle}</p>
      <div className="flex justify-start font-normal text-sm text-gray-600 mb-2">
        <div className="pr-2">
          Published on <DateFormatter dateString={date} />
        </div> {' · '}
        <p className="px-2"> {readTime} min read</p>
        {publication && (<p className="pr-2"> {' · '}In {publication}</p>)}
      </div>
      <hr className="border-accent-2"/>
    </div>
  )
}
