import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface DocSection {
  title: string;
  slug: string;
  content: React.ReactNode;
}

export interface EcosystemApp {
  id: string;
  name: string;
  description: string;
  category: 'DeFi' | 'NFT' | 'Wallet' | 'DAO' | 'Infrastructure' | 'Social';
  imageUrl: string;
  websiteUrl: string;
}

export interface CommunityEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  type: 'Online' | 'In-Person';
  description: string;
}