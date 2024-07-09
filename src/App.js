import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrPage from "./components/Error";
import ResMenu from "./components/ResMenu";
import UserContext from "./utils/UserContext";
const AboutUs = lazy(() => import("./components/AboutUs"));
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartPage from "./components/CartPage";

const AppLayout = () => {
  const [uName, setUname] = useState("");


  useEffect(() => {
    setUname("User")
  }, [])
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ id: uName, setUname }}>
        <div className="app bg-slate-200">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};





const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/aboutus",
        element: (
          <Suspense>
            <AboutUs />
          </Suspense>
        )
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resID",
        element: <ResMenu />,
      },
      {
        path: "/cart",
        element: <CartPage />
      },
    ],  
    
    errorElement: <ErrPage />,
  },

])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
