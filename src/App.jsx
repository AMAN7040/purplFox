import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import OurPartners from "./Pages/OurPartners";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "pages/about-us",
        element: <AboutUs />,
      },
      {
        path: "pages/our-partners",
        element: <OurPartners />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider
      router={appRouter}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}

export default App;
