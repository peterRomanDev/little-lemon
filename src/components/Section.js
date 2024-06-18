import './Section.css';

export default function Section({ sectionProps, children }) {
  return (
    <section className="section-frame">
      {sectionProps.h2.isShown && <h2 className={`h2 text-${sectionProps.h2.color}`}>{sectionProps.h2.text}</h2>}
      {children}
    </section>
  );
}