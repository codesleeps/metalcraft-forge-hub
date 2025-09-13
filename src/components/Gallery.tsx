import { Card, CardContent } from "@/components/ui/card";
import jerkPanImage from "@/assets/jerk-pan.webp";
import jerkPanClosed from "@/assets/jerk-pan-closed.webp";
import jerkpanSmoker from "@/assets/jerkpan-smoker.webp";
import jerkpanSmokerClosed from "@/assets/jerkpan-smoker-closed.webp";
import jerkpanSmokerOpen from "@/assets/jerkpan-smoker-open.webp";
import jerkpanThermostat from "@/assets/jerkpan-thermostat.webp";
import halfDrum from "@/assets/half-drum.webp";
import roundGrill from "@/assets/round-grill.webp";
import verticalSmoker from "@/assets/vertical-smoker.webp";
import verticalSmoker2 from "@/assets/vertical-smoker2.webp";
import verticalSmokerOpen from "@/assets/vertical-smoker-open.webp";
import verticalSmokerInside from "@/assets/vertical-smoker-inside.webp";
import customGate from "@/assets/custom-gate.jpg";
import steelFencing from "@/assets/steel-fencing.jpg";
import heroWelding from "@/assets/hero-welding.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Traditional Jerk Pan",
      description: "Classic open-style jerk pan for authentic Caribbean BBQ",
      image: jerkPanImage,
      category: "Jerk Pans"
    },
    {
      id: 2,
      title: "Closed Jerk Pan",
      description: "Premium closed jerk pan with enhanced heat retention",
      image: jerkPanClosed,
      category: "Jerk Pans"
    },
    {
      id: 3,
      title: "Jerk Pan Smoker",
      description: "Professional smoker with temperature control",
      image: jerkpanSmoker,
      category: "Smokers"
    },
    {
      id: 4,
      title: "Closed Smoker Unit",
      description: "Sealed smoker for consistent temperature control",
      image: jerkpanSmokerClosed,
      category: "Smokers"
    },
    {
      id: 5,
      title: "Open Smoker Configuration",
      description: "Versatile smoker with adjustable ventilation",
      image: jerkpanSmokerOpen,
      category: "Smokers"
    },
    {
      id: 6,
      title: "Thermostat Smoker",
      description: "Advanced smoker with built-in temperature monitoring",
      image: jerkpanThermostat,
      category: "Smokers"
    },
    {
      id: 7,
      title: "Half Drum Grill",
      description: "Large capacity grill for events and commercial use",
      image: halfDrum,
      category: "Grills"
    },
    {
      id: 8,
      title: "Round Grill",
      description: "Compact round grill with efficient heat distribution",
      image: roundGrill,
      category: "Grills"
    },
    {
      id: 9,
      title: "Vertical Smoker",
      description: "Space-efficient vertical smoker with multiple racks",
      image: verticalSmoker,
      category: "Vertical Smokers"
    },
    {
      id: 10,
      title: "Premium Vertical Smoker",
      description: "Top-of-the-line vertical smoker with advanced features",
      image: verticalSmoker2,
      category: "Vertical Smokers"
    },
    {
      id: 11,
      title: "Open Vertical Smoker",
      description: "Vertical smoker showing internal rack configuration",
      image: verticalSmokerOpen,
      category: "Vertical Smokers"
    },
    {
      id: 12,
      title: "Vertical Smoker Interior",
      description: "Interior view showing rack system and construction",
      image: verticalSmokerInside,
      category: "Vertical Smokers"
    },
    {
      id: 13,
      title: "Custom Gate",
      description: "Handcrafted decorative gate with security features",
      image: customGate,
      category: "Custom Metalwork"
    },
    {
      id: 14,
      title: "Steel Fencing",
      description: "Modern steel fencing for residential and commercial use",
      image: steelFencing,
      category: "Custom Metalwork"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-card border-t-4 border-b-4 border-black">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our finest metalwork creations. Each piece showcases our commitment 
            to quality craftsmanship and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {galleryItems.map((item) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden hover:shadow-glow transition-all duration-300 cursor-pointer border-2 border-black"
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;