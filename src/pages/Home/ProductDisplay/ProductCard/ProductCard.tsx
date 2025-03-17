import placeHolder from "../../../../assets/placeholder.jpg";
import Button from "../../../../components/Buttons/Button/Button";
import { ProductCardProps } from "./types";

export default function ProductCard({ ministry }: ProductCardProps) {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contactSection");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-[400px] bg-white shadow-lg overflow-hidden relative group fade-in">
      <img
        src={ministry?.coverImage?.path ?? placeHolder}
        alt="testere"
        className="w-full h-96 object-cover"
      />

      <div
        className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-4 
                      flex flex-col items-center text-center overflow-hidden 
                      h-34 transition-all duration-500 group-hover:h-full"
      >
        <div className="w-full transition-opacity duration-500 group-hover:opacity-0">
          <p className="font-semibold text-2xl">{ministry?.title}</p>
          <p className="font-bold">{ministry?.category?.name}</p>
        </div>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-4">
          <p className="text-xl font-bold">{ministry?.description}</p>
          <div className="w-full flex items-center justify-center gap-2 mt-4 text-xs">
            <Button
              title="Destek Talebi Oluştur"
              varient="amber"
              className="min-w-32"
              onClick={handleScrollToContact}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
