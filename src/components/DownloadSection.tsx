import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, MessageCircle, Crown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const DownloadSection = () => {
  const { t } = useLanguage();

  return (
    <section id="download" className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card-gradient border-romantic-gray/20 shadow-card-glow">
            <CardContent className="p-12 text-center">
              <div className="space-y-8 animate-fade-in">
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-love-gradient rounded-3xl flex items-center justify-center shadow-romantic animate-pulse-glow">
                    <Smartphone className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-bold">
                    <span className="bg-love-gradient bg-clip-text text-transparent">
                      {t('readyToStart')}
                    </span>
                  </h2>
                  <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                    {t('joinToday')}
                  </p>
                </div>
                
                {/* Exclusive Club Badge */}
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-romantic-purple/10 border border-romantic-purple/20 rounded-full text-lg mb-6">
                  <Crown className="w-5 h-5 text-romantic-pink" />
                  <span className="text-romantic-pink font-semibold">Qapalı Beta Versiyası</span>
                </div>

                <div className="flex justify-center">
                  <Button 
                    size="lg" 
                    className="bg-love-gradient hover:opacity-90 text-white px-12 py-8 text-xl flex items-center gap-3 transition-all duration-300 shadow-romantic hover:shadow-glow"
                    onClick={() => window.open('https://t.me/manager_dilara', '_blank')}
                  >
                    <MessageCircle className="w-6 h-6" />
                    {t('contactManager')}
                  </Button>
                </div>
                
                <div className="pt-8 border-t border-romantic-gray/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-love-gradient bg-clip-text text-transparent">
                        Beta
                      </div>
                      <div className="text-foreground/60">Mərhələ</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-love-gradient bg-clip-text text-transparent">
                        Eksklüziv
                      </div>
                      <div className="text-foreground/60">Giriş</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-love-gradient bg-clip-text text-transparent">
                        VIP
                      </div>
                      <div className="text-foreground/60">Klub</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;