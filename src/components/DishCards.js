// hooks
import { usePageContent } from '../hooks/usePageContent';

// components
import DishCard from './DishCard';

// style
import './DishCards.css';

export default function DishCards() {
  const { dishes } = usePageContent();

  return (
    <div className="section-dish-cards">
        <div className="dish-cards">
            {dishes.map(dish => <DishCard key={dish.id} dish={dish} />)}
        </div>
    </div>
  );
}
