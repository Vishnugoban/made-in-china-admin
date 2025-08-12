// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import AdminLayout from "./components/Admin/AdminLayout";
// import { Toaster } from "sonner";
// import Login from "./pages/Login";
// import AdminHomePage from "./pages/AdminHomePage";
// import UserManagement from "./components/Admin/UserManagement";
// import ProductManagement from "./components/Admin/ProductManagement";
// import EditProductPage from "./components/Admin/EditProductPage";
// import OrderManagement from "./components/Admin/OrderManagement";
// import NotFound from "./pages/NotFound";

// import { Provider } from "react-redux";
// import store from "./redux/store";
// import ProtectedRoute from "./components/Common/ProtectedRoute";

// const App = () => {
//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//         <Toaster position="top-right" />
//         <Routes>
//           {/* Redirect root to admin */}
//           <Route path="/" element={<Navigate to="/admin" replace />} />

//           {/* Login route */}
//           <Route path="/login" element={<Login />} />

//           {/* Admin routes */}
//           <Route
//             path="/admin"
//             element={
//               <ProtectedRoute role="admin">
//                 <AdminLayout />
//               </ProtectedRoute>
//             }
//           >
//             <Route index element={<AdminHomePage />} />
//             <Route path="users" element={<UserManagement />} />
//             <Route path="products" element={<ProductManagement />} />
//             <Route path="products/:id/edit" element={<EditProductPage />} />
//             <Route path="orders" element={<OrderManagement />} />
//           </Route>

//           {/* 404 route */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </Provider>
//   );
// };

// export default App;

// src/App.jsx
// Bypass login completely and go directly to admin

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./components/Admin/AdminLayout";
import { Toaster } from "sonner";
import AdminHomePage from "./pages/AdminHomePage";
import UserManagement from "./components/Admin/UserManagement";
import ProductManagement from "./components/Admin/ProductManagement";
import EditProductPage from "./components/Admin/EditProductPage";
import OrderManagement from "./components/Admin/OrderManagement";
import NotFound from "./pages/NotFound";

import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          {/* Direct access to admin - no authentication required */}
          <Route path="/" element={<AdminLayout />}>
            <Route index element={<AdminHomePage />} />
            <Route path="admin" element={<AdminHomePage />} />
            <Route path="admin/users" element={<UserManagement />} />
            <Route path="admin/products" element={<ProductManagement />} />
            <Route
              path="admin/products/:id/edit"
              element={<EditProductPage />}
            />
            <Route path="admin/orders" element={<OrderManagement />} />
            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
