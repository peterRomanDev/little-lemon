// style
import './DishCard.css';

export default function DishCard({ dish }) {
    // a single dish card displaying information about the dish (image, name, description, price)

  return (
    <div className="dish-card bg-green">
        <div className="section-top">
            <div className="img-frame">
                <img
                    className={`
                        img
                        ${dish && dish.img.alt === 'Greek Salad' ? "img-greek-salad" : ""}
                        ${dish && dish.img.alt === 'Veggie cous cous' ? "img-veggie-cous-cous" : ""}
                        ${dish && dish.img.alt === 'Pizza Margherita' ? "img-pizza-margherita" : ""}
                        ${dish && dish.img.alt === 'Spaghetti Carbonara' ? "img-spaghetti-carbonara" : ""}
                    `}
                    src={dish && dish.img.src}
                    alt={dish && dish.img.alt}
                />
            </div>
            <div className="section section-text">
                <h3 className="h3 text-yellow">{dish && dish.title}</h3>
                <p className="p text-white">{dish && dish.description}</p>
            </div>
        </div>
        <div className="section-bottom">
            <p className="h3 price">${dish && dish.price}</p>
        </div>
    </div>
  );
}