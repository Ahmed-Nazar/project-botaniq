
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import PlantingMenu from "./components/PlantingMenu";
import Marketplace from "./components/Marketplace";
import LoginPage from "./components/LoginPage";
import Community from "./components/Community";
import Sustainability from "./components/Sustainability";
import UserProfile from "./components/UserProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Navbar />
      <Container fluid className="px-0">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/planting" element={<PlantingMenu />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/community" element={<Community />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
