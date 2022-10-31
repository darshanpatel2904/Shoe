import Navbar from './navbar'
import HeroImage from './heroImage'
import Footer from './footer'

export default function Layout({children}) {
  return (
    <>
      <Navbar />
      <HeroImage />
      <main>{children}</main>
      <Footer />
    </>
  )
}