"use client"
import { Button } from "./ui/button";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={"/hero-pharaoh.jpg"}
          alt="Ancient Egyptian Pharaoh"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient-gold mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("history")}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold shadow-gold transition-smooth"
            >
              {t("hero.exploreHistory")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("sites")}
              className="bg-white text-yellow-500 border-yellow-500 hover:bg-yellow-100 font-semibold shadow-gold transition-smooth"
//               className="border-gradient-gold text-gradient-gold hover:bg-yellow-400 font-semibold transition-smooth bg-white"
            >
              {t("hero.sites")}
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;