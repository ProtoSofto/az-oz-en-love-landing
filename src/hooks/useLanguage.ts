import { useState, useEffect } from 'react';

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
    az: 'Yüklə',
    uz: 'Yuklab olish',
    en: 'Download'
  },
  
  // Hero Section
  heroTitle: {
    az: 'Həyat Yoldaşınızı Tapın',
    uz: 'Hayot Sherigingizni Toping',
    en: 'Find Your Soulmate'
  },
  heroSubtitle: {
    az: 'Əsl sevgini tapmaq üçün ən yaxşı təcrübə',
    uz: 'Haqiqiy sevgini topish uchun eng yaxshi tajriba',
    en: 'The best experience to find true love'
  },
  startNow: {
    az: 'İndi Başla',
    uz: 'Hoziroq Boshlang',
    en: 'Start Now'
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
    az: 'Aktiv İstifadəçi',
    uz: 'Faol Foydalanuvchi',
    en: 'Active Users'
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
    az: 'Sevgi Səyahətinizə Başlamağa Hazırsınızmı?',
    uz: 'Sevgi Sayohatingizni Boshlashga Tayyormisiz?',
    en: 'Ready to Start Your Love Journey?'
  },
  joinToday: {
    az: 'Bu gün qoşulun və həyat yoldaşınızı tapın',
    uz: 'Bugun qo\'shiling va hayot sherigingizni toping',
    en: 'Join today and find your perfect match'
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
  }
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('az');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return {
    language,
    setLanguage,
    t
  };
};