# E-Commerce Project

## 🛠️ Installation
- Follow these steps to set up the project locally:

1. Clone repository:
```bash
git clone https://github.com/pandit986/e-commerce-app.git
```
2. Install dependencies:
```bash
 npm install
```
3. Start development server:
```bash
npm run dev
```

## A e-commerce platform built with:
- ⚛️ React + Vite
- 🛣️ React Router v6
- 🧺 Redux Toolkit for state management
- 💅 styled-components for styling
- 📦 react-icons for icons
- 📡 DummyJSON API for product data
- 📦 LocalStorage integration for cart persistence
- 🔔 Toast Notifications

## 🚀 Features

- **Responsive Design:** Modern and mobile-friendly layout
- **Product Catalog:** Browse products by category
- **Shopping Cart:** Persistent cart using LocalStorage
- **Search Functionality:** Auto-suggestions for product search
- **Product List Page:** Detailed listings with interactive UI
- **Notifications:** Toast messages for actions and alerts

## 📁 Project Structure
- src/
- ├── api/                      # API configuration
- ├── assets/                   # Static assets
- ├── components/               # Reusable components
- - │   └── ui/                 # Reusable UI components
- ├── components/layouts/       # Application layouts
- ├── modules/                  # Route components
- ├── routes/                   # Routing configuration
- └── store/                    # Redux store configuration

# 🎨 Design Decisions
1. State Management
- Redux Toolkit chosen for:
- - Centralized cart management
- - Search functionality state
- - Easy debugging with Redux DevTools

2. Styling Approach
- styled-components provides:
- - Component-scoped styles
- - Better CSS maintainability

3. Performance Implemented:
- Lazy loading for images
- Route-based code splitting
- Debounced search inputs

4. Folder Structure
- Feature-based organization:
- - Clear separation of concerns
- - Easy feature scalability
- - Reusable component 