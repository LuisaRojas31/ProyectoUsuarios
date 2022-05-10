import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Actualizar from "../pages/actualizar/Actualizar";
import ListUsers from "../pages/List/ListUsers";
import Login from "../pages/Login";

const RouterContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<ListUsers />} />
        <Route path="/actuali" element={<Actualizar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterContainer;
