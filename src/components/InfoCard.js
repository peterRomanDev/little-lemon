// components
import { Link } from 'react-router-dom';

// style
import './InfoCard.css';

// hooks
import usePageContent from '../hooks/usePageContent';

export default function InfoCard({ infoCard }) {
    // a reusable card that can display a main title, a subtitle, paragraphs, links/button and an image
    // everything is set up in a way that every element renders or not, without an error, elements can be toggled in the context

    const { scrollIntoView } = usePageContent();

  return (
    <div className="info-card">
        <div className={`card bg-${infoCard && infoCard.card.bgColor} sections`}>
            <div className="section section-text">
                {/* if headings are set to show, they are rendered */}
                {infoCard && infoCard.hs.isShown && (
                    <div className="hs">
                        {infoCard.hs.h1.isShown && <h1 className={`h1 text-${infoCard.hs.h1.color}`}>{infoCard.hs.h1.text}</h1>}
                        {infoCard.hs.h2.isShown && <h2 className={`h2 text-${infoCard.hs.h2.color}`}>{infoCard.hs.h2.text}</h2>}
                    </div>
                )}
                {/* if paragraphs are set to show, they are rendered */}
                {infoCard && infoCard.ps.isShown && (
                    <div className="ps">
                        {infoCard.ps.list.map(p => <p key={p} className={`p text-${infoCard.ps.color}`}>{p}</p>)}
                    </div>
                )}
                {/* if links/buttons are set to show, they are rendered */}
                {infoCard && infoCard.links.isShown && (
                    <div className="btns">
                        {infoCard.links.list.map(link => (
                            // when a link in the info card is clicked, the section corresponding to the link is scrolled into view
                            <Link className="btn" key={link.title} to={link.href} onClick={() => scrollIntoView(link.href)}>{link.title}</Link>
                        ))}
                    </div>
                )}
            </div>
            {/* if image is set to show, it is rendered */}
            {infoCard && infoCard.img.isShown && (
                <div className="section section-img">
                    <div className="img-frame">
                        {<img className="img" src={infoCard.img.src} alt={infoCard.img.alt} />}
                    </div>
                </div>
            )}
        </div>
    </div>
  );
}
