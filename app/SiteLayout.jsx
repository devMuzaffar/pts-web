import { Banner, Footer, Navbar, UserAccountModal } from './components'

const SiteLayout = ({children}) => {
  return (
    <div className="font-work-sans">
        <UserAccountModal />
        <Banner/>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default SiteLayout