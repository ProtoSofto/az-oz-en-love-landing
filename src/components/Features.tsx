import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Sparkles, MessageCircle, Star } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Sparkles,
      title: t('smartMatching'),
      description: t('smartMatchingDesc'),
      color: 'bg-romantic-purple/10 text-romantic-purple'
    },
    {
      icon: Shield,
      title: t('safeEnvironment'),
      description: t('safeEnvironmentDesc'),
      color: 'bg-romantic-pink/10 text-romantic-pink'
    },
    {
      icon: Users,
      title: t('realConnections'),
      description: t('realConnectionsDesc'),
      color: 'bg-romantic-purple/10 text-romantic-purple'
    },
    {
      icon: MessageCircle,
      title: 'Smart Chat',
      description: 'Tərcümə və təklif funksiyaları ilə asان söhbət',
      color: 'bg-romantic-pink/10 text-romantic-pink'
    },
    {
      icon: Heart,
      title: 'Sevgi Testləri',
      description: 'Uyğunluq testləri və şəxsiyyət təhlili',
      color: 'bg-romantic-purple/10 text-romantic-purple'
    },
    {
      icon: Star,
      title: 'Premium Xidmətlər',
      description: 'Eksklüziv funksiyalar və prioritet dəstək',
      color: 'bg-romantic-pink/10 text-romantic-pink'
    }
  ];

  return (
    <section id="features" className="py-20 bg-card-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-love-gradient bg-clip-text text-transparent">
              {t('features')}
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Sevgi tapmaq üçün lazım olan hər şey bir yerdə
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card border-romantic-gray/20 hover:border-romantic-purple/30 transition-all duration-300 hover:shadow-card-glow animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;