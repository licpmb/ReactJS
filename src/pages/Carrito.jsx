import { useCart } from '../context/CartContext.jsx'

export default function Carrito() {
  const { items, clearCart } = useCart()

  return (
    <div className="container">
      <h2 className="mb-3">Carrito</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {items.map((it, i) => (
              <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{it.name}</span>
                <span className="fw-bold">${it.price?.toFixed?.(2) ?? it.price ?? '—'}</span>
              </li>
            ))}
          </ul>
          <button className="btn btn-outline-danger" onClick={clearCart}>Vaciar Carrito</button>
        </>
      )}
    </div>
  )
}
