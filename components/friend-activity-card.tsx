import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface FriendActivityCardProps {
  name: string
  avatar: string
  activity: string
  time: string
  likes: number
}

export default function FriendActivityCard({ name, avatar, activity, time, likes }: FriendActivityCardProps) {
  return (
    <div className="rounded-lg border p-4">
      <div className="flex items-center gap-3">
        <Image src={avatar || "/placeholder.svg"} width={40} height={40} className="rounded-full" alt={name} />
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-sm text-muted-foreground">{time}</div>
        </div>
      </div>
      <div className="mt-3">{activity}</div>
      <div className="mt-3 flex items-center">
        <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
          <Heart className="h-4 w-4" />
          {likes}
        </Button>
      </div>
    </div>
  )
}

