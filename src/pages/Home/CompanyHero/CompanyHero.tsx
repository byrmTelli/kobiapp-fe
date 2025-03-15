import heroImage from "../../../assets/home-hero-image.jpg";
import Button from "../../../components/Buttons/Button/Button";

export default function CompanyHero() {
  return (
    <div
      id="heroSection"
      className="w-full h-screen bg-gray-800 relative overflow-hidden"
    >
      <img src={heroImage} alt="hero" className="w-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col">
        <div className=" bg-black/50 w-full h-[20%] grid items-center justify-center  fade-in">
          <h1 className="text-gray-200 text-5xl font-bold">Bayram T.</h1>
        </div>
        <div className="h-[50%] flex items-center justify-center">
          <div className=" h-16 w-1/2 rounded-lg flex items-center justify-center  fade-in">
            <input
              type="text"
              className="w-full p-2 text-black px-10 bg-gray-200/40 h-full outline-none focus:bg-gray-200/80"
            />
            <Button
              title="Search"
              varient="amber"
              className="min-w-48 font-bold h-full"
              size="lg"
            />
          </div>
        </div>
        <div className="w-full h-[30%] bg-black/50 grid grid-cols-2   items-center justify-center">
          <div className="flex items-center justify-center text-gray-200">
            <div className="flex flex-col w-2/3 fade-in gap-4">
              <p className="text-4xl font-bold text-amber-300">
                Everything you need.
              </p>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cupiditate, eum ipsum ad, ab earum accusamus quae velit
                assumenda est accusantium quibusdam suscipit totam voluptatum
                magnam at, illo dolore optio. Ducimus assumenda quia magnam
                nulla sint eveniet doloremque suscipit placeat cupiditate
                similique voluptatem deleniti necessitatibus id ipsam, esse qui
                ipsum ab!
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center text-gray-200">
            <div className="flex flex-col w-2/3  fade-in">
              <p className="text-4xl font-bold text-amber-300">
                Everything you need.
              </p>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
