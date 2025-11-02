"use client";
import { useState } from "react";
import  Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitch from "./LanguageSwitch";
import { usePathname } from "next/navigation";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
   const pathname = usePathname(); 
  const { t } = useLanguage();

  const links = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.timeline"), path: "/timeline" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="text-3xl">𓂀</div>
            <span className="text-xl font-display font-bold text-gradient-gold">
              {t("nav.ancientEgypt")}
            </span>
          </Link>


          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`font-medium transition-smooth ${
                  isActive(link.path)
                    ? "text-yellow-500"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <LanguageSwitch />
          </div>

          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block py-3 font-medium transition-smooth ${
                  isActive(link.path)
                    ? "text-yellow-500"
                    : "text-muted-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="py-3">
              <LanguageSwitch />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
