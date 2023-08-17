import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout, Menu } from "antd";
import styles from "./index.module.less";

const { Content, Sider } = Layout;
const BasicLayout = () => {
  const [selectKeys, setSelectKeys] = useState([]);
  const list = [
    { label: "第一题", key: "/first" },
    { label: "第二题", key: "/second" },
    { label: "第三题", key: "/third" },
  ];
  return (
    <Layout className={styles.layout}>
      <Sider>
        <Menu
          selectedKeys={selectKeys}
          mode="inline"
          items={list}
          onSelect={({ selectedKeys }) => setSelectKeys(selectedKeys)}
        />
      </Sider>
      <Content style={{ padding: 10 }}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default BasicLayout;
