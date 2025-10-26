import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import ProductDetail from "./pages/ProductDetail";
import FarmerDashboard from "./pages/FarmerDashboard";
import Learn from "./pages/Learn";
import Schemes from "./pages/Schemes";
import Auth from "./pages/Auth";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "hi" : "en"));
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation language={language} onLanguageToggle={toggleLanguage} />
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/marketplace" element={<Marketplace language={language} />} />
            <Route path="/product/:id" element={<ProductDetail language={language} />} />
            <Route path="/farmer-dashboard" element={<FarmerDashboard language={language} />} />
            <Route path="/learn" element={<Learn language={language} />} />
            <Route path="/schemes" element={<Schemes language={language} />} />
            <Route path="/auth" element={<Auth language={language} />} />
            <Route path="/about" element={<About language={language} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
