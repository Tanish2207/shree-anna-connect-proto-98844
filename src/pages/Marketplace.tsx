import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";
import productsData from "@/data/products.json";

interface MarketplaceProps {
  language: string;
}

const Marketplace = ({ language }: MarketplaceProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");

  const milletTypes = [
    { value: "all", label: language === "en" ? "All Types" : "सभी प्रकार" },
    { value: "Foxtail Millet", label: language === "en" ? "Foxtail Millet" : "कंगनी" },
    { value: "Pearl Millet", label: language === "en" ? "Pearl Millet (Bajra)" : "बाजरा" },
    { value: "Finger Millet", label: language === "en" ? "Finger Millet (Ragi)" : "रागी" },
    { value: "Sorghum", label: language === "en" ? "Sorghum (Jowar)" : "ज्वार" },
    { value: "Little Millet", label: language === "en" ? "Little Millet" : "सामा" },
    { value: "Mixed Millets", label: language === "en" ? "Mixed Millets" : "मिश्रित मिलेट" },
  ];

  const categories = [
    { value: "all", label: language === "en" ? "All Categories" : "सभी श्रेणियां" },
    { value: "Grains", label: language === "en" ? "Grains" : "अनाज" },
    { value: "Flour", label: language === "en" ? "Flour" : "आटा" },
    { value: "Snacks", label: language === "en" ? "Snacks" : "नाश्ता" },
    { value: "Ready-to-Cook", label: language === "en" ? "Ready-to-Cook" : "पकाने के लिए तैयार" },
    { value: "Beverages", label: language === "en" ? "Beverages" : "पेय पदार्थ" },
  ];

  const priceRanges = [
    { value: "all", label: language === "en" ? "All Prices" : "सभी कीमतें" },
    { value: "0-100", label: "₹0 - ₹100" },
    { value: "100-150", label: "₹100 - ₹150" },
    { value: "150-200", label: "₹150 - ₹200" },
    { value: "200+", label: "₹200+" },
  ];

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.nameHi.includes(searchTerm) ||
      product.type.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = selectedType === "all" || product.type === selectedType;
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;

    let matchesPrice = true;
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      if (max) {
        matchesPrice = product.price >= min && product.price <= max;
      } else {
        matchesPrice = product.price >= min;
      }
    }

    return matchesSearch && matchesType && matchesCategory && matchesPrice;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedType("all");
    setSelectedCategory("all");
    setPriceRange("all");
  };

  const hasActiveFilters = searchTerm || selectedType !== "all" || selectedCategory !== "all" || priceRange !== "all";

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            {language === "en" ? "Marketplace" : "बाज़ार"}
          </h1>
          <p className="text-lg text-muted-foreground">
            {language === "en"
              ? "Discover premium quality millets and millet-based products"
              : "प्रीमियम गुणवत्ता वाले बाजरे और बाजरा आधारित उत्पादों की खोज करें"}
          </p>
        </div>

        {/* Filters */}
        <div className="bg-muted/30 rounded-lg p-6 mb-8 shadow-soft">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">
              {language === "en" ? "Filters" : "फ़िल्टर"}
            </h2>
            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={clearFilters} className="ml-auto">
                <X className="h-4 w-4 mr-1" />
                {language === "en" ? "Clear All" : "सभी साफ़ करें"}
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={language === "en" ? "Search products..." : "उत्पाद खोजें..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Millet Type */}
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder={language === "en" ? "Millet Type" : "मिलेट प्रकार"} />
              </SelectTrigger>
              <SelectContent>
                {milletTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Category */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder={language === "en" ? "Category" : "श्रेणी"} />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Range */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder={language === "en" ? "Price Range" : "मूल्य सीमा"} />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 mt-4">
              {searchTerm && (
                <Badge variant="secondary">
                  {language === "en" ? "Search" : "खोज"}: {searchTerm}
                </Badge>
              )}
              {selectedType !== "all" && (
                <Badge variant="secondary">
                  {milletTypes.find((t) => t.value === selectedType)?.label}
                </Badge>
              )}
              {selectedCategory !== "all" && (
                <Badge variant="secondary">
                  {categories.find((c) => c.value === selectedCategory)?.label}
                </Badge>
              )}
              {priceRange !== "all" && (
                <Badge variant="secondary">
                  {priceRanges.find((p) => p.value === priceRange)?.label}
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {language === "en" ? "Showing" : "दिखाया जा रहा है"} {filteredProducts.length}{" "}
            {language === "en" ? "products" : "उत्पाद"}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} language={language} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground mb-4">
              {language === "en" ? "No products found" : "कोई उत्पाद नहीं मिला"}
            </p>
            <Button onClick={clearFilters}>
              {language === "en" ? "Clear Filters" : "फ़िल्टर साफ़ करें"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
