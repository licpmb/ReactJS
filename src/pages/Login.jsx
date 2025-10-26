import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="container">
      <h2>Iniciar Sesión</h2>
      <p>Para acceder a esta sección, iniciá sesión desde el botón de la barra superior.</p>
      <p className="mt-3"><Link to="/">Volver al inicio</Link></p>
    </div>
  )
}
