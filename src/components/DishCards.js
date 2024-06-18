// components
import DishCard from './DishCard';

// style
import './DishCards.css';

export default function DishCards({ props }) {
  return (
    <div className="section-dish-cards">
        <div className="dish-cards">
            {props.map(dish => <DishCard key={dish.id} props={dish} />)}
        </div>
    </div>
  );
}
