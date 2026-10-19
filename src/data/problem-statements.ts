import {
  HeartPulse,
  Leaf,
  Lightbulb,
  ShieldAlert,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";

export interface SpecificProblem {
  id: string;
  title: string;
  description: string;
}

export interface Challenge {
  id: number;
  name: string;
  subtitle: string;
  tagline: string;
  icon: LucideIcon;
  focusAreas: string[];
  refinedProblem: string;
  specificProblems: SpecificProblem[];
  suggestedTechnology: string;
  idealTeamMix: string;
  impactIndicators: string;
  watchPoints: string;
}

export const challenges: Challenge[] = [
  {
    id: 1,
    name: "GreenTech",
    subtitle: "Bio-energy and Sustainability",
    tagline: "Turning organic waste into energy and building cleaner, smarter communities",
    icon: Leaf,
    focusAreas: [
      "Waste-to-energy",
      "Biogas optimisation",
      "Waste segregation",
      "Carbon reduction",
    ],
    refinedProblem:
      "How can we convert organic waste from households, housing societies, markets, campuses and farms into useful energy, and make communities cleaner and lower in carbon?",
    specificProblems: [
      {
        id: "PS 1.1",
        title: "Segregation at source",
        description:
          "Wet and dry waste get mixed, which lowers the quality of feedstock for biogas plants. Build a low-cost tool (vision, smart-bin sensor or app) that guides residents to segregate correctly and gives feedback to societies and collectors.",
      },
      {
        id: "PS 1.2",
        title: "Biogas plant optimisation",
        description:
          "Small and community biogas or compressed-biogas units under-perform because feed mix, temperature and pH are not monitored. Build a monitoring and prediction solution that recommends feed adjustments, flags faults and forecasts gas yield.",
      },
      {
        id: "PS 1.3",
        title: "Waste-to-value marketplace and carbon tracking",
        description:
          "Waste generators, collectors and energy plants are poorly connected. Design a platform that matches feedstock supply and demand, optimises collection, and tracks energy generated and emissions avoided.",
      },
    ],
    suggestedTechnology:
      "Computer vision, IoT sensors (pH, temperature, gas, load cell), time-series forecasting, route optimisation, dashboards.",
    idealTeamMix:
      "Chemical, mechanical, environmental and electronics engineers; BCA/MCA developers; MBA students for business model and carbon economics; agriculture and environmental science students.",
    impactIndicators:
      "Kg of waste correctly segregated or diverted; forecast accuracy of gas yield; tonnes of CO₂e avoided (with the calculation method stated); cost per household served.",
    watchPoints:
      "Use simulated or low-risk set-ups for any gas-related hardware demo; anonymise household-level data.",
  },
  {
    id: 2,
    name: "HealthTech",
    subtitle: "Healthcare for All",
    tagline: "Accessible, affordable and timely healthcare for underserved communities",
    icon: HeartPulse,
    focusAreas: [
      "Telemedicine",
      "Early health-risk identification",
      "Patient monitoring",
      "Health awareness",
    ],
    refinedProblem:
      "How can technology make healthcare more accessible, affordable and timely for underserved communities, including villages, urban settlements, the elderly and persons with disabilities?",
    specificProblems: [
      {
        id: "PS 2.1",
        title: "Low-bandwidth teleconsultation",
        description:
          "Patients in remote and low-income areas struggle to reach a doctor. Build an offline-first, vernacular, voice-friendly consultation and follow-up system that works on basic smartphones and weak networks.",
      },
      {
        id: "PS 2.2",
        title: "Early risk screening by frontline workers",
        description:
          "Community health workers lack simple tools to flag risk for conditions such as diabetes, hypertension, anaemia or maternal complications. Build a screening and referral-support tool that helps decide who should see a doctor first.",
      },
      {
        id: "PS 2.3",
        title: "Chronic care and medicine adherence",
        description:
          "Patients with long-term conditions miss medicines and follow-ups. Build a remote monitoring and reminder system with caregiver and doctor alerts, using low-cost devices or phone-based inputs.",
      },
    ],
    suggestedTechnology:
      "Mobile and web apps that work offline, speech and language models for Indian languages, low-cost sensors and wearables, rule-based or ML risk scoring, SMS/IVR, and alignment with ABDM interoperability standards where feasible.",
    idealTeamMix:
      "Medicine, nursing, pharmacy, physiotherapy and public-health students; biomedical engineers; developers; designers; MBA students for healthcare operations.",
    impactIndicators:
      "Time to consultation or referral; share of high-risk cases correctly flagged on test data; improvement in adherence; cost per consultation.",
    watchPoints:
      "Position the prototype as decision support, not diagnosis. Consent and health-data privacy (DPDP Act, 2023) must be addressed. A health-science member should check the clinical logic.",
  },
  {
    id: 3,
    name: "ResQTech",
    subtitle: "Disaster Resilience",
    tagline: "Preparedness, early warning and emergency response",
    icon: ShieldAlert,
    focusAreas: [
      "Flood monitoring",
      "Risk mapping",
      "Evacuation planning",
      "Emergency resource coordination",
    ],
    refinedProblem:
      "How can technology improve disaster preparedness, early warning and emergency response for vulnerable communities, especially in flood-prone and coastal areas?",
    specificProblems: [
      {
        id: "PS 3.1",
        title: "Hyperlocal flood early warning",
        description:
          "City-level forecasts are too coarse for a ward or a village. Combine low-cost water-level and rain sensors, public weather and tide data and simple models to issue ward-level alerts in local languages.",
      },
      {
        id: "PS 3.2",
        title: "Vulnerability mapping and evacuation planning",
        description:
          "Authorities often lack current maps of who needs help first (elderly, disabled, pregnant, bed-ridden), where shelters are, and which routes are safe. Build a GIS-based risk map with dynamic evacuation routes.",
      },
      {
        id: "PS 3.3",
        title: "Emergency resource coordination",
        description:
          "During disasters, requests for rescue, boats, medicines and food are scattered and duplicated across calls and social media. Build a verified, de-duplicated request-and-response platform that works with poor connectivity (SMS, mesh or offline sync).",
      },
    ],
    suggestedTechnology:
      "GIS and open maps, IoT (ultrasonic water-level sensor, rain gauge), LoRa or SMS gateways, ML for short-term forecasting, offline-first apps, open satellite and weather data.",
    idealTeamMix:
      "Civil, electronics and IT engineers; GIS and geography students; MBA students for operations; social work and health students for first response; BCA/MCA developers.",
    impactIndicators:
      "Alert lead time; prediction accuracy on historical data; share of vulnerable households mapped; time taken to match a request with a resource.",
    watchPoints:
      "False alarms erode trust; protect location data of vulnerable people; the solution must keep working when internet or power fails.",
  },
  {
    id: 4,
    name: "TrustAI",
    subtitle: "Responsible Artificial Intelligence",
    tagline: "Fair, transparent, privacy-preserving and accountable AI",
    icon: ShieldCheck,
    focusAreas: [
      "Bias detection",
      "Explainable AI",
      "Privacy protection",
      "AI safety and governance",
    ],
    refinedProblem:
      "How can we build and audit AI systems that are fair, transparent, privacy-preserving and accountable to the people they affect, in the Indian context of many languages, regions and income groups?",
    specificProblems: [
      {
        id: "PS 4.1",
        title: "Bias audit toolkit",
        description:
          "AI is increasingly used in hiring, lending, admissions and public services. Build an easy tool that lets non-experts test a model or dataset for bias (gender, region, language, income proxies) and suggests fixes.",
      },
      {
        id: "PS 4.2",
        title: "Explainable and consent-aware AI",
        description:
          "People affected by an automated decision rarely get a clear reason. Build a plain-language, multilingual explanation layer, with consent and data-use controls, for a decision such as loan screening or health triage.",
      },
      {
        id: "PS 4.3",
        title: "Protecting citizens from AI-enabled fraud and misinformation",
        description:
          "Deepfakes, voice cloning and synthetic scams target ordinary users. Build a detection, warning or awareness solution that helps citizens verify suspicious content before acting on it.",
      },
    ],
    suggestedTechnology:
      "Fairness metrics libraries, SHAP/LIME explainability, federated learning or differential privacy, LLMs with guardrails, audio and image forensics, red-teaming.",
    idealTeamMix:
      "Computer applications, CS and data science students; law and policy students; management students for risk and governance; psychology or social science students; designers.",
    impactIndicators:
      "Bias metrics before and after mitigation; comprehension score of explanations among test users; detection precision and recall on a test set; documented privacy safeguards.",
    watchPoints:
      "Use only synthetic or openly licensed data. Never use real personal data. Provide a short model card stating limits and known failure cases.",
  },
  {
    id: 5,
    name: "SmartReach",
    subtitle: "Intelligent Logistics",
    tagline: "Affordable, efficient and accessible essential goods and services",
    icon: Truck,
    focusAreas: [
      "Route optimisation",
      "Last-mile delivery",
      "Supply-chain visibility",
      "Emergency supplies",
    ],
    refinedProblem:
      "How can smarter logistics make essential goods and services, such as food, medicines, farm produce and relief supplies, more affordable, efficient and accessible, especially at the last mile?",
    specificProblems: [
      {
        id: "PS 5.1",
        title: "Last-mile delivery for small businesses",
        description:
          "Neighbourhood pharmacies, kirana stores and cooperatives cannot afford sophisticated logistics tools. Build an affordable route-planning and delivery-coordination solution for them (batching, time windows, shared riders).",
      },
      {
        id: "PS 5.2",
        title: "Visibility and wastage reduction in perishable chains",
        description:
          "A large share of fruit, vegetables and dairy spoils between farm and consumer. Build a tracking and forecasting solution (cold-chain monitoring, demand prediction, farmer-to-market linkage) that cuts wastage and improves farmer realisation.",
      },
      {
        id: "PS 5.3",
        title: "Surplus and relief logistics",
        description:
          "Surplus food and relief supplies often fail to reach those in need on time. Build a demand-supply matching and dispatch tool for food banks, NGOs and disaster relief, covering inventory pre-positioning, vehicle allocation and delivery tracking.",
      },
    ],
    suggestedTechnology:
      "Route optimisation (graph algorithms, OR-Tools), GPS and telematics, demand forecasting, temperature sensors, QR traceability, WhatsApp/SMS interfaces, dashboards.",
    idealTeamMix:
      "MBA students in operations and supply chain; industrial, mechanical and IT engineers; BCA/MCA developers; agriculture students; designers.",
    impactIndicators:
      "Cost per delivery; delivery time; vehicle-km saved; percentage wastage reduced (simulated or pilot); order fill rate.",
    watchPoints:
      "Rider safety and fair pay; privacy of small-vendor data; the solution must work for low-tech users (WhatsApp, voice).",
  },
  {
    id: 6,
    name: "Open Innovation",
    subtitle: "Community Solutions",
    tagline: "Pressing community problems that do not fit the other challenges",
    icon: Lightbulb,
    focusAreas: [
      "Education",
      "Agriculture",
      "Accessibility",
      "Sanitation",
      "Water management",
      "Civic services",
    ],
    refinedProblem:
      "How can technology solve pressing community problems that do not fit into the other five challenges?",
    specificProblems: [
      {
        id: "PS 6.1",
        title: "Learning and livelihoods",
        description:
          "Personalised, vernacular learning support for first-generation learners, or skilling and job-linkage tools for youth in under-served areas.",
      },
      {
        id: "PS 6.2",
        title: "Farm and water",
        description:
          "Crop advisory, pest detection and irrigation scheduling for small farmers, or leakage and water-quality monitoring for villages, housing societies and campuses.",
      },
      {
        id: "PS 6.3",
        title: "Accessibility and civic services",
        description:
          "Assistive tools for people with visual, hearing, speech or mobility disabilities, or tools that simplify grievance redressal, sanitation reporting and access to government schemes.",
      },
    ],
    suggestedTechnology:
      "Open: any suitable technology; the choice must be justified by the problem.",
    idealTeamMix:
      "Any combination; teams are encouraged to include a member who belongs to, or works closely with, the affected community.",
    impactIndicators:
      "As per the problem chosen; the team must define its own primary metric and a baseline.",
    watchPoints:
      "Teams must explain why their problem does not fit Challenges 1–5 and show evidence the problem is real. Where possible, test accessibility features with actual users from the target group.",
  },
];
