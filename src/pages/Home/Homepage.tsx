import ProductDisplay from "./ProductDisplay/ProductDisplay";
import Contact from "./Contact/Contact";
import CompanyHero from "./CompanyHero/CompanyHero";
import ScrollToTopButton from "../../components/Buttons/ScrollToTopButton/ScrollToTopButton";
import { apiHome } from "../../store/api/enhanced/enhancedApiHome";

export default function Homepage() {
  // States
  // Queries
  const categoryListQuery =
    apiHome.useGetApiHomeGetMinistryCategoryListDataQuery();

  // Mutations
  const categoryListData = categoryListQuery.data?.data ?? [];
  // Handlers

  return (
    <div className="flex flex-col items-center justify-center">
      <ScrollToTopButton />
      <CompanyHero />
      <ProductDisplay categories={categoryListData} />
      <Contact title="Bize Ulaşın" />
    </div>
  );
}
