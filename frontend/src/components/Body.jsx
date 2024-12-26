import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browesr from "./Browesr";
import Signup from "./Signup";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },{
      path: "/browser",
      element: <Browesr />,
    },{
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return <div>
<RouterProvider router={appRouter}/>



  </div>;
};
export default Body;
