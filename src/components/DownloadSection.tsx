import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Download, Apple } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

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
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg flex items-center gap-3 transition-all duration-300 shadow-card-glow"
                  >
                    <Apple className="w-6 h-6" />
                    App Store
                  </Button>
                  <Button 
                    size="lg" 
                    className="bg-love-gradient hover:opacity-90 text-white px-8 py-6 text-lg flex items-center gap-3 transition-all duration-300 shadow-romantic"
                  >
                    <Download className="w-6 h-6" />
                    Google Play
                  </Button>
                </div>
                
                <div className="pt-8 border-t border-romantic-gray/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-love-gradient bg-clip-text text-transparent">
                        100K+
                      </div>
                      <div className="text-foreground/60">Yükləmələr</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-love-gradient bg-clip-text text-transparent">
                        4.8★
                      </div>
                      <div className="text-foreground/60">Reytinq</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-love-gradient bg-clip-text text-transparent">
                        25+
                      </div>
                      <div className="text-foreground/60">Ölkələr</div>
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