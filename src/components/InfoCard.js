import './InfoCard.css';

export default function InfoCard({ props }) {
  return (
    <div className="info-card">
        <div className={`card bg-${props.card.bgColor} sections`}>
            <div className="section section-text">
                <div className="hs">
                    {props.h1.isShown && <h1 className={`h1 text-${props.h1.color}`}>{props.h1.text}</h1>}
                    {props.h2.isShown && <h2 className={`h2 text-${props.h2.color}`}>{props.h2.text}</h2>}
                </div>
                <div className="ps">
                    {props.ps.isShown && props.ps.list.map(p => <p key={p} className={`p text-${props.ps.color}`}>{p}</p>)}
                </div>
            </div>
            <div className="section section-img">
                <div className="img-frame">
                    {props.img.isShown && <img className="img" src={props.img.src} alt={props.img.alt} />}
                </div>
            </div>
        </div>
    </div>
  );
}
