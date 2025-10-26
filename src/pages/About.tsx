import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Heart, TrendingUp } from "lucide-react";

interface AboutProps {
  language: string;
}

const About = ({ language }: AboutProps) => {
  const values = [
    {
      icon: Target,
      title: language === "en" ? "Our Mission" : "हमारा मिशन",
      description:
        language === "en"
          ? "To create a transparent, efficient digital marketplace that connects all stakeholders in India's millet value chain, ensuring fair prices for farmers and quality products for consumers."
          : "एक पारदर्शी, कुशल डिजिटल मार्केटप्लेस बनाना जो भारत के मिलेट मूल्य श्रृंखला में सभी हितधारकों को जोड़ता है, किसानों के लिए उचित मूल्य और उपभोक्ताओं के लिए गुणवत्ता वाले उत्पाद सुनिश्चित करता है।",
    },
    {
      icon: Users,
      title: language === "en" ? "Community First" : "समुदाय पहले",
      description:
        language === "en"
          ? "We empower farmers, FPOs, and SHGs by providing them direct market access, eliminating middlemen, and ensuring they receive fair compensation for their hard work."
          : "हम किसानों, एफपीओ और एसएचजी को सीधे बाजार पहुंच प्रदान करके, बिचौलियों को खत्म करके और यह सुनिश्चित करते हुए सशक्त बनाते हैं कि उन्हें अपनी मेहनत के लिए उचित मुआवजा मिले।",
    },
    {
      icon: Heart,
      title: language === "en" ? "Sustainability" : "स्थिरता",
      description:
        language === "en"
          ? "Promoting millet cultivation supports climate-resilient agriculture, reduces water consumption, and contributes to India's sustainable food security."
          : "मिलेट की खेती को बढ़ावा देना जलवायु-लचीली कृषि का समर्थन करता है, पानी की खपत को कम करता है, और भारत की टिकाऊ खाद्य सुरक्षा में योगदान देता है।",
    },
    {
      icon: TrendingUp,
      title: language === "en" ? "Innovation" : "नवाचार",
      description:
        language === "en"
          ? "We leverage technology to streamline the supply chain, provide traceability, and create new opportunities for value-added millet products."
          : "हम आपूर्ति श्रृंखला को सुव्यवस्थित करने, पता लगाने की क्षमता प्रदान करने और मूल्य वर्धित मिलेट उत्पादों के लिए नए अवसर बनाने के लिए प्रौद्योगिकी का लाभ उठाते हैं।",
    },
  ];

  const stats = [
    {
      number: "5000+",
      label: language === "en" ? "Registered Farmers" : "पंजीकृत किसान",
    },
    {
      number: "150+",
      label: language === "en" ? "FPOs & SHGs" : "एफपीओ और एसएचजी",
    },
    {
      number: "₹50L+",
      label: language === "en" ? "Monthly Transactions" : "मासिक लेनदेन",
    },
    {
      number: "25+",
      label: language === "en" ? "Districts Covered" : "कवर किए गए जिले",
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === "en" ? "About Shree Anna Connect" : "श्री अन्न कनेक्ट के बारे में"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === "en"
              ? "Building India's most trusted millet marketplace ecosystem"
              : "भारत का सबसे विश्वसनीय मिलेट मार्केटप्लेस पारिस्थितिकी तंत्र बनाना"}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-medium">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <Card className="mb-16 shadow-medium">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">
              {language === "en" ? "Our Story" : "हमारी कहानी"}
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                {language === "en"
                  ? "Shree Anna Connect was born from a simple observation: despite India being one of the largest millet producers globally, farmers faced numerous challenges in reaching the right markets and consumers struggled to find authentic, quality millet products."
                  : "श्री अन्न कनेक्ट एक सरल अवलोकन से पैदा हुआ: भारत दुनिया भर में सबसे बड़े मिलेट उत्पादकों में से एक होने के बावजूद, किसानों को सही बाजारों तक पहुंचने में कई चुनौतियों का सामना करना पड़ा और उपभोक्ताओं को प्रामाणिक, गुणवत्ता वाले मिलेट उत्पाद खोजने में संघर्ष करना पड़ा।"}
              </p>
              <p>
                {language === "en"
                  ? "With the United Nations declaring 2023 as the International Year of Millets, we saw an opportunity to leverage technology and create a platform that would bridge this gap. Our platform connects farmers directly with processors, startups, and consumers, ensuring transparency, fair pricing, and quality assurance at every step."
                  : "संयुक्त राष्ट्र द्वारा 2023 को अंतर्राष्ट्रीय मिलेट वर्ष घोषित करने के साथ, हमने प्रौद्योगिकी का लाभ उठाने और एक मंच बनाने का अवसर देखा जो इस अंतर को पाटेगा। हमारा मंच किसानों को सीधे प्रोसेसर, स्टार्टअप और उपभोक्ताओं से जोड़ता है, हर कदम पर पारदर्शिता, उचित मूल्य निर्धारण और गुणवत्ता आश्वासन सुनिश्चित करता है।"}
              </p>
              <p>
                {language === "en"
                  ? "Today, we're proud to support thousands of farmers across India, helping them earn better incomes while promoting sustainable agriculture and nutritional security for millions of consumers."
                  : "आज, हम पूरे भारत में हजारों किसानों का समर्थन करने में गर्व महसूस करते हैं, उन्हें बेहतर आय अर्जित करने में मदद करते हुए जबकि लाखों उपभोक्ताओं के लिए टिकाऊ कृषि और पोषण सुरक्षा को बढ़ावा देते हैं।"}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Values Grid */}
        <h2 className="text-3xl font-bold text-center mb-8">
          {language === "en" ? "Our Values" : "हमारे मूल्य"}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="shadow-medium animate-fade-in">
              <CardContent className="p-8">
                <div className="bg-primary/10 p-4 rounded-full w-fit mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card className="gradient-hero text-primary-foreground shadow-strong">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {language === "en" ? "Join Our Mission" : "हमारे मिशन में शामिल हों"}
            </h2>
            <p className="text-xl opacity-95 mb-6 max-w-2xl mx-auto">
              {language === "en"
                ? "Be part of India's millet revolution and contribute to sustainable agriculture"
                : "भारत की मिलेट क्रांति का हिस्सा बनें और टिकाऊ कृषि में योगदान दें"}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
