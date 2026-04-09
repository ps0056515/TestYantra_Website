import type { Service } from "@/content/site";
import managedQAServiceImage from "@/assets/serviceImages/managedqaservices.png";
import testautomation from "@/assets/serviceImages/test automation engineering.png";
import crowdTestingImage from "@/assets/serviceImages/crowd_testing.png";
import performanceEngineeringImage from "@/assets/serviceImages/performance-engineering.jpeg";
import securityTestingImage from "@/assets/serviceImages/security-testing.png";
import aiPoweredTestingImage from "@/assets/serviceImages/ai-powered-testing.png";
import selfHealingImage from "@/assets/serviceImages/self-healing-automation.png";
import applicationDevelopmentImage from "@/assets/serviceImages/application-developement.png";
import predictiveAnalyticsImage from "@/assets/serviceImages/predictive-analytics.png";
import deveopsImage from "@/assets/serviceImages/devops-cicd.png";
import cloudNative from "@/assets/serviceImages/cloud-native-engineering.png";
import trainingImage from "@/assets/serviceImages/training.png";
import visualAiImage from "@/assets/serviceImages/visual-ai.png";

export const SERVICE_IMAGES: Record<
  Service["slug"],
  typeof managedQAServiceImage
> = {
  "managed-qa": managedQAServiceImage,
  "crowd-testing": crowdTestingImage,
  "professional-services": managedQAServiceImage,
  training: trainingImage,
  "test-automation": testautomation,
  "performance-engineering": performanceEngineeringImage,
  "security-testing": securityTestingImage,
  "ai-testing": aiPoweredTestingImage,
  "devops-cicd": deveopsImage,
  "application-development": applicationDevelopmentImage,
  "self-healing-automation": selfHealingImage,
  "predictive-defect-analytics": predictiveAnalyticsImage,
  "visual-ai-accessibility": visualAiImage,
  "cloud-native-engineering": cloudNative,
};
