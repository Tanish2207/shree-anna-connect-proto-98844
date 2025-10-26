import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Sprout,
  Heart,
  Leaf,
  TrendingUp,
  Sun,
  Droplets,
  Award,
} from "lucide-react";
import milletVarieties from "@/assets/millet-varieties.jpg";
import foxtailMillet from "@/assets/foxtail-millet.jpg";
import pearlMillet from "@/assets/pearl-millet.jpg";
import fingerMillet from "@/assets/finger-millet.jpg";
import sorghumMillet from "@/assets/sorghum-millet.jpg";

interface LearnProps {
  language: string;
}

const Learn = ({ language }: LearnProps) => {
  const milletTypes = [
    {
      name: "Foxtail Millet",
      nameHi: "कंगनी",
      image: foxtailMillet,
      benefits: [
        language === "en" ? "Rich in protein and fiber" : "प्रोटीन और फाइबर से भरपूर",
        language === "en" ? "Helps in weight management" : "वजन प्रबंधन में मदद करता है",
        language === "en" ? "Good for diabetics" : "मधुमेह रोगियों के लिए अच्छा",
      ],
    },
    {
      name: "Pearl Millet (Bajra)",
      nameHi: "बाजरा",
      image: pearlMillet,
      benefits: [
        language === "en" ? "High in iron and magnesium" : "आयरन और मैग्नीशियम में उच्च",
        language === "en" ? "Boosts energy levels" : "ऊर्जा स्तर बढ़ाता है",
        language === "en" ? "Supports heart health" : "हृदय स्वास्थ्य का समर्थन करता है",
      ],
    },
    {
      name: "Finger Millet (Ragi)",
      nameHi: "रागी",
      image: fingerMillet,
      benefits: [
        language === "en" ? "Excellent source of calcium" : "कैल्शियम का उत्कृष्ट स्रोत",
        language === "en" ? "Strengthens bones" : "हड्डियों को मजबूत करता है",
        language === "en" ? "Controls blood sugar" : "रक्त शर्करा नियंत्रित करता है",
      ],
    },
    {
      name: "Sorghum (Jowar)",
      nameHi: "ज्वार",
      image: sorghumMillet,
      benefits: [
        language === "en" ? "Rich in antioxidants" : "एंटीऑक्सीडेंट से भरपूर",
        language === "en" ? "Gluten-free grain" : "ग्लूटेन मुक्त अनाज",
        language === "en" ? "Aids digestion" : "पाचन में सहायता करता है",
      ],
    },
  ];

  const healthBenefits = [
    {
      icon: Heart,
      title: language === "en" ? "Heart Health" : "हृदय स्वास्थ्य",
      description:
        language === "en"
          ? "Millets help reduce bad cholesterol and support cardiovascular health"
          : "मिलेट खराब कोलेस्ट्रॉल कम करने और हृदय स्वास्थ्य में मदद करते हैं",
    },
    {
      icon: TrendingUp,
      title: language === "en" ? "Weight Management" : "वजन प्रबंधन",
      description:
        language === "en"
          ? "High fiber content keeps you full longer and aids in weight control"
          : "उच्च फाइबर सामग्री आपको लंबे समय तक भरा रखती है और वजन नियंत्रण में सहायता करती है",
    },
    {
      icon: Leaf,
      title: language === "en" ? "Digestive Health" : "पाचन स्वास्थ्य",
      description:
        language === "en"
          ? "Rich in fiber, millets promote healthy digestion and gut health"
          : "फाइबर से भरपूर, मिलेट स्वस्थ पाचन और आंत स्वास्थ्य को बढ़ावा देते हैं",
    },
    {
      icon: Award,
      title: language === "en" ? "Diabetes Control" : "मधुमेह नियंत्रण",
      description:
        language === "en"
          ? "Low glycemic index helps regulate blood sugar levels"
          : "कम ग्लाइसेमिक इंडेक्स रक्त शर्करा के स्तर को नियंत्रित करने में मदद करता है",
    },
  ];

  const climatebenefits = [
    {
      icon: Sun,
      title: language === "en" ? "Drought Resistant" : "सूखा प्रतिरोधी",
      description:
        language === "en"
          ? "Millets require minimal water and thrive in arid conditions"
          : "मिलेट को न्यूनतम पानी की आवश्यकता होती है और शुष्क परिस्थितियों में पनपते हैं",
    },
    {
      icon: Droplets,
      title: language === "en" ? "Low Water Footprint" : "कम पानी की आवश्यकता",
      description:
        language === "en"
          ? "Uses 70% less water compared to rice and wheat cultivation"
          : "चावल और गेहूं की खेती की तुलना में 70% कम पानी का उपयोग करता है",
    },
    {
      icon: Sprout,
      title: language === "en" ? "Soil Health" : "मिट्टी स्वास्थ्य",
      description:
        language === "en"
          ? "Improves soil fertility and requires minimal fertilizers"
          : "मिट्टी की उर्वरता में सुधार करता है और न्यूनतम उर्वरकों की आवश्यकता होती है",
    },
    {
      icon: Leaf,
      title: language === "en" ? "Carbon Sequestration" : "कार्बन संग्रह",
      description:
        language === "en"
          ? "Helps absorb CO2 and combat climate change"
          : "CO2 को अवशोषित करने और जलवायु परिवर्तन से लड़ने में मदद करता है",
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {language === "en" ? "Learn About Millets" : "मिलेट के बारे में जानें"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === "en"
              ? "Discover the nutritional powerhouse that's been nourishing India for millennia"
              : "पोषण शक्तिघर की खोज करें जो सहस्राब्दियों से भारत को पोषण दे रहा है"}
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <img
            src={milletVarieties}
            alt="Millet varieties"
            className="w-full h-[400px] object-cover rounded-lg shadow-strong"
          />
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="health" className="mb-16">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="health">
              {language === "en" ? "Health Benefits" : "स्वास्थ्य लाभ"}
            </TabsTrigger>
            <TabsTrigger value="climate">
              {language === "en" ? "Climate Benefits" : "जलवायु लाभ"}
            </TabsTrigger>
            <TabsTrigger value="types">
              {language === "en" ? "Millet Types" : "मिलेट प्रकार"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="health">
            <div className="grid md:grid-cols-2 gap-6">
              {healthBenefits.map((benefit, index) => (
                <Card key={index} className="shadow-medium animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="climate">
            <div className="grid md:grid-cols-2 gap-6">
              {climatebenefits.map((benefit, index) => (
                <Card key={index} className="shadow-medium animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="bg-secondary/10 p-3 rounded-full">
                        <benefit.icon className="h-6 w-6 text-secondary" />
                      </div>
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="types">
            <div className="grid md:grid-cols-2 gap-6">
              {milletTypes.map((millet, index) => (
                <Card key={index} className="shadow-medium animate-fade-in overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={millet.image}
                      alt={`${millet.name} - ${millet.nameHi}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{millet.name}</span>
                      <Badge variant="secondary">{millet.nameHi}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {millet.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Did You Know Section */}
        <Card className="gradient-hero text-primary-foreground shadow-strong">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6">
              {language === "en" ? "Did You Know?" : "क्या आप जानते हैं?"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-5xl font-bold mb-2">2023</h3>
                <p className="opacity-90">
                  {language === "en"
                    ? "International Year of Millets declared by UN"
                    : "संयुक्त राष्ट्र द्वारा घोषित अंतर्राष्ट्रीय मिलेट वर्ष"}
                </p>
              </div>
              <div>
                <h3 className="text-5xl font-bold mb-2">8000+</h3>
                <p className="opacity-90">
                  {language === "en"
                    ? "Years of millet cultivation in India"
                    : "भारत में मिलेट की खेती के वर्ष"}
                </p>
              </div>
              <div>
                <h3 className="text-5xl font-bold mb-2">50%</h3>
                <p className="opacity-90">
                  {language === "en"
                    ? "Lower carbon footprint than rice"
                    : "चावल से कम कार्बन फुटप्रिंट"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Learn;
