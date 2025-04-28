import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PageHeader from "./PageHeader";
import ProjectControlSection from "./ProjectControlSection";
import ProjectsSection from "./ProjectsSection";
import ProjectStatsSection from "./ProjectStatsSection";

import "./Projects.css"

export default function Projects() {
    return (
        <>
            <Header />
            
            <main className="container">
                <PageHeader />

                <ProjectControlSection />

                <ProjectsSection />

                <ProjectStatsSection />
            </main>

            <Footer />
        </>
    )
}