import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browesr from "./Browesr";
import CardInfo from "./cardInfo/CardInfo";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browesr />,
    },{
      path:"/cardinfo/:id",
      element:<CardInfo/>
    },
  ]);
  return (
    <div>
      <div>

      {/* <img src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg"/> */}
      </div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
