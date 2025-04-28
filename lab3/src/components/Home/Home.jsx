import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import FeaturesSection from "./FeaturesSection"
import PartnersSection from "./PartnersSection"
import PlatformSection from "./PlatformSection"
import StatsSection from "./StatsSection"
import StorySection from "./StorySection"

export default function Home() {
    return (
        <>
            <Header />

            <main className="container">
                <PlatformSection />
                
                <FeaturesSection />
                
                <StorySection />
                
                <StatsSection />
                
                <PartnersSection />
            </main>

            <Footer />
        </>
    )
}