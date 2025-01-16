// utils/load-organizations.tsx
import { promises as fs } from 'fs'
import path from 'path'
import type { RawOrganizationData } from '@/types/organization'

export async function loadOrganizations(): Promise<RawOrganizationData[]> {
  const jsonPath = path.join(process.cwd(), 'data/organizations.json')
  
  try {
    const jsonData = await fs.readFile(jsonPath, 'utf8')
    const data = JSON.parse(jsonData)
    return data.organizations
  } catch (error) {
    console.error('Error loading organizations:', error)
    return []
  }
}
