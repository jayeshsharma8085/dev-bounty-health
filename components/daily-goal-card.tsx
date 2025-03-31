import { Activity, Flame, Footprints } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface DailyGoalCardProps {
  title: string
  current: number
  target: number
  icon: "footprints" | "activity" | "flame"
  percentage: number
}

export default function DailyGoalCard({ title, current, target, icon, percentage }: DailyGoalCardProps) {
  const renderIcon = () => {
    switch (icon) {
      case "footprints":
        return <Footprints className="h-5 w-5 text-primary" />
      case "activity":
        return <Activity className="h-5 w-5 text-primary" />
      case "flame":
        return <Flame className="h-5 w-5 text-primary" />
      default:
        return <Activity className="h-5 w-5 text-primary" />
    }
  }

  return (
    <div className="rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {renderIcon()}
          <span className="font-medium">{title}</span>
        </div>
        <div className="text-sm font-medium">
          {current} / {target}
        </div>
      </div>
      <Progress value={percentage} className="h-2 mt-2" />
      <div className="mt-1 text-xs text-right text-muted-foreground">{percentage}% of daily goal</div>
    </div>
  )
}

