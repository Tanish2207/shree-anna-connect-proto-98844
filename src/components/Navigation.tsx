import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart, User, Globe } from "lucide-react";

interface NavigationProps {
  language: string;
  onLanguageToggle: () => void;
}

const Navigation = ({ language, onLanguageToggle }: NavigationProps) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: language === "en" ? "Home" : "होम", labelKey: "home" },
    { path: "/marketplace", label: language === "en" ? "Marketplace" : "बाज़ार", labelKey: "marketplace" },
    { path: "/schemes", label: language === "en" ? "Schemes" : "योजनाएं", labelKey: "schemes" },
    { path: "/learn", label: language === "en" ? "Learn" : "जानें", labelKey: "learn" },
    { path: "/about", label: language === "en" ? "About" : "हमारे बारे में", labelKey: "about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-soft">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">श्री</span>
          </div>
          <span className="text-xl font-bold text-primary">
            {language === "en" ? "Shree Anna Connect" : "श्री अन्न कनेक्ट"}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onLanguageToggle}
            className="hidden md:flex"
          >
            <Globe className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" asChild className="hidden md:flex">
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="default" size="sm" asChild className="hidden md:flex">
            <Link to="/auth">
              <User className="h-4 w-4 mr-2" />
              {language === "en" ? "Login" : "लॉगिन"}
            </Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      location.pathname === item.path ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button onClick={onLanguageToggle} variant="outline" className="mt-4">
                  <Globe className="h-4 w-4 mr-2" />
                  {language === "en" ? "हिन्दी" : "English"}
                </Button>
                <Button asChild>
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                    <User className="h-4 w-4 mr-2" />
                    {language === "en" ? "Login" : "लॉगिन"}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
