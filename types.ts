export interface BlogPost {
  title: string;
  metaDescription: string;
  content: string; // Markdown or HTML string
  imageUrl: string;
  tags: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}