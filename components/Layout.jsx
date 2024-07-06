import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col-reverse">
            <Footer />
            <main>{children}</main>
            <Navbar />
            <Head>
                <title>Mailgo</title>
                <meta name='description' content="Gain control of your business's growth with Mailgo's comprehensive marketing, automation, and email marketing platform." />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
        </div>
    )
}

export default Layout