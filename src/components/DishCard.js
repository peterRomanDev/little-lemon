// style
import './DishCard.css';

export default function DishCard({ dish }) {
  return (
    <div className="dish-card bg-green">
        <div className="section-top">
            <div className="img-frame">
                <img
                    className={`
                        img
                        ${dish.img.alt === 'Greek Salad' ? "img-greek-salad" : ""}
                        ${dish.img.alt === 'Veggie cous cous' ? "img-veggie-cous-cous" : ""}
                        ${dish.img.alt === 'Pizza Margherita' ? "img-pizza-margherita" : ""}
                        ${dish.img.alt === 'Spaghetti Carbonara' ? "img-spaghetti-carbonara" : ""}
                    `}
                    src={dish.img.src}
                    alt={dish.img.alt}
                />
            </div>
            <div className="section section-text">
                <h3 className="h3 text-yellow">{dish.title}</h3>
                <p className="p text-white">{dish.description}</p>
            </div>
        </div>
        <div className="section-bottom">
            <p className="h3 price">${dish.price}</p>
        </div>
    </div>
  );
}