import DateFormatter from './date-formatter'
import Link from 'next/link'

export default function DraftPreview({
  title,
  date,
  subtitle,
  readTime,  
  slug,
}) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2 leading-snug">
        <Link as={`/drafts/${slug}`} href="/drafts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <p className="text-md text-gray-600 font-medium leading-relaxed pr-2 mb-2">{subtitle}</p>
      <div className="flex justify-start font-normal text-sm text-gray-600 mb-2">
        <div className="pr-2">
          Last Edited on <DateFormatter dateString={date} />
        </div> {' · '}
        <p className="px-2"> {readTime} min read</p>        
      </div>
      <hr className="border-accent-2"/>
    </div>
  )
}
