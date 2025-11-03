import { ToastContainer } from "react-toastify";
import React from "react";
import Home from "@/components/pages/Home";
import CheckoutPage from "@/components/pages/CheckoutPage";
import CategoryPage from "@/components/pages/CategoryPage";
import ProductPage from "@/components/pages/ProductPage";
import SearchPage from "@/components/pages/SearchPage";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
// App.jsx is no longer the main application component
// Routing is now handled by src/router/index.jsx and Layout component

// Legacy App component - functionality moved to Layout component
function App() {
  // This component is no longer used as main app entry point
  // Routing architecture has been moved to:
  // - src/router/index.jsx (router configuration)
  // - src/components/organisms/Layout.jsx (layout with Header/Footer/ToastContainer)
  // - src/main.jsx (RouterProvider implementation)
  return null;
}

export default App;