import { PageLayout, PageHero } from "@/components/layout/PageLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, ShieldCheck, Search, PhoneCall, HeadphonesIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  dob: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Gender is required"),
  maritalStatus: z.string().min(1, "Marital status is required"),
  height: z.string().min(1, "Height is required"),
  complexion: z.string().min(1, "Complexion is required"),
  education: z.string().min(1, "Education is required"),
  occupation: z.string().min(2, "Occupation is required"),
  income: z.string().min(1, "Income is required"),
  workingCity: z.string().min(2, "Working city is required"),
  fatherName: z.string().min(2, "Father's name is required"),
  motherName: z.string().min(2, "Mother's name is required"),
  nativePlace: z.string().min(1, "Native place is required"),
  subCaste: z.string().min(1, "Sub-caste is required"),
  mobile: z.string().min(10, "Mobile number must be at least 10 digits"),
  whatsapp: z.string().min(10, "WhatsApp number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  lookingFor: z.string().min(1, "This field is required"),
  ageMin: z.string().min(1, "Min age is required"),
  ageMax: z.string().min(1, "Max age is required"),
  eduPref: z.string().min(1, "Education preference is required"),
  nativePref: z.string().min(1, "Native preference is required"),
});

export default function Enroll() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      dob: "",
      gender: "",
      maritalStatus: "",
      height: "",
      complexion: "",
      education: "",
      occupation: "",
      income: "",
      workingCity: "",
      fatherName: "",
      motherName: "",
      nativePlace: "",
      subCaste: "",
      mobile: "",
      whatsapp: "",
      email: "",
      lookingFor: "",
      ageMin: "",
      ageMax: "",
      eduPref: "",
      nativePref: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Enrollment Submitted!",
      description: "Our team will contact you within 24 hours to complete verification.",
    });
    form.reset();
  }

  return (
    <PageLayout>
      <PageHero title="Enroll Now — Join Anand Maratha" subtitle="Create your verified profile and start your journey" />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-primary/5 rounded-2xl p-6 md:p-8 mb-10 border border-primary/20">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4 text-center">Annual Membership — ₹2,000 per year</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={20} />
              <span className="text-sm font-medium">Verified Maratha profiles</span>
            </div>
            <div className="flex items-start gap-3">
              <Search className="text-accent flex-shrink-0 mt-0.5" size={20} />
              <span className="text-sm font-medium">Smart search filters</span>
            </div>
            <div className="flex items-start gap-3">
              <PhoneCall className="text-accent flex-shrink-0 mt-0.5" size={20} />
              <span className="text-sm font-medium">Direct contact details</span>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-accent flex-shrink-0 mt-0.5" size={20} />
              <span className="text-sm font-medium">Profile privacy protected</span>
            </div>
            <div className="flex items-start gap-3">
              <HeadphonesIcon className="text-accent flex-shrink-0 mt-0.5" size={20} />
              <span className="text-sm font-medium">Expert support</span>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl shadow-sm border border-border p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
              {/* Personal Details */}
              <div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4 border-b border-border pb-2">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="fullName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl><Input placeholder="e.g. Rahul Patil" {...field} data-testid="input-fullname" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="dob" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date of Birth</FormLabel>
                      <FormControl><Input type="date" {...field} data-testid="input-dob" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="gender" render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4">
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl><RadioGroupItem value="Male" data-testid="radio-male" /></FormControl>
                            <FormLabel className="font-normal">Male</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl><RadioGroupItem value="Female" data-testid="radio-female" /></FormControl>
                            <FormLabel className="font-normal">Female</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="maritalStatus" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Marital Status</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-marital">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Unmarried">Unmarried</SelectItem>
                          <SelectItem value="Divorced">Divorced</SelectItem>
                          <SelectItem value="Widowed">Widowed</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="height" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Height</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-height">
                            <SelectValue placeholder="Select height" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="5'0&quot;">5'0"</SelectItem>
                          <SelectItem value="5'1&quot;">5'1"</SelectItem>
                          <SelectItem value="5'2&quot;">5'2"</SelectItem>
                          <SelectItem value="5'3&quot;">5'3"</SelectItem>
                          <SelectItem value="5'4&quot;">5'4"</SelectItem>
                          <SelectItem value="5'5&quot;">5'5"</SelectItem>
                          <SelectItem value="5'6&quot;">5'6"</SelectItem>
                          <SelectItem value="5'7&quot;">5'7"</SelectItem>
                          <SelectItem value="5'8&quot;">5'8"</SelectItem>
                          <SelectItem value="5'9&quot;">5'9"</SelectItem>
                          <SelectItem value="5'10&quot;">5'10"</SelectItem>
                          <SelectItem value="5'11&quot;">5'11"</SelectItem>
                          <SelectItem value="6'0&quot;">6'0"</SelectItem>
                          <SelectItem value="6'1&quot;">6'1"</SelectItem>
                          <SelectItem value="6'2&quot;">6'2"</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="complexion" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Complexion</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-complexion">
                            <SelectValue placeholder="Select complexion" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Fair">Fair</SelectItem>
                          <SelectItem value="Wheatish">Wheatish</SelectItem>
                          <SelectItem value="Dark">Dark</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
              </div>

              {/* Education & Career */}
              <div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4 border-b border-border pb-2">Education & Career</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="education" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Highest Education</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-education">
                            <SelectValue placeholder="Select education" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="B.E/B.Tech">B.E / B.Tech</SelectItem>
                          <SelectItem value="M.E/M.Tech">M.E / M.Tech</SelectItem>
                          <SelectItem value="MBBS/BDS">MBBS / BDS</SelectItem>
                          <SelectItem value="CA/CS">CA / CS</SelectItem>
                          <SelectItem value="MBA">MBA</SelectItem>
                          <SelectItem value="B.Com/M.Com">B.Com / M.Com</SelectItem>
                          <SelectItem value="B.Sc/M.Sc">B.Sc / M.Sc</SelectItem>
                          <SelectItem value="B.A/M.A">B.A / M.A</SelectItem>
                          <SelectItem value="Diploma">Diploma</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="occupation" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Occupation</FormLabel>
                      <FormControl><Input placeholder="e.g. Software Engineer" {...field} data-testid="input-occupation" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="income" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Annual Income</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-income">
                            <SelectValue placeholder="Select income range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Below 3L">Below ₹3 Lakhs</SelectItem>
                          <SelectItem value="3L-5L">₹3 - 5 Lakhs</SelectItem>
                          <SelectItem value="5L-8L">₹5 - 8 Lakhs</SelectItem>
                          <SelectItem value="8L-12L">₹8 - 12 Lakhs</SelectItem>
                          <SelectItem value="12L-20L">₹12 - 20 Lakhs</SelectItem>
                          <SelectItem value="Above 20L">Above ₹20 Lakhs</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="workingCity" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Working City</FormLabel>
                      <FormControl><Input placeholder="e.g. Pune" {...field} data-testid="input-workingcity" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
              </div>

              {/* Family Details */}
              <div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4 border-b border-border pb-2">Family Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="fatherName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Father's Name</FormLabel>
                      <FormControl><Input placeholder="" {...field} data-testid="input-father" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="motherName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mother's Name</FormLabel>
                      <FormControl><Input placeholder="" {...field} data-testid="input-mother" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="nativePlace" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Native District</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-native">
                            <SelectValue placeholder="Select district" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Pune">Pune</SelectItem>
                          <SelectItem value="Satara">Satara</SelectItem>
                          <SelectItem value="Sangli">Sangli</SelectItem>
                          <SelectItem value="Kolhapur">Kolhapur</SelectItem>
                          <SelectItem value="Solapur">Solapur</SelectItem>
                          <SelectItem value="Ahilyanagar">Ahilyanagar</SelectItem>
                          <SelectItem value="Nashik">Nashik</SelectItem>
                          <SelectItem value="Mumbai">Mumbai</SelectItem>
                          <SelectItem value="Thane">Thane</SelectItem>
                          <SelectItem value="Dharashiv">Dharashiv</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="subCaste" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sub-Caste</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-subcaste">
                            <SelectValue placeholder="Select sub-caste" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="96 Kuli Maratha">96 Kuli Maratha</SelectItem>
                          <SelectItem value="Deshmukh Maratha">Deshmukh Maratha</SelectItem>
                          <SelectItem value="Kunbi Maratha">Kunbi Maratha</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4 border-b border-border pb-2">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField control={form.control} name="mobile" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number</FormLabel>
                      <FormControl><Input placeholder="+91" {...field} data-testid="input-mobile" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="whatsapp" render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp Number</FormLabel>
                      <FormControl><Input placeholder="+91" {...field} data-testid="input-whatsapp" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl><Input type="email" placeholder="example@email.com" {...field} data-testid="input-email" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
              </div>

              {/* Partner Preferences */}
              <div>
                <h3 className="text-xl font-serif font-bold text-primary mb-4 border-b border-border pb-2">Partner Preferences</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="lookingFor" render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Looking For</FormLabel>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4">
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl><RadioGroupItem value="Bride" data-testid="radio-looking-bride" /></FormControl>
                            <FormLabel className="font-normal">Bride</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl><RadioGroupItem value="Groom" data-testid="radio-looking-groom" /></FormControl>
                            <FormLabel className="font-normal">Groom</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField control={form.control} name="ageMin" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Min Age</FormLabel>
                        <FormControl><Input type="number" placeholder="21" {...field} data-testid="input-agemin" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="ageMax" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Max Age</FormLabel>
                        <FormControl><Input type="number" placeholder="35" {...field} data-testid="input-agemax" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <FormField control={form.control} name="eduPref" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Education Preference</FormLabel>
                      <FormControl><Input placeholder="e.g. Graduate/Post Graduate" {...field} data-testid="input-edupref" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="nativePref" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Native Place Preference</FormLabel>
                      <FormControl><Input placeholder="e.g. Any, Pune, Satara" {...field} data-testid="input-nativepref" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
              </div>

              {/* Payment Section */}
              <div className="bg-muted rounded-xl p-6 border border-border">
                <h3 className="text-lg font-serif font-bold text-primary mb-4">How to Pay</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-medium mb-2">Option 1: UPI Transfer</p>
                    <p className="text-sm text-foreground/80 mb-1">UPI ID: <span className="font-bold text-primary">anandmaratha@sbi</span></p>
                    <p className="text-sm text-foreground/80">Scan the QR code to pay using any UPI app.</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Option 2: Bank Transfer</p>
                    <p className="text-sm text-foreground/80 mb-1">Bank: State Bank of India</p>
                    <p className="text-sm text-foreground/80 mb-1">A/c Name: Anand Maratha Marriage Bureau</p>
                    <p className="text-sm text-foreground/80 mb-1">A/c No: 34567890123</p>
                    <p className="text-sm text-foreground/80">IFSC: SBIN0001234</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col items-center">
                <p className="text-sm text-primary font-medium mb-4 text-center">
                  Our team will contact you within 24 hours to complete verification.
                </p>
                <Button type="submit" size="lg" className="w-full md:w-auto px-12 bg-secondary text-primary hover:bg-secondary/90 text-lg font-bold" data-testid="button-submit-enroll">
                  Submit Enrollment Form
                </Button>
              </div>

            </form>
          </Form>
        </div>
      </div>
    </PageLayout>
  );
}
