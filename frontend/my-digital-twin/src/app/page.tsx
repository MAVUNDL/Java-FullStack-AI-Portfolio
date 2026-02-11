"use client"

import NavBarComponent from "../../components/navbar-component";
import LlmInputComponent from "../../components/llm-input-component";
import LandingSection from "../../components/landing-section-component";
import LandingButton from "../../components/landing-button-component";
import AboutSection from "../../components/about-me-component";
import ExperienceSection from "../../components/experience-component";
import ProjectsSection from "../../components/projects-section-component";
import ContactSection from "../../components/contact-section-component";

export default function Home() {
    return (

        <div className="relative h-screen w-full overflow-y-auto bg-[url('/dev-background.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">

            <div className="fixed inset-0 bg-black/40 z-0 pointer-events-none" />

            <div className="min-h-screen flex flex-col relative z-10 py-10">

                <div className="sticky top-0 z-50 flex justify-center mb-8 shrink-0">
                    <NavBarComponent />
                </div>

                <div className="flex-1 flex flex-col justify-center items-center shrink-0 px-4">
                    <LandingSection />
                </div>

                <div className="w-full flex justify-center py-10 shrink-0">
                    <LlmInputComponent />
                </div>

                <div className="w-full flex justify-center pb-20 shrink-0">
                    <LandingButton/>
                </div>

                <div className="w-full bg-black/40 backdrop-blur-md border-t border-white/10 shrink-0">
                    <AboutSection />
                </div>

                <div className="w-full bg-black/40 backdrop-blur-md border-t border-white/10 shrink-0">
                    <ExperienceSection/>
                </div>

                <div className="w-full bg-black/40 backdrop-blur-md border-t border-white/10 shrink-0">
                    <ProjectsSection/>
                </div>

                <div className="w-full bg-black/40 backdrop-blur-md border-t border-white/10 shrink-0">
                    <ContactSection/>
                </div>

            </div>
        </div>
    );
}