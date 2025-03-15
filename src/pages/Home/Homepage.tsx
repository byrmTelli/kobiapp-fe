import ProductDisplay from "./ProductDisplay/ProductDisplay";
import Contact from "./Contact/Contact";
import CompanyHero from "./CompanyHero/CompanyHero";
import ScrollToTopButton from "../../components/Buttons/ScrollToTopButton/ScrollToTopButton";

export default function Homepage() {
  // States
  // Handlers

  return (
    <div className="flex flex-col items-center justify-center">
      <ScrollToTopButton />
      <CompanyHero />
      <ProductDisplay />
      <Contact title="Bize Ulaşın" />
    </div>
  );
}
