import Banner from './banner'
import Meta from './meta'

export default function LayoutBanner({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Banner />
        <main>{children}</main>
      </div>
    </>
  )
}
