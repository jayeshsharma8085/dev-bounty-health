import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Heart, MessageCircle, Search, Share2, User, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SocialPage() {
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
          <Link href="/profile">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Social Feed</h1>
          <Link href="/buddies">
            <Button size="sm" className="gap-1">
              <Users className="h-4 w-4" />
              Find Buddies
            </Button>
          </Link>
        </div>
        <Card>
          <CardContent className="p-4">
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@user" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Textarea placeholder="Share your fitness journey..." className="min-h-[80px]" />
                <div className="mt-2 flex justify-end">
                  <Button>Post</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Tabs defaultValue="feed">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="feed">Feed</TabsTrigger>
            <TabsTrigger value="buddies">Buddies</TabsTrigger>
            <TabsTrigger value="discover">Discover</TabsTrigger>
          </TabsList>
          <TabsContent value="feed" className="mt-4 space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah Johnson" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Sarah Johnson</div>
                    <div className="text-sm text-muted-foreground">2 hours ago</div>
                  </div>
                </div>
                <div className="mt-4">
                  <p>Just completed a 5K run in 22:45! New personal best! 🏃‍♀️🔥 #Running #PersonalBest</p>
                </div>
                <div className="mt-4">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    width={500}
                    height={300}
                    alt="Running track"
                    className="rounded-lg object-cover w-full"
                  />
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Heart className="h-4 w-4" />
                    <span>24</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>8</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </Button>
                </div>
                <div className="mt-4 border-t pt-4">
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Mike Chen" />
                        <AvatarFallback>MC</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Mike Chen</span>
                          <span className="text-xs text-muted-foreground">1 hour ago</span>
                        </div>
                        <p className="text-sm">Amazing job! That's a great time! 👏</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Emma Wilson" />
                        <AvatarFallback>EW</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Emma Wilson</span>
                          <span className="text-xs text-muted-foreground">45 min ago</span>
                        </div>
                        <p className="text-sm">Congrats on the PB! What's your next goal?</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <Input placeholder="Write a comment..." className="flex-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Mike Chen" />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Mike Chen</div>
                    <div className="text-sm text-muted-foreground">Yesterday</div>
                  </div>
                </div>
                <div className="mt-4">
                  <p>
                    Achieved a new personal best on bench press: 185 lbs! 💪 Hard work is paying off. #Strength #GymLife
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Heart className="h-4 w-4" />
                    <span>36</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>12</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </Button>
                </div>
                <div className="mt-4 border-t pt-4">
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="David Park" />
                        <AvatarFallback>DP</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">David Park</span>
                          <span className="text-xs text-muted-foreground">12 hours ago</span>
                        </div>
                        <p className="text-sm">Beast mode! What's your training split like?</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <Input placeholder="Write a comment..." className="flex-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Emma Wilson" />
                    <AvatarFallback>EW</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Emma Wilson</div>
                    <div className="text-sm text-muted-foreground">2 days ago</div>
                  </div>
                </div>
                <div className="mt-4">
                  <p>
                    Just joined the '30-Day Core Challenge'! Who else is in? Let's motivate each other! 💯
                    #CoreChallenge #FitnessGoals
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Heart className="h-4 w-4" />
                    <span>18</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>5</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </Button>
                </div>
                <div className="mt-4 border-t pt-4">
                  <div className="mt-3 flex gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <Input placeholder="Write a comment..." className="flex-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="buddies" className="mt-4 space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Sarah Johnson" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-sm text-muted-foreground">Running enthusiast • 15 mutual buddies</div>
                      <div className="text-xs text-muted-foreground">Last active: 2 hours ago</div>
                    </div>
                    <Button size="sm">Message</Button>
                  </div>
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Mike Chen" />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium">Mike Chen</div>
                      <div className="text-sm text-muted-foreground">Weightlifting pro • 8 mutual buddies</div>
                      <div className="text-xs text-muted-foreground">Last active: Yesterday</div>
                    </div>
                    <Button size="sm">Message</Button>
                  </div>
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Emma Wilson" />
                      <AvatarFallback>EW</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium">Emma Wilson</div>
                      <div className="text-sm text-muted-foreground">Yoga instructor • 5 mutual buddies</div>
                      <div className="text-xs text-muted-foreground">Last active: 2 days ago</div>
                    </div>
                    <Button size="sm">Message</Button>
                  </div>
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" alt="David Park" />
                      <AvatarFallback>DP</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium">David Park</div>
                      <div className="text-sm text-muted-foreground">CrossFit athlete • 3 mutual buddies</div>
                      <div className="text-xs text-muted-foreground">Last active: 3 days ago</div>
                    </div>
                    <Button size="sm">Message</Button>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <Link href="/buddies">
                    <Button variant="outline">View All Buddies</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="discover" className="mt-4 space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Jason Lee" />
                      <AvatarFallback>JL</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium">Jason Lee</div>
                      <div className="text-sm text-muted-foreground">Marathon runner • 2 mutual buddies</div>
                      <div className="text-xs text-muted-foreground">Similar fitness goals to yours</div>
                    </div>
                    <Button size="sm">Connect</Button>
                  </div>
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Sophia Garcia" />
                      <AvatarFallback>SG</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium">Sophia Garcia</div>
                      <div className="text-sm text-muted-foreground">Fitness coach • 5 mutual buddies</div>
                      <div className="text-xs text-muted-foreground">Recommended based on your interests</div>
                    </div>
                    <Button size="sm">Connect</Button>
                  </div>
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Ryan Taylor" />
                      <AvatarFallback>RT</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium">Ryan Taylor</div>
                      <div className="text-sm text-muted-foreground">Powerlifter • 1 mutual buddy</div>
                      <div className="text-xs text-muted-foreground">Similar workout schedule to yours</div>
                    </div>
                    <Button size="sm">Connect</Button>
                  </div>
                  <div className="flex items-center gap-4 p-3 border rounded-lg">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Olivia Kim" />
                      <AvatarFallback>OK</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium">Olivia Kim</div>
                      <div className="text-sm text-muted-foreground">Nutrition specialist • 3 mutual buddies</div>
                      <div className="text-xs text-muted-foreground">Recommended by Sarah Johnson</div>
                    </div>
                    <Button size="sm">Connect</Button>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <Link href="/discover">
                    <Button variant="outline">Discover More</Button>
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

