import { Shield, UserCheck, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const VerificationInfo = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto bg-card-gradient border-romantic-gray/20 shadow-card-glow">
          <CardContent className="p-8 lg:p-12">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-romantic-purple/20 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-romantic-purple" />
                </div>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold">
                <span className="bg-love-gradient bg-clip-text text-transparent">
                  {t('whyThroughManager')}
                </span>
              </h3>
              
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                {t('verificationReason')}
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-romantic-pink/20 rounded-xl flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-romantic-pink" />
                  </div>
                  <h4 className="font-semibold text-foreground">{t('verification')}</h4>
                  <p className="text-sm text-foreground/70">{t('verificationDesc')}</p>
                </div>
                
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-romantic-purple/20 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-romantic-purple" />
                  </div>
                  <h4 className="font-semibold text-foreground">{t('security')}</h4>
                  <p className="text-sm text-foreground/70">{t('securityDesc')}</p>
                </div>
                
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-romantic-pink/20 rounded-xl flex items-center justify-center">
                    <Lock className="w-6 h-6 text-romantic-pink" />
                  </div>
                  <h4 className="font-semibold text-foreground">{t('exclusivity')}</h4>
                  <p className="text-sm text-foreground/70">{t('exclusivityDesc')}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VerificationInfo;