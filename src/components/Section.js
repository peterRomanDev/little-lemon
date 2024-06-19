import './Section.css';

export default function Section({ section, children }) {
  return (
    <section className="section-frame">
      {section && section.h2.isShown && <h2 className={`h2 text-${section.h2.color}`}>{section.h2.text}</h2>}
      {children}
    </section>
  );
}