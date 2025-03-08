import testere from "../../../../assets/palmera-testere.webp";
import Button from "../../../../components/Buttons/Button/Button";

export default function ProductCard() {
  return (
    <div className="w-full h-[400px] bg-white shadow-lg overflow-hidden relative group">
      {/* Ürün Görseli */}
      <img src={testere} alt="testere" className="w-full h-96 object-cover" />

      {/* Hover ile Açılan Bilgi Kartı */}
      <div
        className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-4 
                      flex flex-col items-center text-center overflow-hidden 
                      h-34 transition-all duration-500 group-hover:h-full"
      >
        {/* İlk başta görünecek kısım */}
        <div className="w-full transition-opacity duration-500 group-hover:opacity-0">
          <p className="font-semibold">Palmera Testere</p>
          <p className="text-4xl font-bold">1399</p>
          <p className="text-sm">Kargo Bedava</p>
        </div>

        {/* Hover ile açılacak detaylar */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-4">
          <p className="text-xs px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            quis...
          </p>
          <div className="w-full flex items-center justify-center gap-2 mt-4 text-xs">
            <Button title="Detail" varient="amber" className="min-w-32" />
            <Button title="Buy Now" varient="amber" className="min-w-32" />
            <Button title="Add to Cart" varient="amber" className="min-w-32" />
          </div>
        </div>
      </div>
    </div>
  );
}
