import React, { createContext, useContext, useState } from 'react';

export type Language = 'az' | 'uz' | 'en';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

export const translations: Translations = {
  // Navigation
  features: {
    az: 'Xüsusiyyətlər',
    uz: 'Xususiyatlar',
    en: 'Features'
  },
  download: {
    az: 'Əlaqə',
    uz: 'Aloqa',
    en: 'Contact'
  },
  
  // Hero Section
  heroTitle: {
    az: 'Həyat Yoldaşınızı Tapın',
    uz: 'Hayot Sherigingizni Toping',
    en: 'Find Your Soulmate'
  },
  heroSubtitle: {
    az: 'Əsl sevgini tapmaq üçün ən yaxşı təcrübə. Giriş yalnız dəvət ilə.',
    uz: 'Haqiqiy sevgini topish uchun eng yaxshi tajriba. Kirish faqat taklif bilan.',
    en: 'The best experience to find true love. Entry by invitation only.'
  },
  startNow: {
    az: 'Dəvət Al',
    uz: 'Taklif Oling',
    en: 'Get Invitation'
  },
  exclusiveAccess: {
    az: 'Eksklüziv Giriş',
    uz: 'Eksklyuziv Kirish',
    en: 'Exclusive Access'
  },
  invitationOnly: {
    az: 'Yalnız Dəvətlə',
    uz: 'Faqat Taklif Bilan',
    en: 'Invitation Only'
  },
  
  // Features
  smartMatching: {
    az: 'Ağıllı Uyğunlaşdırma',
    uz: 'Aqlli Moslashtirish',
    en: 'Smart Matching'
  },
  smartMatchingDesc: {
    az: 'Zərif alqoritmlər sizə uyğun insanları tapır',
    uz: 'Nozik algoritmlar sizga mos odamlarni topadi',
    en: 'Sophisticated algorithms find your perfect matches'
  },
  safeEnvironment: {
    az: 'Təhlükəsiz Mühit',
    uz: 'Xavfsiz Muhit',
    en: 'Safe Environment'
  },
  safeEnvironmentDesc: {
    az: 'Doğrulanmış profillər və təhlükəsiz söhbət',
    uz: 'Tasdiqlangan profillar va xavfsiz suhbat',
    en: 'Verified profiles and secure conversations'
  },
  realConnections: {
    az: 'Həqiqi Əlaqələr',
    uz: 'Haqiqiy Aloqalar',
    en: 'Real Connections'
  },
  realConnectionsDesc: {
    az: 'Dərin və mənalı münasibətlər qurun',
    uz: 'Chuqur va mazmunli munosabatlar quring',
    en: 'Build deep and meaningful relationships'
  },
  
  // Stats
  activeUsers: {
    az: 'Seçilmiş İstifadəçi',
    uz: 'Tanlangan Foydalanuvchi',
    en: 'Selected Users'
  },
  successfulMatches: {
    az: 'Uğurlu Uyğunluq',
    uz: 'Muvaffaqiyatli Moslik',
    en: 'Successful Matches'
  },
  happyCouples: {
    az: 'Xoşbəxt Cütlük',
    uz: 'Baxtli Juftlik',
    en: 'Happy Couples'
  },
  
  // Call to Action
  readyToStart: {
    az: 'Eksklüziv Klubumuza Qoşulmaq İstəyirsiniz?',
    uz: 'Eksklyuziv Klubimizga Qo\'shilishni Xohlaysizmi?',
    en: 'Want to Join Our Exclusive Club?'
  },
  joinToday: {
    az: 'Menecerlə əlaqə saxlayın və dəvət alın',
    uz: 'Menejer bilan bog\'laning va taklif oling',
    en: 'Contact our manager and get an invitation'
  },
  contactManager: {
    az: 'Menecerlə Əlaqə',
    uz: 'Menejer Bilan Aloqa',
    en: 'Contact Manager'
  },
  
  // Footer
  aboutApp: {
    az: 'Tətbiq Haqqında',
    uz: 'Ilova Haqida',
    en: 'About App'
  },
  privacyPolicy: {
    az: 'Məxfilik Siyasəti',
    uz: 'Maxfiylik Siyosati',
    en: 'Privacy Policy'
  },
  termsOfService: {
    az: 'Xidmət Şərtləri',
    uz: 'Xizmat Shartlari',
    en: 'Terms of Service'
  },
  
  // Verification Info
  whyThroughManager: {
    az: 'Niyə Menecer Vasitəsilə?',
    uz: 'Nega Menejer Orqali?',
    en: 'Why Through Manager?'
  },
  verificationReason: {
    az: 'Tətbiqimiz yeni başladığına görə və yüksək keyfiyyətli istifadəçi təcrübəsi təmin etmək üçün, bütün qeydiyyatlar menecerimiz vasitəsilə aparılır. Bu, moshənnikarların qarşısını alır və həqiqətən ciddi münasibət axtaranların platformaya daxil olmasını təmin edir.',
    uz: 'Ilovamiz yangi boshlanganligi sababli va yuqori sifatli foydalanuvchi tajribasini ta\'minlash uchun, barcha ro\'yxatdan o\'tishlar menejerimiz orqali amalga oshiriladi. Bu firibgarlarning oldini oladi va haqiqatan ham jiddiy munosabat izlovchilarning platformaga kirishini ta\'minlaydi.',
    en: 'Since our app is just launching and to ensure a high-quality user experience, all registrations are handled through our manager. This prevents fraudsters and ensures that only people truly looking for serious relationships join the platform.'
  },
  verification: {
    az: 'Doğrulama',
    uz: 'Tasdiqlash',
    en: 'Verification'
  },
  verificationDesc: {
    az: 'Hər istifadəçi şəxsən yoxlanılır',
    uz: 'Har bir foydalanuvchi shaxsan tekshiriladi',
    en: 'Every user is personally verified'
  },
  security: {
    az: 'Təhlükəsizlik',
    uz: 'Xavfsizlik',
    en: 'Security'
  },
  securityDesc: {
    az: 'Yalnız həqiqi insanlar qəbul edilir',
    uz: 'Faqat haqiqiy odamlar qabul qilinadi',
    en: 'Only genuine people are accepted'
  },
  exclusivity: {
    az: 'Eksklüzivlik',
    uz: 'Eksklyuzivlik',
    en: 'Exclusivity'
  },
  exclusivityDesc: {
    az: 'Məhdud sayda keyfiyyətli üzv',
    uz: 'Cheklangan sondagi sifatli a\'zo',
    en: 'Limited number of quality members'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('az');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};