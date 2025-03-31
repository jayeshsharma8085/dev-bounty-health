import { CalendarDays, Clock } from "lucide-react"

interface UpcomingWorkoutCardProps {
  title: string
  time: string
  duration: string
  exercises: string[]
}

export default function UpcomingWorkoutCard({ title, time, duration, exercises }: UpcomingWorkoutCardProps) {
  return (
    <div className="rounded-lg border p-4">
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="mt-2 space-y-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarDays className="mr-2 h-4 w-4" />
          {time}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-2 h-4 w-4" />
          {duration}
        </div>
      </div>
      <div className="mt-3">
        <div className="text-sm font-medium">Exercises:</div>
        <ul className="mt-1 space-y-1">
          {exercises.map((exercise, index) => (
            <li key={index} className="text-sm text-muted-foreground">
              • {exercise}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

