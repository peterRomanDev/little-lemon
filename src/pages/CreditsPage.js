// components
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Section from '../components/Section'
import InfoCard from '../components/InfoCard'

// hooks
import usePageContent from '../hooks/usePageContent'
import useScroll from '../hooks/useScroll'

export default function CreditsPage() {
    const { sections, infoCards } = usePageContent();

    // scroll to top when loaded
    useScroll();

    return (
        <>
        <Header />
        <Main>
            <Section section={sections && sections.credits}>
                <InfoCard infoCard={infoCards && infoCards.credits} />
            </Section>
        </Main>
        <Footer />
        </>
    )
}
