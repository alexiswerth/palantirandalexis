import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import siteConfig from "@/lib/siteConfig";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled((prev) => {
          const next = window.scrollY > 50;
          return prev === next ? prev : next;
        });
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, closeMobile = false) => {
    e.preventDefault();
    if (closeMobile) setMobileOpen(false);
    const scroll = () => {
      const target = document.querySelector(href);
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };
    closeMobile ? setTimeout(scroll, 300) : scroll();
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-nav-slide-in ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-heading font-semibold text-primary text-lg">
          AW
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {siteConfig.navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="nav-link"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${siteConfig.email}`}
            className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium font-body hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-primary"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-background border-b border-border overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-3">
          {siteConfig.navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href, true)}
              className="block nav-link py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${siteConfig.email}`}
            className="block text-center px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium font-body"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
