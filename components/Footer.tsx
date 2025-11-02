"use client";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="text-4xl">𓂀</div>
            <span className="text-2xl font-display font-bold text-gradient-gold">
              {t("nav.ancientEgypt")}
            </span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("footer.tagline")}
          </p>
          <div className="pt-6 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} {t("footer.rights")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
