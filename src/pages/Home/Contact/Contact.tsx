import { PageSectionProps } from "../../../types/homePageTypes";
import ContactUsForm from "./ContactUsForm/ContactUsForm";
import mapImage from "../../../assets/map-image.png";

export default function AboutUsPage({ title }: PageSectionProps) {
  return (
    <div
      id="contactSection"
      className="flex flex-col items-center w-full min-h-screen text-gray-700 dark:text-gray-200 py-10 fade-in"
    >
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="w-5/6 mt-10">
        <div className="grid grid-cols-2 gap-4 rounded-lg shadow-xl p-4 border border-gray-300 dark:border-gray-700">
          <div className="min-h-[700px]">
            <img
              src={mapImage}
              alt="map"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
}
