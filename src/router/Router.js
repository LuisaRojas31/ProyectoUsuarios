import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CrearUsuario from "../pages/create/CrearUsuario";
import ListUsers from "../pages/List/ListUsers";
import Login from "../pages/Login";

const RouterContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<ListUsers />} />
        <Route path="/crear" element={<CrearUsuario />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterContainer;
