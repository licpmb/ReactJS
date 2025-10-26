import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

const API_URL = import.meta.env.VITE_API_URL || 'https://63f123.mockapi.io/productos'

export default function ProductoDetalle() {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const { addToCart } = useCart()

  useEffect(() => {
    let cancelado = false
    async function load() {
      try {
        setCargando(true)
        const res = await fetch(`${API_URL}/${id}`)
        if (!res.ok) throw new Error('Respuesta no OK')
        const data = await res.json()
        if (!cancelado) setProducto(normalize(data))
      } catch (e) {
        if (!cancelado) setError('No pudimos cargar el producto.')
      } finally {
        if (!cancelado) setCargando(false)
      }
    }
    load()
    return () => { cancelado = true }
  }, [id])

  if (cargando) return <div className="container"><p>Cargando detalle...</p></div>
  if (error) return <div className="container"><p className="text-danger">{error}</p></div>
  if (!producto) return null

  return (
    <div className="container">
      <div className="row align-items-start g-4">
        <div className="col-12 col-md-6">
          <img className="img-fluid rounded-xl" src={producto.image || 'https://via.placeholder.com/800x600?text=Producto'} alt={producto.name} />
        </div>
        <div className="col-12 col-md-6">
          <h1 className="h3">{producto.name}</h1>
          <p>{producto.description || 'Sin descripción'}</p>
          <p className="fs-4 fw-bold">${producto.price?.toFixed?.(2) ?? producto.price ?? '—'}</p>
          <button className="btn btn-primary" onClick={() => addToCart(producto)}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}

function normalize(p) {
  return {
    id: p.id,
    name: p.name || p.nombre || p.title || 'Producto',
    description: p.description || p.descripcion || '',
    price: typeof p.price === 'number' ? p.price : Number(p.price) || 0,
    image: p.image || p.imagen || p.photo
  }
}
