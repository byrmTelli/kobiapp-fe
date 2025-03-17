import { MinistryImageViewModel } from "../../store/api/generated/generatedApiMinistry";

interface ImageReviewModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
  images: MinistryImageViewModel[];
  initialImageIndex?: number;
}

export type ImageRevieWModalProps = ImageReviewModalComponentProps;
