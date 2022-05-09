import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ListUsers from "../pages/List/ListUsers";
import Login from "../pages/Login";

const RouterContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<ListUsers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterContainer;
