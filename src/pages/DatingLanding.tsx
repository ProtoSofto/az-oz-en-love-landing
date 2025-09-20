import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import VerificationInfo from "@/components/VerificationInfo";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const DatingLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <VerificationInfo />
        <Features />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default DatingLanding;