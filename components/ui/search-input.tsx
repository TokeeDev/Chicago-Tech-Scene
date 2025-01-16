import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search organizations..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-14 px-14 rounded-full border-2 text-lg shadow-lg hover:shadow-xl transition-shadow duration-200 focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
      />
    </div>
  )
}
