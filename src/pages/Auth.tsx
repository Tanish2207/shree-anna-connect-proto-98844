import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Building, Users, ShoppingBag } from "lucide-react";
import farmerPortrait from "@/assets/farmer-portrait.jpg";

interface AuthProps {
  language: string;
}

const Auth = ({ language }: AuthProps) => {
  const [userRole, setUserRole] = useState("farmer");

  const userRoles = [
    {
      value: "farmer",
      label: language === "en" ? "Farmer" : "किसान",
      icon: User,
      description: language === "en" ? "Sell your millet produce" : "अपनी बाजरा उपज बेचें",
    },
    {
      value: "fpo",
      label: language === "en" ? "FPO/SHG" : "एफपीओ/एसएचजी",
      icon: Users,
      description: language === "en" ? "Manage collective produce" : "सामूहिक उत्पाद प्रबंधित करें",
    },
    {
      value: "processor",
      label: language === "en" ? "Processor/Startup" : "प्रोसेसर/स्टार्टअप",
      icon: Building,
      description: language === "en" ? "Buy and process millets" : "बाजरा खरीदें और प्रोसेस करें",
    },
    {
      value: "consumer",
      label: language === "en" ? "Consumer" : "उपभोक्ता",
      icon: ShoppingBag,
      description: language === "en" ? "Buy quality millet products" : "गुणवत्ता वाले बाजरा उत्पाद खरीदें",
    },
  ];

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left Side - Image */}
      <div className="hidden md:block relative">
        <img
          src={farmerPortrait}
          alt="Indian farmer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="relative h-full flex items-center justify-center p-12">
          <div className="text-primary-foreground">
            <h1 className="text-4xl font-bold mb-4">
              {language === "en"
                ? "Join Shree Anna Connect"
                : "श्री अन्न कनेक्ट में शामिल हों"}
            </h1>
            <p className="text-xl opacity-95 mb-8">
              {language === "en"
                ? "Connecting India's millet ecosystem from farm to fork"
                : "खेत से काँटे तक भारत के मिलेट पारिस्थितिकी तंत्र को जोड़ना"}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-primary-foreground/20 p-2 rounded">
                  <span className="text-2xl">✓</span>
                </div>
                <span className="text-lg">
                  {language === "en" ? "Direct farm connection" : "सीधा फार्म कनेक्शन"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary-foreground/20 p-2 rounded">
                  <span className="text-2xl">✓</span>
                </div>
                <span className="text-lg">
                  {language === "en" ? "Quality certified products" : "गुणवत्ता प्रमाणित उत्पाद"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary-foreground/20 p-2 rounded">
                  <span className="text-2xl">✓</span>
                </div>
                <span className="text-lg">
                  {language === "en" ? "Fair pricing for all" : "सभी के लिए उचित मूल्य"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Forms */}
      <div className="flex items-center justify-center p-8 bg-muted/30">
        <Card className="w-full max-w-lg shadow-strong">
          <CardHeader>
            <CardTitle className="text-2xl">
              {language === "en" ? "Welcome" : "स्वागत है"}
            </CardTitle>
            <CardDescription>
              {language === "en"
                ? "Login or create an account to get started"
                : "शुरू करने के लिए लॉगिन करें या खाता बनाएं"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">
                  {language === "en" ? "Login" : "लॉगिन"}
                </TabsTrigger>
                <TabsTrigger value="signup">
                  {language === "en" ? "Sign Up" : "साइन अप"}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="login-email">
                    {language === "en" ? "Email" : "ईमेल"}
                  </Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder={language === "en" ? "your@email.com" : "आपका@ईमेल.com"}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">
                    {language === "en" ? "Password" : "पासवर्ड"}
                  </Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder={language === "en" ? "Enter your password" : "अपना पासवर्ड दर्ज करें"}
                  />
                </div>
                <Button className="w-full" size="lg" asChild>
                  <Link to="/farmer-dashboard">
                    {language === "en" ? "Login" : "लॉगिन करें"}
                  </Link>
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  {language === "en" ? "Demo: Login to view Farmer Dashboard" : "डेमो: किसान डैशबोर्ड देखने के लिए लॉगिन करें"}
                </p>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="role">
                    {language === "en" ? "I am a..." : "मैं हूं..."}
                  </Label>
                  <Select value={userRole} onValueChange={setUserRole}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {userRoles.map((role) => (
                        <SelectItem key={role.value} value={role.value}>
                          <div className="flex items-center gap-2">
                            <role.icon className="h-4 w-4" />
                            {role.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-name">
                    {language === "en" ? "Full Name" : "पूरा नाम"}
                  </Label>
                  <Input
                    id="signup-name"
                    placeholder={language === "en" ? "Enter your name" : "अपना नाम दर्ज करें"}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-email">
                    {language === "en" ? "Email" : "ईमेल"}
                  </Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder={language === "en" ? "your@email.com" : "आपका@ईमेल.com"}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-phone">
                    {language === "en" ? "Phone Number" : "फोन नंबर"}
                  </Label>
                  <Input
                    id="signup-phone"
                    type="tel"
                    placeholder={language === "en" ? "+91 98765 43210" : "+91 98765 43210"}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-password">
                    {language === "en" ? "Password" : "पासवर्ड"}
                  </Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder={language === "en" ? "Create a password" : "एक पासवर्ड बनाएं"}
                  />
                </div>

                <Button className="w-full" size="lg">
                  {language === "en" ? "Create Account" : "खाता बनाएं"}
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
