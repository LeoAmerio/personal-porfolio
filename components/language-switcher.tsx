"use client";

import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="flex items-center gap-2 rounded-full"
      onClick={toggleLanguage}
      style={{ color: "black" }}
    >
      <Globe className="h-4 w-4" />
      <span>{t("language")}</span>
    </Button>
  );
}
