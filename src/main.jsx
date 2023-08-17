import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import router from "./router";
import "./global.less";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider
    theme={{
      token: {
        borderRadius: 2,
      },
    }}
  >
    <RouterProvider router={router} />
  </ConfigProvider>
);
