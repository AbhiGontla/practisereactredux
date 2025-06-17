import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./Elements/NavigationBar";
import HomePage from "./HomePage";
import LoginForm from "./Forms/LoginForm";
import SampleLayout from "./SampleLayout";
import { ProductDetails } from "./ProductDetails";
import UserProvider from "../Context/UserProvider";
import ProtectedRoute from "./Security/ProtectedRoute";
import SearchRedux from "./SearchRedux";
import ProductFormWithImage from "./ProductsArea/ProductFormWithImage";
import ProductGrid from "./ProductsArea/ProductGrid";

function RouteLayout() {
  const SearchFilter = lazy(() => import("./SearchFilter"));
  const ProductForm = lazy(() => import("./ProductForm"));
  const AddProductFormik = lazy(() =>
    import("./ProductsArea/AddProductFormik")
  );

  return (
    <>
      <BrowserRouter basename="/practisereactredux">
        <UserProvider>
          <NavigationBar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<LoginForm />} />
              <Route path="*" element={<HomePage />} />

              {/* Protected Routes */}
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/products"
                element={
                  <ProtectedRoute>
                    <SearchFilter />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/product-view/:id"
                element={
                  <ProtectedRoute>
                    <ProductDetails />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/addProduct"
                element={
                  <ProtectedRoute>
                    <ProductForm />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/SampleLayout"
                element={
                  <ProtectedRoute>
                    <SampleLayout />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/addProductFormik"
                element={
                  <ProtectedRoute>
                    <AddProductFormik />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/searchRedux"
                element={
                  <ProtectedRoute>
                    <SearchRedux />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/productFormWithImage"
                element={
                  <ProtectedRoute>
                    <ProductFormWithImage />
                  </ProtectedRoute>
                }
              />
               <Route
                path="/productGrid"
                element={
                  <ProtectedRoute>
                    <ProductGrid />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Suspense>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default RouteLayout;
