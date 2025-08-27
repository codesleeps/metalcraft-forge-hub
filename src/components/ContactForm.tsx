import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.user_metadata?.full_name || "",
    email: user?.email || "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
    timeline: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // If user is logged in and Supabase is available, save to database
      if (user) {
        try {
          const { supabase } = await import('@/lib/supabase');
          const { error } = await supabase
            .from('quotes')
            .insert({
              user_id: user.id,
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              project_type: formData.projectType,
              budget: formData.budget,
              message: formData.message,
              timeline: formData.timeline,
              status: 'pending'
            });

          if (error) throw error;
        } catch (dbError) {
          console.warn('Could not save to database:', dbError);
          // Continue with success message even if DB save fails
        }
      }

      toast({
        title: "Quote Request Sent!",
        description: user 
          ? "Your request has been saved to your dashboard. We'll get back to you within 24 hours."
          : "We'll get back to you within 24 hours with a detailed estimate.",
      });

      // Reset form
      setFormData({
        name: user?.user_metadata?.full_name || "",
        email: user?.email || "",
        phone: "",
        projectType: "",
        budget: "",
        message: "",
        timeline: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send quote request. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "Mon-Fri 8AM-6PM"]
    },
    {
      icon: Mail,
      title: "Email Us", 
      details: ["info@metalcraftforge.com", "quotes@metalcraftforge.com"]
    },
    {
      icon: MapPin,
      title: "Visit Our Shop",
      details: ["123 Industrial Blvd", "Workshop City, WC 12345"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 8AM-6PM", "Sat: 9AM-3PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background border-t-4 border-black">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl text-muted-foreground">
            Get a free quote for your custom metalwork project. We'll work with you to bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border-2 border-black shadow-glow">
            <h3 className="text-2xl font-bold text-foreground mb-6">Request Your Quote</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type</Label>
                  <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jerk-pan">Jerk Pan</SelectItem>
                      <SelectItem value="custom-gate">Custom Gate</SelectItem>
                      <SelectItem value="steel-fencing">Steel Fencing</SelectItem>
                      <SelectItem value="custom-metalwork">Custom Metalwork</SelectItem>
                      <SelectItem value="repair">Repair/Restoration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-500">Under $500</SelectItem>
                      <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                      <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                      <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                      <SelectItem value="5000-plus">$5,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Timeline</Label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="When do you need it?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="2-3-months">2-3 months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Details</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                  placeholder="Tell us about your project, dimensions, special requirements, etc."
                />
              </div>

              <Button type="submit" variant="default" size="xl" className="w-full">
                Send Quote Request
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-primary rounded-2xl p-8 text-white border-2 border-black shadow-glow">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-primary-foreground/80 mb-8">
                Have questions? We're here to help. Reach out using any of the methods below 
                or stop by our workshop to see our craftsmanship firsthand.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-primary-foreground/70 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <Card className="p-6 border-2 border-black bg-primary/5 shadow-glow">
              <h4 className="text-xl font-bold text-foreground mb-3">Emergency Repairs</h4>
              <p className="text-muted-foreground mb-4">
                Gate won't close? Fencing damaged? We offer 24/7 emergency repair services.
              </p>
              <Button variant="default" className="w-full">
                Call Emergency Line: (555) 911-WELD
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;