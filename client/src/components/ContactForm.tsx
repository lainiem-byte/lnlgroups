import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useToast } from "@/hooks/use-toast";

const techStackOptions = [
  { label: "n8n", value: "n8n" },
  { label: "Make.com", value: "make" },
  { label: "Replicate", value: "replicate" },
  { label: "OpenAI API", value: "openai" },
  { label: "Zapier", value: "zapier" },
  { label: "Supabase", value: "supabase" },
  { label: "Airtable", value: "airtable" },
  { label: "Other", value: "other" },
];

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  businessName: z.string().min(2, "Business name is required"),
  primaryMarket: z.string({
    required_error: "Please select a primary market",
  }),
  interest: z.string({
    required_error: "Please select a service interest",
  }),
  techStack: z.array(z.string()).min(1, "Select at least one tech stack item"),
});

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      businessName: "",
      primaryMarket: "",
      interest: "",
      techStack: [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Construct payload as requested
    const payload = {
      name: values.name,
      market: values.primaryMarket.charAt(0).toUpperCase() + values.primaryMarket.slice(1), // Simple capitalization
      interest: values.interest,
      tech_stack: values.techStack,
      timestamp: new Date().toISOString().split('T')[0]
    };
    
    // Simulate API call
    console.log("Submitting to /api/leads:", payload);
    console.log("Simulating webhook payload:", JSON.stringify(payload, null, 2));
    
    // Mock delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    toast({
      title: "Strategic inquiry received",
      description: "Lainie will review and add to Google Tasks.",
    });
    
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} className="bg-background/50 border-primary/10 focus:border-primary/50 transition-colors" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="john@company.com" {...field} className="bg-background/50 border-primary/10 focus:border-primary/50 transition-colors" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="businessName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Name</FormLabel>
              <FormControl>
                <Input placeholder="Acme Inc." {...field} className="bg-background/50 border-primary/10 focus:border-primary/50 transition-colors" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="interest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Interest</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-background/50 border-primary/10 focus:border-primary/50 transition-colors">
                    <SelectValue placeholder="Select a service package" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Custom Content Pack">Custom Content Pack</SelectItem>
                  <SelectItem value="Brand Growth Tier">Brand Growth Tier</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="primaryMarket"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Primary Market</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-background/50 border-primary/10 focus:border-primary/50 transition-colors">
                      <SelectValue placeholder="Select a market" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="raleigh">Raleigh / Durham, NC</SelectItem>
                    <SelectItem value="columbus">Columbus, OH</SelectItem>
                    <SelectItem value="moscow">Moscow, ID</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="techStack"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Current Tech Stack</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "justify-between bg-background/50 border-primary/10 hover:bg-background/80 hover:text-primary-foreground",
                          !field.value || field.value.length === 0 ? "text-muted-foreground" : "text-foreground"
                        )}
                      >
                        {field.value?.length > 0
                          ? `${field.value.length} selected`
                          : "Select tools"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search tools..." />
                      <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {techStackOptions.map((framework) => (
                            <CommandItem
                              value={framework.label}
                              key={framework.value}
                              onSelect={() => {
                                const current = field.value || [];
                                const isSelected = current.includes(framework.value);
                                if (isSelected) {
                                  field.onChange(current.filter((value) => value !== framework.value));
                                } else {
                                  field.onChange([...current, framework.value]);
                                }
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  field.value?.includes(framework.value)
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {framework.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-xl transition-all shadow-lg hover:shadow-primary/20"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Submit Inquiry"
          )}
        </Button>
      </form>
    </Form>
  );
}