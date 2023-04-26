import Hero from 'landing/components/hero'
import Features from 'landing/components/features'
import Newsletter from 'landing/components/newsletter'
import Zigzag from 'landing/components/zigzag'
import Testimonials from 'landing/components/testimonials'
import PageIllustration from 'landing/components/page-illustration'
import Footer from 'landing/components/ui/footer'
import Header from 'landing/components/ui/header'
import { useEffect } from 'react'

export default function LandingPage() {
    useEffect(() => {
        document.body.classList.add('font-inter', 'antialiased', 'bg-white', 'tracking-tight');
        return () => {
            document.body.classList.remove('font-inter', 'antialiased', 'bg-white', 'tracking-tight');
        }
    }, []);
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />

            <main className="grow">

                <PageIllustration />
                <Hero />
                <Features />
                <Zigzag />
                <Testimonials />
                <Newsletter />

            </main>

            <Footer />


        </div>
    )
}
