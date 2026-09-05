import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import MediaPartner from "./pages/MediaPartner";
import Berita from "./pages/Berita";
import Proker from "./pages/Proker";
import Kontak from "./pages/Kontak";
import Divisi from "./pages/Divisi";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import ArtikelDetail from "./pages/ArtikelDetail";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/admin/ProtectedRoute";

import { LanguageProvider } from "./context/LanguageContext";
import PreloaderTransition from "./components/layout/PreloaderTransition";
import { Analytics } from "@vercel/analytics/react";

const queryClient = new QueryClient();

const App = () => (
  <LanguageProvider>
    <QueryClientProvider client={queryClient}>
      <PreloaderTransition>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Analytics />
          <BrowserRouter>
            <Routes>
              <Route element={<RootLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/divisi" element={<Divisi />} />
                <Route path="/divisi/:id" element={<Divisi />} />
                <Route path="/student-info/media-partner" element={<MediaPartner />} />
                <Route path="/student-info/berita" element={<Berita />} />
                <Route path="/artikel/:id" element={<ArtikelDetail />} />
                <Route path="/student-info/proker" element={<Proker />} />
                <Route path="/kontak" element={<Kontak />} />
              </Route>
              
              {/* Admin Routes without RootLayout (No Navbar/Footer) */}
              <Route path="/admin" element={<Login />} />
              <Route 
                path="/admin-dashboard" 
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />
              
              {/* Fallback Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </PreloaderTransition>
    </QueryClientProvider>
  </LanguageProvider>
);

export default App;
