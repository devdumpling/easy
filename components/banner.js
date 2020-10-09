import Container from './container'
import { REPO_PATH } from '../lib/constants'
import Link from 'next/link'

export default function Banner() {
  return (
    <div
      className="border-b bg-accent-0 border-accent-1 shadow-small py-3"
    >
      <Container>
        <section className="flex-col sm:flex-row flex items-center sm:justify-between">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
            <Link href="/">
              <a className="font-easy font-bold antialiased">Easy</a>
            </Link>
          </h2>
          <div className="text-right text-sm">
            <>              
              <a
                href={`${REPO_PATH}`}
                className="hover:text-success hover:underline duration-200 transition-colors"
              >
                Source
              </a>
          </>
          </div>
        </section>
      </Container >
    </div >
  )
}