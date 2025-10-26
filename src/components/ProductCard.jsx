import { Link } from 'react-router-dom'

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="card h-100 card-hover">
      <img src={product.image || 'https://via.placeholder.com/600x400?text=Producto'} className="card-img-top" alt={product.name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text flex-grow-1">{product.description || 'Sin descripción'}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold">${product.price?.toFixed?.(2) ?? product.price ?? '—'}</span>
          <div className="d-flex gap-2">
            <button className="btn btn-primary btn-sm" onClick={() => onAdd(product)}>Agregar</button>
            <Link className="btn btn-outline-secondary btn-sm" to={`/productos/${product.id}`}>Detalle</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
