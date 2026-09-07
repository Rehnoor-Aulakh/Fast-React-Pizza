import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';
import LinkButton from '../../ui/LinkButton';

function CartOverview() {
  // calculate the derived state from the cart state
  const totalPizzas = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);
  if (!totalPizzas) return null;
  return (
    <div className="animate-slideUp flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 transition-all duration-300 sm:px-6 md:text-base">
      <p className="space-x-3 text-xs font-semibold text-stone-300 sm:space-x-6 sm:text-lg">
        <span>{totalPizzas} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <LinkButton to="/menu">View menu &rarr;</LinkButton>
      <LinkButton to="/cart">Open cart &rarr;</LinkButton>
    </div>
  );
}

export default CartOverview;
