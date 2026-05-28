import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye, Edit, Trash2, Power } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const MOCK_MEMBERS = [
  { id: "MG149234", name: "Rahul Chavan", gender: "Male", age: 28, location: "Pune", caste: "96 Kuli", registered: "2023-10-15", status: "Active" },
  { id: "MB135901", name: "Priya Patil", gender: "Female", age: 25, location: "Mumbai", caste: "96 Kuli", registered: "2023-10-16", status: "Pending" },
  { id: "MG149233", name: "Amit Kadam", gender: "Male", age: 30, location: "Nashik", caste: "Deshmukh", registered: "2023-10-14", status: "Active" },
  { id: "MB135900", name: "Sneha Desai", gender: "Female", age: 26, location: "Kolhapur", caste: "96 Kuli", registered: "2023-10-14", status: "Suspended" },
  { id: "MG149232", name: "Vishal Pawar", gender: "Male", age: 31, location: "Satara", caste: "96 Kuli", registered: "2023-10-12", status: "Active" },
  { id: "MB135899", name: "Pooja Shinde", gender: "Female", age: 27, location: "Pune", caste: "Kunbi", registered: "2023-10-11", status: "Expired" },
  { id: "MG149231", name: "Sagar Jadhav", gender: "Male", age: 29, location: "Solapur", caste: "96 Kuli", registered: "2023-10-10", status: "Active" },
  { id: "MB135898", name: "Neha Mane", gender: "Female", age: 24, location: "Sangli", caste: "Deshmukh", registered: "2023-10-09", status: "Active" },
  { id: "MG149230", name: "Ramesh Bhosale", gender: "Male", age: 32, location: "Mumbai", caste: "96 Kuli", registered: "2023-10-08", status: "Pending" },
  { id: "MB135897", name: "Aarti More", gender: "Female", age: 26, location: "Nagpur", caste: "Kunbi", registered: "2023-10-05", status: "Active" },
];

export default function Members() {
  const [members, setMembers] = useState(MOCK_MEMBERS);
  const { toast } = useToast();

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this member?")) {
      setMembers(members.filter(m => m.id !== id));
      toast({
        title: "Member Deleted",
        description: `Profile ${id} has been removed.`,
      });
    }
  };

  const handleToggleStatus = (id: string, currentStatus: string) => {
    const newStatus = currentStatus === "Active" ? "Suspended" : "Active";
    setMembers(members.map(m => m.id === id ? { ...m, status: newStatus } : m));
    toast({
      title: "Status Updated",
      description: `Profile ${id} is now ${newStatus}.`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800 border-green-200';
      case 'Pending': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Suspended': return 'bg-red-100 text-red-800 border-red-200';
      case 'Expired': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-serif font-bold text-foreground">Members Management</h1>
            <p className="text-sm text-muted-foreground">Manage all registered profiles</p>
          </div>
          <Button className="bg-primary text-secondary hover:bg-primary/90" data-testid="btn-add-member">
            Add New Member
          </Button>
        </div>

        {/* Filters */}
        <div className="bg-card p-4 rounded-lg shadow-sm border flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1 w-full space-y-1">
            <Input placeholder="Search by ID, Name or Mobile..." className="w-full" data-testid="filter-search" />
          </div>
          <div className="w-full md:w-48 space-y-1">
            <Select>
              <SelectTrigger data-testid="filter-gender">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Genders</SelectItem>
                <SelectItem value="male">Male (Groom)</SelectItem>
                <SelectItem value="female">Female (Bride)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full md:w-48 space-y-1">
            <Select>
              <SelectTrigger data-testid="filter-status">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full md:w-48 space-y-1">
            <Select>
              <SelectTrigger data-testid="filter-location">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="pune">Pune</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="nashik">Nashik</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Profile ID</TableHead>
                  <TableHead>Photo</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Gender</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Sub-caste</TableHead>
                  <TableHead>Registered</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="font-medium text-primary">{member.id}</TableCell>
                    <TableCell>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${member.name}`} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </TableCell>
                    <TableCell className="font-medium">{member.name}</TableCell>
                    <TableCell>{member.gender}</TableCell>
                    <TableCell>{member.age}</TableCell>
                    <TableCell>{member.location}</TableCell>
                    <TableCell>{member.caste}</TableCell>
                    <TableCell>{member.registered}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusColor(member.status)}>
                        {member.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600" title="View" data-testid={`action-view-${member.id}`}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-green-600" title="Edit" data-testid={`action-edit-${member.id}`}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 text-amber-600" 
                          title="Toggle Status"
                          onClick={() => handleToggleStatus(member.id, member.status)}
                          data-testid={`action-toggle-${member.id}`}
                        >
                          <Power className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 text-red-600" 
                          title="Delete"
                          onClick={() => handleDelete(member.id)}
                          data-testid={`action-delete-${member.id}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="p-4 border-t text-sm text-muted-foreground flex justify-between items-center">
            <p>Showing 1-{members.length} of 28,450 members</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
