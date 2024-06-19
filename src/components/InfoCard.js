import Btn from './Btn';
import './InfoCard.css';

export default function InfoCard({ infoCard }) {
  return (
    <div className="info-card">
        <div className={`card bg-${infoCard.card.bgColor} sections`}>
            <div className="section section-text">
                <div className="hs">
                    {infoCard.h1.isShown && <h1 className={`h1 text-${infoCard.h1.color}`}>{infoCard.h1.text}</h1>}
                    {infoCard.h2.isShown && <h2 className={`h2 text-${infoCard.h2.color}`}>{infoCard.h2.text}</h2>}
                </div>
                <div className="ps">
                    {infoCard.ps.isShown && infoCard.ps.list.map(p => <p key={p} className={`p text-${infoCard.ps.color}`}>{p}</p>)}
                </div>
                <div className="btns">
                    {infoCard.btns.isShown && infoCard.btns.list.map(btn => <Btn key={btn.text} btn={btn} />)}
                </div>
            </div>
            <div className="section section-img">
                <div className="img-frame">
                    {infoCard.img.isShown && <img className="img" src={infoCard.img.src} alt={infoCard.img.alt} />}
                </div>
            </div>
        </div>
    </div>
  );
}
