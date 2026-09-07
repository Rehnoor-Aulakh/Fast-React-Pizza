import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from './cartSlice';

export default function UpdateItemQuantity({ pizzaId, className }) {
  const quantity = useSelector(getCurrentQuantityById(pizzaId));
  const dispatch = useDispatch();
  if (quantity === 0) return null;
  return (
    <div className={`space-x-2 md:space-x-3 ${className}`}>
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-semibold text-stone-800">{quantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}
