import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Award, Calendar, ChevronRight, Edit, Settings } from "lucide-react"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back</span>
        </Link>
        <div className="ml-auto flex gap-2">
          <Link href="/settings">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex flex-col items-center">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=120&width=120"
              width={120}
              height={120}
              className="rounded-full border-4 border-background"
              alt="Profile"
            />
            <Button size="icon" variant="outline" className="absolute bottom-0 right-0 rounded-full bg-background">
              <Edit className="h-4 w-4" />
              <span className="sr-only">Edit Profile</span>
            </Button>
          </div>
          <h1 className="mt-4 text-2xl font-bold">Alex Johnson</h1>
          <div className="text-muted-foreground">@alexjohnson</div>
          <div className="mt-2 flex gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <Award className="h-3 w-3" />
              Pro Member
            </Badge>
            <Badge variant="outline">Level 8</Badge>
          </div>
          <div className="mt-4 flex w-full max-w-md justify-between px-4">
            <div className="text-center">
              <div className="text-xl font-bold">128</div>
              <div className="text-sm text-muted-foreground">Workouts</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold">24</div>
              <div className="text-sm text-muted-foreground">Buddies</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold">18</div>
              <div className="text-sm text-muted-foreground">Achievements</div>
            </div>
          </div>
        </div>
        <Tabs defaultValue="stats" className="mt-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="stats">Stats</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="buddies">Buddies</TabsTrigger>
          </TabsList>
          <TabsContent value="stats" className="mt-4 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-lg font-semibold">Fitness Goals</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between">
                    <div className="font-medium">Weight Goal</div>
                    <div className="text-sm text-muted-foreground">165 lbs / 175 lbs</div>
                  </div>
                  <Progress value={80} className="h-2 mt-2" />
                </div>
                <div>
                  <div className="flex justify-between">
                    <div className="font-medium">Strength Training</div>
                    <div className="text-sm text-muted-foreground">3 / 4 days per week</div>
                  </div>
                  <Progress value={75} className="h-2 mt-2" />
                </div>
                <div>
                  <div className="flex justify-between">
                    <div className="font-medium">Cardio</div>
                    <div className="text-sm text-muted-foreground">2 / 3 days per week</div>
                  </div>
                  <Progress value={66} className="h-2 mt-2" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-lg font-semibold">Weekly Activity</h2>
              </CardHeader>
              <CardContent>
                <div className="flex h-[200px] items-end gap-2">
                  {[40, 65, 85, 50, 70, 30, 60].map((height, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full rounded-t bg-primary" style={{ height: `${height}%` }}></div>
                      <div className="text-xs">{["M", "T", "W", "T", "F", "S", "S"][index]}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2 flex justify-between items-center">
                <h2 className="text-lg font-semibold">Personal Records</h2>
                <Link href="/records">
                  <Button variant="ghost" size="sm" className="gap-1">
                    View All
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Bench Press</div>
                      <div className="text-sm text-muted-foreground">June 15, 2023</div>
                    </div>
                    <div className="text-lg font-bold">185 lbs</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Squat</div>
                      <div className="text-sm text-muted-foreground">May 22, 2023</div>
                    </div>
                    <div className="text-lg font-bold">245 lbs</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">5K Run</div>
                      <div className="text-sm text-muted-foreground">July 3, 2023</div>
                    </div>
                    <div className="text-lg font-bold">22:45</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="achievements" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-3">
                  <div className="flex flex-col items-center text-center p-3 border rounded-lg">
                    <div className="rounded-full bg-primary/10 p-3 mb-2">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="font-medium">Early Riser</div>
                    <div className="text-xs text-muted-foreground">Complete 10 workouts before 8 AM</div>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 border rounded-lg">
                    <div className="rounded-full bg-primary/10 p-3 mb-2">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="font-medium">Consistency King</div>
                    <div className="text-xs text-muted-foreground">Work out 5 days in a row</div>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 border rounded-lg">
                    <div className="rounded-full bg-primary/10 p-3 mb-2">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="font-medium">Strength Master</div>
                    <div className="text-xs text-muted-foreground">Lift 10,000 lbs in a single workout</div>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 border rounded-lg">
                    <div className="rounded-full bg-primary/10 p-3 mb-2">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="font-medium">Marathon Runner</div>
                    <div className="text-xs text-muted-foreground">Run 26.2 miles in a month</div>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 border rounded-lg">
                    <div className="rounded-full bg-primary/10 p-3 mb-2">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="font-medium">Social Butterfly</div>
                    <div className="text-xs text-muted-foreground">Connect with 20 fitness buddies</div>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 border rounded-lg">
                    <div className="rounded-full bg-primary/10 p-3 mb-2">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="font-medium">Challenge Champion</div>
                    <div className="text-xs text-muted-foreground">Complete 5 fitness challenges</div>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <Link href="/achievements">
                    <Button variant="outline">View All Achievements</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="history" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Calendar className="h-10 w-10 text-primary" />
                    <div className="flex-1">
                      <div className="font-medium">Upper Body Strength</div>
                      <div className="text-sm text-muted-foreground">July 15, 2023 • 45 min</div>
                      <div className="text-sm">Bench Press, Pull-ups, Shoulder Press</div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Details
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Calendar className="h-10 w-10 text-primary" />
                    <div className="flex-1">
                      <div className="font-medium">Cardio Session</div>
                      <div className="text-sm text-muted-foreground">July 13, 2023 • 30 min</div>
                      <div className="text-sm">Treadmill, Rowing Machine</div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Details
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Calendar className="h-10 w-10 text-primary" />
                    <div className="flex-1">
                      <div className="font-medium">Cardio Session</div>
                      <div className="text-sm text-muted-foreground">July 13, 2023 • 30 min</div>
                      <div className="text-sm">Treadmill, Rowing Machine</div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Details
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Calendar className="h-10 w-10 text-primary" />
                    <div className="flex-1">
                      <div className="font-medium">Lower Body Strength</div>
                      <div className="text-sm text-muted-foreground">July 11, 2023 • 50 min</div>
                      <div className="text-sm">Squats, Deadlifts, Lunges</div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Details
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Calendar className="h-10 w-10 text-primary" />
                    <div className="flex-1">
                      <div className="font-medium">Full Body HIIT</div>
                      <div className="text-sm text-muted-foreground">July 9, 2023 • 35 min</div>
                      <div className="text-sm">Burpees, Mountain Climbers, Jump Squats</div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Details
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <Link href="/history">
                    <Button variant="outline">View Complete History</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="buddies" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      width={48}
                      height={48}
                      className="rounded-full"
                      alt="Sarah Johnson"
                    />
                    <div className="flex-1">
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-sm text-muted-foreground">Running enthusiast • 15 mutual buddies</div>
                    </div>
                    <Button size="sm">Message</Button>
                  </div>
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      width={48}
                      height={48}
                      className="rounded-full"
                      alt="Mike Chen"
                    />
                    <div className="flex-1">
                      <div className="font-medium">Mike Chen</div>
                      <div className="text-sm text-muted-foreground">Weightlifting pro • 8 mutual buddies</div>
                    </div>
                    <Button size="sm">Message</Button>
                  </div>
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      width={48}
                      height={48}
                      className="rounded-full"
                      alt="Emma Wilson"
                    />
                    <div className="flex-1">
                      <div className="font-medium">Emma Wilson</div>
                      <div className="text-sm text-muted-foreground">Yoga instructor • 5 mutual buddies</div>
                    </div>
                    <Button size="sm">Message</Button>
                  </div>
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      width={48}
                      height={48}
                      className="rounded-full"
                      alt="David Park"
                    />
                    <div className="flex-1">
                      <div className="font-medium">David Park</div>
                      <div className="text-sm text-muted-foreground">CrossFit athlete • 3 mutual buddies</div>
                    </div>
                    <Button size="sm">Message</Button>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <Link href="/buddies">
                    <Button variant="outline">Find More Buddies</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

