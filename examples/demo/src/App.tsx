import { useState } from "react";
import { Layout, Menu } from "@arco-design/web-react";
import { IconApps, IconCode, IconTool } from "@arco-design/web-react/icon";
import ButtonDemo from "./pages/ButtonDemo";
import InputDemo from "./pages/InputDemo";
import TableDemo from "./pages/TableDemo";
import "./App.css";

// Hooks 相关演示
import UseLocalStorageDemo from "./pages/hooks/UseLocalStorageDemo";
import UseDebounceDemo from "./pages/hooks/UseDebounceDemo";

// Utils 相关演示
import FormatDateDemo from "./pages/utils/FormatDateDemo";
import GenerateIdDemo from "./pages/utils/GenerateIdDemo";

const { Header, Sider, Content } = Layout;
const MenuItem = Menu.Item;

type PackageType = "design" | "hooks" | "utils";
type ComponentKey = string;

interface MenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
}

// 定义每个包下的菜单项
const packageMenus: Record<PackageType, MenuItem[]> = {
  design: [
    { key: "button", label: "Button 按钮", icon: <IconApps /> },
    { key: "input", label: "Input 输入框", icon: <IconApps /> },
    { key: "table", label: "Table 表格", icon: <IconApps /> },
  ],
  hooks: [
    { key: "useLocalStorage", label: "useLocalStorage", icon: <IconCode /> },
    { key: "useDebounce", label: "useDebounce", icon: <IconCode /> },
  ],
  utils: [
    { key: "formatDate", label: "formatDate", icon: <IconTool /> },
    { key: "generateId", label: "generateId", icon: <IconTool /> },
  ],
};

function App() {
  const [currentPackage, setCurrentPackage] = useState<PackageType>("design");
  const [selectedKey, setSelectedKey] = useState<ComponentKey>("button");

  // 切换包时，自动选择该包的第一个项目
  const handlePackageChange = (pkg: PackageType) => {
    setCurrentPackage(pkg);
    const firstItem = packageMenus[pkg][0];
    if (firstItem) {
      setSelectedKey(firstItem.key);
    }
  };

  const renderContent = () => {
    // Design 组件
    if (currentPackage === "design") {
      switch (selectedKey) {
        case "button":
          return <ButtonDemo />;
        case "input":
          return <InputDemo />;
        case "table":
          return <TableDemo />;
        default:
          return <ButtonDemo />;
      }
    }

    // Hooks
    if (currentPackage === "hooks") {
      switch (selectedKey) {
        case "useLocalStorage":
          return <UseLocalStorageDemo />;
        case "useDebounce":
          return <UseDebounceDemo />;
        default:
          return <UseLocalStorageDemo />;
      }
    }

    // Utils
    if (currentPackage === "utils") {
      switch (selectedKey) {
        case "formatDate":
          return <FormatDateDemo />;
        case "generateId":
          return <GenerateIdDemo />;
        default:
          return <FormatDateDemo />;
      }
    }

    return <ButtonDemo />;
  };

  return (
    <Layout style={{ height: "100vh" }}>
      {/* 顶部 Header - 导航包 */}
      <Header
        style={{
          backgroundColor: "#fff",
          borderBottom: "1px solid var(--color-border)",
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          height: 64,
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            marginRight: 40,
            color: "#1d2129",
          }}
        >
          AI Component
        </div>
        <Menu
          mode="horizontal"
          selectedKeys={[currentPackage]}
          onClickMenuItem={(key) => handlePackageChange(key as PackageType)}
          style={{ flex: 1, border: "none" }}
        >
          <MenuItem key="design">
            <IconApps /> 组件库 (Design)
          </MenuItem>
          <MenuItem key="hooks">
            <IconCode /> 自定义 Hook (Hooks)
          </MenuItem>
          <MenuItem key="utils">
            <IconTool /> 工具函数 (Utils)
          </MenuItem>
        </Menu>
      </Header>

      <Layout>
        {/* 左侧 Sider - 显示当前包下的内容 */}
        <Sider
          style={{
            backgroundColor: "#fff",
            borderRight: "1px solid var(--color-border)",
          }}
        >
          <div
            style={{
              padding: "16px 20px",
              borderBottom: "1px solid var(--color-border)",
              fontSize: 14,
              fontWeight: 600,
              color: "#86909c",
            }}
          >
            {currentPackage === "design" && "组件列表"}
            {currentPackage === "hooks" && "Hooks 列表"}
            {currentPackage === "utils" && "工具函数列表"}
          </div>
          <Menu
            selectedKeys={[selectedKey]}
            onClickMenuItem={(key) => setSelectedKey(key)}
            style={{ marginTop: 0 }}
          >
            {packageMenus[currentPackage].map((item) => (
              <MenuItem key={item.key}>
                {item.icon} {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Sider>

        {/* 右侧内容区 */}
        <Content
          style={{
            backgroundColor: "#f7f8fa",
            overflow: "auto",
          }}
        >
          <div
            style={{
              padding: "40px",
              maxWidth: 1200,
              margin: "0 auto",
            }}
          >
            {renderContent()}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
