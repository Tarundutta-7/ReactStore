## 📁 Project Structure

ReactStore/
│
├── public/
│
├── src/
│   │
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Loader.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── Layout.jsx
│   │
│   ├── context/           # Global state management
│   │   ├── CartContext.jsx
│   │   └── AuthContext.jsx
│   │
│   ├── pages/             # Route-based pages
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   ├── Login.jsx
│   │   └── NotFound.jsx
│   │
│   ├── services/          # API layer
│   │   └── api.js
│   │
│   ├── App.jsx            # Main routing configuration
│   ├── main.jsx           # Entry point
│   └── index.css
│
├── package.json
└── README.md
