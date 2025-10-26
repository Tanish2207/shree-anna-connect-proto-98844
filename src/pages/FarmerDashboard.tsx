import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Package,
  TrendingUp,
  ShoppingBag,
  Bell,
  Plus,
  IndianRupee,
  Award,
  MapPin,
} from "lucide-react";
import usersData from "@/data/users.json";
import transactionsData from "@/data/transactions.json";

interface FarmerDashboardProps {
  language: string;
}

const FarmerDashboard = ({ language }: FarmerDashboardProps) => {
  // Using first farmer as demo user
  const farmer = usersData.find((u) => u.role === "farmer");
  const farmerTransactions = transactionsData.filter((t) => t.sellerId === farmer?.id);

  const stats = [
    {
      icon: IndianRupee,
      label: language === "en" ? "Total Earnings" : "कुल कमाई",
      value: `₹${farmer?.totalSales.toLocaleString("en-IN")}`,
      trend: "+12.5%",
    },
    {
      icon: ShoppingBag,
      label: language === "en" ? "Total Orders" : "कुल ऑर्डर",
      value: farmerTransactions.length,
      trend: "+8",
    },
    {
      icon: Package,
      label: language === "en" ? "Active Listings" : "सक्रिय सूचियां",
      value: "3",
      trend: "+2",
    },
    {
      icon: Award,
      label: language === "en" ? "Rating" : "रेटिंग",
      value: farmer?.rating || "4.8",
      trend: "⭐",
    },
  ];

  return (
    <div className="min-h-screen py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              {language === "en" ? "Farmer Dashboard" : "किसान डैशबोर्ड"}
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>
                {farmer?.name} • {farmer?.village}, {farmer?.state}
              </span>
            </div>
          </div>
          <Button variant="hero" size="lg">
            <Plus className="mr-2 h-5 w-5" />
            {language === "en" ? "Add New Product" : "नया उत्पाद जोड़ें"}
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-soft">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium text-secondary">{stat.trend}</span>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="orders" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="orders">
                  {language === "en" ? "Orders" : "ऑर्डर"}
                </TabsTrigger>
                <TabsTrigger value="products">
                  {language === "en" ? "Products" : "उत्पाद"}
                </TabsTrigger>
                <TabsTrigger value="earnings">
                  {language === "en" ? "Earnings" : "कमाई"}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="orders" className="space-y-4 mt-6">
                {farmerTransactions.map((transaction) => (
                  <Card key={transaction.id} className="shadow-soft">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">
                            {transaction.productName}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {language === "en" ? "Order" : "ऑर्डर"} #{transaction.orderId}
                          </p>
                        </div>
                        <Badge
                          variant={
                            transaction.status === "Delivered"
                              ? "default"
                              : transaction.status === "Shipped"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {transaction.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">
                            {language === "en" ? "Buyer" : "खरीदार"}:
                          </span>
                          <p className="font-medium">{transaction.buyerName}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">
                            {language === "en" ? "Quantity" : "मात्रा"}:
                          </span>
                          <p className="font-medium">
                            {transaction.quantity} {transaction.unit}
                          </p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">
                            {language === "en" ? "Amount" : "राशि"}:
                          </span>
                          <p className="font-medium text-primary">
                            ₹{transaction.totalAmount}
                          </p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">
                            {language === "en" ? "Date" : "तारीख"}:
                          </span>
                          <p className="font-medium">{transaction.orderDate}</p>
                        </div>
                      </div>
                      {transaction.feedback && (
                        <div className="mt-4 p-3 bg-muted/50 rounded-md">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-medium">
                              {language === "en" ? "Feedback" : "प्रतिक्रिया"}:
                            </span>
                            <div className="flex">
                              {[...Array(transaction.rating)].map((_, i) => (
                                <span key={i} className="text-secondary">★</span>
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {transaction.feedback}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="products" className="mt-6">
                <Card className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="text-center py-8">
                      <Package className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="text-lg font-semibold mb-2">
                        {language === "en" ? "Your Products" : "आपके उत्पाद"}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {language === "en"
                          ? "Manage your product listings here"
                          : "अपनी उत्पाद सूचियों को यहां प्रबंधित करें"}
                      </p>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>• {farmer?.produce.join(", ")}</p>
                        <p>• {language === "en" ? "Land Size" : "भूमि का आकार"}: {farmer?.landSize}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="earnings" className="mt-6">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle>
                      {language === "en" ? "Earnings Summary" : "कमाई का सारांश"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">
                          {language === "en" ? "This Month" : "इस महीने"}
                        </span>
                        <span className="text-2xl font-bold text-primary">
                          ₹{(farmer?.totalSales * 0.3).toLocaleString("en-IN")}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">
                          {language === "en" ? "Total Earned" : "कुल कमाई"}
                        </span>
                        <span className="text-2xl font-bold">
                          ₹{farmer?.totalSales.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-secondary">
                        <TrendingUp className="h-5 w-5" />
                        <span className="font-medium">
                          {language === "en"
                            ? "12.5% increase from last month"
                            : "पिछले महीने से 12.5% वृद्धि"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">
                  {language === "en" ? "Profile" : "प्रोफ़ाइल"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {language === "en" ? "Certifications" : "प्रमाणपत्र"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {farmer?.certifications.map((cert, idx) => (
                      <Badge key={idx} variant="secondary">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {language === "en" ? "Member Since" : "सदस्य बनने की तिथि"}
                  </p>
                  <p className="font-medium">
                    {new Date(farmer?.joinedDate || "").toLocaleDateString(
                      language === "en" ? "en-IN" : "hi-IN",
                      { year: "numeric", month: "long" }
                    )}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  {language === "en" ? "Notifications" : "सूचनाएं"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-muted/50 rounded-md">
                  <p className="text-sm font-medium mb-1">
                    {language === "en" ? "New Subsidy Available" : "नई सब्सिडी उपलब्ध"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {language === "en"
                      ? "Check the latest millet farming subsidy schemes"
                      : "नवीनतम बाजरा खेती सब्सिडी योजनाएं देखें"}
                  </p>
                </div>
                <div className="p-3 bg-muted/50 rounded-md">
                  <p className="text-sm font-medium mb-1">
                    {language === "en" ? "New Order Received" : "नया ऑर्डर प्राप्त हुआ"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {language === "en"
                      ? "You have a new order for Foxtail Millet"
                      : "आपको फॉक्सटेल मिलेट के लिए एक नया ऑर्डर मिला है"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;
