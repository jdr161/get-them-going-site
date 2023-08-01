import Navbar from '@components/Navbar/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav><Navbar /></nav>
      <main>{children}</main>
    </>
  )
}
