import { useState } from "react";
import { HeroSection } from "@/components/blocks/hero-section";
import { ComparisonSection } from "@/components/blocks/comparison-section";
import { HowItWorksSection } from "@/components/blocks/how-it-works-section";
import { CalculatorSection } from "@/components/blocks/calculator-section/calculator-section";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Footer } from "@/components/ui/footer";
import { Home, FileText, Briefcase, User, Hexagon, Twitter, Instagram } from "lucide-react";
import { RegistrationDialog } from "@/components/blocks/registration-dialog";

const navItems = [
  { name: 'Home', url: '#hero', icon: Home },
  { name: 'Compare', url: '#compare', icon: FileText },
  { name: 'Process', url: '#process', icon: Briefcase },
  { name: 'Savings Calculator', url: '#calculator', icon: User }
];

const footerConfig = {
  logo: <Hexagon className="h-10 w-10 text-primary" />,
  brandName: "GridShare",
  socialLinks: [
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/gridshare",
      label: "Twitter",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://instagram.com/gridshare",
      label: "Instagram",
    },
  ],
  mainLinks: [
    { href: "#hero", label: "Home" },
    { href: "#compare", label: "Compare" },
    { href: "#process", label: "How It Works" },
    { href: "#calculator", label: "Calculator" },
  ],
  legalLinks: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
  copyright: {
    text: "© 2025 GridShare",
    license: "All rights reserved",
  },
};

const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <a 
        href="#hero" 
        className="fixed top-4 sm:top-6 left-4 sm:left-8 z-50 flex items-center gap-x-2 group p-2 sm:p-0"
        aria-label="GridShare Home"
      >
        <Hexagon className="h-8 sm:h-10 w-8 sm:w-10 text-primary transition-transform duration-300 group-hover:scale-110" />
        <span className="font-bold text-lg sm:text-xl text-primary animate-company-name hover-company-name">
          GridShare
        </span>
      </a>
      <NavBar items={navItems} />
      <main className="min-h-screen pt-16 sm:pt-0">
        <section id="hero">
          <HeroSection />
        </section>

        <section id="compare">
          <ComparisonSection />
        </section>

        <section id="process">
          <HowItWorksSection />
        </section>

        <section id="calculator">
          <CalculatorSection onReserveClick={() => setDialogOpen(true)} />
        </section>
      </main>
      <Footer {...footerConfig} />
      <RegistrationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default Index;