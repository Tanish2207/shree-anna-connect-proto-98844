import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, Building, Users, TrendingUp } from "lucide-react";
import schemesData from "@/data/schemes.json";

interface SchemesProps {
  language: string;
}

const Schemes = ({ language }: SchemesProps) => {
  const categoryIcons: Record<string, any> = {
    "Cultivation Support": Award,
    Entrepreneurship: TrendingUp,
    Processing: Building,
    Certification: Award,
    "Women Empowerment": Users,
    Export: TrendingUp,
  };

  const categoryColors: Record<string, string> = {
    "Cultivation Support": "bg-primary/10 text-primary",
    Entrepreneurship: "bg-secondary/10 text-secondary",
    Processing: "bg-accent/10 text-accent",
    Certification: "bg-primary/10 text-primary",
    "Women Empowerment": "bg-secondary/10 text-secondary",
    Export: "bg-accent/10 text-accent",
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === "en" ? "Government Schemes" : "सरकारी योजनाएं"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === "en"
              ? "Explore financial support, subsidies, and assistance programs for millet farmers and entrepreneurs"
              : "बाजरा किसानों और उद्यमियों के लिए वित्तीय सहायता, सब्सिडी और सहायता कार्यक्रमों का अन्वेषण करें"}
          </p>
        </div>

        {/* Info Banner */}
        <Card className="mb-12 gradient-card shadow-medium border-l-4 border-l-primary">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {language === "en"
                    ? "National Millet Mission Support"
                    : "राष्ट्रीय मिलेट मिशन समर्थन"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "en"
                    ? "The Government of India has launched multiple initiatives to support millet cultivation, processing, and marketing. Take advantage of these schemes to grow your agricultural business."
                    : "भारत सरकार ने बाजरा की खेती, प्रसंस्करण और विपणन का समर्थन करने के लिए कई पहल शुरू की हैं। अपने कृषि व्यवसाय को बढ़ाने के लिए इन योजनाओं का लाभ उठाएं।"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schemes Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {schemesData.map((scheme) => {
            const Icon = categoryIcons[scheme.category] || Award;
            const colorClass = categoryColors[scheme.category] || "bg-primary/10 text-primary";

            return (
              <Card key={scheme.id} className="shadow-medium hover:shadow-strong transition-shadow animate-fade-in">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`${colorClass} p-3 rounded-full`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline">{scheme.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">
                    {language === "en" ? scheme.title : scheme.titleHi}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {language === "en" ? scheme.description : scheme.descriptionHi}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-2">
                      {language === "en" ? "Key Benefits:" : "मुख्य लाभ:"}
                    </h4>
                    <ul className="space-y-1">
                      {(language === "en" ? scheme.benefits : scheme.benefitsHi).map(
                        (benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-1">✓</span>
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-muted-foreground">
                        {language === "en" ? "Eligibility:" : "पात्रता:"}
                      </span>
                      <Badge variant="secondary">{scheme.eligibility}</Badge>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                        {language === "en" ? "Learn More" : "और अधिक जानें"}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Card */}
        <Card className="mt-12 shadow-medium">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              {language === "en"
                ? "Need Help Applying for Schemes?"
                : "योजनाओं के लिए आवेदन करने में सहायता चाहिए?"}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {language === "en"
                ? "Our team is here to help you navigate the application process and ensure you get the support you deserve."
                : "हमारी टीम आवेदन प्रक्रिया को नेविगेट करने में आपकी सहायता के लिए यहां है और यह सुनिश्चित करती है कि आपको वह समर्थन मिले जिसके आप हकदार हैं।"}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">
                {language === "en" ? "Contact Support" : "सहायता से संपर्क करें"}
              </Button>
              <Button size="lg" variant="outline">
                {language === "en" ? "Download Guide" : "गाइड डाउनलोड करें"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Schemes;
