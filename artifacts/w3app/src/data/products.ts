export type Product = {
  slug: string;
  title: string;
  shortDesc: string;
  icon: string;
  category: string;
};

export const products: Product[] = [
  {
    slug: "pos-software",
    title: "POS Software",
    shortDesc: "Complete Point of Sale system for retail & restaurants with billing, inventory and analytics.",
    icon: "🖥️",
    category: "Business Software",
  },
  {
    slug: "hrm-software",
    title: "HRM Software",
    shortDesc: "Human Resource Management system to manage employees, payroll, attendance and more.",
    icon: "👥",
    category: "Business Software",
  },
  {
    slug: "crm-software",
    title: "CRM Software",
    shortDesc: "Customer Relationship Management system to track leads, manage clients and boost sales.",
    icon: "🤝",
    category: "Business Software",
  },
  {
    slug: "amc-software",
    title: "AMC Software",
    shortDesc: "Annual Maintenance Contract management software for service businesses.",
    icon: "🔧",
    category: "Business Software",
  },
  {
    slug: "multi-recharge-portal",
    title: "Multi Recharge Portal",
    shortDesc: "All-in-one recharge portal for mobile, DTH, electricity and utility bill payments.",
    icon: "📱",
    category: "Portal",
  },
  {
    slug: "blood-donation-system",
    title: "Blood Donation System",
    shortDesc: "Digital platform to manage blood donors, inventory, requests and hospital coordination.",
    icon: "🩸",
    category: "Healthcare",
  },
  {
    slug: "gym-management-system",
    title: "GYM Management System",
    shortDesc: "Complete gym management solution for memberships, attendance, fees and trainer management.",
    icon: "💪",
    category: "Management System",
  },
  {
    slug: "aeps",
    title: "AEPS",
    shortDesc: "Aadhaar Enabled Payment System for banking transactions using biometric authentication.",
    icon: "🏦",
    category: "FinTech",
  },
  {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    shortDesc: "Smart inventory tracking system with real-time stock updates, alerts and reporting.",
    icon: "📦",
    category: "Management System",
  },
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    shortDesc: "Comprehensive hospital management software covering patients, doctors, billing and pharmacy.",
    icon: "🏥",
    category: "Healthcare",
  },
  {
    slug: "billing-software",
    title: "Billing Software (With GST / Without GST)",
    shortDesc: "Flexible billing software with GST-compliant and non-GST invoice generation for all businesses.",
    icon: "🧾",
    category: "Business Software",
  },
  {
    slug: "pos-software-applications",
    title: "POS Software Applications",
    shortDesc: "Mobile and tablet POS application for on-the-go billing, sales tracking and payment collection.",
    icon: "📲",
    category: "Business Software",
  },
  {
    slug: "ecommerce-websites",
    title: "E-Commerce Websites",
    shortDesc: "Feature-rich online store with product management, cart, payment gateway and order tracking.",
    icon: "🛒",
    category: "Web Application",
  },
  {
    slug: "hotel-booking-applications",
    title: "Hotel Booking Applications",
    shortDesc: "End-to-end hotel booking system with room management, reservations, check-in/out and billing.",
    icon: "🏨",
    category: "Web Application",
  },
  {
    slug: "matrimonial-applications",
    title: "Matrimonial Applications",
    shortDesc: "Matrimonial platform with profile management, smart matching, messaging and subscription system.",
    icon: "💍",
    category: "Web Application",
  },
  {
    slug: "doctor-appointment-app",
    title: "Doctor Appointment App",
    shortDesc: "Online doctor appointment booking system with patient management, prescriptions and reminders.",
    icon: "👨‍⚕️",
    category: "Healthcare",
  },
  {
    slug: "learning-management-software",
    title: "Learning Management Software",
    shortDesc: "LMS platform for online courses, student tracking, quizzes, certificates and live classes.",
    icon: "🎓",
    category: "Education",
  },
  {
    slug: "grocery-application",
    title: "Grocery Application",
    shortDesc: "On-demand grocery delivery app with product catalog, cart, delivery tracking and payment integration.",
    icon: "🛍️",
    category: "Web Application",
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug) ?? null;

export const productCategories = [...new Set(products.map((p) => p.category))];
