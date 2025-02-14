import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const { Header, Content, Footer, Sider } = Layout;

const ResponsiveLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed); // Toggle between true and false
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout
        style={{
          marginLeft: collapsed ? "0" : "200px",
          transition: "margin-left 0.3s",
        }}
      >
        <Header
          style={{
            padding: "0 16px",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            position: "fixed",
            width: "100%",
            zIndex: 10, // Ensure header is on top
          }}
        >
          {/* Toggle button */}
          <div style={{ position: "relative", zIndex: 11 }}>
            {collapsed ? (
              <MenuUnfoldOutlined
                onClick={toggleCollapse}
                style={{ fontSize: "18px", cursor: "pointer" }}
              />
            ) : (
              <MenuFoldOutlined
                onClick={toggleCollapse}
                style={{ fontSize: "18px", cursor: "pointer" }}
              />
            )}
          </div>
          <h2 style={{ marginLeft: "16px" }}>Menu</h2>
        </Header>
        <Content style={{ margin: "64px 16px 0", overflow: "auto" }}>
          {/* content area */}
          <div style={{ padding: 24, minHeight: 360 }}>
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ResponsiveLayout;
