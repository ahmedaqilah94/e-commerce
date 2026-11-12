import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layer from "./pages/Layer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import Account from "./pages/Account";
import CheckOut from "./pages/CheckOut";
import ErrorPage from "./pages/ErrorPage";
import ProductViewPage from "./pages/ProductView";
import LogIn from "./pages/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layer />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <LogIn /> },
      { path: "/cart", element: <Cart /> },
      { path: "/cart/checkOut", element: <CheckOut /> },
      { path: "/wishlist", element: <WishList /> },
      { path: "/acount", element: <Account /> },
      { path: "/product/:id", element: <ProductViewPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
