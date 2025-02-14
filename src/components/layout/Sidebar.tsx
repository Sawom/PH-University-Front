import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
const {  Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider
      breakpoint="md"
      collapsedWidth="0"
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
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItemsGenerator(adminPaths, "admin")}
      ></Menu>
    </Sider>
  );
};

export default Sidebar;
