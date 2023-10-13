import { createBrowserRouter } from "react-router-dom";
import { lazy,Suspense } from "react";
import Contact from "../Contact";
import UseCallback from "../Pages/UseCallback";
// import UseMemo from "../Pages/UseMemo";
import App from "../App";
import Loading from "../components/Loading";
import UseRef from "../Pages/UseRef";
const  UseMemo = lazy(()=>import("../Pages/UseMemo"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/usememo",
        element:<Suspense fallback={<Loading/>}> <UseMemo /></Suspense>,
      },
      {
        path: "/usecallback",
        element: <UseCallback />,
      },
      {
        path: "/useref",
        element: <UseRef />,
      },
    ],
  },
]);
export default appRouter;
