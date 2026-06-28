import { About } from "./components/About";
import { BackToTop } from "./components/BackToTop";
import { Catalog } from "./components/Catalog";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
// import { Reviews } from './components/Reviews';
import { Showcase } from "./components/Showcase";
import { VisitUs } from "./components/VisitUs";

export default function App() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Showcase />
      <Catalog />
      {/* <Reviews /> */}
      <VisitUs />
      <Footer />
      <BackToTop />
    </>
  );
}
