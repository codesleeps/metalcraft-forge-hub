import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  console.log('Index component rendering...');
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductShowcase />
      <Gallery />
      <ContactForm />
      
      {/* Footer */}
      <footer className="bg-gradient-green text-white py-12 border-t-4 border-black">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">MetalCraft Forge</h3>
              <p className="text-green-light">
                Master metalworkers crafting premium jerk pans, custom gates, 
                and steel fencing with uncompromising quality and attention to detail.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block hover:text-yellow-dark transition-colors">Home</a>
                <a href="#products" className="block hover:text-yellow-dark transition-colors">Products</a>
                <a href="#gallery" className="block hover:text-yellow-dark transition-colors">Gallery</a>
                <a href="#contact" className="block hover:text-yellow-dark transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <div className="space-y-2">
                <a 
                  href="#products" 
                  className="block hover:text-yellow-dark transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Custom Jerk Pans
                </a>
                <a 
                  href="#products" 
                  className="block hover:text-yellow-dark transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Decorative Gates
                </a>
                <a 
                  href="#products" 
                  className="block hover:text-yellow-dark transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Steel Fencing
                </a>
                <a 
                  href="#contact" 
                  className="block hover:text-yellow-dark transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Metal Fabrication
                </a>
                <a 
                  href="#contact" 
                  className="block hover:text-yellow-dark transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Repairs & Restoration
                </a>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-yellow/50 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 MetalCraft Forge. All rights reserved. Built with precision and pride.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
