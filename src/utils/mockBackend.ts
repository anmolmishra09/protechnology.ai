// Simulated API delay to mimic network requests
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

import logo from "../assets/logo.png";

// --- Types ---
export interface User {
  id: string;
  email: string;
  name: string;
}

export interface JobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  applicantName: string;
  applicantEmail: string;
  status: 'Pending' | 'Reviewed' | 'Rejected';
  appliedAt: string;
}

// --- Authentication ---

export const login = async (email: string, password: string): Promise<User> => {
  await delay(800); // Simulate network latency

  // Hardcoded mock user for demo purposes
  if (email === "admin@protech.com" && password === "password123") {
    const user: User = {
      id: "user_1",
      email: email,
      name: "Admin User"
    };
    
    // Store session in localStorage (Simulating cookies/tokens)
    localStorage.setItem('protech_user', JSON.stringify(user));
    localStorage.setItem('protech_token', 'mock_jwt_token_xyz');
    
    return user;
  }

  throw new Error("Invalid credentials. Try admin@protech.com / password123");
};

export const logout = async (): Promise<void> => {
  await delay(300);
  localStorage.removeItem('protech_user');
  localStorage.removeItem('protech_token');
};

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('protech_user');
  return userStr ? JSON.parse(userStr) : null;
};

export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('protech_token');
};

// --- Job Applications (Database Simulation) ---

// --- Mock Articles Data ---
export interface Article {
  id: number;
  title: string;
  excerpt: string;
  details: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
}

export const mockArticles: Article[] = Array.from({ length: 50 }, (_, i) => {
  const id = i + 1;
  const categories = [
    "AI Technology",
    "Engineering",
    "AI Research",
    "Data Science",
    "Robotics",
    "Cloud Computing",
    "Cybersecurity",
    "IoT",
    "Quantum Computing",
    "Software Development"
  ];
  // Use the only available image as fallback
  const images = [
    logo,
  ];
  const featured = id % 7 === 0 || id === 1 || id === 2;
  // Generate unique content for each article
  const topics = [
    "AI in Healthcare",
    "Machine Learning for Business",
    "Natural Language Processing Advances",
    "Robotics in Industry",
    "Cloud Security Trends",
    "Quantum Computing Breakthroughs",
    "IoT and Smart Cities",
    "Data Science for Social Good",
    "AI Ethics and Society",
    "Software Engineering Best Practices",
    "Autonomous Vehicles",
    "Edge Computing",
    "AI in Education",
    "Augmented Reality",
    "Blockchain and AI Integration"
  ];
  const topic = topics[i % topics.length];
  return {
    id,

    title: `${topic} (2026)`,
    excerpt: `Explore the latest on ${topic.toLowerCase()} in 2026. This article covers new research, applications, and industry impact.`,
    details:
      `In this in-depth article on ${topic}, we examine the most recent developments, real-world deployments, and future outlook. Experts share their insights on how ${topic.toLowerCase()} is shaping the world, including challenges, opportunities, and ethical considerations.\n\nHighlights:\n- Newest research and case studies\n- Industry applications and success stories\n- Expert interviews\n- Data-driven analysis\n- Implementation tips\n- Risks, limitations, and future trends`,
    category: categories[i % categories.length],
    date: `Feb ${Math.max(1, 13 - (i % 13))}, 2026`,
    readTime: `${5 + (i % 7)} min read`,
    image: images[0],
    featured,
  };
});

export const submitApplication = async (data: Omit<JobApplication, 'id' | 'status' | 'appliedAt'>): Promise<JobApplication> => {
  await delay(1000); // Simulate processing time

  const newApplication: JobApplication = {
    ...data,
    id: `app_${Date.now()}`,
    status: 'Pending', // Default status
    appliedAt: new Date().toISOString()
  };

  // Get existing applications from "Database" (localStorage)
  const existingApps = getApplications();
  existingApps.push(newApplication);
  
  // Save back to "Database"
  localStorage.setItem('protech_applications', JSON.stringify(existingApps));

  return newApplication;
};

export const getApplications = (): JobApplication[] => {
  const appsStr = localStorage.getItem('protech_applications');
  return appsStr ? JSON.parse(appsStr) : [];
};