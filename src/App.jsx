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
      <Header />
      <About />
      <Showcase />
      <Catalog />
      <Reviews />
      <VisitUs />
    </>
  );
}

function Product() {
  const navigate = useNavigate();
  return (
    <ProductDetails onClose={() => { navigate(-1); }} />
  );
}

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/labelharsha/" element={<Home />} />
        <Route path="/labelharsha/header" element={<Header />} />
        <Route path="/labelharsha/about" element={<About />} />
        <Route path="/labelharsha/showcase" element={<Showcase />} />
        <Route path="/labelharsha/catalog" element={<Catalog />} />
        <Route path="/labelharsha/reviews" element={<Reviews />} />
        <Route path="/labelharsha/contact" element={<VisitUs />} />
        <Route path="/labelharsha/:tag" element={<Product />} />
      </Routes>
      <Footer />
      <BackToTop />
    </Router>
  );
}
