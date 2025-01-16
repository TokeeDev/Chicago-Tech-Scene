'use client'

import { useState, useEffect } from "react"
import { OrganizationCard } from "@/components/ui/organization-card"
import { SearchInput } from "@/components/ui/search-input"
import type { OrganizationCardProps, RawOrganizationData } from "@/types/organization"

interface OrganizationsClientProps {
  initialOrganizations: RawOrganizationData[]
}

export function OrganizationsClient({ initialOrganizations }: OrganizationsClientProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [organizations, setOrganizations] = useState<OrganizationCardProps[]>([])

  useEffect(() => {
    if (initialOrganizations && initialOrganizations.length > 0) {
      const transformedOrganizations = initialOrganizations.map(org => ({
        id: org["Unnamed: 0"],
        organization: org.Organization,
        category: org.Category,
        subcategory: org.Subcategory || "",
        active: org.Active,
        scraperConfigured: org["Scraper Configured"] || "No",
        website: org.Website || "",
        eventPage: org["Event Page"] || "",
        description: org.Description,
        lastInPersonEvent: org["Last In-Person Event"] || "",
        socialLinks: {
          "Twitter/X": org["Twitter/X"] || "",
          Instagram: org.Instagram || "",
          LinkedIn: org.LinkedIn || "",
          Slack: org.Slack || "",
          Discord: org.Discord || "",
          Meetup: org.Meetup || "",
          LuMa: org.LuMa || "",
          EventBrite: org.EventBrite || "",
          YouTube: org.YouTube || "",
          GitHub: org.GitHub || "",
          Facebook: org.Facebook || "",
          Mastodon: org.Mastodon || ""
        }
      }));
      
      setOrganizations(transformedOrganizations)
    }
  }, [initialOrganizations])

  const filteredOrganizations = organizations.filter((org) => {
    if (!org) return false
    if (!searchQuery) return true
    
    const searchLower = searchQuery.toLowerCase()
    const orgName = org.organization?.toLowerCase() || ''
    const category = org.category?.toLowerCase() || ''
    const description = org.description?.toLowerCase() || ''
    const subcategory = org.subcategory?.toLowerCase() || ''

    return (
      orgName.includes(searchLower) ||
      category.includes(searchLower) ||
      description.includes(searchLower) ||
      subcategory.includes(searchLower)
    )
  })

  if (!organizations || organizations.length === 0) {
    return (
      <div className="text-center text-muted-foreground">
        No organizations available.
      </div>
    )
  }

  return (
    <>
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold">Organizations Directory</h1>
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredOrganizations.map((org, index) => (
          <OrganizationCard 
            key={`${org.id}-${index}`}
            {...org} 
          />
        ))}
      </div>

      {filteredOrganizations.length === 0 && (
        <div className="text-center text-muted-foreground">
          No organizations found matching your search.
        </div>
      )}
    </>
  )
}
