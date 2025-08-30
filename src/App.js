import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./components/Routes";
import { ProfileStoreProvider } from "./components/store/ProfileStore";
import { Footer } from "./components/ui/Footer";

function App() {
  return (
    <BrowserRouter>
      <ProfileStoreProvider> 
  <Navbar />
  <AppRoutes />
  <Footer />
        </ProfileStoreProvider>
      
        
        
       
     
    </BrowserRouter>
  );
}

export default App;