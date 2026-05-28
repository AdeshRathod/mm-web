import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Globe, BellRing, ShieldCheck } from "lucide-react";

export default function Settings() {
  const { toast } = useToast();

  const handleSave = (section: string) => {
    toast({
      title: "Settings Saved",
      description: `${section} settings have been updated successfully.`,
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-4xl mx-auto pb-10">
        <div>
          <h1 className="text-2xl font-serif font-bold text-foreground">Platform Settings</h1>
          <p className="text-sm text-muted-foreground">Configure global website parameters and admin preferences</p>
        </div>

        {/* Site Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Site Details
            </CardTitle>
            <CardDescription>Basic information displayed on the website</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="siteName">Site Name</Label>
                <Input id="siteName" defaultValue="Anand Maratha Matrimony" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPhone">Contact Phone</Label>
                <Input id="contactPhone" defaultValue="+91 9876543210" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Contact Email</Label>
                <Input id="contactEmail" defaultValue="contact@anandmaratha.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="officeHours">Office Hours</Label>
                <Input id="officeHours" defaultValue="10:00 AM - 6:00 PM (Sun Closed)" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Maximum Profile Age Range</Label>
              <div className="flex items-center gap-2">
                <Input type="number" defaultValue="18" className="w-20" />
                <span>to</span>
                <Input type="number" defaultValue="65" className="w-20" />
                <span className="text-sm text-muted-foreground ml-2">years old</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button onClick={() => handleSave("Site")} data-testid="save-site-settings">Save Site Settings</Button>
          </CardFooter>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BellRing className="h-5 w-5 text-primary" />
              Admin Notifications
            </CardTitle>
            <CardDescription>Manage which email alerts you receive</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between border-b pb-4">
              <div className="space-y-0.5">
                <Label className="text-base">New Registration</Label>
                <p className="text-sm text-muted-foreground">Receive email when a new profile is created</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between border-b pb-4">
              <div className="space-y-0.5">
                <Label className="text-base">Profile Approved</Label>
                <p className="text-sm text-muted-foreground">Receive email when sub-admin approves a profile</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between border-b pb-4">
              <div className="space-y-0.5">
                <Label className="text-base">Renewal Reminder Sent</Label>
                <p className="text-sm text-muted-foreground">Copy on automated renewal notices</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Payment Received</Label>
                <p className="text-sm text-muted-foreground">Alert when a transaction is completed</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button onClick={() => handleSave("Notification")} data-testid="save-notification-settings">Save Notification Settings</Button>
          </CardFooter>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Security
            </CardTitle>
            <CardDescription>Update your admin access credentials</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 max-w-sm">
              <Label htmlFor="currentPwd">Current Password</Label>
              <Input id="currentPwd" type="password" />
            </div>
            <div className="space-y-2 max-w-sm">
              <Label htmlFor="newPwd">New Password</Label>
              <Input id="newPwd" type="password" />
            </div>
            <div className="space-y-2 max-w-sm">
              <Label htmlFor="confirmPwd">Confirm New Password</Label>
              <Input id="confirmPwd" type="password" />
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4">
            <Button variant="destructive" onClick={() => handleSave("Security")} data-testid="save-security-settings">Update Password</Button>
          </CardFooter>
        </Card>
      </div>
    </AdminLayout>
  );
}
