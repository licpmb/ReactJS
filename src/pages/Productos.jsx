import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import { useCart } from '../context/CartContext.jsx'

// Usa VITE_API_URL si está disponible; si no, cae a un endpoint de ejemplo
const API_URL = import.meta.env.VITE_API_URL || 'https://63f123.mockapi.io/productos'

export default function Productos() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const { addToCart } = useCart()

  useEffect(() => {
    let cancelado = false
    async function load() {
      try {
        setCargando(true)
        const res = await fetch(API_URL)
        if (!res.ok) throw new Error('Respuesta no OK')
        const data = await res.json()
        if (!cancelado) setProductos(data)
      } catch (e) {
        if (!cancelado) setError('Hubo un problema al cargar los productos.')
      } finally {
        if (!cancelado) setCargando(false)
      }
    }
    load()
    return () => { cancelado = true }
  }, [])

  if (cargando) return <div className="container"><p>Cargando productos...</p></div>
  if (error) return <div className="container"><p className="text-danger">{error}</p></div>

  return (
    <div className="container">
      <h2 className="mb-3">Productos</h2>
      <div className="row g-3">
        {productos.map(p => (
          <div key={p.id} className="col-12 col-sm-6 col-lg-4">
            <ProductCard product={normalize(p)} onAdd={addToCart} />
          </div>
        ))}
      </div>
    </div>
  )
}

// Normaliza claves comunes para que funcione con distintos esquemas de MockAPI
function normalize(p) {
  return {
    id: p.id,
    name: p.name || p.nombre || p.title || 'Producto',
    description: p.description || p.descripcion || '',
    price: typeof p.price === 'number' ? p.price : Number(p.price) || 0,
    image: p.image || p.imagen || p.photo
  }
}
