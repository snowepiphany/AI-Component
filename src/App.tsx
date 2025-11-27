import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ButtonDoc from "./components/Button";
import InputDoc from "./components/Input";
import TableDoc from "./components/Table";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/components/button" replace />}
          />
          <Route path="/components/button" element={<ButtonDoc />} />
          <Route path="/components/input" element={<InputDoc />} />
          <Route path="/components/table" element={<TableDoc />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
