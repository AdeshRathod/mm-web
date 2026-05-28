import { Link } from "wouter";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Users, 
  UserCheck, 
  ClipboardList, 
  Heart,
  ArrowUpRight,
  PlusCircle,
  BellRing,
  MessageSquare
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    { title: "Total Members", value: "28,450", icon: Users, trend: "+143 this month", color: "border-l-primary" },
    { title: "Active Profiles", value: "16,830", icon: UserCheck, trend: "Stable", color: "border-l-secondary" },
    { title: "Pending Approvals", value: "12", icon: ClipboardList, trend: "Requires action", color: "border-l-amber-500", alert: true },
    { title: "Marriages Settled", value: "30,247", icon: Heart, trend: "+24 this month", color: "border-l-green-500" },
  ];

  const recentRegistrations = [
    { id: "MG149234", name: "Rahul Chavan", gender: "Male", date: "Today", location: "Pune", status: "Active" },
    { id: "MB135901", name: "Priya Patil", gender: "Female", date: "Today", location: "Mumbai", status: "Pending" },
    { id: "MG149233", name: "Amit Kadam", gender: "Male", date: "Yesterday", location: "Nashik", status: "Active" },
    { id: "MB135900", name: "Sneha Desai", gender: "Female", date: "Yesterday", location: "Kolhapur", status: "Suspended" },
    { id: "MG149232", name: "Vishal Pawar", gender: "Male", date: "2 days ago", location: "Satara", status: "Active" },
  ];

  const activities = [
    "New profile MG149234 registered — Chavan, Pune",
    "MB135901 approved by admin",
    "Success story added: Rahul & Priya",
    "Renewal payment received: MG148975 — ₹1,500",
    "Response request: MG148975 → MB135622",
    "Profile MG145222 suspended for inactivity",
    "New profile MB135900 registered — Desai, Kolhapur",
    "Renewal reminder sent to 45 members"
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800 border-green-200';
      case 'Pending': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Suspended': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-serif font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Welcome back, here's what's happening today.</p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <Card key={i} className={`border-l-4 ${stat.color} shadow-sm`}>
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className={`text-2xl font-bold mt-1 ${stat.alert ? 'text-amber-600' : 'text-foreground'}`}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    {stat.trend.startsWith('+') && <ArrowUpRight className="h-3 w-3 text-green-500" />}
                    {stat.trend}
                  </p>
                </div>
                <div className={`p-3 rounded-full ${stat.alert ? 'bg-amber-100 text-amber-600' : 'bg-primary/5 text-primary'}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/admin/approvals">
            <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white" data-testid="dashboard-action-approvals">
              <ClipboardList className="mr-2 h-4 w-4" /> Approve Pending
            </Button>
          </Link>
          <Link href="/admin/success-stories">
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white" data-testid="dashboard-action-stories">
              <PlusCircle className="mr-2 h-4 w-4" /> Add Success Story
            </Button>
          </Link>
          <Link href="/admin/renewals">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" data-testid="dashboard-action-renewals">
              <BellRing className="mr-2 h-4 w-4" /> Send Renewal Notice
            </Button>
          </Link>
          <Link href="/admin/responses">
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" data-testid="dashboard-action-responses">
              <MessageSquare className="mr-2 h-4 w-4" /> View Responses
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Table */}
          <Card className="lg:col-span-2 shadow-sm">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-semibold">Recent Registrations</h3>
              <Link href="/admin/members" className="text-sm text-primary hover:underline">View all</Link>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Profile ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Gender</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentRegistrations.map((reg) => (
                  <TableRow key={reg.id}>
                    <TableCell className="font-medium text-primary">{reg.id}</TableCell>
                    <TableCell>{reg.name}</TableCell>
                    <TableCell>{reg.gender}</TableCell>
                    <TableCell>{reg.date}</TableCell>
                    <TableCell>{reg.location}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusColor(reg.status)}>
                        {reg.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>

          {/* Activity Feed & Chart */}
          <div className="space-y-6">
            <Card className="shadow-sm">
              <div className="p-4 border-b">
                <h3 className="font-semibold">Recent Activity</h3>
              </div>
              <CardContent className="p-0">
                <div className="divide-y max-h-[250px] overflow-y-auto">
                  {activities.map((activity, i) => (
                    <div key={i} className="p-3 text-sm flex items-start gap-3 hover:bg-muted/50 transition-colors">
                      <div className="w-2 h-2 mt-1.5 rounded-full bg-secondary flex-shrink-0" />
                      <p className="text-foreground/80">{activity}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <div className="p-4 border-b">
                <h3 className="font-semibold">Registrations Overview</h3>
              </div>
              <CardContent className="p-4">
                <div className="h-40 flex items-end gap-2 pt-4">
                  {[40, 65, 45, 80, 55, 90, 75, 100, 85, 60, 110, 95].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end group">
                      <div 
                        className="bg-primary/20 hover:bg-secondary rounded-t-sm transition-all w-full relative"
                        style={{ height: `${height}%` }}
                      >
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          {height}
                        </span>
                      </div>
                      <div className="text-[10px] text-center mt-1 text-muted-foreground">
                        {['J','F','M','A','M','J','J','A','S','O','N','D'][i]}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
