import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Crown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-dating.jpg";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-romantic-purple/20 via-transparent to-romantic-pink/20" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-romantic-purple/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-romantic-pink/10 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-love-gradient bg-clip-text text-transparent">
                  {t('heroTitle')}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-foreground/80 leading-relaxed">
                {t('heroSubtitle')}
              </p>
            </div>
            
            {/* Exclusive Access Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-romantic-purple/20 border border-romantic-purple/30 rounded-full text-sm mb-6">
              <Crown className="w-4 h-4 text-romantic-pink" />
              <span className="text-romantic-pink font-medium">{t('exclusiveAccess')}</span>
              <span className="text-foreground/70">• {t('invitationOnly')}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-love-gradient hover:opacity-90 text-white px-8 py-6 text-lg shadow-romantic transition-all duration-300 hover:shadow-glow"
                onClick={() => window.open('https://t.me/loveapp_manager', '_blank')}
              >
                <Heart className="w-5 h-5 mr-2 fill-current" />
                {t('startNow')}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-lg border-romantic-purple/50 text-romantic-purple hover:bg-romantic-purple/10 transition-all duration-300"
                onClick={() => window.open('https://t.me/loveapp_manager', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('contactManager')}
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold bg-love-gradient bg-clip-text text-transparent">2.5K</div>
                <div className="text-sm text-foreground/60">{t('activeUsers')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-love-gradient bg-clip-text text-transparent">1.8K</div>
                <div className="text-sm text-foreground/60">{t('successfulMatches')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-love-gradient bg-clip-text text-transparent">450</div>
                <div className="text-sm text-foreground/60">{t('happyCouples')}</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Dating App" 
                className="w-full max-w-lg mx-auto rounded-3xl shadow-card-glow animate-float"
              />
            </div>
            {/* Floating hearts */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-romantic-pink/20 rounded-full flex items-center justify-center animate-float">
              <Heart className="w-8 h-8 text-romantic-pink fill-current" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-romantic-purple/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
              <Heart className="w-6 h-6 text-romantic-purple fill-current" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;