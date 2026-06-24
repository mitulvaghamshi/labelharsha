import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';

import { About } from './components/About';
import { BackToTop } from './components/BackToTop';
import { Catalog } from './components/Catalog';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { ProductDetails } from './components/ProductDetails';
import { Reviews } from './components/Reviews';
import { Showcase } from './components/Showcase';
import { VisitUs } from './components/VisitUs';

function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Showcase />
      <Catalog />
      <Reviews />
      <VisitUs />
      <Footer />
      <BackToTop />
    </>
  );
}

function Product() {
  const navigate = useNavigate();

  return (
    <ProductDetails onClose={() => {
      navigate('/labelharsha/');
    }} />
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/labelharsha/" element={<Home />} />
        <Route path="/labelharsha/:tag" element={<Product />} />
      </Routes>
    </Router>
  );
}
