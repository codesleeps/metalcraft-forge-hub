import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import heroWelding from "@/assets/hero-welding.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroWelding})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-dark/95 via-green-dark/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 py-20">
        <div className="max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Master Welders
              <br />
              Built to Last
            </h1>
            
            <p className="text-xl md:text-2xl text-green-light max-w-2xl">
              From premium jerk pans that elevate your BBQ game to custom gates and fencing 
              that secure your property with style. Every piece forged with precision and pride.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button variant="glow" size="xl" className="group">
                <a href="#products" className="flex items-center">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="green" size="xl">
                <a href="#contact">Get Custom Quote</a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-green-medium/30">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-white mr-2" />
                  <span className="text-2xl font-bold text-white">15+</span>
                </div>
                <p className="text-green-light text-sm">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-white mr-2" />
                  <span className="text-2xl font-bold text-white">500+</span>
                </div>
                <p className="text-green-light text-sm">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-white mr-2" />
                  <span className="text-2xl font-bold text-white">100%</span>
                </div>
                <p className="text-green-light text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Sparks Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-spark opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-spark animation-delay-500 opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/5 w-1.5 h-1.5 bg-primary rounded-full animate-spark animation-delay-1000 opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;