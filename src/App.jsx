import { AboutContent } from './components/AboutContent';
import { BackToTopButton } from './components/BackToTopButton';
import { FooterContent } from './components/FooterContent';
import { HeaderContent } from './components/HeaderContent';
import { ProductsContent } from './components/ProductsContent';
import { ReviewsContent } from './components/ReviewsContent';
import { ShowCaseContent } from './components/ShowCaseContent';
import { TopNavigation } from './components/TopNavigation';
import { VisitUsContent } from './components/VisitUsContent';

export default function App() {
  return (
    <>
      <TopNavigation />
      <HeaderContent />
      <AboutContent />
      <ShowCaseContent />
      <ProductsContent />
      <ReviewsContent />
      <VisitUsContent />
      <FooterContent />
      <BackToTopButton />
    </>
  );
}
