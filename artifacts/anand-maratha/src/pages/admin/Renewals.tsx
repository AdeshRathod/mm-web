import { AdminLayout } from "@/components/admin/AdminLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Send, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MOCK_UPCOMING = [
  { id: "MG148001", name: "Sandeep More", mobile: "9876543210", expiry: "2023-11-05", days: 5, amount: "₹1,500" },
  { id: "MB134502", name: "Rutuja Kadam", mobile: "9876543211", expiry: "2023-11-08", days: 8, amount: "₹1,500" },
  { id: "MG148003", name: "Vaibhav Patil", mobile: "9876543212", expiry: "2023-11-10", days: 10, amount: "₹2,000" },
  { id: "MB134504", name: "Kirti Pawar", mobile: "9876543213", expiry: "2023-11-12", days: 12, amount: "₹1,500" },
  { id: "MG148005", name: "Ganesh Desai", mobile: "9876543214", expiry: "2023-11-15", days: 15, amount: "₹1,500" },
  { id: "MB134506", name: "Pooja Jadhav", mobile: "9876543215", expiry: "2023-11-20", days: 20, amount: "₹2,000" },
  { id: "MG148007", name: "Avinash Mane", mobile: "9876543216", expiry: "2023-11-25", days: 25, amount: "₹1,500" },
  { id: "MB134508", name: "Snehal Bhosale", mobile: "9876543217", expiry: "2023-11-28", days: 28, amount: "₹1,500" },
];

const MOCK_EXPIRED = [
  { id: "MG147990", name: "Ramesh Shinde", mobile: "9876543220", expiry: "2023-10-25", days: -5, amount: "₹1,500" },
  { id: "MB134491", name: "Aarti Chavan", mobile: "9876543221", expiry: "2023-10-20", days: -10, amount: "₹1,500" },
  { id: "MG147992", name: "Sachin Gaikwad", mobile: "9876543222", expiry: "2023-10-15", days: -15, amount: "₹2,000" },
  { id: "MB134493", name: "Dipali Salunkhe", mobile: "9876543223", expiry: "2023-10-01", days: -30, amount: "₹1,500" },
  { id: "MG147994", name: "Prashant Kulkarni", mobile: "9876543224", expiry: "2023-09-15", days: -45, amount: "₹1,500" },
];

export default function Renewals() {
  const { toast } = useToast();

  const handleSendReminder = (id: string) => {
    toast({
      title: "Reminder Sent",
      description: `SMS & Email reminder sent to ${id}.`,
    });
  };

  const handleBulkReminders = () => {
    toast({
      title: "Bulk Reminders Sent",
      description: "Reminders dispatched to all visible profiles.",
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-serif font-bold text-foreground">Membership Renewals</h1>
            <p className="text-sm text-muted-foreground">Track expiring and expired memberships</p>
          </div>
          <Button onClick={handleBulkReminders} data-testid="btn-bulk-remind">
            <Send className="mr-2 h-4 w-4" /> Send Bulk Reminders
          </Button>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="upcoming">Upcoming Renewals (8)</TabsTrigger>
            <TabsTrigger value="expired">Expired (5)</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming">
            <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Profile ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Mobile</TableHead>
                    <TableHead>Expiry Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Amount Due</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_UPCOMING.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell className="font-medium text-primary">{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.mobile}</TableCell>
                      <TableCell>{row.expiry}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={row.days <= 7 ? "bg-amber-100 text-amber-800" : "bg-blue-100 text-blue-800"}>
                          Expires in {row.days} days
                        </Badge>
                      </TableCell>
                      <TableCell>{row.amount}</TableCell>
                      <TableCell className="text-right">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleSendReminder(row.id)}
                          data-testid={`remind-${row.id}`}
                        >
                          <Send className="h-3 w-3 mr-2" /> Remind
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="expired">
            <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Profile ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Mobile</TableHead>
                    <TableHead>Expired On</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Amount Due</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_EXPIRED.map((row) => (
                    <TableRow key={row.id} className="bg-red-50/20">
                      <TableCell className="font-medium text-red-600">{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.mobile}</TableCell>
                      <TableCell>{row.expiry}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200">
                          <AlertCircle className="h-3 w-3 mr-1 inline" />
                          Expired {Math.abs(row.days)} days ago
                        </Badge>
                      </TableCell>
                      <TableCell>{row.amount}</TableCell>
                      <TableCell className="text-right">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-red-200 text-red-600 hover:bg-red-50"
                          onClick={() => handleSendReminder(row.id)}
                        >
                          <Send className="h-3 w-3 mr-2" /> Remind
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}
