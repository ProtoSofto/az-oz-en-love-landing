import { Button } from "@/components/ui/button";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'az', name: 'Az', flag: '🇦🇿' },
    { code: 'uz', name: 'Uz', flag: '🇺🇿' },
    { code: 'en', name: 'En', flag: '🇺🇸' },
  ];

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage(lang.code)}
          className="flex items-center gap-1 text-sm transition-all duration-300"
        >
          <span>{lang.flag}</span>
          <span>{lang.name}</span>
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;