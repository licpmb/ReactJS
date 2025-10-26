# TalentoLab eCommerce (React + Vite)

Proyecto basado en las consignas y clases: instalación con Vite, componentes, useState, eventos,
React Router (rutas estáticas y dinámicas), useEffect para peticiones a API y rutas protegidas.

## Requisitos
- Node.js 18+
- npm

## APB (A Prueba de Bobos) - Paso a paso

1) **Descargá** este proyecto y descomprimilo.
2) **Abrí** una terminal dentro de la carpeta del proyecto.
3) **Instalá** dependencias:
   ```bash
   npm install
   ```
4) **(Opcional) Configurá tu API** de productos (MockAPI) creando un archivo `.env` en la raíz con:
   ```
   VITE_API_URL=https://tu-subdominio.mockapi.io/productos
   ```
   Si no configurás nada, el proyecto usa `https://63f123.mockapi.io/productos` de ejemplo.
5) **Levantá** el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Abrí el link que te muestra (por defecto http://localhost:5173).

## ¿Qué vas a ver?
- **Inicio** simple con un jumbotron.
- **/productos**: carga productos desde la API con `useEffect`, con estados de *cargando* y *error*.
- **/productos/:id**: detalle del producto usando `useParams` (ruta dinámica).
- **/carrito** y **/admin**: rutas protegidas. Usá el botón *Iniciar sesión/Cerrar sesión* del navbar para simular autenticación.
- **Carrito** con `useState`: podés agregar productos desde las tarjetas; si está vacío muestra *"El carrito está vacío"*.
- **UI** con Bootswatch (Flatly).

## Estructura rápida
- `src/components`: Header, Navbar, Footer, ProductCard, ProtectedRoute
- `src/pages`: Home, Productos, ProductoDetalle, Carrito, Admin, Login
- `src/context/CartContext.jsx`: estado global simple del carrito

## Notas
- Este repo está listo para extenderse con Context API de autenticación, validaciones de formulario, etc.
