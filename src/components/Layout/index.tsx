import React, { useState } from "react";
import Sidebar from "../Sidebar";
import TableOfContents from "../TableOfContents";
import "./index.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [headings, setHeadings] = useState<
    Array<{ id: string; text: string; level: number }>
  >([]);

  return (
    <div className="layout">
      <Sidebar />
      <main className="main-content">
        <div className="content-wrapper">{children}</div>
      </main>
      <TableOfContents headings={headings} onHeadingsChange={setHeadings} />
    </div>
  );
};

export default Layout;
