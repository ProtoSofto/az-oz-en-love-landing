import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, UserCheck, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const VerificationInfo = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto bg-card-gradient border-romantic-gray/20 shadow-card-glow">
          <CardContent className="p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="verification-info" className="border-romantic-gray/20">
                <AccordionTrigger className="text-xl lg:text-2xl font-bold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-romantic-purple/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-romantic-purple" />
                    </div>
                    <span className="bg-love-gradient bg-clip-text text-transparent">
                      {t('whyThroughManager')}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-6">
                  <div className="space-y-6">
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      {t('verificationReason')}
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
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
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VerificationInfo;