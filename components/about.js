import ImageLink from './image-link'
import Link from 'next/link'
import SectionSeparator from './section-separator'

export default function About() {
  return (
    <>
      <section className="flex-col md:flex-col flex justify-start mt-4">
        {<h4 className="text-left md:text-left text-lg px-2 py-2 md:p-2">
          Easy is Medium's "Your Stories" page re-imagined. <br />
          This landing page is mostly fluff. Click below for the goods.<br /><br />          
          <Link href="/me/stories">
            <a className="underline hover:text-success duration-200 transition colors">See Stories Re-imagined</a>
          </Link>
          <br/>          
          <a
            href="https://medium.com/"
            className="underline hover:text-success duration-200 transition-colors"
          >
            Read the article behind this app
          </a>
        </h4>}
      </section>
      <SectionSeparator />
      <section className="flex-col md:flex-row flex justify-evenly">
        <div className="p-2 md:px-2"><ImageLink title="test" src="/assets/blog/medium-cover.png" slug="https://medium.com/me/stories/drafts" /></div>
        <div className="p-2 md:px-2 mb-8"><ImageLink title="test" src="/assets/blog/easy-cover.png" slug="../me/stories" /></div>
      </section>
    </>
  )
}
