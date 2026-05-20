import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

export default function Internships() {
  const { toast } = useToast();
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      program: "",
      message: ""
    }
  });

  const onSubmit = (data: any) => {
    toast({
      title: "Application Submitted",
      description: "We have received your internship application. We'll be in touch soon!",
    });
    form.reset();
  };

  const programs = [
    "Web Development",
    "App Development",
    "Digital Marketing",
    "Graphic Design"
  ];

  return (
    <div className="w-full">
      <section className="bg-slate-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/20 via-slate-950 to-slate-950" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Launch Your Career</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Join our comprehensive internship programs and get hands-on experience working on real-world projects.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Available Programs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {programs.map((prog, i) => (
                  <Card key={i} className="bg-white border-slate-200">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg text-slate-800">{prog}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Program Details</h3>
              <ul className="space-y-4 text-slate-600">
                <li>• <strong>Duration:</strong> 3 Months / 6 Months</li>
                <li>• <strong>Stipend:</strong> Performance-based</li>
                <li>• <strong>Perks:</strong> Mentorship, Real projects, Certificate on completion</li>
              </ul>
            </div>

            <div>
              <Card className="shadow-xl border-none">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Apply Now</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                <Input placeholder="+91 XXXXXXXXXX" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="program"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Select Program</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a program" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {programs.map(p => (
                                  <SelectItem key={p} value={p}>{p}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message / Cover Letter</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Tell us why you want to join..." className="min-h-[100px]" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full h-12 text-lg rounded-full mt-4">Submit Application</Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
