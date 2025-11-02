"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 font-medium"
    >
      <Globe className="h-4 w-4" />
      <span>{language === "en" ? "العربية" : "English"}</span>
    </Button>
  );
};

export default LanguageSwitch;
