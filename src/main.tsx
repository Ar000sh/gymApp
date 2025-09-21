/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/



import ReactDOM from "react-dom/client";
import "./index.css";      
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/auth/AuthContext";
import LandingLayout from "@/routes/LandingLayout";
import AppLayout from "@/routes/AppLayout ";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage ";
import SignupPage from "./Pages/SignupPage ";

const router = createBrowserRouter([
  // Landing (one-page)
  {
    element: <LandingLayout />,
    children: [{ index: true, element: <LandingPage /> }],
  },
  // App pages
  {
    element: <AppLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      // add more here: /courses, /profile, etc.
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);