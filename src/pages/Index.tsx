import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Clock, Gift } from 'lucide-react';

const Index = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '', item: '' });
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Sample free items data
  const freeItems = [
    {
      id: 1,
      title: 'Wooden Bookshelf',
      description: 'Beautiful wooden bookshelf in good condition. Perfect for books or decorative items.',
      image: '/images/furniture_items_3.jpeg',
      category: 'Furniture',
      location: 'Downtown',
      postedDate: '2 days ago',
      condition: 'Good'
    },
    {
      id: 2,
      title: 'Office Chair',
      description: 'Comfortable office chair with adjustable height. Minor wear but fully functional.',
      image: '/images/furniture_items_1.jpeg',
      category: 'Furniture',
      location: 'Midtown',
      postedDate: '1 week ago',
      condition: 'Fair'
    },
    {
      id: 3,
      title: 'Kids Study Desk Set',
      description: 'Complete study desk and chair set for children. White color, excellent condition.',
      image: '/images/furniture_items_6.jpeg',
      category: 'Furniture',
      location: 'Suburbs',
      postedDate: '3 days ago',
      condition: 'Excellent'
    },
    {
      id: 4,
      title: 'Side Table',
      description: 'Rotating side table, perfect for small spaces. Modern design.',
      image: '/images/furniture_items_5.jpeg',
      category: 'Furniture',
      location: 'City Center',
      postedDate: '5 days ago',
      condition: 'Good'
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon about the item.",
    });
    setContactForm({ name: '', email: '', message: '', item: '' });
  };

  const openContactDialog = (item: any) => {
    setSelectedItem(item);
    setContactForm({ ...contactForm, item: item.title });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Gift className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">FreeStuff</h1>
            </div>
            <p className="text-muted-foreground hidden md:block">Find free items in your community</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-secondary/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Free Items Available Now</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover quality items being given away for free in your area. 
            Reduce waste, help others, and find what you need.
          </p>
        </div>
      </section>

      {/* Items Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {freeItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {item.condition}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm line-clamp-2">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{item.postedDate}</span>
                    </div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full" 
                        onClick={() => openContactDialog(item)}
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Contact for Item
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Contact About: {selectedItem?.title}</DialogTitle>
                        <DialogDescription>
                          Send a message to inquire about this free item.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Your Name</Label>
                          <Input
                            id="name"
                            value={contactForm.name}
                            onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Your Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={contactForm.email}
                            onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            placeholder="Hi, I'm interested in this item. When would be a good time to pick it up?"
                            value={contactForm.message}
                            onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full">
                          Send Message
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Gift className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">FreeStuff</span>
          </div>
          <p className="text-muted-foreground">
            Connecting communities through free sharing. Reduce waste, help others.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
