import React, { useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Download,
} from "lucide-react";
import { ImageRevieWModalProps } from "./types";

const ImageReviewModal = ({
  isOpen,
  onClose,
  images,
  initialImageIndex = 0,
}: ImageRevieWModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);
  const [zoomLevel, setZoomLevel] = useState(1);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentImageIndex];

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    setZoomLevel(1);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Close button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 z-50"
        aria-label="Kapat"
      >
        <X size={24} />
      </button>

      {/* Image container */}
      <div className="w-full h-full flex flex-col">
        {/* Image view */}
        <div className="flex-1 flex items-center justify-center overflow-hidden relative">
          <img
            src={currentImage?.path || "/api/placeholder/800/600"}
            alt={currentImage?.path || "İncelenen resim"}
            className="max-h-full transition-transform duration-200 ease-in-out cursor-move select-none"
            style={{
              transform: `scale(${zoomLevel})`,
              maxWidth: "90%",
            }}
          />

          {/* Navigation buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
            aria-label="Önceki resim"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
            aria-label="Sonraki resim"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Toolbar */}
        <div className="h-16 bg-gray-900 flex items-center justify-between px-6">
          <div className="text-white">
            {currentImageIndex + 1} / {images.length}
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleZoomOut}
              className="text-white hover:text-gray-300 p-2"
              aria-label="Uzaklaştır"
              disabled={zoomLevel <= 0.5}
            >
              <ZoomOut size={20} />
            </button>

            <div className="text-white flex items-center">
              {Math.round(zoomLevel * 100)}%
            </div>

            <button
              onClick={handleZoomIn}
              className="text-white hover:text-gray-300 p-2"
              aria-label="Yakınlaştır"
              disabled={zoomLevel >= 3}
            >
              <ZoomIn size={20} />
            </button>

            <button
              className="text-white hover:text-gray-300 p-2 ml-4"
              aria-label="İndir"
            >
              <Download size={20} />
            </button>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="h-24 bg-gray-800 flex items-center justify-center gap-2 px-4 overflow-x-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className={`h-16 w-16 flex-shrink-0 cursor-pointer border-2 ${
                index === currentImageIndex
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
              onClick={() => {
                setCurrentImageIndex(index);
                setZoomLevel(1);
              }}
            >
              <img
                src={image?.path || "/api/placeholder/100/100"}
                alt={`Küçük resim ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageReviewModal;
