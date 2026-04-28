import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Index from "./pages/Index.tsx";
import Lavori from "./pages/Lavori.tsx";
import LavoroDettaglio from "./pages/LavoroDettaglio.tsx";
import ChiSiamo from "./pages/ChiSiamo.tsx";
import Servizi from "./pages/Servizi.tsx";
import Contatti from "./pages/Contatti.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/lavori" element={<Lavori />} />
            <Route path="/lavori/:slug" element={<LavoroDettaglio />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/servizi" element={<Servizi />} />
            <Route path="/contatti" element={<Contatti />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
