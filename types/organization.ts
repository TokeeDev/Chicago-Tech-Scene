// types/organization.ts
export interface RawOrganizationData {
  "Unnamed: 0": number;
  Organization: string;
  Category: string;
  Subcategory: string | null;
  Active: boolean;
  "Scraper Configured": string | null;
  Website: string;
  "Event Page": string;
  Description: string;
  "Last In-Person Event": string | null;
  "Twitter/X": string | null;
  Instagram: string | null;
  LinkedIn: string | null;
  Slack: string | null;
  Discord: string | null;
  Meetup: string | null;
  LuMa: string | null;
  EventBrite: string | null;
  YouTube: string | null;
  GitHub: string | null;
  Facebook: string | null;
  Mastodon: string | null;
}

export interface OrganizationCardProps {
  id: number;
  organization: string;
  category: string;
  subcategory?: string | null;
  active: boolean;
  scraperConfigured?: string | null;
  website?: string | null;
  eventPage?: string | null;
  description: string;
  lastInPersonEvent?: string | null;
  socialLinks: {
    "Twitter/X"?: string | null;
    Instagram?: string | null;
    LinkedIn?: string | null;
    Slack?: string | null;
    Discord?: string | null;
    Meetup?: string | null;
    LuMa?: string | null;
    EventBrite?: string | null;
    YouTube?: string | null;
    GitHub?: string | null;
    Facebook?: string | null;
    Mastodon?: string | null;
  };
}
