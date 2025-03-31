import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, ChevronRight, Dumbbell, LineChart, Medal, Trophy, Users } from "lucide-react"
import Image from "next/image"
import DailyGoalCard from "@/components/daily-goal-card"
import UpcomingWorkoutCard from "@/components/upcoming-workout-card"
import FriendActivityCard from "@/components/friend-activity-card"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Dumbbell className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">FitnessBuddy</span>
        </Link>
        <nav className="ml-auto flex gap-2">
          <Link href="/profile">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Image
                src="/placeholder.svg?height=32&width=32"
                width={32}
                height={32}
                className="rounded-full"
                alt="Avatar"
              />
              <span className="sr-only">Profile</span>
            </Button>
          </Link>
        </nav>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Dumbbell className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-xl font-bold">12</div>
                  <div className="text-sm text-muted-foreground">Workouts Completed</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <LineChart className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-xl font-bold">87%</div>
                  <div className="text-sm text-muted-foreground">Weekly Goal Progress</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Trophy className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-xl font-bold">8</div>
                  <div className="text-sm text-muted-foreground">Achievements Earned</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-xl font-bold">24</div>
                  <div className="text-sm text-muted-foreground">Fitness Buddies</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-1 lg:col-span-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Today's Progress</h2>
                <Link href="/progress">
                  <Button variant="ghost" size="sm" className="gap-1">
                    View All
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="mt-4 space-y-4">
                <DailyGoalCard title="Steps" current={6789} target={10000} icon="footprints" percentage={67} />
                <DailyGoalCard title="Active Minutes" current={42} target={60} icon="activity" percentage={70} />
                <DailyGoalCard title="Calories Burned" current={420} target={600} icon="flame" percentage={70} />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Upcoming Workout</h2>
                <Link href="/workouts">
                  <Button variant="ghost" size="sm" className="gap-1">
                    All Plans
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="mt-4">
                <UpcomingWorkoutCard
                  title="Upper Body Strength"
                  time="Today, 6:00 PM"
                  duration="45 min"
                  exercises={["Bench Press", "Pull-ups", "Shoulder Press"]}
                />
              </div>
              <div className="mt-4">
                <Link href="/workouts/start">
                  <Button className="w-full">Start Workout</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-1 lg:col-span-2">
            <CardContent className="p-6">
              <Tabs defaultValue="feed">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Social Feed</h2>
                  <TabsList>
                    <TabsTrigger value="feed">Feed</TabsTrigger>
                    <TabsTrigger value="challenges">Challenges</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="feed" className="mt-4 space-y-4">
                  <FriendActivityCard
                    name="Sarah Johnson"
                    avatar="/placeholder.svg?height=40&width=40"
                    activity="Completed a 5K run"
                    time="2 hours ago"
                    likes={12}
                  />
                  <FriendActivityCard
                    name="Mike Chen"
                    avatar="/placeholder.svg?height=40&width=40"
                    activity="Achieved a new personal best on bench press: 185 lbs"
                    time="Yesterday"
                    likes={24}
                  />
                  <FriendActivityCard
                    name="Emma Wilson"
                    avatar="/placeholder.svg?height=40&width=40"
                    activity="Joined the '30-Day Core Challenge'"
                    time="2 days ago"
                    likes={18}
                  />
                  <div className="flex justify-center mt-4">
                    <Link href="/social">
                      <Button variant="outline">View More</Button>
                    </Link>
                  </div>
                </TabsContent>
                <TabsContent value="challenges" className="mt-4">
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <Medal className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">30-Day Core Challenge</h3>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Users className="mr-1 h-4 w-4" />
                              <span>128 participants</span>
                            </div>
                            <Progress value={40} className="h-2 mt-2" />
                            <div className="text-xs text-muted-foreground mt-1">12 days remaining</div>
                          </div>
                          <Button size="sm">Join</Button>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <Medal className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">10K Steps Daily</h3>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Users className="mr-1 h-4 w-4" />
                              <span>256 participants</span>
                            </div>
                            <Progress value={70} className="h-2 mt-2" />
                            <div className="text-xs text-muted-foreground mt-1">Ongoing challenge</div>
                          </div>
                          <Button size="sm">Join</Button>
                        </div>
                      </CardContent>
                    </Card>
                    <div className="flex justify-center mt-4">
                      <Link href="/challenges">
                        <Button variant="outline">View All Challenges</Button>
                      </Link>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Weekly Schedule</h2>
                <Link href="/calendar">
                  <Button variant="ghost" size="sm" className="gap-1">
                    Full Calendar
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3 rounded-lg border p-3">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <div className="font-medium">Upper Body</div>
                    <div className="text-sm text-muted-foreground">Today, 6:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border p-3">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <div className="font-medium">Cardio Session</div>
                    <div className="text-sm text-muted-foreground">Tomorrow, 7:30 AM</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border p-3">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <div className="font-medium">Lower Body</div>
                    <div className="text-sm text-muted-foreground">Wed, 6:00 PM</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="sticky bottom-0 z-10 flex h-16 items-center justify-between border-t bg-background px-4 md:px-6">
        <nav className="flex w-full items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <Dumbbell className="h-6 w-6" />
              <span className="sr-only">Home</span>
            </Button>
          </Link>
          <Link href="/workouts">
            <Button variant="ghost" size="icon">
              <LineChart className="h-6 w-6" />
              <span className="sr-only">Workouts</span>
            </Button>
          </Link>
          <Link href="/challenges">
            <Button variant="ghost" size="icon" className="rounded-full bg-primary text-primary-foreground">
              <Trophy className="h-6 w-6" />
              <span className="sr-only">Challenges</span>
            </Button>
          </Link>
          <Link href="/social">
            <Button variant="ghost" size="icon">
              <Users className="h-6 w-6" />
              <span className="sr-only">Social</span>
            </Button>
          </Link>
          <Link href="/profile">
            <Button variant="ghost" size="icon">
              <Image
                src="/placeholder.svg?height=24&width=24"
                width={24}
                height={24}
                className="rounded-full"
                alt="Profile"
              />
              <span className="sr-only">Profile</span>
            </Button>
          </Link>
        </nav>
      </footer>
    </div>
  )
}

