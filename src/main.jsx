import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import { Users } from "./Users";
import UpdateUser from "./UpdateUser";
import { CreateUser } from "./CreateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users/>,
  },
  {
    path:'/update/:id',
    element: <UpdateUser></UpdateUser>
  },
  {
    path: '/createUser',
    element: <CreateUser></CreateUser>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);