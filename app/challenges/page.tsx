import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Filter, Medal, Plus, Search, Trophy, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function ChallengesPage() {
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
          <h1 className="text-2xl font-bold">Challenges</h1>
          <Link href="/challenges/create">
            <Button size="sm" className="gap-1">
              <Plus className="h-4 w-4" />
              Create Challenge
            </Button>
          </Link>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search challenges..." className="pl-9" />
        </div>
        <Tabs defaultValue="active">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="mt-4 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-lg font-semibold">Your Active Challenges</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">30-Day Core Challenge</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        <span>128 participants</span>
                      </div>
                      <Progress value={40} className="h-2 mt-2" />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Day 12 of 30</span>
                        <span>18 days remaining</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Link href="/challenges/1">
                      <Button size="sm">View Details</Button>
                    </Link>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">10K Steps Daily</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        <span>256 participants</span>
                      </div>
                      <Progress value={70} className="h-2 mt-2" />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Day 21 of 30</span>
                        <span>9 days remaining</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Link href="/challenges/2">
                      <Button size="sm">View Details</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-lg font-semibold">Popular Challenges</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Medal className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Summer Shred Challenge</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        <span>1,245 participants</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline">8 weeks</Badge>
                        <Badge variant="outline">All Levels</Badge>
                      </div>
                    </div>
                    <Button size="sm">Join</Button>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Medal className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Pull-Up Progression</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        <span>876 participants</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline">6 weeks</Badge>
                        <Badge variant="outline">Beginner-Friendly</Badge>
                      </div>
                    </div>
                    <Button size="sm">Join</Button>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Medal className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Hydration Challenge</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-1 h-4 w-4" />
                        <span>2,134 participants</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline">30 days</Badge>
                        <Badge variant="outline">All Levels</Badge>
                      </div>
                    </div>
                    <Button size="sm">Join</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="upcoming" className="mt-4 space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-muted p-3">
                        <Trophy className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Fall Fitness Bootcamp</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="mr-1 h-4 w-4" />
                          <span>Registration open: 245 signed up</span>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">Starts in 2 weeks (September 15)</div>
                      </div>
                      <Button size="sm">Pre-Register</Button>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-muted p-3">
                        <Trophy className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Marathon Training Group</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="mr-1 h-4 w-4" />
                          <span>Registration open: 178 signed up</span>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">Starts in 3 weeks (September 22)</div>
                      </div>
                      <Button size="sm">Pre-Register</Button>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-muted p-3">
                        <Trophy className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Yoga for Beginners</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="mr-1 h-4 w-4" />
                          <span>Registration open: 312 signed up</span>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">Starts in 1 week (September 8)</div>
                      </div>
                      <Button size="sm">Pre-Register</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="completed" className="mt-4 space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-muted p-3">
                        <Trophy className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Spring Fitness Challenge</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="mr-1 h-4 w-4" />
                          <span>1,245 participants</span>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">Completed on June 15, 2023</div>
                        <div className="flex items-center text-sm mt-1">
                          <Medal className="mr-1 h-4 w-4 text-yellow-500" />
                          <span className="font-medium">Your rank: 78th</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Results
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-muted p-3">
                        <Trophy className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">21-Day Plank Challenge</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="mr-1 h-4 w-4" />
                          <span>876 participants</span>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">Completed on May 22, 2023</div>
                        <div className="flex items-center text-sm mt-1">
                          <Medal className="mr-1 h-4 w-4 text-yellow-500" />
                          <span className="font-medium">Your rank: 45th</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Results
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-muted p-3">
                        <Trophy className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Winter Cardio Challenge</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="mr-1 h-4 w-4" />
                          <span>1,532 participants</span>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">Completed on February 28, 2023</div>
                        <div className="flex items-center text-sm mt-1">
                          <Medal className="mr-1 h-4 w-4 text-yellow-500" />
                          <span className="font-medium">Your rank: 124th</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Results
                      </Button>
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

