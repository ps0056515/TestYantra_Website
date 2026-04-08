import type { Industry } from "@/content/site";
import insuranceArtImage from "@/assets/industryImages/Insurance.png";
import bankingArtImage from "@/assets/industryImages/BFSI-1.png";
import telecomArtImage from "@/assets/industryImages/telecom.png";
import consumerElectronicsArtImage from "@/assets/industryImages/Consumer Electronics.png";

export const INDUSTRY_ART: Record<Industry["slug"], typeof bankingArtImage> = {
  "banking-finance": bankingArtImage,
  insurance: insuranceArtImage,
  "retail-ecommerce": consumerElectronicsArtImage,
  "media-entertainment": telecomArtImage,
  communications: telecomArtImage,
  travel: telecomArtImage,
  "consumer-electronics": consumerElectronicsArtImage,
};
