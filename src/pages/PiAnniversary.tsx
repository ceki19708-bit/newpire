import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Gift, 
  Clock, 
  Shield, 
  Users, 
  Cake, 
  Wallet,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

const PiAnniversary = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  const [remainingQuantity] = useState(30008);
  const totalQuantity = 31415;
  const progress = ((totalQuantity - remainingQuantity) / totalQuantity) * 100;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Cake className="h-6 w-6" />,
      title: "Birthday Program",
      description: "Special 6th anniversary celebration"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Receive in 24h",
      description: "Fast processing guaranteed"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safe & Secure",
      description: "Verified and protected"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "500000+ Participants",
      description: "Join the community"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Click Get Pi Rewards Now",
      description: "Start the claiming process by clicking the button below"
    },
    {
      number: "02", 
      title: "Enter Your Wallet Details",
      description: "Provide your wallet information for verification"
    },
    {
      number: "03",
      title: "Submit Verification Request",
      description: "Complete the verification process"
    },
    {
      number: "04",
      title: "Receive Rewards in 24h",
      description: "Get your rewards delivered to your wallet"
    }
  ];

  const partners = [
    { name: "TechFi", role: "Technical Support" },
    { name: "OKX", role: "Blockchain Partner" },
    { name: "CryptoPlus", role: "Payment Gateway" },
    { name: "PiCommunity", role: "Community Support" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, hsl(258 50% 15%), hsl(270 60% 20%), hsl(258 50% 15%))'
    }}>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 rounded-full bg-yellow-400 opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-6 h-6 rounded-full bg-purple-400 opacity-30 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-10 h-10 rounded-full bg-cyan-400 opacity-25 animate-bounce delay-1000"></div>
        <div className="absolute top-60 left-1/3 w-4 h-4 rounded-full bg-yellow-300 opacity-20 animate-pulse delay-500"></div>
        <div className="absolute bottom-60 right-1/3 w-12 h-12 rounded-full bg-purple-300 opacity-15 animate-bounce delay-700"></div>
        
        {/* Pi Symbols */}
        <div className="absolute top-32 right-10 text-4xl text-yellow-400 opacity-20 animate-pulse">π</div>
        <div className="absolute bottom-32 left-16 text-3xl text-purple-400 opacity-25 animate-bounce delay-300">π</div>
        <div className="absolute top-1/2 right-1/4 text-2xl text-cyan-400 opacity-20 animate-pulse delay-1000">π</div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wallet className="h-6 w-6 text-white" />
            <span className="text-white font-medium">Wallet</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full flex items-center justify-center">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-purple-900">6</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-4">
            Happy 6th Birthday
          </h1>
          
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Pi Network project team will randomly give 314 Pi to 31,415 wallets that have completed KYC
          </p>

          {/* Reward Amount */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-purple-400/30">
            <div className="text-6xl font-bold text-yellow-400 mb-4">+314 π</div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-purple-200 text-sm mb-1">Time Remaining</div>
                <div className="text-white text-xl font-bold">
                  {String(timeRemaining.hours).padStart(2, '0')}:
                  {String(timeRemaining.minutes).padStart(2, '0')}:
                  {String(timeRemaining.seconds).padStart(2, '0')}
                </div>
              </div>
              
              <div>
                <div className="text-purple-200 text-sm mb-1">Condition</div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-white font-medium">KYC Successfully Passed</span>
                </div>
              </div>
              
              <div>
                <div className="text-purple-200 text-sm mb-1">Remaining Quantity</div>
                <div className="text-white text-xl font-bold">
                  {remainingQuantity.toLocaleString()}/{totalQuantity.toLocaleString()}
                </div>
                <Progress value={progress} className="mt-2 h-2" />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold text-xl px-12 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
            onClick={() => window.open('https://pi-network.net/claim-rewards', '_blank')}
          >
            CLAIM 314 PI NOW
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-purple-400/30 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-purple-200 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About This Program */}
        <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30 mb-8">
          <CardHeader>
            <CardTitle className="text-white text-2xl">About This Program</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-purple-200 leading-relaxed">
              This reward program is initiated by Picoreteam and sponsors to support Pi Network pioneers. 
              As an independent promotional activity, we distribute Pi coins to active community members 
              to celebrate our 6th anniversary and encourage continued participation in the ecosystem.
            </p>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30 mb-8">
          <CardHeader>
            <CardTitle className="text-white text-2xl">How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-cyan-400 text-black rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                    <p className="text-purple-200 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Security & Transparency */}
        <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30 mb-8">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center space-x-2">
              <Shield className="h-6 w-6" />
              <span>Security & Transparency</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-purple-200 leading-relaxed">
              This is an independent promotional activity verified by the official Pi Network. 
              All transactions are secured and transparent, ensuring the safety of participants' 
              assets and personal information throughout the claiming process.
            </p>
          </CardContent>
        </Card>

        {/* Partners */}
        <Card className="bg-white/10 backdrop-blur-sm border-purple-400/30">
          <CardHeader>
            <CardTitle className="text-white text-xl text-center">Supported By</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {partners.map((partner, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/20 rounded-lg p-4 mb-2">
                    <div className="text-white font-bold">{partner.name}</div>
                  </div>
                  <div className="text-purple-200 text-xs">{partner.role}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 text-purple-300 text-sm">
          © 2024 Pi Network Anniversary Program. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default PiAnniversary;