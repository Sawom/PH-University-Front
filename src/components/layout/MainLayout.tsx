import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

const ResponsiveLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed); // Toggle between true and false
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="md"
        collapsedWidth="0"
        collapsible
        collapsed={collapsed}
        onBreakpoint={(broken) => setCollapsed(broken)}
        onCollapse={(collapsed) => setCollapsed(collapsed)}
        style={{
          position: "fixed",
          height: "100vh",
          left: 0,
          zIndex: 10, // Ensure the sidebar is on top
        }}
      >
        <div
          style={{
            color: "white",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>PH Uni</h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Dashboard</Menu.Item>
          <Menu.Item key="2">Profile</Menu.Item>
          <Menu.Item key="3">Profile2</Menu.Item>
        </Menu>
      </Sider>

      <Layout style={{ marginLeft: collapsed ? "0" : "200px", transition: "margin-left 0.3s" }}>
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
              <MenuUnfoldOutlined onClick={toggleCollapse} style={{ fontSize: "18px", cursor: "pointer" }} />
            ) : (
              <MenuFoldOutlined onClick={toggleCollapse} style={{ fontSize: "18px", cursor: "pointer" }} />
            )}
          </div>
          {/* <h2 style={{ marginLeft: "16px" }}>Responsive Header</h2> */}
        </Header>
        <Content style={{ margin: "64px 16px 0", overflow: "auto" }}>
          <div style={{ padding: 24, minHeight: 360 }}>Content Area</div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default ResponsiveLayout;
