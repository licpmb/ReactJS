import { Link } from 'react-router-dom'

export default function Navbar({ isAuthenticated, onToggleAuth }) {
  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">Inicio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/productos">Productos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/carrito">Carrito</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/admin">Admin</Link></li>
          </ul>
          <div className="d-flex align-items-center gap-2">
            <span className="badge text-bg-secondary">{isAuthenticated ? 'Autenticado' : 'Invitado'}</span>
            <button className="btn btn-outline-primary btn-sm" onClick={onToggleAuth}>
              {isAuthenticated ? 'Cerrar sesión' : 'Iniciar sesión'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
