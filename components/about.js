import ImageLink from './image-link'

export default function About() {
  return (
    <>
      <section className="flex-col md:flex-col flex justify-start mt-4 mb-8">
        {<h4 className="text-left md:text-left text-lg px-2 py-2 md:p-2">
          Easy is a quick re-imagining of Medium's "Your Stories" page.
        <br /><br />
        This landing page is really just fluff.<br />
        If you're reading this, you probably linked here from my article.<br />
        But in the off chance that you didn't, {' '}
          <a
            href="https://medium.com/"
            className="underline hover:text-success duration-200 transition-colors"
          >
            read about it here.
        </a>
          <br /><br />
        For reference, here is the original {' '}
          <a
            href="https://medium.com/me/stories/drafts"
            className="underline hover:text-success duration-200 transition-colors"
          >
            Stories page.
        </a>
        </h4>}
      </section>
      <section className="flex-col md:flex-row flex justify-evenly">
        <div className="p-4"><ImageLink title="test" src="/assets/blog/preview/cover.jpg" slug="https://medium.com" /></div>
        <div className="p-4"><ImageLink title="test" src="/assets/blog/preview/cover.jpg" slug="../me/stories" /></div>
      </section>
    </>
  )
}
