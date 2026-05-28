import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Eye, ArrowRight } from "lucide-react";

const MOCK_RESPONSES = [
  { id: "REQ-8901", from: "MG149234 (Rahul)", to: "MB135901 (Priya)", date: "2023-10-25", status: "Pending" },
  { id: "REQ-8900", from: "MB135899 (Pooja)", to: "MG149231 (Sagar)", date: "2023-10-24", status: "Accepted" },
  { id: "REQ-8899", from: "MG149233 (Amit)", to: "MB135898 (Neha)", date: "2023-10-23", status: "Declined" },
  { id: "REQ-8898", from: "MG149232 (Vishal)", to: "MB135900 (Sneha)", date: "2023-10-22", status: "Accepted" },
  { id: "REQ-8897", from: "MB135897 (Aarti)", to: "MG149230 (Ramesh)", date: "2023-10-21", status: "Expired" },
  { id: "REQ-8896", from: "MG149229 (Sanjay)", to: "MB135896 (Komal)", date: "2023-10-20", status: "Pending" },
  { id: "REQ-8895", from: "MB135895 (Dipali)", to: "MG149228 (Ajit)", date: "2023-10-19", status: "Accepted" },
  { id: "REQ-8894", from: "MG149227 (Sachin)", to: "MB135894 (Sonali)", date: "2023-10-18", status: "Pending" },
  { id: "REQ-8893", from: "MG149226 (Vijay)", to: "MB135893 (Rupali)", date: "2023-10-17", status: "Declined" },
  { id: "REQ-8892", from: "MB135892 (Swati)", to: "MG149225 (Deepak)", date: "2023-10-16", status: "Accepted" },
];

export default function Responses() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Accepted': return 'bg-green-100 text-green-800 border-green-200';
      case 'Pending': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Declined': return 'bg-red-100 text-red-800 border-red-200';
      case 'Expired': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-serif font-bold text-foreground">Interest Responses</h1>
          <p className="text-sm text-muted-foreground">Monitor requests and communications between members</p>
        </div>

        <div className="flex justify-between items-center bg-card p-4 rounded-lg border">
          <div className="w-64">
            <Select defaultValue="all">
              <SelectTrigger data-testid="filter-status">
                <SelectValue placeholder="Filter by Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Responses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="accepted">Accepted</SelectItem>
                <SelectItem value="declined">Declined</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <p className="text-sm text-muted-foreground">Showing 10 recent responses</p>
        </div>

        <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Request ID</TableHead>
                <TableHead>From Profile</TableHead>
                <TableHead></TableHead>
                <TableHead>To Profile</TableHead>
                <TableHead>Date Sent</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_RESPONSES.map((res) => (
                <TableRow key={res.id}>
                  <TableCell className="font-medium">{res.id}</TableCell>
                  <TableCell className="text-primary">{res.from}</TableCell>
                  <TableCell className="text-muted-foreground"><ArrowRight className="h-4 w-4" /></TableCell>
                  <TableCell className="text-primary">{res.to}</TableCell>
                  <TableCell>{res.date}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusColor(res.status)}>
                      {res.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="text-blue-600" data-testid={`view-req-${res.id}`}>
                          <Eye className="h-4 w-4 mr-1" /> View
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Request Details: {res.id}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-muted/30 rounded-lg border">
                              <p className="text-xs text-muted-foreground mb-1">Sender</p>
                              <p className="font-medium text-primary">{res.from}</p>
                              <p className="text-sm mt-2">Premium Member</p>
                            </div>
                            <div className="p-4 bg-muted/30 rounded-lg border">
                              <p className="text-xs text-muted-foreground mb-1">Receiver</p>
                              <p className="font-medium text-primary">{res.to}</p>
                              <p className="text-sm mt-2">Free Member</p>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium mb-1">Status</p>
                            <Badge variant="outline" className={getStatusColor(res.status)}>
                              {res.status}
                            </Badge>
                          </div>
                          <div>
                            <p className="text-sm font-medium mb-1">Timeline</p>
                            <div className="text-sm text-muted-foreground">
                              <p>Sent: {res.date} 10:30 AM</p>
                              {res.status === 'Accepted' && <p>Accepted: {res.date} 02:15 PM</p>}
                              {res.status === 'Declined' && <p>Declined: {res.date} 11:45 AM</p>}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
}
