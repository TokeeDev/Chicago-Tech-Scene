import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Twitter,
  Instagram,
  Linkedin,
  MessageSquare,
  Globe,
  Calendar,
  Youtube,
  Github,
  Facebook,
  Share2,
  Users,
} from "lucide-react";
import type { OrganizationCardProps } from "@/types/organization";

export function OrganizationCard({
  id,
  organization,
  category = "Uncategorized",
  subcategory = "",
  active = true,
  scraperConfigured = "No",
  website = "",
  eventPage = "",
  description,
  lastInPersonEvent = "",
  socialLinks = {},
}: OrganizationCardProps) {
  // Only check for truly required fields
  if (!organization || !description) {
    console.warn('Missing required fields:', { organization, description });
    return null;
  }

  // Transform social links to handle your specific social media fields
  const socialLinksData = {
    "Twitter/X": socialLinks?.["Twitter/X"] || "",
    "Instagram": socialLinks?.Instagram || "",
    "LinkedIn": socialLinks?.LinkedIn || "",
    "Slack": socialLinks?.Slack || "",
    "Discord": socialLinks?.Discord || "",
    "Meetup": socialLinks?.Meetup || "",
    "LuMa": socialLinks?.LuMa || "",
    "EventBrite": socialLinks?.EventBrite || "",
    "YouTube": socialLinks?.YouTube || "",
    "GitHub": socialLinks?.GitHub || "",
    "Facebook": socialLinks?.Facebook || "",
    "Mastodon": socialLinks?.Mastodon || ""
  };

  // Filter out empty social links
  const validSocialLinks = Object.entries(socialLinksData).filter(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, url]) => url && url !== ""
  );
  

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <CardTitle className="text-xl font-bold">{organization}</CardTitle>
            {scraperConfigured && (
              <Badge
                variant={scraperConfigured === "Yes" ? "default" : "secondary"}
                className="mr-2"
              >
                Scraper: {scraperConfigured}
              </Badge>
            )}
          </div>
          <Badge variant={active ? "default" : "secondary"}>
            {active ? "Active" : "Inactive"}
          </Badge>
        </div>
        <CardDescription>
          <div className="flex gap-2">
            <Badge variant="outline">{category}</Badge>
            {subcategory && <Badge variant="outline">{subcategory}</Badge>}
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">{description}</p>

          <div className="space-y-2">
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Globe className="h-4 w-4" />
                Website
              </a>
            )}
            {eventPage && (
              <a
                href={eventPage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Calendar className="h-4 w-4" />
                Events
              </a>
            )}
          </div>

          {lastInPersonEvent && (
            <div className="text-sm text-muted-foreground">
              Last in-person event: {lastInPersonEvent}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {validSocialLinks.map(([platform, url]) => {
              if (!url) return null;
              return (
                <a
                  key={`${id}-${platform}`}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                >
                  {getSocialIcon(platform.toLowerCase())}
                </a>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function getSocialIcon(platform: string) {
  switch (platform.toLowerCase()) {
    case "twitter":
    case "twitter/x":
      return <Twitter className="h-4 w-4" />;
    case "instagram":
      return <Instagram className="h-4 w-4" />;
    case "linkedin":
      return <Linkedin className="h-4 w-4" />;
    case "slack":
    case "discord":
      return <MessageSquare className="h-4 w-4" />;
    case "github":
      return <Github className="h-4 w-4" />;
    case "youtube":
      return <Youtube className="h-4 w-4" />;
    case "facebook":
      return <Facebook className="h-4 w-4" />;
    case "meetup":
    case "eventbrite":
    case "luma":
      return <Users className="h-4 w-4" />;
    case "mastodon":
    default:
      return <Share2 className="h-4 w-4" />;
  }
}
