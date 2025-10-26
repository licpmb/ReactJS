import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Productos from './pages/Productos.jsx'
import ProductoDetalle from './pages/ProductoDetalle.jsx'
import Carrito from './pages/Carrito.jsx'
import Admin from './pages/Admin.jsx'
import Login from './pages/Login.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { CartProvider } from './context/CartContext.jsx'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const toggleAuth = () => setIsAuthenticated(v => !v)

  return (
    <CartProvider>
      <Header />
      <Navbar isAuthenticated={isAuthenticated} onToggleAuth={toggleAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route path="/carrito" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Carrito />
          </ProtectedRoute>
        }/>
        <Route path="/admin" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Admin />
          </ProtectedRoute>
        }/>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div className="container"><p>404 - Página no encontrada</p></div>} />
      </Routes>
      <Footer />
    </CartProvider>
  )
}
