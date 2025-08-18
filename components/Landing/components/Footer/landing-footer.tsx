import React from "react";
import { Mail, Linkedin, Twitter } from "lucide-react";

interface FooterProps {
  companyName?: string;
  description?: string;
  socialLinks?: {
    email?: string;
    linkedin?: string;
    twitter?: string;
  };
  footerLinks?: Array<{
    label: string;
    href: string;
  }>;
  copyrightText?: string;
}

const Footer: React.FC<FooterProps> = ({
  companyName = "HikariDesk",
  description = "HikariDesk - your AI desk assistant helps you arrive at work with inbox zero and a perfectly organized workspace",
  socialLinks = {
    email: "mailto:contact@hikari.desk",
    linkedin: "#",
    twitter: "#",
  },
  footerLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of use", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Security", href: "#" },
  ],
  copyrightText = "© HikariDesk 2025 - All Rights Reserved",
}) => {
  return (
    <div className="md:p-14 p-8">
      <footer className="max-w-6xl mx-auto flex md:flex-row flex-col justify-between items-start gap-16">
        <div className="flex-1 max-w-lg">
          {/* Logo Section */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-white font-semibold text-lg">
              <img src="/logo.png" alt="logo" />
            </div>
            <h2 className="text-3xl font-semibold text-gray-900">
              {companyName}
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-md">
            {description}
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.email && (
              <a
                href={socialLinks.email}
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            )}
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 border-t border-gray-200 text-gray-500 text-sm">
            {copyrightText}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-5 min-w-40">
          <div className="flex flex-col gap-4">
            <div className="text-base font-semibold text-gray-800 mb-1">
              Company
            </div>
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-600 text-sm hover:text-gray-800 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
