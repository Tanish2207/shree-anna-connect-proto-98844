import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, MapPin } from "lucide-react";

interface Product {
  id: string;
  name: string;
  nameHi: string;
  type: string;
  price: number;
  unit: string;
  farmer: {
    name: string;
    location: string;
  };
  certifications: string[];
  rating: number;
  reviews: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  language: string;
}

const ProductCard = ({ product, language }: ProductCardProps) => {
  // Generate placeholder image based on product id
  const imageUrl = `https://images.unsplash.com/photo-${1500000000000 + parseInt(product.id) * 10000000}?w=400&h=300&fit=crop`;

  return (
    <Card className="group overflow-hidden hover:shadow-medium transition-all duration-300 animate-fade-in">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={imageUrl}
            alt={language === "en" ? product.name : product.nameHi}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute top-2 right-2 flex gap-1">
            {product.certifications.slice(0, 2).map((cert, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs bg-background/90 backdrop-blur">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors line-clamp-1">
            {language === "en" ? product.name : product.nameHi}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-2">{product.type}</p>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
          <MapPin className="h-3 w-3" />
          <span className="line-clamp-1">
            {product.farmer.name}, {product.farmer.location}
          </span>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-secondary text-secondary" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews} {language === "en" ? "reviews" : "समीक्षाएं"})</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-primary">₹{product.price}</span>
          <span className="text-sm text-muted-foreground">/ {product.unit}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 gap-2">
        <Button className="flex-1" size="sm" asChild>
          <Link to={`/product/${product.id}`}>
            {language === "en" ? "View Details" : "विवरण देखें"}
          </Link>
        </Button>
        <Button variant="secondary" size="sm" className="gap-1">
          <ShoppingCart className="h-4 w-4" />
          {language === "en" ? "Add" : "जोड़ें"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
