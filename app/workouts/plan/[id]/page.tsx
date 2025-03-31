import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Calendar, Dumbbell, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function WorkoutPlanPage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/workouts" className="flex items-center gap-2">
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back</span>
        </Link>
        <div className="ml-auto flex gap-2">
          <Button variant="ghost" size="icon">
            <Share2 className="h-5 w-5" />
            <span className="sr-only">Share</span>
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">4-Day Split</h1>
          <p className="text-muted-foreground">Upper/Lower/Push/Pull split for intermediate lifters</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge variant="outline">Strength</Badge>
            <Badge variant="outline">Intermediate</Badge>
            <Badge variant="outline">4 days/week</Badge>
            <Badge variant="outline">45-60 min/session</Badge>
          </div>
        </div>
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-lg font-semibold">Plan Description</h2>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This 4-day split is designed to maximize muscle growth and strength by focusing on different muscle
                  groups each day. The split follows an Upper/Lower/Push/Pull pattern, allowing for adequate recovery
                  between sessions while still training each muscle group twice per week.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Suitable for intermediate lifters with 6+ months of experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Requires access to a full gym with barbells and machines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Progressive overload is built into the program</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Recommended to follow for 8-12 weeks</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-lg font-semibold">Workout Structure</h2>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="day1">
                    <AccordionTrigger>
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Dumbbell className="h-5 w-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <div className="font-medium">Day 1: Upper Body</div>
                          <div className="text-sm text-muted-foreground">Chest, Back, Shoulders, Arms</div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pl-12">
                        <div>
                          <div className="font-medium">Bench Press</div>
                          <div className="text-sm text-muted-foreground">4 sets x 8-10 reps</div>
                        </div>
                        <div>
                          <div className="font-medium">Bent Over Rows</div>
                          <div className="text-sm text-muted-foreground">4 sets x 8-10 reps</div>
                        </div>
                        <div>
                          <div className="font-medium">Overhead Press</div>
                          <div className="text-sm text-muted-foreground">3 sets x 8-10 reps</div>
                        </div>
                        <div>
                          <div className="font-medium">Pull-Ups</div>
                          <div className="text-sm text-muted-foreground">3 sets x 8-10 reps</div>
                        </div>
                        <div>
                          <div className="font-medium">Bicep Curls</div>
                          <div className="text-sm text-muted-foreground">3 sets x 10-12 reps</div>
                        </div>
                        <div>
                          <div className="font-medium">Tricep Pushdowns</div>
                          <div className="text-sm text-muted-foreground">3 sets x 10-12 reps</div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="day2">
                    <AccordionTrigger>
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Dumbbell className="h-5 w-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <div className="font-medium">Day 2: Lower Body</div>
                          <div className="text-sm text-muted-foreground">Quads, Hamstrings, Glutes, Calves</div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pl-12">
                        <div>
                          <div className="font-medium">Squats</div>
                          <div className="text-sm text-muted-foreground">4 sets x 8-10 reps</div>
                        </div>
                        <div>
                          <div className="font-medium">Romanian Deadlifts</div>
                          <div className="text-sm text-muted-foreground">4 sets x 8-10 reps</div>
                        </div>
                        <div>
                          <div className="font-medium">Leg Press</div>
                          <div className="text-sm text-muted-foreground">3 sets x 10-12 reps</div>
                        </div>
                        <div>
                          <div className="font-medium">Leg Curls</div>
                          <div className="text-sm text-muted-foreground">3 sets x 10-12 reps</div>
                        </div>
                        <div>
                          <div className="font-medium">Calf Raises</div>
                          <div className="text-sm text-muted-foreground">4 sets x 15-20 reps</div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="day3">
                    <AccordionTrigger>
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Dumbbell className="h-5 w-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <div className="font-medium">Day 3: Push</div>
                          <div className="text-sm text-muted-foreground">Chest, Shoulders, Triceps</div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pl-12">
                        <div>
                          <div className="font-medium">Incline Bench Press</div>
                          <div className="text-sm text-muted-foreground">4 sets x 8-10 reps</div>
                        </div>
                        <div>
                          <div className="font-medium">Dumbbell Shoulder Press</div>
                          <div className="text-sm text-muted-foreground">4 sets x 8-10 reps</div>
                        </div>
                        <div>
                          <div className="font-medium">Chest Flyes</div>
                          <div className="text-sm text-muted-foreground">3 sets x 10-12 reps</div>
                        </div>
                        <div>
                          <div className="font-medium">Lateral Raises</div>
                          <div className="text-sm text-muted-foreground">3 sets x 12-15 reps</div>
                        </div>
                        <div>
                          <div className="font-medium">Tricep Dips</div>
                          <div className="text-sm text-muted-foreground">3 sets x 8-10 reps</div>
                        </div>
                        <div>
                          <div className="font-medium">Overhead Tricep Extension</div>
                          <div className="text-sm text-muted-foreground">3 sets x 10-12 reps</div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="day4">
                    <AccordionTrigger>
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Dumbbell className="h-5 w-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <div className="font-medium">Day 4: Pull</div>
                          <div className="text-sm text-muted-foreground">Back, Biceps, Rear Delts</div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pl-12">
                        <div>
                          <div className="font-medium">Deadlifts</div>
                          <div className="text-sm text-muted-foreground">4 sets x 6-8 reps</div>
                        </div>
                        <div>
                          <div className="font-medium">Lat Pulldowns</div>
                          <div className="text-sm text-muted-foreground">4 sets x 8-10 reps</div>
                        </div>
                        <div>
                          <div className="font-medium">Seated Cable Rows</div>
                          <div className="text-sm text-muted-foreground">3 sets x 8-10 reps</div>
                        </div>
                        <div>
                          <div className="font-medium">Face Pulls</div>
                          <div className="text-sm text-muted-foreground">3 sets x 12-15 reps</div>
                        </div>
                        <div>
                          <div className="font-medium">Barbell Curls</div>
                          <div className="text-sm text-muted-foreground">3 sets x 8-10 reps</div>
                        </div>
                        <div>
                          <div className="font-medium">Hammer Curls</div>
                          <div className="text-sm text-muted-foreground">3 sets x 10-12 reps</div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
            <div className="flex justify-center">
              <Link href="/workouts/start">
                <Button size="lg" className="gap-2">
                  <Dumbbell className="h-5 w-5" />
                  Start Today's Workout
                </Button>
              </Link>
            </div>
          </TabsContent>
          <TabsContent value="schedule" className="mt-4 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-lg font-semibold">Weekly Schedule</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Calendar className="h-10 w-10 text-primary" />
                    <div className="flex-1">
                      <div className="font-medium">Monday</div>
                      <div className="text-sm">Upper Body • 6:00 PM</div>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Calendar className="h-10 w-10 text-primary" />
                    <div className="flex-1">
                      <div className="font-medium">Tuesday</div>
                      <div className="text-sm">Lower Body • 6:00 PM</div>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Calendar className="h-10 w-10 text-muted-foreground" />
                    <div className="flex-1">
                      <div className="font-medium">Wednesday</div>
                      <div className="text-sm">Rest Day</div>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Calendar className="h-10 w-10 text-primary" />
                    <div className="flex-1">
                      <div className="font-medium">Thursday</div>
                      <div className="text-sm">Push • 6:00 PM</div>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Calendar className="h-10 w-10 text-primary" />
                    <div className="flex-1">
                      <div className="font-medium">Friday</div>
                      <div className="text-sm">Pull • 6:00 PM</div>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Calendar className="h-10 w-10 text-muted-foreground" />
                    <div className="flex-1">
                      <div className="font-medium">Saturday</div>
                      <div className="text-sm">Rest Day</div>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Calendar className="h-10 w-10 text-muted-foreground" />
                    <div className="flex-1">
                      <div className="font-medium">Sunday</div>
                      <div className="text-sm">Rest Day</div>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="progress" className="mt-4 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-lg font-semibold">Plan Progress</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Completion</div>
                      <div className="text-sm">6/12 weeks</div>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "50%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Consistency</div>
                      <div className="text-sm">92%</div>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">Strength Gain</div>
                      <div className="text-sm">+15%</div>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "15%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-medium mb-3">Key Lifts Progress</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Bench Press</div>
                        <div className="text-sm text-muted-foreground">Starting: 155 lbs</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-primary">175 lbs</div>
                        <div className="text-sm text-muted-foreground">+20 lbs</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Squat</div>
                        <div className="text-sm text-muted-foreground">Starting: 205 lbs</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-primary">245 lbs</div>
                        <div className="text-sm text-muted-foreground">+40 lbs</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Deadlift</div>
                        <div className="text-sm text-muted-foreground">Starting: 225 lbs</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-primary">275 lbs</div>
                        <div className="text-sm text-muted-foreground">+50 lbs</div>
                      </div>
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

