import HomePage from "./Pages/HomePage";
import Libary from "./Pages/Libary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/ShinobiDesigns",
      element: <HomePage />,
    },
    {
      path: "/ShinobiDesigns/libary",
      element: <Libary />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
