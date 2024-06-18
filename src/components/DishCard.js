// style
import './DishCard.css';

export default function DishCard({ props }) {
  return (
    <div className="dish-card bg-green">
        <div className="section-top">
            <div className="img-frame">
                <img
                    className={`
                        img
                        ${props.img.alt === 'Greek Salad' ? "img-greek-salad" : ""}
                        ${props.img.alt === 'Veggie cous cous' ? "img-veggie-cous-cous" : ""}
                        ${props.img.alt === 'Pizza Margherita' ? "img-pizza-margherita" : ""}
                        ${props.img.alt === 'Spaghetti Carbonara' ? "img-spaghetti-carbonara" : ""}
                    `}
                    src={props.img.src}
                    alt={props.img.alt}
                />
            </div>
            <div className="section section-text">
                <h3 className="h3 text-yellow">{props.title}</h3>
                <p className="p text-white">{props.description}</p>
            </div>
        </div>
        <div className="section-bottom">
            <p className="h3 price">${props.price}</p>
        </div>
    </div>
  );
}