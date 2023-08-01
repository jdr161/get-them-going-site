import Navbar from '@components/Navbar/navbar'
import Footer from '@components/Footer/footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full">
      <nav>
        <Navbar />
      </nav>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
