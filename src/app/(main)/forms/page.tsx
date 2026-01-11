import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function FormsPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Basic Form Elements</CardTitle>
          <CardDescription>A showcase of various input types.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Password" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div>
           <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Your message</Label>
            <Textarea placeholder="Type your message here." id="message" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Selection Controls</CardTitle>
          <CardDescription>Checkboxes, radio buttons, and selects.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label>Role</Label>
             <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
          </div>
         
          <div>
            <Label>Notifications</Label>
            <RadioGroup defaultValue="all" className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="r1" />
                <Label htmlFor="r1">All new messages</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mentions" id="r2" />
                <Label htmlFor="r2">Direct messages and mentions</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="r3" />
                <Label htmlFor="r3">Nothing</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
             <Label>Communication</Label>
             <div className="mt-2 space-y-2">
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
                 <div className="flex items-center space-x-2">
                    <Checkbox id="marketing" />
                    <Label htmlFor="marketing">Receive marketing emails</Label>
                </div>
            </div>
          </div>

          <Button>Submit</Button>
        </CardContent>
      </Card>
    </div>
  );
}
