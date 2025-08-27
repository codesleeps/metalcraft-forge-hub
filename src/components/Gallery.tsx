import { Card, CardContent } from "@/components/ui/card";
import jerkPanImage from "@/assets/jerk-pan.jpg";
import customGateImage from "@/assets/custom-gate.jpg";
import steelFencingImage from "@/assets/steel-fencing.jpg";
import heroWeldingImage from "@/assets/hero-welding.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Custom Jerk Pan",
      image: jerkPanImage,
      description: "Handcrafted traditional jerk pan with authentic design"
    },
    {
      id: 2,
      title: "Decorative Gate",
      image: customGateImage,
      description: "Ornate custom metalwork gate with intricate patterns"
    },
    {
      id: 3,
      title: "Steel Fencing",
      image: steelFencingImage,
      description: "Durable steel fencing for security and style"
    },
    {
      id: 4,
      title: "Welding Process",
      image: heroWeldingImage,
      description: "Master craftsman at work creating quality metalwork"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-card">
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
              className="group overflow-hidden hover:shadow-glow transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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