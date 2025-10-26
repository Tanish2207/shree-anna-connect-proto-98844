import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, ShoppingCart, MapPin, Calendar, Award, ArrowLeft, Truck, Shield } from "lucide-react";
import productsData from "@/data/products.json";

interface ProductDetailProps {
  language: string;
}

const ProductDetail = ({ language }: ProductDetailProps) => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            {language === "en" ? "Product not found" : "उत्पाद नहीं मिला"}
          </h1>
          <Button asChild>
            <Link to="/marketplace">
              {language === "en" ? "Back to Marketplace" : "बाज़ार पर वापस जाएं"}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const imageUrl = `https://images.unsplash.com/photo-${1500000000000 + parseInt(product.id) * 10000000}?w=800&h=600&fit=crop`;

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/marketplace">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === "en" ? "Back to Marketplace" : "बाज़ार पर वापस जाएं"}
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div>
            <img
              src={imageUrl}
              alt={language === "en" ? product.name : product.nameHi}
              className="w-full rounded-lg shadow-medium"
            />
          </div>

          {/* Product Info */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.certifications.map((cert, idx) => (
                <Badge key={idx} variant="secondary">
                  {cert}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl font-bold mb-2">
              {language === "en" ? product.name : product.nameHi}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">{product.type}</p>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-secondary text-secondary" />
                <span className="text-lg font-semibold">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">
                ({product.reviews} {language === "en" ? "reviews" : "समीक्षाएं"})
              </span>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-bold text-primary">₹{product.price}</span>
              <span className="text-xl text-muted-foreground">/ {product.unit}</span>
            </div>

            <p className="text-lg mb-6">
              {language === "en" ? product.description : product.descriptionHi}
            </p>

            <div className="flex gap-4 mb-8">
              <Button size="lg" className="flex-1">
                <ShoppingCart className="mr-2 h-5 w-5" />
                {language === "en" ? "Add to Cart" : "कार्ट में जोड़ें"}
              </Button>
              <Button size="lg" variant="outline">
                {language === "en" ? "Buy Now" : "अभी खरीदें"}
              </Button>
            </div>

            <Separator className="my-6" />

            {/* Delivery Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm">
                  {language === "en" ? "Free delivery on orders above ₹500" : "₹500 से अधिक के ऑर्डर पर मुफ़्त डिलीवरी"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">
                  {language === "en" ? "100% quality assured and tested" : "100% गुणवत्ता सुनिश्चित और परीक्षित"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Nutrition Highlights */}
        <Card className="mb-12 shadow-medium">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              {language === "en" ? "Nutrition Highlights" : "पोषण मुख्य बातें"}
            </h2>
            <div className="flex flex-wrap gap-3">
              {product.nutritionHighlights.map((highlight, idx) => (
                <Badge key={idx} variant="outline" className="text-sm py-2 px-4">
                  <Award className="h-4 w-4 mr-2" />
                  {highlight}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Farm to Fork Traceability */}
        <Card className="shadow-medium">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">
              {language === "en" ? "Farm to Fork Traceability" : "खेत से काँटे तक पता लगाना"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    {language === "en" ? "Farmer" : "किसान"}
                  </h3>
                  <p className="text-sm text-muted-foreground">{product.farmer.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {product.farmer.village}, {product.farmer.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    {language === "en" ? "Harvest Date" : "फसल की तारीख"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {new Date(product.harvestDate).toLocaleDateString(
                      language === "en" ? "en-IN" : "hi-IN",
                      { year: "numeric", month: "long", day: "numeric" }
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    {language === "en" ? "Certifications" : "प्रमाणपत्र"}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {product.certifications.map((cert, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;
