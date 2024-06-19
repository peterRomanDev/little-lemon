import Btn from './Btn';
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
                {infoCard && infoCard.btns.isShown && (
                    <div className="btns">
                        {infoCard.btns.list.map(btn => <Btn key={btn.text} btn={btn} />)}
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
