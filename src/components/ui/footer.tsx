
import { Icons } from "@/components/ui/icons";
import { Facebook, Github, Twitter, Instagram, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const footerContent = {
    logo: <Icons.logo className="h-8 w-8 text-primary" />,
    brandName: "GridShare",
    socialLinks: [
      {
        icon: <Github className="h-5 w-5" />,
        href: "https://github.com/gridshare",
        label: "GitHub"
      },
      {
        icon: <Twitter className="h-5 w-5" />,
        href: "https://twitter.com/gridshare",
        label: "Twitter"
      },
      {
        icon: <Linkedin className="h-5 w-5" />,
        href: "https://linkedin.com/company/gridshare",
        label: "LinkedIn"
      }
    ],
    mainLinks: [
      { href: "#hero", label: "Home" },
      { href: "#compare", label: "Compare" },
      { href: "#process", label: "How It Works" },
      { href: "#calculator", label: "Savings Calculator" }
    ],
    legalLinks: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/contact", label: "Contact" }
    ],
    copyright: {
      text: "© 2024 GridShare. All rights reserved.",
      license: "Made with ♥️ in India"
    }
  };

  return (
    <footer className={cn("relative border-t bg-white", className)}>
      <div className="mx-auto w-full max-w-[1600px] px-6 pb-8 pt-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-10 xl:gap-8">
          {/* Logo and Social Links */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:col-span-3">
            <div>
              <div className="flex items-center gap-x-2">
                {footerContent.logo}
                <span className="font-bold text-xl">{footerContent.brandName}</span>
              </div>
            </div>
            <div className="md:justify-self-end xl:justify-self-start">
              <div className="flex space-x-4">
                {footerContent.socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-full border p-2 text-gray-500 hover:border-primary hover:bg-primary/5 hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.icon}
                    <span className="sr-only">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-7 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-10 md:mt-0">
                <ul role="list" className="mt-4 space-y-2">
                  {footerContent.mainLinks.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-primary"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <ul role="list" className="mt-4 space-y-2">
                  {footerContent.legalLinks.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-primary"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm leading-5 text-gray-500">
            {footerContent.copyright.text}
            {footerContent.copyright.license && (
              <>
                {" "}
                <span className="text-gray-400">&middot;</span>{" "}
                {footerContent.copyright.license}
              </>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
