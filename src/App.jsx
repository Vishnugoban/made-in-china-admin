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

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AdminLayout from "./components/Admin/AdminLayout";
import { Toaster } from "sonner";
import AdminHomePage from "./pages/AdminHomePage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import UserManagement from "./components/Admin/UserManagement";
import ProductManagement from "./components/Admin/ProductManagement";
import EditProductPage from "./components/Admin/EditProductPage";
import OrderManagement from "./components/Admin/OrderManagement";

import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/made-in-china-admin">
        <Toaster position="top-right" />

        <Routes>
          {/* Redirect root "/" to "/login" */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Public Route: Login */}
          <Route path="/login" element={<Login />} />

          {/* Admin routes wrapped in AdminLayout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHomePage />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="products" element={<ProductManagement />} />
            <Route path="products/:id/edit" element={<EditProductPage />} />
            <Route path="orders" element={<OrderManagement />} />
          </Route>

          {/* Catch-all for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
