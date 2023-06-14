import Hero from 'landing/components/hero'
import Features from 'landing/components/features'
import Newsletter from 'landing/components/newsletter'
import Zigzag from 'landing/components/zigzag'
import Testimonials from 'landing/components/testimonials'
import PageIllustration from 'landing/components/page-illustration'
import Footer from 'landing/components/ui/footer'
import Header from 'landing/components/ui/header'
import { useEffect, useState } from 'react'
import userService from 'services/user'
export type UserInfo = {
    avatarUrl: string;
    username: string;
    fullName: string;
    email: string;
}
export default function LandingPage() {
    const [user, setUser] = useState<UserInfo>();
    let userToken = '';
    if (typeof window !== 'undefined') {
        userToken = localStorage?.getItem('buildify-token')
    }
    useEffect(() => {
        document.body.classList.add('font-inter', 'antialiased', 'bg-white', 'tracking-tight');
        return () => {
            document.body.classList.remove('font-inter', 'antialiased', 'bg-white', 'tracking-tight');
        }
    }, []);

    useEffect(() => {
        userService.getInfo().then((resp: UserInfo) => {
            if (resp.username) setUser(resp);
            else setUser({} as UserInfo);
        }).catch((err) => {
            console.log(err);
            setUser({} as UserInfo);
        });
    }, [userToken]);

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header user={user}/>

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
