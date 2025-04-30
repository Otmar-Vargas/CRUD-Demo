import { createBrowserRouter } from "react-router-dom";
import Inversions from "../inversions/pages/home";

import Error from "../share/errors/pages/Error";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Inversions />,
      errorElement: <Error />,
      children: [
        {
          path: "/inversions",
          element: <Inversions />,
          errorElement: <Error />
        }
      ], 
    },
  ]);
  export default router;