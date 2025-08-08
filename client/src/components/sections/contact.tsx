import { useState } from "react";
import { Mail, Phone, Github } from "lucide-react";
import ParallaxSection from "@/components/ui/parallax-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    intent: "",
    message: ""
  });
  
  const [aiSuggestion, setAiSuggestion] = useState("Analyzing cultural fit probability...");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Implement form submission logic
  };

  const handleMessageChange = (value: string) => {
    setFormData({ ...formData, message: value });
    
    // Mock AI suggestions
    const suggestions = [
      "Cultural fit probability: 87%",
      "Suggestion: Mention specific technologies you're excited about",
      "Tip: Reference a project that aligns with company values"
    ];
    
    setTimeout(() => {
      const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
      setAiSuggestion(randomSuggestion);
    }, 500);
  };

  const getCurrentTime = () => {
    return new Date().toLocaleString();
  };

  return (
    <ParallaxSection 
      id="contact" 
      className="py-20 bg-minimal-black relative"
      backgroundImage="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-mono font-black text-5xl md:text-6xl text-center mb-4">
          CONTACT<span className="text-sky-blue">.</span>IRRESISTIBLE
        </h2>
        <p className="text-center text-xl opacity-80 mb-16">
          AI-powered message suggestions for maximum engagement probability
        </p>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-mono font-bold mb-2" htmlFor="name">
                  NAME.ENTITY
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your.Name.Here"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-minimal-black/30 backdrop-blur-md border border-minimal-gray-2 font-mono focus:border-sky-blue rounded-lg"
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <label className="block font-mono font-bold mb-2" htmlFor="email">
                  EMAIL.ADDRESS
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="contact@company.dev"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-minimal-black/30 backdrop-blur-md border border-minimal-gray-2 font-mono focus:border-sky-blue rounded-lg"
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <label className="block font-mono font-bold mb-2" htmlFor="intent">
                  COLLABORATION.INTENT
                </label>
                <Select value={formData.intent} onValueChange={(value) => setFormData({ ...formData, intent: value })}>
                  <SelectTrigger className="bg-minimal-black/30 backdrop-blur-md border border-minimal-gray-2 font-mono focus:border-sky-blue rounded-lg" data-testid="select-intent">
                    <SelectValue placeholder="Select.Intent.Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fulltime">Full-time Position</SelectItem>
                    <SelectItem value="contract">Contract Work</SelectItem>
                    <SelectItem value="consulting">Technical Consulting</SelectItem>
                    <SelectItem value="collaboration">Creative Collaboration</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block font-mono font-bold mb-2" htmlFor="message">
                  MESSAGE.CONTENT
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Your message will be analyzed for cultural fit probability..."
                  value={formData.message}
                  onChange={(e) => handleMessageChange(e.target.value)}
                  className="bg-minimal-black/30 backdrop-blur-md border border-minimal-gray-2 font-mono focus:border-sky-blue resize-none rounded-lg"
                  data-testid="textarea-message"
                />
              </div>
              
              {/* AI Suggestions */}
              <div className="bg-minimal-black/40 backdrop-blur-md p-4 border-l-4 border-sky-blue rounded-lg">
                <h4 className="font-mono font-bold text-sm mb-2 text-sky-blue">
                  AI.SUGGESTION.ENGINE
                </h4>
                <div className="space-y-2">
                  <p className="text-sm text-minimal-secondary font-mono">
                    &gt; Analyzing cultural fit probability...
                  </p>
                  <p className="text-sm text-sky-blue font-mono">
                    &gt; {aiSuggestion}
                  </p>
                </div>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-sky-blue text-minimal-black font-mono font-black py-4 px-8 text-lg rounded-lg hover:bg-opacity-90 transition-all duration-300 neurotransmitter-trigger shadow-lg"
                data-testid="button-submit-contact"
              >
                INITIATE.CONTACT
              </Button>
            </form>
            
            {/* Reciprocity Element */}
            <div className="border border-minimal-secondary p-6 bg-minimal-black/40 backdrop-blur-md rounded-lg">
              <h3 className="font-mono font-black text-lg mb-3 text-minimal-secondary">
                FREE.CAREER.GUIDE
              </h3>
              <p className="text-sm mb-4 text-minimal-white opacity-90">
                Download "The Full-Stack Philosophy: From Code to Consciousness" 
                - 47-page guide to transcendent development practices.
              </p>
              <Button 
                variant="outline"
                className="border border-minimal-secondary text-minimal-secondary font-mono font-bold hover:bg-minimal-secondary hover:text-minimal-black rounded-lg"
                data-testid="button-download-guide"
              >
                DOWNLOAD.NOW
              </Button>
            </div>
          </div>
          
          {/* Contact Info & Social Proof */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-minimal-black/40 backdrop-blur-md p-6 rounded-lg shadow-lg">
              <h3 className="font-mono font-black text-xl mb-6 text-sky-blue">
                DIRECT.CHANNELS
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-sky-blue" />
                  <span className="font-mono text-minimal-white">hello@freixanet.dev</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-sky-blue" />
                  <span className="font-mono text-minimal-white">+1 (555) FREIXANET</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-sky-blue" />
                  <span className="font-mono text-minimal-white">github.com/freixanet</span>
                </div>
              </div>
            </div>
            
            {/* Response Time */}
            <div className="bg-minimal-black/40 backdrop-blur-md p-6 border-l-4 border-minimal-secondary rounded-lg">
              <h4 className="font-mono font-bold text-lg mb-2 text-minimal-secondary">
                RESPONSE.PROTOCOL
              </h4>
              <p className="text-sm text-minimal-white opacity-90 mb-2">
                Average response time: <strong>47 minutes</strong>
              </p>
              <p className="text-sm text-minimal-white opacity-80 font-mono">
                Priority queue based on cultural fit algorithm
              </p>
            </div>
            
            {/* Availability Status */}
            <div className="bg-minimal-black/40 backdrop-blur-md border border-sky-blue p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-sky-blue rounded-full animate-pulse" />
                <span className="font-mono font-bold text-sky-blue">
                  CURRENTLY.AVAILABLE
                </span>
              </div>
              <p className="text-sm text-minimal-white opacity-90 mb-4">
                Open to high-impact collaborations. Current capacity: 2 slots remaining for Q1 2025.
              </p>
              <div className="text-xs font-mono text-minimal-secondary opacity-70">
                Last updated: <span>{getCurrentTime()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}
