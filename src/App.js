import "./App.css";
import React from "react";
import AppLayout from "./components/AppLayout";
import { Provider } from "react-redux";
import store from "./utils/redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Search from "./components/Search";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        {/* <AppLayout /> */}
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
