import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProfilePage() {
  const profileImage = PlaceHolderImages.find(img => img.id === 'user-profile');

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card>
        <CardHeader className="relative h-48 bg-muted/30 rounded-t-lg">
          <div className="absolute -bottom-12 left-6">
            <div className="relative h-24 w-24 rounded-full border-4 border-card">
              <Image
                src={profileImage?.imageUrl || "https://picsum.photos/seed/100/200/200"}
                alt="User Profile"
                layout="fill"
                className="rounded-full object-cover"
                data-ai-hint={profileImage?.imageHint}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-16">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">Sofia Davis</CardTitle>
              <CardDescription>UX/UI Designer</CardDescription>
            </div>
            <Button>Edit Profile</Button>
          </div>

          <Tabs defaultValue="overview" className="mt-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="settings">Account Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4">
              <p className="text-muted-foreground">
                Sofia is a creative and detail-oriented UX/UI designer with a passion for creating intuitive and beautiful user experiences.
                With over 5 years in the industry, she specializes in mobile and web application design.
              </p>
            </TabsContent>
            <TabsContent value="details" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Email</Label>
                  <Input readOnly value="m@example.com" />
                </div>
                <div>
                  <Label>Role</Label>
                  <Input readOnly value="Admin" />
                </div>
                 <div>
                  <Label>Location</Label>
                  <Input readOnly value="San Francisco, CA" />
                </div>
                 <div>
                  <Label>Member Since</Label>
                  <Input readOnly value="January 15, 2022" />
                </div>
              </div>
            </TabsContent>
             <TabsContent value="settings" className="mt-4">
                <p className="text-muted-foreground">Account settings will be available here.</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
