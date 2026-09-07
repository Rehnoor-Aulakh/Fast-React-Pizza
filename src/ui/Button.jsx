import { Link, useNavigate } from 'react-router-dom';

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    'text-sm inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-yellow-200';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    secondary:
      'text-sm inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-500 transition-colors duration-300 hover:bg-stone-400 hover:text-stone-800 focus:bg-stone-400 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-300 px-3.5 py-2.5 md:px-5.5 md:py-3.5',
  };
  if (to) {
    return (
      <Link to={to} className={styles[type] || styles.primary}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button
        className={styles[type] || styles.primary}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return (
    <button className={styles[type] || styles.primary} disabled={disabled}>
      {children}
    </button>
  );
}
