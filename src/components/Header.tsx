import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-love-gradient rounded-full shadow-glow">
              <Heart className="w-5 h-5 text-white fill-current" />
            </div>
            <span className="text-xl font-bold bg-love-gradient bg-clip-text text-transparent">
              LoveApp
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
              {t('features')}
            </a>
            <a href="#download" className="text-foreground/80 hover:text-primary transition-colors">
              {t('download')}
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button 
              variant="default" 
              className="bg-love-gradient hover:opacity-90 transition-all duration-300 shadow-romantic"
              onClick={() => window.open('https://t.me/manager_dilara', '_blank')}
            >
              {t('contactManager')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;