import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ChefHat, Shield, Wrench } from "lucide-react";
import jerkPan from "@/assets/jerk-pan.jpg";
import customGate from "@/assets/custom-gate.jpg";
import steelFencing from "@/assets/steel-fencing.jpg";

const ProductShowcase = () => {
  const products = [
    {
      id: "jerk-pans",
      title: "Premium Jerk Pans",
      description: "Hand-forged steel jerk pans designed for authentic Caribbean BBQ. Built to withstand high heat and deliver exceptional cooking results.",
      image: jerkPan,
      icon: ChefHat,
      features: [
        "High-grade steel construction",
        "Perfect heat distribution", 
        "Various sizes available",
        "Commercial-grade quality"
      ],
      price: "From $150"
    },
    {
      id: "custom-gates",
      title: "Custom Gates",
      description: "Bespoke decorative gates that combine security with stunning craftsmanship. Each piece uniquely designed to match your vision.",
      image: customGate,
      icon: Shield,
      features: [
        "Custom designs available",
        "Wrought iron & steel options",
        "Security-focused engineering",
        "Weather-resistant finishes"
      ],
      price: "From $800"
    },
    {
      id: "steel-fencing",
      title: "Steel Fencing",
      description: "Durable and elegant fencing solutions for residential and commercial properties. Modern designs with uncompromising strength.",
      image: steelFencing,
      icon: Wrench,
      features: [
        "Modern industrial design",
        "Heavy-duty construction",
        "Custom height options",
        "Professional installation"
      ],
      price: "From $65/ft"
    }
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Forged to
            <span className="text-transparent bg-gradient-copper bg-clip-text"> Perfection</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Every piece we create combines traditional craftsmanship with modern engineering. 
            Built to last generations.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-steel transition-all duration-500">
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-dark/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-copper/90 p-3 rounded-lg">
                    <product.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-steel-dark/90 text-copper px-3 py-1 rounded-lg font-semibold text-lg">
                    {product.price}
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-copper rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="forge" className="w-full group">
                  Request Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-steel rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need Something Custom?
            </h3>
            <p className="text-steel-light mb-8 max-w-2xl mx-auto">
              We specialize in bringing your unique metalwork visions to life. 
              From concept to completion, we'll work with you every step of the way.
            </p>
            <Button variant="fire" size="xl">
              Start Custom Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;