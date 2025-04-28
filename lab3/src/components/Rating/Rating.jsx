import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AchievementsSection from "./AchievementsSection";
import PageHeader from "./PageHeader";
import RatingControlSection from "./RatingControlSection";
import RatingSection from "./RatingSection";
import RatingStatsSection from "./RatingStatsSection";

import "./Rating.css"

export default function Rating() {
    return (
        <>
            <Header />
            
            <main className="container">
                <PageHeader />

                <RatingStatsSection />

                <RatingControlSection />

                <RatingSection />

                <AchievementsSection />
            </main>

            <Footer />
        </>
    )
}