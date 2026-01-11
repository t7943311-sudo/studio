"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Rocket, Info, TriangleAlert, CircleCheck } from "lucide-react"
import React from "react"


export default function UIElementsPage() {
  const { toast } = useToast()
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">UI Elements</h1>
        <p className="text-muted-foreground">A showcase of the components available in this template.</p>
      </div>

      <div className="grid gap-6">
        {/* Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>Various styles of buttons.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button><Rocket className="mr-2 h-4 w-4" /> With Icon</Button>
            <Button disabled>Disabled</Button>
          </CardContent>
        </Card>

        {/* Cards */}
        <Card>
          <CardHeader>
            <CardTitle>Cards</CardTitle>
            <CardDescription>A versatile container for content.</CardDescription>
          </CardHeader>
          <CardContent>
             <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is the card content area. You can put any elements you want inside here.</p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        
        <div className="grid gap-6 lg:grid-cols-2">
            {/* Alerts */}
            <Card>
            <CardHeader>
                <CardTitle>Alerts</CardTitle>
                <CardDescription>Catch the user's attention with important messages.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    This is a default alert.
                </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                <TriangleAlert className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    This is a destructive alert.
                </AlertDescription>
                </Alert>
            </CardContent>
            </Card>

            {/* Toasts */}
            <Card>
                <CardHeader><CardTitle>Toasts</CardTitle><CardDescription>For brief, non-intrusive notifications.</CardDescription></CardHeader>
                <CardContent className="flex flex-wrap gap-4">
                    <Button onClick={() => {
                        toast({
                            title: "Success!",
                            description: "Your changes have been saved.",
                        })
                    }}>
                        Show Toast
                    </Button>
                     <Button variant="destructive" onClick={() => {
                        toast({
                            variant: "destructive",
                            title: "Uh oh! Something went wrong.",
                            description: "There was a problem with your request.",
                        })
                    }}>
                        Show Destructive Toast
                    </Button>
                </CardContent>
            </Card>
        </div>


        <div className="grid gap-6 lg:grid-cols-2">
            {/* Input & Label */}
            <Card>
            <CardHeader>
                <CardTitle>Form Elements</CardTitle>
                <CardDescription>For collecting user input.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="email-2">Email</Label>
                    <Input type="email" id="email-2" placeholder="Email" />
                    <p className="text-sm text-muted-foreground">Enter your email address.</p>
                </div>
                 <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="message">Textarea</Label>
                    <Textarea id="message" placeholder="Your message..." />
                </div>
            </CardContent>
            </Card>
            {/* Badges */}
            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
                <CardDescription>Used to highlight information or status.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </CardContent>
            </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
            {/* Accordion */}
            <Card>
              <CardHeader>
                <CardTitle>Accordion</CardTitle>
                <CardDescription>A vertically stacked set of interactive headings that each reveal a section of content.</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It follows the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It comes with default styles that matches the other
                      components&apos; aesthetic.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It's animated by default, but you can disable it if you
                      prefer.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Calendar */}
            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>A date picker component.</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
        </div>

        {/* Modals & Dialogs */}
        <Card>
          <CardHeader>
            <CardTitle>Modals & Dialogs</CardTitle>
            <CardDescription>For confirmations and focused tasks.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog Title</DialogTitle>
                  <DialogDescription>
                    This is a dialog. You can use it to display information or require user interaction.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button type="submit">Confirm</Button>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">Close</Button>
                    </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Open Alert Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your
                    data.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>
        
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Checkbox & Radio */}
          <Card>
            <CardHeader>
                <CardTitle>Selection Controls</CardTitle>
                <CardDescription>Checkboxes and radio buttons.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <Label>Checkboxes</Label>
                    <div className="mt-2 space-y-2">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="c1" />
                            <Label htmlFor="c1">Accept terms</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="c2" checked/>
                            <Label htmlFor="c2">Subscribe to newsletter</Label>
                        </div>
                    </div>
                </div>
                 <div>
                    <Label>Radio Group</Label>
                    <RadioGroup defaultValue="comfortable" className="mt-2">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="default" id="r1" />
                        <Label htmlFor="r1">All messages</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comfortable" id="r2" />
                        <Label htmlFor="r2">Mentions only</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="compact" id="r3" />
                        <Label htmlFor="r3">Nothing</Label>
                    </div>
                    </RadioGroup>
                </div>
            </CardContent>
          </Card>
           {/* Dropdown Menu & Select */}
           <Card>
            <CardHeader>
                <CardTitle>Dropdowns & Selects</CardTitle>
                <CardDescription>For menus and option selection.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                 <div>
                    <Label>Dropdown Menu</Label>
                    <div className="mt-2">
                        <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">Open Menu</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div>
                    <Label>Select</Label>
                    <Select>
                    <SelectTrigger className="w-full mt-2">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectContent>
                    </Select>
                </div>
            </CardContent>
           </Card>
        </div>

        {/* Carousel */}
        <Card>
            <CardHeader><CardTitle>Carousel</CardTitle><CardDescription>A slideshow component for cycling through elements.</CardDescription></CardHeader>
            <CardContent className="flex justify-center p-6">
                <Carousel className="w-full max-w-xs">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                        <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">{index + 1}</span>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                </Carousel>
            </CardContent>
        </Card>
        
        {/* Progress, Slider, Switch */}
        <Card>
            <CardHeader><CardTitle>Indicators & Controls</CardTitle><CardDescription>Progress bars, sliders, and switches.</CardDescription></CardHeader>
            <CardContent className="space-y-8">
                <div>
                    <Label>Progress Bar</Label>
                    <Progress value={progress} className="w-[60%] mt-2" />
                </div>
                 <div>
                    <Label>Slider</Label>
                    <Slider defaultValue={[50]} max={100} step={1} className="w-[60%] mt-2" />
                </div>
                <div>
                    <div className="flex items-center space-x-2 mt-2">
                        <Switch id="airplane-mode" />
                        <Label htmlFor="airplane-mode">Airplane Mode</Label>
                    </div>
                </div>
            </CardContent>
        </Card>

      </div>
    </div>
  )
}
