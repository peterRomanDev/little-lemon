// components
import DishCard from './DishCard';

// style
import './DishCards.css';

// hooks
import usePageContent from '../hooks/usePageContent';

export default function DishCards() {
  // a series of dish card appearing next to each other

  const { dishes } = usePageContent();

  return (
    <div className="section-dish-cards">
        <div className="dish-cards">
            {dishes && dishes.map(dish => <DishCard key={dish.id} dish={dish} />)}
        </div>
    </div>
  );
}
