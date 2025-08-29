// App.js
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar stays on every page */}
      <Navbar />

      {/* Your page routes are defined in Routes.js */}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;