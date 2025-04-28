import { useState } from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HackathonsSection from "./HackathonsSection";
import PageHeader from "./PageHeader";
import CompetitionsRulesSection from "./CompetitionRulesSection";
import CompetitionsControlSection from "./CompetitionsControlSection";

import "./Competitions.css";

export default function Competitions() {
    const [selectedCategory, setSelectedCategory] = useState('Всі категорії');

    return (
        <>
            <Header />

            <main className="container">
                <PageHeader />

                <CompetitionsControlSection onCategoryChange={setSelectedCategory} />

                <HackathonsSection selectedCategory={selectedCategory} />

                <CompetitionsRulesSection />
            </main>
            
            <Footer />
        </>
    );
}