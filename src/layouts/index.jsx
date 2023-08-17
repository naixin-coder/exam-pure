import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout, Menu } from "antd";
import styles from "./index.module.less";
import { Link } from "react-router-dom";

const { Content, Sider } = Layout;
const BasicLayout = () => {
  const [selectKeys, setSelectKeys] = useState([]);
  const list = [
    { label: <Link to="/first">第一题</Link>, key: "/first" },
    { label: <Link to="/second">第二题</Link>, key: "/second" },
    { label: <Link to="/third">第三题</Link>, key: "/third" },
  ];
  return (
    <Layout className={styles.layout}>
      <Sider theme="light">
        <Menu
          selectedKeys={selectKeys}
          theme="light"
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
