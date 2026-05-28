import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Download, IndianRupee, TrendingUp, AlertCircle, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MOCK_PAYMENTS = [
  { id: "TXN-98234", profileId: "MG149234", name: "Rahul Chavan", amount: "₹1,500", type: "Enrollment", method: "UPI", date: "2023-10-30", status: "Paid" },
  { id: "TXN-98233", profileId: "MB135901", name: "Priya Patil", amount: "₹1,500", type: "Enrollment", method: "UPI", date: "2023-10-30", status: "Paid" },
  { id: "TXN-98232", profileId: "MG148001", name: "Sandeep More", amount: "₹1,500", type: "Renewal", method: "Bank Transfer", date: "2023-10-29", status: "Pending" },
  { id: "TXN-98231", profileId: "MG149233", name: "Amit Kadam", amount: "₹2,000", type: "Enrollment", method: "Cash", date: "2023-10-29", status: "Paid" },
  { id: "TXN-98230", profileId: "MB134502", name: "Rutuja Kadam", amount: "₹1,500", type: "Renewal", method: "UPI", date: "2023-10-28", status: "Paid" },
  { id: "TXN-98229", profileId: "MB135900", name: "Sneha Desai", amount: "₹1,500", type: "Enrollment", method: "UPI", date: "2023-10-28", status: "Pending" },
  { id: "TXN-98228", profileId: "MG149232", name: "Vishal Pawar", amount: "₹1,500", type: "Enrollment", method: "Bank Transfer", date: "2023-10-27", status: "Paid" },
  { id: "TXN-98227", profileId: "MG148003", name: "Vaibhav Patil", amount: "₹2,000", type: "Renewal", method: "Cash", date: "2023-10-26", status: "Paid" },
  { id: "TXN-98226", profileId: "MB135899", name: "Pooja Shinde", amount: "₹1,500", type: "Enrollment", method: "UPI", date: "2023-10-25", status: "Paid" },
  { id: "TXN-98225", profileId: "MB134504", name: "Kirti Pawar", amount: "₹1,500", type: "Renewal", method: "UPI", date: "2023-10-25", status: "Pending" },
];

export default function Payments() {
  const { toast } = useToast();

  const handleExport = () => {
    toast({
      title: "Export Started",
      description: "Payment report is being generated and will download shortly."
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-serif font-bold text-foreground">Payments & Finance</h1>
            <p className="text-sm text-muted-foreground">Transaction logs and revenue tracking</p>
          </div>
          <Button variant="outline" onClick={handleExport} data-testid="btn-export-payments">
            <Download className="mr-2 h-4 w-4" /> Export Report
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-l-4 border-l-green-500 shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Collected This Month</p>
                <p className="text-2xl font-bold text-foreground mt-1">₹45,000</p>
              </div>
              <div className="bg-green-100 text-green-600 p-3 rounded-full">
                <IndianRupee className="h-5 w-5" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-amber-500 shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Payments</p>
                <p className="text-2xl font-bold text-foreground mt-1">₹12,000</p>
              </div>
              <div className="bg-amber-100 text-amber-600 p-3 rounded-full">
                <AlertCircle className="h-5 w-5" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-blue-500 shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">New Enrollments</p>
                <p className="text-2xl font-bold text-foreground mt-1">23</p>
              </div>
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                <Users className="h-5 w-5" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-purple-500 shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Renewals</p>
                <p className="text-2xl font-bold text-foreground mt-1">7</p>
              </div>
              <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
                <TrendingUp className="h-5 w-5" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transactions Table */}
        <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
          <div className="p-4 border-b flex justify-between items-center bg-muted/20">
            <h3 className="font-semibold text-lg">Recent Transactions</h3>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Profile</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MOCK_PAYMENTS.map((txn) => (
                <TableRow key={txn.id}>
                  <TableCell className="font-mono text-sm">{txn.id}</TableCell>
                  <TableCell>
                    <div className="font-medium">{txn.name}</div>
                    <div className="text-xs text-muted-foreground">{txn.profileId}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={txn.type === 'Enrollment' ? 'bg-blue-50 text-blue-700' : 'bg-purple-50 text-purple-700'}>
                      {txn.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{txn.method}</TableCell>
                  <TableCell>{txn.date}</TableCell>
                  <TableCell className="font-medium">{txn.amount}</TableCell>
                  <TableCell>
                    {txn.status === 'Paid' ? (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Paid</Badge>
                    ) : (
                      <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Pending</Badge>
                    )}
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
