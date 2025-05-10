export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with product management, cart, checkout and payment integration.",
    image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux"],
    demo: "https://example.com/ecommerce",
    github: "https://github.com/example/ecommerce",
    details: "This full-stack e-commerce platform features a responsive design, user authentication, product filtering, shopping cart, and secure payment processing via Stripe. The admin dashboard provides inventory management, sales analytics, and user management capabilities.\n\nBuilt with React on the frontend and Node.js with Express on the backend, it uses MongoDB for data storage and incorporates Redis for caching to optimize performance.",
    features: [
      "User authentication and profile management",
      "Product browsing with advanced filtering and search",
      "Shopping cart and wishlist functionality",
      "Secure checkout with multiple payment options",
      "Order tracking and history",
      "Admin dashboard with inventory management",
      "Sales reports and analytics",
      "Responsive design for all devices"
    ]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, task assignments, and deadline tracking.",
    image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Vuex", "Cloud Functions"],
    demo: "https://example.com/taskmanager",
    github: "https://github.com/example/taskmanager",
    details: "This task management application helps teams organize their workflow with features like task boards, assignments, deadline tracking, and real-time collaboration. The app includes customizable workspaces, task prioritization, and automated notifications.\n\nBuilt with Vue.js and Firebase, it implements real-time database functionality for instant updates across all connected devices, ensuring team members always have the latest information.",
    features: [
      "Multiple project boards with customizable columns",
      "Task assignment with user profiles",
      "Due date tracking with calendar integration",
      "File attachments and comments on tasks",
      "Real-time updates and notifications",
      "Team collaboration features",
      "Progress tracking and reporting",
      "Mobile-responsive design"
    ]
  },
  {
    id: 3,
    title: "Fitness Tracking Mobile App",
    description: "A mobile application for tracking workouts, nutrition, and fitness progress with personalized recommendations.",
    image: "https://images.pexels.com/photos/4473622/pexels-photo-4473622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mobile",
    technologies: ["React Native", "TypeScript", "Redux", "Node.js", "MongoDB", "Google Fit API"],
    demo: "https://example.com/fitnessapp",
    github: "https://github.com/example/fitnessapp",
    details: "This cross-platform mobile application helps users track their fitness journey with workout logging, nutrition tracking, and progress analysis. It features customizable workout plans, calorie counting, and integration with fitness devices for automated activity tracking.\n\nDeveloped using React Native and TypeScript, it provides a native experience on both iOS and Android platforms while maintaining a single codebase for efficient development and maintenance.",
    features: [
      "Customizable workout plans and exercise library",
      "Nutrition and meal tracking with calorie calculation",
      "Progress photos and body measurements tracking",
      "Integration with wearables and fitness devices",
      "Personalized workout recommendations",
      "Social features for motivation and accountability",
      "Detailed analytics and progress reports",
      "Offline functionality for gym use"
    ]
  },
  {
    id: 4,
    title: "Real Estate Listing Platform",
    description: "A comprehensive platform for real estate listings with advanced search, virtual tours, and agent connection.",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    technologies: ["Angular", ".NET Core", "SQL Server", "Google Maps API", "Azure", "SignalR"],
    demo: "https://example.com/realestate",
    github: "https://github.com/example/realestate",
    details: "This real estate platform connects buyers, sellers, and agents with features like property listings, advanced search filters, virtual tours, and mortgage calculators. It incorporates map-based search, saved searches with alerts, and direct messaging between users.\n\nBuilt with Angular and .NET Core, it uses SQL Server for data storage and includes integration with Google Maps for location-based features and third-party APIs for property valuation data.",
    features: [
      "Property listings with detailed information and media galleries",
      "Advanced search with multiple filters and map view",
      "Virtual tours and 3D property visualizations",
      "Mortgage calculator and affordability tools",
      "Agent profiles and direct messaging",
      "Saved searches and property alerts",
      "User authentication and profile management",
      "Admin panel for managing listings and users"
    ]
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "A unified dashboard for managing multiple social media accounts with analytics, scheduling, and engagement tracking.",
    image: "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "Multiple Social APIs"],
    demo: "https://example.com/socialdashboard",
    github: "https://github.com/example/socialdashboard",
    details: "This social media management tool helps users manage multiple social accounts from a single dashboard with features like post scheduling, content calendar, engagement tracking, and analytics reports. It supports major platforms including Twitter, Facebook, Instagram, and LinkedIn.\n\nThe application uses React for the frontend with Node.js and Express for the backend, integrating with various social media APIs to provide a unified interface for content management and performance analysis.",
    features: [
      "Multi-account management across platforms",
      "Post creation and scheduling with preview",
      "Content calendar and campaign planning",
      "Real-time engagement monitoring",
      "Comprehensive analytics and reporting",
      "Audience insights and growth tracking",
      "Competitor analysis tools",
      "Custom report generation and export"
    ]
  },
  {
    id: 6,
    title: "Health Monitoring App",
    description: "A mobile application for health monitoring with symptom tracking, medication reminders, and telemedicine integration.",
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mobile",
    technologies: ["Flutter", "Firebase", "Dart", "Node.js", "Express", "MongoDB"],
    demo: "https://example.com/healthapp",
    github: "https://github.com/example/healthapp",
    details: "This comprehensive health monitoring application helps users track vital signs, symptoms, medications, and appointments. It includes features like medication reminders, symptom journals, and secure communication with healthcare providers through telemedicine integration.\n\nDeveloped with Flutter for cross-platform compatibility, it ensures a consistent user experience across iOS and Android while maintaining native performance. The app implements end-to-end encryption for all health data to ensure patient privacy and HIPAA compliance.",
    features: [
      "Vital signs and health metrics tracking",
      "Medication management with reminders",
      "Symptom logging and health journal",
      "Appointment scheduling and reminders",
      "Telemedicine video consultations",
      "Secure messaging with healthcare providers",
      "Health report generation and sharing",
      "Emergency contact information and alerts"
    ]
  }
];