import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Check, X, MapPin, GraduationCap, Calendar, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MOCK_PENDING = [
  { id: "MG149301", name: "Suresh Patil", gender: "Male", age: 29, location: "Pune", education: "BE Computer", date: "2 hours ago" },
  { id: "MB135912", name: "Anjali Kadam", gender: "Female", age: 25, location: "Mumbai", education: "MBA", date: "3 hours ago" },
  { id: "MG149300", name: "Kiran Pawar", gender: "Male", age: 31, location: "Nashik", education: "B.Com", date: "5 hours ago" },
  { id: "MB135911", name: "Priyanka Desai", gender: "Female", age: 26, location: "Kolhapur", education: "B.Sc Agri", date: "1 day ago" },
  { id: "MG149299", name: "Rahul Jadhav", gender: "Male", age: 28, location: "Satara", education: "M.Tech", date: "1 day ago" },
  { id: "MB135910", name: "Sneha Mane", gender: "Female", age: 24, location: "Sangli", education: "B.Arch", date: "1 day ago" },
  { id: "MG149298", name: "Vikram Bhosale", gender: "Male", age: 30, location: "Pune", education: "MCA", date: "2 days ago" },
  { id: "MB135909", name: "Kavita More", gender: "Female", age: 27, location: "Thane", education: "B.Ed", date: "2 days ago" },
  { id: "MG149297", name: "Ajay Shinde", gender: "Male", age: 32, location: "Mumbai", education: "MBBS", date: "2 days ago" },
  { id: "MB135908", name: "Rani Chavan", gender: "Female", age: 25, location: "Aurangabad", education: "B.Pharm", date: "3 days ago" },
  { id: "MG149296", name: "Nitin Salunkhe", gender: "Male", age: 29, location: "Solapur", education: "BBA", date: "3 days ago" },
  { id: "MB135907", name: "Neha Gaikwad", gender: "Female", age: 26, location: "Pune", education: "M.Com", date: "3 days ago" },
];

export default function Approvals() {
  const [pending, setPending] = useState(MOCK_PENDING);
  const [rejectingId, setRejectingId] = useState<string | null>(null);
  const [rejectReason, setRejectReason] = useState("");
  const { toast } = useToast();

  const handleApprove = (id: string) => {
    setPending(pending.filter(p => p.id !== id));
    toast({
      title: "Profile Approved",
      description: `${id} has been approved and is now active.`,
    });
  };

  const handleRejectConfirm = (id: string) => {
    setPending(pending.filter(p => p.id !== id));
    setRejectingId(null);
    setRejectReason("");
    toast({
      title: "Profile Rejected",
      description: `${id} has been rejected. Reason saved.`,
      variant: "destructive"
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-end border-b pb-4">
          <div>
            <h1 className="text-2xl font-serif font-bold text-foreground">Pending Approvals</h1>
            <p className="text-sm text-muted-foreground mt-1">Review and approve new member registrations</p>
          </div>
          <Badge className="bg-amber-100 text-amber-800 border-amber-200 text-lg px-3 py-1">
            {pending.length} Pending
          </Badge>
        </div>

        {pending.length === 0 ? (
          <div className="text-center py-20 bg-card rounded-lg border border-dashed">
            <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-medium text-foreground">All Caught Up!</h3>
            <p className="text-muted-foreground mt-2">There are no profiles waiting for approval.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {pending.map(profile => (
              <Card key={profile.id} className="overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader className="p-4 pb-2 flex flex-row items-center gap-4">
                  <Avatar className="h-14 w-14 border border-secondary">
                    <AvatarFallback className={profile.gender === 'Male' ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700'}>
                      {profile.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-primary line-clamp-1">{profile.name}</h3>
                    <p className="text-xs font-medium text-muted-foreground">{profile.id}</p>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2 space-y-2 text-sm text-foreground/80">
                  <div className="flex items-center gap-2">
                    <User className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>{profile.age} yrs, {profile.gender}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="line-clamp-1">{profile.education}</span>
                  </div>
                  <div className="flex items-center gap-2 pt-2 mt-2 border-t text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Submitted {profile.date}</span>
                  </div>
                </CardContent>
                
                {rejectingId === profile.id ? (
                  <CardFooter className="p-4 bg-red-50/50 flex flex-col gap-2 border-t border-red-100">
                    <Textarea 
                      placeholder="Reason for rejection..." 
                      className="text-xs min-h-[60px] resize-none"
                      value={rejectReason}
                      onChange={e => setRejectReason(e.target.value)}
                      data-testid={`reject-reason-${profile.id}`}
                    />
                    <div className="flex gap-2 w-full">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 text-xs" 
                        onClick={() => setRejectingId(null)}
                      >
                        Cancel
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive" 
                        className="flex-1 text-xs"
                        onClick={() => handleRejectConfirm(profile.id)}
                        disabled={!rejectReason.trim()}
                        data-testid={`confirm-reject-${profile.id}`}
                      >
                        Confirm
                      </Button>
                    </div>
                  </CardFooter>
                ) : (
                  <CardFooter className="p-4 pt-0 gap-2">
                    <Button 
                      variant="outline" 
                      className="flex-1 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                      onClick={() => setRejectingId(profile.id)}
                      data-testid={`btn-reject-${profile.id}`}
                    >
                      <X className="h-4 w-4 mr-1" /> Reject
                    </Button>
                    <Button 
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => handleApprove(profile.id)}
                      data-testid={`btn-approve-${profile.id}`}
                    >
                      <Check className="h-4 w-4 mr-1" /> Approve
                    </Button>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
