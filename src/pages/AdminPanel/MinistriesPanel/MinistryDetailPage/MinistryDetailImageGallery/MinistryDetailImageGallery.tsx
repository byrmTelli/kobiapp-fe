import { useState } from "react";
import { MinistryDetailImageGalleryComponentProps } from "../types";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ImageReviewModal from "../../../../../components/ImageReviewModal/ImageReviewModal";
import { FaImages } from "react-icons/fa";
import { apiMinistry } from "../../../../../store/api/enhanced/enhancedApiMinistry";
import { toast } from "react-toastify";
import { apiHome } from "../../../../../store/api/enhanced/enhancedApiHome";

const MinistryImageGallery = ({
  ministry,
  placeHolderImage,
}: MinistryDetailImageGalleryComponentProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isInspectImageModalOpen, setIsInspectImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  const thumbnailsToShow = 5;
  const hasImages = ministry!.images && ministry.images.length > 0;
  const totalImages = hasImages ? ministry.images!.length : 0;
  const maxStartIndex = Math.max(0, totalImages - thumbnailsToShow);

  // Queries

  const [setImageAsCoverImage] =
    apiMinistry.usePostApiMinistrySetCoverImageOfMinistryMutation();

  // Handlers
  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex < maxStartIndex) {
      setStartIndex(startIndex + 1);
    }
  };

  const handleThumbnailClick = (index: number) => {
    setActiveImageIndex(index);
  };

  const handleImageInspect = () => {
    setIsInspectImageModalOpen(true);
    setSelectedImage(ministry.images![activeImageIndex].path!);
  };

  const handleSetCoverImageButtonClick = () => {
    setImageAsCoverImage({
      setMinistryCoverImageRequestModel: {
        ministryId: ministry.id!,
        imageId: ministry.images![activeImageIndex].id!,
      },
    })
      .unwrap()
      .then((res) => {
        if (res.statusCode == 200) {
          toast.success("Kapak fotografı olarak kaydedildi.");
          apiHome.util.invalidateTags(["GetMinistryListData"]);
        }
      })
      .catch();
  };

  return (
    <div className="grid grid-rows-5 gap-4">
      {isInspectImageModalOpen && selectedImage && (
        <ImageReviewModal
          images={ministry.images ?? []}
          isOpen={isInspectImageModalOpen}
          onClose={() => {
            setSelectedImage(null);
            setIsInspectImageModalOpen(false);
          }}
          initialImageIndex={activeImageIndex}
        />
      )}
      <div className="row-span-4 relative w-full h-full flex items-center justify-center bg-gray-100 p-2 shadow-lg">
        <img
          onClick={handleImageInspect}
          className="max-w-[500px] h-[500px] object-contain"
          src={
            hasImages
              ? ministry.images![activeImageIndex].path!
              : placeHolderImage
          }
          alt={`Selected image`}
        />
        <div
          onClick={handleSetCoverImageButtonClick}
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2"
        >
          <FaImages className="text-white" size={24} />
        </div>
      </div>

      <div className="flex items-center gap-2 w-full">
        {/* Previous button */}
        {totalImages && totalImages > thumbnailsToShow && (
          <button
            onClick={handlePrevious}
            disabled={startIndex === 0}
            className={`w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full ${
              startIndex === 0
                ? "text-gray-300"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <IoIosArrowBack size={18} />
          </button>
        )}

        {/* Visible thumbnails */}
        <div className="flex gap-2 overflow-hidden">
          {hasImages &&
            ministry.images
              ?.slice(startIndex, startIndex + thumbnailsToShow)
              .map((image, idx) => (
                <img
                  className={`object-cover w-[100px] h-[100px] cursor-pointer shadow-lg ${
                    activeImageIndex === startIndex + idx
                      ? "ring-2 ring-gray-300"
                      : ""
                  }`}
                  key={startIndex + idx}
                  src={image?.path ?? placeHolderImage}
                  alt={`${startIndex + idx}_image`}
                  onClick={() => handleThumbnailClick(startIndex + idx)}
                />
              ))}

          {/* More button */}
          {totalImages && totalImages > thumbnailsToShow && (
            <div
              className="w-[100px] h-[100px] bg-gray-400/50 flex items-center justify-center cursor-pointer"
              onClick={handleNext}
            >
              <span className="text-gray-100 font-bold">More</span>
            </div>
          )}
        </div>

        {totalImages && totalImages > thumbnailsToShow && (
          <button
            onClick={handleNext}
            disabled={startIndex >= maxStartIndex}
            className={`w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full ${
              startIndex >= maxStartIndex
                ? "text-gray-300"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <IoIosArrowForward size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export default MinistryImageGallery;
