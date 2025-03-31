import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ChevronRight, Clock, Dumbbell, Filter, Plus, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function WorkoutsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back</span>
        </Link>
        <div className="ml-auto flex gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Filter className="h-5 w-5" />
            <span className="sr-only">Filter</span>
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Workout Plans</h1>
          <Link href="/workouts/create">
            <Button size="sm" className="gap-1">
              <Plus className="h-4 w-4" />
              Create Plan
            </Button>
          </Link>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search workout plans..." className="pl-9" />
        </div>
        <Tabs defaultValue="my-plans">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="my-plans">My Plans</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
          </TabsList>
          <TabsContent value="my-plans" className="mt-4 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-lg font-semibold">Current Plans</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Dumbbell className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">4-Day Split</h3>
                        <div className="text-sm text-muted-foreground">Upper/Lower/Push/Pull</div>
                      </div>
                    </div>
                    <Link href="/workouts/plan/1">
                      <Button variant="ghost" size="sm" className="gap-1">
                        View
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge variant="outline">Strength</Badge>
                    <Badge variant="outline">Intermediate</Badge>
                    <Badge variant="outline">4 days/week</Badge>
                  </div>
                  <div className="mt-3 text-sm text-muted-foreground">Next workout: Upper Body (Today)</div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Dumbbell className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">HIIT Cardio</h3>
                        <div className="text-sm text-muted-foreground">30-minute sessions</div>
                      </div>
                    </div>
                    <Link href="/workouts/plan/2">
                      <Button variant="ghost" size="sm" className="gap-1">
                        View
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge variant="outline">Cardio</Badge>
                    <Badge variant="outline">All Levels</Badge>
                    <Badge variant="outline">3 days/week</Badge>
                  </div>
                  <div className="mt-3 text-sm text-muted-foreground">Next workout: HIIT Session (Tomorrow)</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-lg font-semibold">Past Plans</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-muted p-2">
                        <Dumbbell className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium">5x5 Strength</h3>
                        <div className="text-sm text-muted-foreground">Completed June 2023</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Restart
                      </Button>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-muted p-2">
                        <Dumbbell className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium">30-Day Core Challenge</h3>
                        <div className="text-sm text-muted-foreground">Completed May 2023</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Restart
                      </Button>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="recommended" className="mt-4 space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Dumbbell className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Full Body 3-Day Split</h3>
                          <div className="text-sm text-muted-foreground">Recommended for your goals</div>
                        </div>
                      </div>
                      <Button size="sm">Add Plan</Button>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="outline">Strength</Badge>
                      <Badge variant="outline">Beginner-Friendly</Badge>
                      <Badge variant="outline">3 days/week</Badge>
                    </div>
                    <div className="mt-3 flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      45-60 min per session
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Dumbbell className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Bodyweight Fitness</h3>
                          <div className="text-sm text-muted-foreground">No equipment needed</div>
                        </div>
                      </div>
                      <Button size="sm">Add Plan</Button>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="outline">Strength</Badge>
                      <Badge variant="outline">All Levels</Badge>
                      <Badge variant="outline">4 days/week</Badge>
                    </div>
                    <div className="mt-3 flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      30-45 min per session
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Dumbbell className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">5K Training Plan</h3>
                          <div className="text-sm text-muted-foreground">Prepare for your first 5K</div>
                        </div>
                      </div>
                      <Button size="sm">Add Plan</Button>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="outline">Cardio</Badge>
                      <Badge variant="outline">Beginner</Badge>
                      <Badge variant="outline">3 days/week</Badge>
                    </div>
                    <div className="mt-3 flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      20-40 min per session
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="popular" className="mt-4 space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Dumbbell className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">PPL (Push/Pull/Legs)</h3>
                          <div className="text-sm text-muted-foreground">5,200+ users</div>
                        </div>
                      </div>
                      <Button size="sm">Add Plan</Button>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="outline">Strength</Badge>
                      <Badge variant="outline">Intermediate</Badge>
                      <Badge variant="outline">6 days/week</Badge>
                    </div>
                    <div className="mt-3 flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      60-75 min per session
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Dumbbell className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">30-Day HIIT Challenge</h3>
                          <div className="text-sm text-muted-foreground">3,800+ users</div>
                        </div>
                      </div>
                      <Button size="sm">Add Plan</Button>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="outline">Cardio</Badge>
                      <Badge variant="outline">All Levels</Badge>
                      <Badge variant="outline">5 days/week</Badge>
                    </div>
                    <div className="mt-3 flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      20-30 min per session
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Dumbbell className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Full Body Dumbbell Only</h3>
                          <div className="text-sm text-muted-foreground">2,900+ users</div>
                        </div>
                      </div>
                      <Button size="sm">Add Plan</Button>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="outline">Strength</Badge>
                      <Badge variant="outline">Beginner</Badge>
                      <Badge variant="outline">3 days/week</Badge>
                    </div>
                    <div className="mt-3 flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-4 w-4" />
                      45 min per session
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

