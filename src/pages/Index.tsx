import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ShoppingBag, Zap, Star, Heart, Truck } from "lucide-react";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Cosmic Blend Signature",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=500&fit=crop",
      tag: "Bestseller"
    },
    {
      id: 2,
      name: "Nebula Dark Roast",
      price: "$26.99",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&h=500&fit=crop",
      tag: "New"
    },
    {
      id: 3,
      name: "Stellar Light Blend",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&h=500&fit=crop",
      tag: "Popular"
    },
    {
      id: 4,
      name: "Galaxy Espresso",
      price: "$28.99",
      image: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=500&h=500&fit=crop",
      tag: "Premium"
    }
  ];

  const features = [
    { icon: Zap, title: "Freshly Roasted", description: "Every batch roasted to perfection" },
    { icon: Star, title: "Premium Quality", description: "Only the finest beans selected" },
    { icon: Heart, title: "Ethically Sourced", description: "Supporting sustainable farming" },
    { icon: Truck, title: "Fast Delivery", description: "Free shipping on orders over $50" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              HubKochab
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#shop" className="text-foreground hover:text-primary transition-colors font-medium">Shop</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <ShoppingBag className="w-5 h-5" />
            </Button>
            <Button className="hidden sm:inline-flex bg-gradient-to-r from-[hsl(var(--cosmic-gold))] to-[hsl(var(--cosmic-gold-dark))] text-primary-foreground hover:opacity-90 transition-opacity">
              Shop Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-primary py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm">
              ✨ Premium Coffee Experience
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Where Every Cup
              <br />
              <span className="bg-gradient-to-r from-[hsl(var(--cosmic-gold))] to-[hsl(var(--cosmic-gold-dark))] bg-clip-text text-transparent">
                Tells a Story
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the cosmic blend of flavor and quality. Handcrafted coffee roasted to perfection for those who seek extraordinary.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-[hsl(var(--cosmic-gold))] to-[hsl(var(--cosmic-gold-dark))] text-primary-foreground hover:opacity-90 transition-opacity text-lg px-8 py-6">
                Explore Collection
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-6">
                Our Story
              </Button>
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.5 + 0.2
              }}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="shop" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Featured Collection
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Our
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Cosmic Blends</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each blend is carefully crafted to deliver an out-of-this-world experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group overflow-hidden border-border hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <div className="relative overflow-hidden aspect-square">
                  <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-[hsl(var(--cosmic-gold))] to-[hsl(var(--cosmic-gold-dark))] text-primary-foreground border-0">
                    {product.tag}
                  </Badge>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--cosmic-gold))] to-[hsl(var(--cosmic-gold-dark))] bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <Button size="sm" className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View Full Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=800&fit=crop" 
                  alt="Coffee brewing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20 blur-3xl" />
            </div>

            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Our Story
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Crafted with
                <span className="bg-gradient-to-r from-[hsl(var(--cosmic-gold))] to-[hsl(var(--cosmic-gold-dark))] bg-clip-text text-transparent"> Passion</span>
              </h2>
              
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                At HubKochab, we believe every cup of coffee should be an extraordinary experience. Our journey began with a simple mission: to bring the universe's finest flavors to your morning ritual.
              </p>
              
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                From sourcing the rarest beans across the globe to our meticulous roasting process, we ensure every blend captures the cosmic essence of flavor perfection.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[hsl(var(--cosmic-gold))] to-[hsl(var(--cosmic-gold-dark))]" />
                  <span className="text-foreground font-medium">100% Ethically Sourced Beans</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[hsl(var(--cosmic-gold))] to-[hsl(var(--cosmic-gold-dark))]" />
                  <span className="text-foreground font-medium">Small-Batch Artisan Roasting</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[hsl(var(--cosmic-gold))] to-[hsl(var(--cosmic-gold-dark))]" />
                  <span className="text-foreground font-medium">Sustainable Packaging</span>
                </div>
              </div>

              <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-95" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join the Cosmic Coffee Community
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to get exclusive blends, early access to new releases, and cosmic brewing tips.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--cosmic-gold))]"
              />
              <Button size="lg" className="bg-gradient-to-r from-[hsl(var(--cosmic-gold))] to-[hsl(var(--cosmic-gold-dark))] text-primary-foreground hover:opacity-90 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6" />
                <span className="text-xl font-bold">HubKochab</span>
              </div>
              <p className="text-white/70 text-sm">
                Crafting cosmic coffee experiences since day one.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bestsellers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gift Sets</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Brewing Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>© 2024 HubKochab. All rights reserved. Crafted with ☕ and ✨</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;