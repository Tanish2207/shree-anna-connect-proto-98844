import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, Sprout, Users, Award, TrendingUp } from "lucide-react";
import productsData from "@/data/products.json";
import heroImage from "@/assets/hero-banner.jpg";
import milletVarieties from "@/assets/millet-varieties.jpg";

interface HomeProps {
  language: string;
}

const Home = ({ language }: HomeProps) => {
  const featuredProducts = productsData.slice(0, 6);

  const stats = [
    {
      icon: Sprout,
      value: "5000+",
      label: language === "en" ? "Farmers Connected" : "जुड़े किसान",
    },
    {
      icon: Users,
      value: "150+",
      label: language === "en" ? "FPOs & SHGs" : "एफपीओ और एसएचजी",
    },
    {
      icon: Award,
      value: "95%",
      label: language === "en" ? "Quality Certified" : "गुणवत्ता प्रमाणित",
    },
    {
      icon: TrendingUp,
      value: "₹50L+",
      label: language === "en" ? "Monthly Trade" : "मासिक व्यापार",
    },
  ];

  const benefits = [
    {
      title: language === "en" ? "Direct Farm Connection" : "सीधा फार्म कनेक्शन",
      description:
        language === "en"
          ? "Buy directly from certified farmers, eliminating middlemen"
          : "बिचौलियों को खत्म करते हुए प्रमाणित किसानों से सीधे खरीदें",
    },
    {
      title: language === "en" ? "Quality Assured" : "गुणवत्ता सुनिश्चित",
      description:
        language === "en"
          ? "Every product is quality tested and certified"
          : "प्रत्येक उत्पाद गुणवत्ता परीक्षण और प्रमाणित है",
    },
    {
      title: language === "en" ? "Fair Pricing" : "उचित मूल्य",
      description:
        language === "en"
          ? "Transparent pricing that benefits both farmers and consumers"
          : "पारदर्शी मूल्य निर्धारण जो किसानों और उपभोक्ताओं दोनों को लाभान्वित करता है",
    },
    {
      title: language === "en" ? "Full Traceability" : "पूर्ण पता लगाने की क्षमता",
      description:
        language === "en"
          ? "Track your product from farm to your table"
          : "अपने उत्पाद को खेत से अपनी मेज तक ट्रैक करें",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Millet farmers in field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              {language === "en"
                ? "Connecting India's Millet Value Chain"
                : "भारत की मिलेट मूल्य श्रृंखला को जोड़ना"}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              {language === "en"
                ? "From Farm to Fork — Empowering farmers, ensuring quality"
                : "खेत से काँटे तक — किसानों को सशक्त बनाना, गुणवत्ता सुनिश्चित करना"}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/marketplace">
                  {language === "en" ? "Explore Marketplace" : "बाजार देखें"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-background/20 backdrop-blur text-primary-foreground border-primary-foreground/30 hover:bg-background/30" asChild>
                <Link to="/learn">
                  {language === "en" ? "Learn About Millets" : "बाजरे के बारे में जानें"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-soft">
                <CardContent className="pt-6">
                  <stat.icon className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "en" ? "Featured Products" : "विशेष उत्पाद"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === "en"
                ? "Premium quality millets and millet-based products directly from certified farmers"
                : "प्रमाणित किसानों से सीधे प्रीमियम गुणवत्ता वाले बाजरे और बाजरा आधारित उत्पाद"}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} language={language} />
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/marketplace">
                {language === "en" ? "View All Products" : "सभी उत्पाद देखें"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={milletVarieties}
                alt="Millet varieties"
                className="rounded-lg shadow-medium"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {language === "en" ? "Why Choose Shree Anna Connect?" : "श्री अन्न कनेक्ट क्यों चुनें?"}
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="shadow-soft">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === "en" ? "Join the Millet Revolution" : "मिलेट क्रांति में शामिल हों"}
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            {language === "en"
              ? "Whether you're a farmer, processor, or consumer, become part of India's sustainable agriculture future"
              : "चाहे आप किसान हों, प्रोसेसर हों, या उपभोक्ता, भारत के टिकाऊ कृषि भविष्य का हिस्सा बनें"}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/auth">
                {language === "en" ? "Get Started" : "शुरू करें"}
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-primary-foreground/20 backdrop-blur text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/30" asChild>
              <Link to="/schemes">
                {language === "en" ? "View Government Schemes" : "सरकारी योजनाएं देखें"}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
