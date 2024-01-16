import React from "react";
import { Navbar } from "../../ui";
import { Navigate, Route, Routes } from "react-router-dom";
import { DcPages, HeroPage, MarvelPages, SearchPages } from "../pages";

export const HeoresRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPages />} />
          <Route path="dc" element={<DcPages />} />
          <Route path="search" element={<SearchPages />} />
          <Route path="hero/:id" element={<HeroPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
