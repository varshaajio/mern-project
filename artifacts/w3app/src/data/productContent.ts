export type ProductSection = {
  heading: string;
  body: string;
};

export type ProductContent = {
  slug: string;
  headline: string;
  description: string[];
  features: string[];
  sections: ProductSection[];
  whoUses?: string[];
  cta: string;
};

export const productContentMap: Record<string, ProductContent> = {
  "pos-software": {
    slug: "pos-software",
    headline: "What is POS Software?",
    description: [
      "POS (Point of Sale) Software is a comprehensive system that businesses use to manage sales transactions, inventory, and customer interactions at the point of purchase.",
      "It integrates both hardware (such as a cash register, barcode scanner, and receipt printer) and advanced software that efficiently processes sales, tracks real-time inventory levels, generates insightful reports, and enhances overall business operations.",
      "By automating key processes, POS software improves accuracy, reduces manual workload, and streamlines financial management, making it an essential tool for retail stores, restaurants, and service providers.",
    ],
    features: [
      "Fast & Efficient Transactions",
      "Inventory Management",
      "Sales Tracking & Reporting",
      "Customer Management",
      "Financial Automation",
      "Multi-Payment Support",
    ],
    sections: [
      { heading: "Why is POS Software Used in Business?", body: "POS software automates billing, reduces manual errors, and provides real-time sales data helping businesses make informed decisions and serve customers faster." },
      { heading: "Who Uses POS Software?", body: "Retail stores, restaurants, supermarkets, pharmacies, clothing boutiques, electronics shops, and any business that handles daily sales transactions." },
    ],
    whoUses: ["Retail Stores", "Restaurants & Cafes", "Supermarkets", "Pharmacies", "Clothing Boutiques", "Electronics Shops"],
    cta: "Get a POS Demo",
  },

  "hrm-software": {
    slug: "hrm-software",
    headline: "What is HRM Software?",
    description: [
      "HRM (Human Resource Management) Software is a digital tool designed to help businesses efficiently manage their workforce and HR processes.",
      "It automates essential HR functions such as payroll processing, attendance tracking, recruitment management, employee record keeping, and performance evaluation.",
    ],
    features: [
      "Payroll Management",
      "Attendance Tracking",
      "Recruitment Management",
      "Performance Management",
      "Employee Records",
      "Leave Management",
    ],
    sections: [
      { heading: "Why is HRM Software Used in Business?", body: "HRM software reduces manual HR tasks, ensures accurate payroll processing, tracks employee performance, and helps businesses comply with labour regulations." },
      { heading: "Who Uses HRM Software?", body: "Corporates, SMEs, manufacturing firms, healthcare organizations, educational institutions, and any business with a structured workforce." },
    ],
    whoUses: ["Corporates", "Manufacturing Firms", "Healthcare Organizations", "Educational Institutions", "SMEs"],
    cta: "Get an HRM Demo",
  },

  "crm-software": {
    slug: "crm-software",
    headline: "What is CRM Software?",
    description: [
      "CRM (Customer Relationship Management) Software helps businesses manage customer interactions, sales activities, and marketing campaigns in one centralized platform.",
      "It stores customer data, tracks communication history, automates follow-ups, and strengthens relationships to increase sales and long-term customer retention.",
    ],
    features: [
      "Centralized Customer Data",
      "Sales Management & Lead Tracking",
      "Customer Communication",
      "Marketing Automation",
      "Pipeline Management",
      "Analytics & Reports",
    ],
    sections: [
      { heading: "Why is CRM Software Used in Business?", body: "CRM software helps businesses convert leads faster, retain existing customers, track sales performance, and automate marketing activities to improve revenue." },
      { heading: "Who Uses CRM Software?", body: "Sales teams, marketing departments, e-commerce businesses, real estate firms, financial services, and any business focused on customer acquisition and retention." },
    ],
    whoUses: ["Sales Teams", "Marketing Departments", "E-Commerce Businesses", "Real Estate Firms", "Financial Services"],
    cta: "Get a CRM Demo",
  },

  "amc-software": {
    slug: "amc-software",
    headline: "What is AMC Software?",
    description: [
      "AMC (Annual Maintenance Contract) Software helps businesses manage maintenance contracts, service requests, and customer support efficiently from one centralized platform.",
      "It allows companies to track service agreements, schedule maintenance visits, manage technicians, and automate billing for businesses that provide ongoing maintenance services.",
    ],
    features: [
      "Contract Management",
      "Service Scheduling",
      "Complaint Management",
      "Billing & Payments",
      "Technician Management",
      "Service History Tracking",
    ],
    sections: [
      { heading: "Why is AMC Software Used in Business?", body: "AMC software ensures service businesses never miss a maintenance visit, tracks contract renewals automatically, manages technician assignments, and provides billing automation." },
      { heading: "Who Uses AMC Software?", body: "IT service companies, HVAC companies, elevator maintenance firms, medical equipment service providers, and businesses offering after-sales support." },
    ],
    whoUses: ["IT Service Companies", "HVAC Firms", "Elevator Maintenance", "Medical Equipment Providers", "After-Sales Support Businesses"],
    cta: "Get an AMC Demo",
  },

  "multi-recharge-portal": {
    slug: "multi-recharge-portal",
    headline: "What is a Multi Recharge Portal?",
    description: [
      "Start your own recharge business with our powerful Multi Recharge Portal. Recharge mobile, DTH, electricity, gas, broadband and many other services from a single platform.",
      "A Multi Recharge Portal is an online platform that enables businesses and agents to recharge multiple telecom and utility services from a single dashboard.",
    ],
    features: [
      "Mobile Recharge",
      "DTH Recharge",
      "Electricity Bills",
      "Gas Bills",
      "Broadband Recharge",
      "Utility Bill Payments",
    ],
    sections: [
      { heading: "Why Businesses Use Multi Recharge Portals", body: "A recharge portal generates commission income on every transaction, requires low investment, and can be started by retailers, shops, or entrepreneurs looking to earn through a digital business model." },
      { heading: "Who Uses a Multi Recharge Portal?", body: "Retail shops, grocery stores, mobile accessory shops, CSC centers, and entrepreneurs looking to start a digital service business." },
    ],
    whoUses: ["Retail Shops", "Grocery Stores", "CSC Centers", "Mobile Accessory Shops", "Entrepreneurs"],
    cta: "Start Your Recharge Business",
  },

  "blood-donation-system": {
    slug: "blood-donation-system",
    headline: "What is a Blood Donation System?",
    description: [
      "A Blood Donation System is a digital platform that connects blood donors, hospitals, and blood banks to manage blood donation requests, donor registrations, and blood inventory efficiently.",
      "A Blood Donation System is a web or software platform that connects blood donors with recipients, hospitals, and blood banks.",
    ],
    features: [
      "Donor Registration",
      "Blood Inventory Management",
      "Emergency Request Handling",
      "Location-Based Donor Search",
      "Automated Notifications",
      "Hospital Coordination",
    ],
    sections: [
      { heading: "Why is a Blood Donation System Used?", body: "It saves lives by connecting donors with patients in need quickly, manages blood bank inventory in real time, and reduces the time taken to find compatible blood during emergencies." },
      { heading: "Who Uses a Blood Donation System?", body: "Blood banks, hospitals, NGOs, health departments, and community organizations that manage blood donation camps and drives." },
    ],
    whoUses: ["Blood Banks", "Hospitals", "NGOs", "Health Departments", "Community Organizations"],
    cta: "Help Save Lives with Technology",
  },

  "gym-management-system": {
    slug: "gym-management-system",
    headline: "What is a GYM Management System?",
    description: [
      "Powerful software for gyms and fitness centers to manage memberships, payments, trainers, workout plans and daily operations efficiently.",
      "A GYM Management System is software designed to simplify fitness center operations by automating member management, billing, attendance tracking, trainer scheduling and workout planning.",
    ],
    features: [
      "Membership Management",
      "Attendance Tracking",
      "Payment Automation",
      "Trainer Scheduling",
      "Workout Plans",
      "Renewal Reminders",
    ],
    sections: [
      { heading: "Key Features", body: "Smart member onboarding, digital attendance with biometrics or QR, automated payment reminders, trainer assignment, and performance reports for gym owners." },
      { heading: "Business Benefits", body: "Reduce manual admin work, prevent revenue leakage, improve member experience, track trainer performance, and grow your gym business with data-driven insights." },
      { heading: "Who Uses a GYM Management System?", body: "Gyms, fitness studios, yoga centers, martial arts academies, sports clubs, and wellness centers." },
    ],
    whoUses: ["Gyms", "Fitness Studios", "Yoga Centers", "Martial Arts Academies", "Sports Clubs"],
    cta: "Transform Your Gym with Smart Software",
  },

  "aeps": {
    slug: "aeps",
    headline: "Aadhaar Enabled Payment System (AEPS)",
    description: [
      "AEPS is a secure digital payment system that allows banking transactions using Aadhaar number and biometric authentication instead of debit cards or PIN numbers.",
      "The Aadhaar Enabled Payment System (AEPS) allows customers to perform banking services such as cash withdrawal, balance inquiry, and fund transfer using their Aadhaar number and biometric authentication.",
    ],
    features: [
      "Biometric Banking",
      "Cash Withdrawal",
      "Cash Deposit",
      "Balance Inquiry",
      "Mini Statement",
      "Fund Transfer",
    ],
    sections: [
      { heading: "AEPS Banking Services", body: "Enable rural and semi-urban customers to perform banking without visiting a bank branch. AEPS uses Aadhaar biometric authentication for secure and instant transactions." },
      { heading: "Why Businesses Use AEPS", body: "AEPS allows retailers, kiosks, and micro-ATM operators to earn commission by providing banking services to customers in areas with limited bank access." },
      { heading: "Who Uses AEPS?", body: "Retail agents, CSC operators, banks, micro-ATM operators, government subsidy distribution programs, and rural banking service providers." },
    ],
    whoUses: ["Retail Agents", "CSC Operators", "Banks", "Micro-ATM Operators", "Government Programs"],
    cta: "Start Your AEPS Business",
  },

  "inventory-management-system": {
    slug: "inventory-management-system",
    headline: "What is an Inventory Management System?",
    description: [
      "An Inventory Management System helps businesses track stock levels, manage purchases, monitor sales, and optimize supply chain operations. It ensures that the right products are available at the right time, reducing operational costs and improving efficiency.",
      "An Inventory Management System is software that allows businesses to monitor inventory movement from purchasing raw materials to delivering finished goods to customers.",
    ],
    features: [
      "Real-Time Stock Tracking",
      "Barcode Scanning",
      "Purchase Management",
      "Sales Integration",
      "Warehouse Management",
      "Expiry Tracking",
    ],
    sections: [
      { heading: "How Inventory Management Works", body: "Add products with SKU and supplier info → Monitor stock levels in real time → Automatically update inventory after sales → Generate reports to forecast demand and plan purchases." },
      { heading: "Business Benefits", body: "Reduce inventory losses and product wastage, improve warehouse organization, enhance supply chain efficiency, increase profitability through accurate stock control, and improve customer satisfaction." },
      { heading: "Industries Using Inventory Systems", body: "Retail, manufacturing, pharmaceuticals, food & beverage, e-commerce, and any business that deals with physical products." },
    ],
    whoUses: ["Retail Businesses", "Manufacturing Units", "Pharmacies", "Food & Beverage", "E-Commerce", "Warehouses"],
    cta: "Optimize Your Inventory Today",
  },

  "hospital-management-system": {
    slug: "hospital-management-system",
    headline: "Hospital Management System (HMS)",
    description: [
      "A Hospital Management System (HMS) is software designed to streamline and automate hospital operations such as patient management, billing, appointment scheduling, doctor coordination, pharmacy management, and administrative processes.",
      "It helps hospitals, clinics, and healthcare facilities improve operational efficiency, reduce paperwork, and provide better patient care through digital healthcare management.",
    ],
    features: [
      "Patient Management",
      "Appointment Scheduling",
      "Billing & Payments",
      "Pharmacy Management",
      "Laboratory Management",
      "Staff & HR Management",
    ],
    sections: [
      { heading: "Why is a Hospital Management System Used?", body: "HMS eliminates manual paperwork, reduces errors in patient records, automates billing, manages pharmacy inventory, and improves coordination between doctors, nurses, and support staff." },
      { heading: "Key Benefits", body: "Manage patient records digitally, schedule doctor appointments easily, automate billing and payment systems, track pharmacy and medical inventory, improve hospital workflow and efficiency." },
      { heading: "Who Uses a Hospital Management System?", body: "Hospitals, clinics, nursing homes, diagnostic centers, multi-specialty hospitals, and healthcare chains." },
    ],
    whoUses: ["Hospitals", "Clinics", "Nursing Homes", "Diagnostic Centers", "Multi-Specialty Hospitals"],
    cta: "Improve Hospital Operations",
  },

  "billing-software": {
    slug: "billing-software",
    headline: "Billing Software (GST & Non-GST)",
    description: [
      "Billing software helps businesses generate invoices, manage payments, track expenses and automate financial transactions. It supports both GST billing for tax compliant businesses and non-GST billing for small vendors.",
      "Generate professional invoices with customer details and automatic calculations. Supports GST and non-GST invoice formats.",
    ],
    features: [
      "Automated Invoice Generation",
      "GST Billing & Compliance",
      "Payment Tracking",
      "Inventory Integration",
      "Tax Reports",
      "Multi-Format Invoices",
    ],
    sections: [
      { heading: "Types of Billing Software", body: "GST Billing Software for registered businesses requiring tax-compliant invoices, and Non-GST Billing for small vendors, traders, and businesses not under GST registration." },
      { heading: "Why Businesses Use Billing Software", body: "Eliminate manual billing errors, save time with automated invoice generation, track payment dues, maintain accurate financial records, and ensure tax compliance." },
    ],
    whoUses: ["Retail Shops", "Manufacturers", "Service Providers", "Traders", "Small Businesses", "GST-Registered Firms"],
    cta: "Get Billing Software Demo",
  },

  "pos-software-applications": {
    slug: "pos-software-applications",
    headline: "Empower Your Business with Advanced POS Solutions",
    description: [
      "Our custom POS software development services are designed to help retail, hospitality, and service-based businesses streamline sales, manage inventory, and deliver exceptional customer experiences.",
      "Whether you're running a supermarket, café, restaurant, or fashion store, our scalable POS systems adapt to your operations and help you grow with ease.",
      "Get round-the-clock assistance from our expert support team whenever you need it.",
    ],
    features: [
      "Fashion & Apparel POS",
      "Electronics Store POS",
      "Grocery & Supermarket POS",
      "Quick Service Restaurant POS",
      "Full Service Restaurant POS",
      "Delivery & Takeaway POS",
    ],
    sections: [
      { heading: "Tailored POS Systems for Every Business Type", body: "We build industry-specific POS solutions for retail, restaurants, grocery, and hospitality. Each system is tailored to your workflow, payment preferences, and reporting needs." },
      { heading: "Tech Stack Used for POS Software", body: "Built using modern technologies including React Native for mobile apps, Node.js for backend APIs, cloud-based databases, and secure payment gateway integrations." },
    ],
    whoUses: ["Supermarkets", "Cafes & Restaurants", "Fashion Stores", "Electronics Shops", "Delivery Businesses"],
    cta: "Build Your Custom POS App",
  },

  "ecommerce-websites": {
    slug: "ecommerce-websites",
    headline: "E-Commerce Websites — Sell Online, Grow Faster",
    description: [
      "We build feature-rich online stores that help businesses sell products and services online. From product catalog management to payment gateway integration and order tracking, our e-commerce websites cover it all.",
      "Whether you are starting a new online store or upgrading an existing one, our scalable e-commerce solutions are designed to grow with your business.",
    ],
    features: [
      "Product Catalog Management",
      "Shopping Cart & Checkout",
      "Payment Gateway Integration",
      "Order Management",
      "Customer Accounts",
      "Mobile-Responsive Design",
    ],
    sections: [
      { heading: "Why Your Business Needs an E-Commerce Website", body: "An online store allows you to sell 24/7, reach customers beyond your city, reduce operational costs, and automate order processing and inventory updates." },
      { heading: "Who We Build E-Commerce Solutions For", body: "Retailers, fashion brands, grocery businesses, electronics sellers, and any business looking to expand their reach through online sales." },
    ],
    whoUses: ["Retailers", "Fashion Brands", "Grocery Businesses", "Electronics Sellers", "Artisans & Craft Sellers"],
    cta: "Build Your Online Store",
  },

  "hotel-booking-applications": {
    slug: "hotel-booking-applications",
    headline: "Hotel Booking App — Smart Solutions for the Hospitality Industry",
    description: [
      "Tourism & Travel industry is booming — estimated to hit $1.1 trillion by 2027. 85% of tourists now book hotels via mobile.",
      "Our hotel booking application reduces dependency on OTAs (like Booking.com or Expedia), supports both direct bookings and multi-property listings, and is ideal for hotel chains, boutique hotels, travel startups, and aggregators.",
    ],
    features: [
      "Advanced Search & Filtering",
      "Live Room Availability",
      "Instant Booking & Secure Payments",
      "Interactive Map View",
      "Smart Notifications",
      "Multi-Property Support",
    ],
    sections: [
      { heading: "Why Build a Hotel Booking App?", body: "A dedicated booking app increases direct reservations, reduces OTA commission fees, builds brand loyalty, and provides full control over room pricing and availability." },
      { heading: "Key Features", body: "Real-time room availability, instant booking with secure payment processing, destination search with map view, booking history, cancellation management, and automated confirmation emails." },
      { heading: "Core Advanced Features", body: "Live inventory sync, dynamic pricing engine, loyalty rewards integration, review and rating system, and multi-language/multi-currency support for international travelers." },
    ],
    whoUses: ["Hotel Chains", "Boutique Hotels", "Travel Startups", "Aggregator Platforms", "Resort Groups"],
    cta: "Build Your Hotel Booking App",
  },

  "matrimonial-applications": {
    slug: "matrimonial-applications",
    headline: "Matrimonial Applications — Connecting the Right Matches",
    description: [
      "We build feature-rich matrimonial platforms with smart profile matching, secure messaging, subscription management, and advanced search filters to help users find their life partner.",
      "Our matrimonial application solution is scalable, secure, and can be customized for community-specific, religion-specific, or general matrimonial portals.",
    ],
    features: [
      "Profile Management",
      "Smart Matching Algorithm",
      "Secure Messaging",
      "Advanced Search Filters",
      "Subscription & Payment System",
      "Privacy Controls",
    ],
    sections: [
      { heading: "Core Platform Features", body: "Detailed profile creation with photos, horoscope matching, community and religion filters, verified profiles, premium membership tiers, and in-app communication tools." },
      { heading: "Who Uses Our Matrimonial Platform", body: "Community organizations, religious groups, matrimonial agencies, and entrepreneurs building matrimonial portals for specific communities or regions." },
    ],
    whoUses: ["Community Organizations", "Matrimonial Agencies", "Religious Groups", "Entrepreneurs"],
    cta: "Build Your Matrimonial Platform",
  },

  "doctor-appointment-app": {
    slug: "doctor-appointment-app",
    headline: "Doctor Appointment Booking App",
    description: [
      "Revolutionize how your clinic manages appointments with our cutting-edge Doctor Appointment Booking App. This smart solution simplifies scheduling, minimizes administrative load, and enhances patient satisfaction.",
      "Real-time updates on appointment availability, online appointment booking, automatic confirmations and slot management, integrated wait-time tracking.",
    ],
    features: [
      "Online Appointment Booking",
      "Real-Time Slot Management",
      "Automatic Confirmations",
      "Wait-Time Tracking",
      "Patient Records",
      "Doctor Dashboard",
    ],
    sections: [
      { heading: "Boost Patient Satisfaction", body: "Quick and easy appointment scheduling, reduced waiting time with real-time slots, and automated reminders via SMS/email ensure a seamless patient experience." },
      { heading: "Streamline Clinic Workflow", body: "Doctors get a dedicated dashboard to manage their schedule, view patient history, and update appointment status. Reception staff no longer need to handle calls for every booking." },
      { heading: "Why Choose Us?", body: "Our doctor appointment app is built for clinics, hospitals, and individual practitioners seeking to digitize their appointment process and improve patient retention." },
    ],
    whoUses: ["Clinics", "Hospitals", "Individual Practitioners", "Multi-Specialty Centers", "Dental Clinics"],
    cta: "Book a Demo for Your Clinic",
  },

  "learning-management-software": {
    slug: "learning-management-software",
    headline: "Learning Management Software (LMS)",
    description: [
      "Our Learning Management System (LMS) is a complete digital platform for delivering online courses, managing student progress, conducting assessments, and issuing certificates.",
      "Whether you are an educational institution, corporate training provider, or individual instructor, our LMS platform scales to your needs.",
    ],
    features: [
      "Course Creation & Management",
      "Student Enrollment",
      "Live & Recorded Classes",
      "Quizzes & Assessments",
      "Certificate Generation",
      "Progress Tracking",
    ],
    sections: [
      { heading: "Platform Capabilities", body: "Rich course builder with video lectures, PDF uploads, quizzes, and assignments. Students get a dedicated dashboard to track their learning progress and download certificates upon completion." },
      { heading: "Who Uses Our LMS?", body: "Schools, colleges, corporate training departments, coaching centers, skill development institutes, and individual tutors or coaches." },
    ],
    whoUses: ["Schools & Colleges", "Corporate Training", "Coaching Centers", "Skill Development Institutes", "Online Tutors"],
    cta: "Launch Your Online Learning Platform",
  },

  "grocery-application": {
    slug: "grocery-application",
    headline: "Online Grocery App — The Future of Grocery Shopping",
    description: [
      "Our powerful Online Grocery App is a complete digital solution designed to revolutionize the way people shop for groceries. This app brings unmatched convenience, speed, and personalization to everyday grocery shopping.",
      "Allowing users to browse thousands of products, compare prices, track deliveries in real-time, and shop anytime, anywhere. With intelligent recommendations, our app caters to modern lifestyles while helping businesses expand their reach.",
    ],
    features: [
      "Product Catalog with Search & Filters",
      "User Registration & Login",
      "Real-Time Order Tracking",
      "Personalized Recommendations",
      "One-Click Reorders",
      "Payment Gateway Integration",
    ],
    sections: [
      { heading: "Solutions & Strategies for Success", body: "Use digital ads, email, and social media to promote app features like real-time tracking, personalized shopping lists, and one-click reorders." },
      { heading: "Who Uses Our Grocery App Solution?", body: "Supermarkets and retail chains, local grocery store owners, online grocery startups, and hyperlocal delivery businesses looking to digitize their operations." },
      { heading: "Key Features of Our Grocery App", body: "Smart search and category browse, cart management, delivery time slots, order history, loyalty points, push notifications, and seller/admin dashboard." },
    ],
    whoUses: ["Supermarkets", "Local Grocery Stores", "Online Grocery Startups", "Hyperlocal Delivery Businesses"],
    cta: "Build Your Grocery App",
  },
};

export const getProductContent = (slug: string): ProductContent | null =>
  productContentMap[slug] ?? null;
