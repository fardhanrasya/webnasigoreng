import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MenuDetail from "./pages/MenuDetail";
import NotFound from "./pages/NotFound";
import FloatingLogos from "./components/FloatingLogos";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu/detail/:menuName" element={<MenuDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingLogos
            whatsappNumber="6281234567890"
            gofoodLink="https://gofood.co.id/restaurant-link"
            shopeefoodLink="https://shopeefood.co.id/restaurant-link"
          />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
