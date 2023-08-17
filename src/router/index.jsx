import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "@/layouts";
import List from "@/pages/list";
import First from "@/pages/first";
import Second from "@/pages/second";
import Third from "@/pages/third";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        loader: () => {
          return redirect("/list");
        },
      },
      {
        path: "list",
        element: <List />,
      },
      {
        path: "first",
        element: <First />,
      },
      {
        path: "second",
        element: <Second />,
      },
      {
        path: "third",
        element: <Third />,
      },
    ],
  },
]);

export default router;
