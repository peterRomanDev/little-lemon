// components
import InfoCard from "../components/InfoCard";
import Section from "../components/Section";

// hooks
import usePageContent from "../hooks/usePageContent";

export default function NotFoundPage() {
    // the page that displays when the user types in a URL that doesn't exist

    const { sections, infoCards } = usePageContent();

    return (
        <div>
            <Section section={sections && sections.notFound}>
                <InfoCard infoCard={infoCards && infoCards.notFound} />
            </Section>
        </div>
    );
}
