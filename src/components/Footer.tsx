import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-romantic-gray/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-love-gradient rounded-full shadow-glow">
                <Heart className="w-5 h-5 text-white fill-current" />
              </div>
              <span className="text-xl font-bold bg-love-gradient bg-clip-text text-transparent">
                LoveApp
              </span>
            </div>
            <p className="text-foreground/70">
              Həqiqi sevgini tapmaq üçün ən yaxşı platformа. Milyonlarla insanın etibar etdiyi tətbiq.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">{t('aboutApp')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-romantic-purple transition-colors">
                  Necə işləyir
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-romantic-purple transition-colors">
                  Təhlükəsizlik
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-romantic-purple transition-colors">
                  Uğur hekayələri
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-romantic-purple transition-colors">
                  Bloq
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Hüquqi</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-romantic-purple transition-colors">
                  {t('privacyPolicy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-romantic-purple transition-colors">
                  {t('termsOfService')}
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-romantic-purple transition-colors">
                  Cookies Siyasəti
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Əlaqə</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-foreground/70">
                <Mail className="w-4 h-4 text-romantic-purple" />
                support@loveapp.az
              </li>
              <li className="flex items-center gap-3 text-foreground/70">
                <Phone className="w-4 h-4 text-romantic-purple" />
                +994 12 345 67 89
              </li>
              <li className="flex items-center gap-3 text-foreground/70">
                <MapPin className="w-4 h-4 text-romantic-purple" />
                Bakı, Azərbaycan
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-romantic-gray/20 mt-12 pt-8 text-center">
          <p className="text-foreground/60">
            © 2024 LoveApp. Bütün hüquqlar qorunur.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;