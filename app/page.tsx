// app/page.tsx
import { OrganizationsClient } from "./organizations-client"
import { loadOrganizations } from "@/utils/load-organizations"
import type { RawOrganizationData } from "@/types/organization"

export default async function OrganizationsPage() {
  const organizations = await loadOrganizations() as RawOrganizationData[]
  
  return (
    <div className="container mx-auto py-8">
      <OrganizationsClient initialOrganizations={organizations} />
    </div>
  )
}
