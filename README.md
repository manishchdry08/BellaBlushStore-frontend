# BellaBlush Store Frontend

The frontend application for BellaBlush E-commerce store built with React and Vite.

## Features

- User Authentication (Login/Register)
- Product Browsing & Filtering
- Shopping Cart Management
- Wishlist Functionality
- Responsive Design
- Admin Dashboard
- Secure Checkout Process

## Technologies Used

- React 18
- React Router DOM
- Axios for API requests
- Vite for build tooling
- Context API for state management

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API running (see [backend repository](https://github.com/manishchdry08/BellaBlush-Ecommerce-MERN))

## Installation

1. Clone the repository:
```bash
git clone https://github.com/manishchdry08/BellaBlushStore-frontend.git
cd BellaBlushStore-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at http://localhost:5173

## Environment Configuration

The application expects the backend API to be running at `http://localhost:5001`. If your backend is running on a different port, update the `baseURL` in `src/api/axios.js`.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Login Credentials

### Admin Account:
- Email: admin@bellablush.com
- Password: admin123

### Test User Account:
- Email: user@test.com
- Password: user123

## Features

### User Features
- Browse products with filtering options
- Add/remove items from cart
- Manage wishlist
- Place orders
- View order history
- Update profile

### Admin Features
- Manage products (add, edit, delete)
- View and manage orders
- User management
- Dashboard analytics

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)