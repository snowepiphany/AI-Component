import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "@arco-design/web-react";
import { IconApps, IconCode } from "@arco-design/web-react/icon";
import "./Sidebar.css";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

interface MenuItemConfig {
  key: string;
  title: string;
  path?: string;
}

interface MenuGroup {
  key: string;
  title: string;
  icon?: React.ReactNode;
  children: MenuItemConfig[];
}

const menuData: MenuGroup[] = [
  {
    key: "general",
    title: "通用",
    icon: <IconApps />,
    children: [
      { key: "button", title: "Button 按钮", path: "/components/button" },
      { key: "input", title: "Input 输入框", path: "/components/input" },
    ],
  },
  {
    key: "data",
    title: "数据展示",
    icon: <IconCode />,
    children: [
      { key: "table", title: "Table 表格", path: "/components/table" },
    ],
  },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const getSelectedKeys = () => {
    const path = location.pathname;
    const item = menuData
      .flatMap((group) => group.children)
      .find((child) => child.path === path);
    return item ? [item.key] : [];
  };

  const getOpenKeys = () => {
    const path = location.pathname;
    for (const group of menuData) {
      if (group.children.some((child) => child.path === path)) {
        return [group.key];
      }
    }
    return [];
  };

  const handleMenuClick = (key: string) => {
    const item = menuData
      .flatMap((group) => group.children)
      .find((child) => child.key === key);
    if (item?.path) {
      navigate(item.path);
    }
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <div className="logo">AI Component</div>
      </div>
      <div className="sidebar-menu">
        <Menu
          style={{ width: "100%" }}
          selectedKeys={getSelectedKeys()}
          defaultOpenKeys={getOpenKeys()}
          onClickMenuItem={handleMenuClick}
        >
          {menuData.map((group) => (
            <SubMenu
              key={group.key}
              title={
                <span>
                  {group.icon}
                  <span style={{ marginLeft: 8 }}>{group.title}</span>
                </span>
              }
            >
              {group.children.map((item) => (
                <MenuItem key={item.key}>{item.title}</MenuItem>
              ))}
            </SubMenu>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default Sidebar;
