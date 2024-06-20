// components
import { Link } from 'react-router-dom';

// style
import './InfoCard.css';

export default function InfoCard({ infoCard }) {
  return (
    <div className="info-card">
        <div className={`card bg-${infoCard && infoCard.card.bgColor} sections`}>
            <div className="section section-text">
                {infoCard && infoCard.hs.isShown && (
                    <div className="hs">
                        {infoCard.hs.h1.isShown && <h1 className={`h1 text-${infoCard.hs.h1.color}`}>{infoCard.hs.h1.text}</h1>}
                        {infoCard.hs.h2.isShown && <h2 className={`h2 text-${infoCard.hs.h2.color}`}>{infoCard.hs.h2.text}</h2>}
                    </div>
                )}
                {infoCard && infoCard.ps.isShown && (
                    <div className="ps">
                        {infoCard.ps.list.map(p => <p key={p} className={`p text-${infoCard.ps.color}`}>{p}</p>)}
                    </div>
                )}
                {infoCard && infoCard.links.isShown && (
                    <div className="btns">
                        {infoCard.links.list.map(link => <Link className="btn" key={link.title} to={link.href}>{link.title}</Link>)}
                    </div>
                )}
            </div>
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
