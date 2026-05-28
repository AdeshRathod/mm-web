import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { PlusCircle, Edit, Trash2, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MOCK_STORIES = [
  { id: "ST-001", couple: "Rahul & Priya", city: "Pune", year: "2023", published: true },
  { id: "ST-002", couple: "Amit & Sneha", city: "Mumbai", year: "2023", published: true },
  { id: "ST-003", couple: "Vishal & Pooja", city: "Nashik", year: "2022", published: true },
  { id: "ST-004", couple: "Sagar & Neha", city: "Kolhapur", year: "2022", published: false },
  { id: "ST-005", couple: "Ramesh & Aarti", city: "Satara", year: "2021", published: true },
  { id: "ST-006", couple: "Suresh & Anjali", city: "Pune", year: "2021", published: false },
];

export default function AdminSuccessStories() {
  const [stories, setStories] = useState(MOCK_STORIES);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const { toast } = useToast();

  const handleTogglePublish = (id: string) => {
    setStories(stories.map(s => s.id === id ? { ...s, published: !s.published } : s));
    toast({
      title: "Story Updated",
      description: "Visibility status changed successfully."
    });
  };

  const handleDelete = (id: string) => {
    if(confirm("Delete this success story?")) {
      setStories(stories.filter(s => s.id !== id));
      toast({
        title: "Story Deleted",
        description: "Success story removed.",
        variant: "destructive"
      });
    }
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAddOpen(false);
    toast({
      title: "Story Added",
      description: "New success story has been published."
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-serif font-bold text-foreground">Success Stories</h1>
            <p className="text-sm text-muted-foreground">Manage happy couples featured on the site</p>
          </div>
          
          <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary text-secondary hover:bg-primary/90" data-testid="btn-add-story">
                <PlusCircle className="mr-2 h-4 w-4" /> Add New Story
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <form onSubmit={handleAddSubmit}>
                <DialogHeader>
                  <DialogTitle>Add Success Story</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Groom's Name</Label>
                      <Input required placeholder="E.g. Rahul" />
                    </div>
                    <div className="space-y-2">
                      <Label>Bride's Name</Label>
                      <Input required placeholder="E.g. Priya" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>City</Label>
                      <Input required placeholder="E.g. Pune" />
                    </div>
                    <div className="space-y-2">
                      <Label>Marriage Year</Label>
                      <Input required placeholder="2023" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Story Text</Label>
                    <Textarea required placeholder="Share their journey..." rows={4} />
                  </div>
                  <div className="space-y-2">
                    <Label>Couple Photo</Label>
                    <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-muted-foreground bg-muted/20">
                      <ImageIcon className="h-8 w-8 mb-2" />
                      <p className="text-sm">Click to upload photo</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="publish-new" defaultChecked />
                    <Label htmlFor="publish-new">Publish immediately</Label>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" data-testid="submit-story">Save Story</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Story ID</TableHead>
                <TableHead>Couple Names</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Published</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stories.map((story) => (
                <TableRow key={story.id}>
                  <TableCell className="font-medium">{story.id}</TableCell>
                  <TableCell className="font-semibold text-primary">{story.couple}</TableCell>
                  <TableCell>{story.city}</TableCell>
                  <TableCell>{story.year}</TableCell>
                  <TableCell>
                    <Switch 
                      checked={story.published} 
                      onCheckedChange={() => handleTogglePublish(story.id)}
                      data-testid={`toggle-publish-${story.id}`}
                    />
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="text-blue-600">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-red-600"
                      onClick={() => handleDelete(story.id)}
                      data-testid={`delete-story-${story.id}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
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
