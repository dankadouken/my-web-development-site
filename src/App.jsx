import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Star, Shield, Code, Cloud, GraduationCap, Mail, Phone, MapPin, Palette, Users, Clock, FileText, DollarSign } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import './App.css';
import wnpLogo from './assets/wnp-brokerage-logo.png';

// Credentials Bar Component
const CredentialsBar = () => {
  return (
    <div style={{
      background: '#1e3a5f',
      color: 'white',
      padding: '10px 0',
      textAlign: 'center',
      fontSize: '14px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        flexWrap: 'wrap'
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#d4af37' }}>🏢</span>
          Licensed Texas LLC
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#d4af37' }}>🎖️</span>
          Veteran-Owned Business
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#d4af37' }}>🛡️</span>
          Insured & Bonded
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#d4af37' }}>⭐</span>
          Military Security Clearance
        </span>
      </div>
    </div>
  );
};

// Trust Badges Component
const TrustBadges = () => {
  const badgeStyle = {
    background: 'white',
    padding: '15px 20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    minWidth: '150px',
    borderTop: '3px solid #d4af37',
    transition: 'transform 0.2s ease'
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      margin: '30px 0',
      padding: '20px',
      background: 'linear-gradient(135deg, #f0f4f8, #e8f5e8)',
      borderRadius: '12px'
    }}>
      <div style={badgeStyle}>
        <div style={{ fontSize: '24px', marginBottom: '8px' }}>🏢</div>
        <div style={{ fontWeight: '700', color: '#1e3a5f', fontSize: '14px', marginBottom: '4px' }}>
          LICENSED LLC
        </div>
        <div style={{ fontSize: '12px', color: '#4b5563' }}>Texas Registration</div>
      </div>
      
      <div style={badgeStyle}>
        <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎖️</div>
        <div style={{ fontWeight: '700', color: '#1e3a5f', fontSize: '14px', marginBottom: '4px' }}>
          VETERAN OWNED
        </div>
        <div style={{ fontSize: '12px', color: '#4b5563' }}>U.S. Army Veterans</div>
      </div>
      
      <div style={badgeStyle}>
        <div style={{ fontSize: '24px', marginBottom: '8px' }}>🛡️</div>
        <div style={{ fontWeight: '700', color: '#1e3a5f', fontSize: '14px', marginBottom: '4px' }}>
          INSURED
        </div>
        <div style={{ fontSize: '12px', color: '#4b5563' }}>Professional Liability</div>
      </div>
      
      <div style={badgeStyle}>
        <div style={{ fontSize: '24px', marginBottom: '8px' }}>✅</div>
        <div style={{ fontWeight: '700', color: '#1e3a5f', fontSize: '14px', marginBottom: '4px' }}>
          GUARANTEED
        </div>
        <div style={{ fontSize: '12px', color: '#4b5563' }}>Satisfaction Promise</div>
      </div>
    </div>
  );
};

// Navigation Component - UPDATED with UX/UI Design tab
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/web-development', label: 'Web Development' },
    { path: '/ux-ui-design', label: 'UX/UI Design' },
    { path: '/cloud-hosting', label: 'Cloud Hosting' },
    { path: '/vettech-academy', label: 'VetTech Academy' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <CredentialsBar />
      <nav className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <img src={wnpLogo} alt="WNP Logo" className="h-10 w-10" />
              <span className="font-bold text-xl">WNP Brokerage</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'bg-accent text-accent-foreground'
                      : 'hover:bg-primary-foreground/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary-foreground"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-accent text-accent-foreground'
                        : 'hover:bg-primary-foreground/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

// Home Page Component - UPDATED to include UX/UI Design service
const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img src={wnpLogo} alt="WNP Logo" className="h-24 w-24 mx-auto mb-8" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              WNP Web Development Brokerage
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional Web Development & UX/UI Design by U.S. Army Veterans - Transparent Pricing, Guaranteed Results, Military-Grade Reliability
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/web-development">Explore Services</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </section>

      {/* Services Overview - UPDATED to include UX/UI Design */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Four Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for your digital transformation journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Web Development</CardTitle>
                <CardDescription>
                  Hour-based contracts with transparent pricing and military precision
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Landing Pages: 25-35 hours ($2,125-$2,975)</li>
                  <li>• Professional Websites: 50-70 hours ($4,250-$5,950)</li>
                  <li>• Business Platforms: 80-120 hours ($6,800-$10,200)</li>
                  <li>• Enterprise Solutions: 150+ hours ($12,750+)</li>
                </ul>
                <Button className="w-full mt-4" asChild>
                  <Link to="/web-development">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-accent">
              <CardHeader>
                <Palette className="h-12 w-12 text-accent mb-4" />
                <CardTitle>UX/UI Design Consultation</CardTitle>
                <CardDescription>
                  Professional design advice and mockups for your project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 3-Step Design Process</li>
                  <li>• Professional Mockups</li>
                  <li>• Design Recommendations</li>
                  <li>• Total Investment: $255</li>
                </ul>
                <div className="text-xs text-muted-foreground mt-2 mb-4">
                  *Design advice only - take to any developer
                </div>
                <Button className="w-full mt-4" variant="outline" asChild>
                  <Link to="/ux-ui-design">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cloud className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>Cloud Hosting & Deployment</CardTitle>
                <CardDescription>
                  Realistic hosting solutions with monthly maintenance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Basic Setup: $175/month</li>
                  <li>• Professional: $225/month</li>
                  <li>• Enterprise: $300/month</li>
                  <li>• Monthly check-ins included</li>
                </ul>
                <Button className="w-full mt-4" asChild>
                  <Link to="/cloud-hosting">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-accent mb-4" />
                <CardTitle>VetTech Academy</CardTitle>
                <CardDescription>
                  VA-funded tech training for veterans transitioning to civilian careers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• HTML/CSS Certification</li>
                  <li>• JavaScript Development</li>
                  <li>• MySQL Backend</li>
                  <li>• ReactJS Framework</li>
                </ul>
                <Button className="w-full mt-4" asChild>
                  <Link to="/vettech-academy">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose WNP - UPDATED messaging */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose WNP?</h2>
            <p className="text-xl text-muted-foreground">
              Military precision meets cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Veteran-Owned</h3>
              <p className="text-muted-foreground">
                Founded and operated by U.S. Army veterans who understand discipline and excellence
              </p>
            </div>
            <div className="text-center">
              <DollarSign className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-muted-foreground">
                Hour-based contracts with detailed timesheet documentation - no surprises
              </p>
            </div>
            <div className="text-center">
              <Code className="h-16 w-16 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern Tech</h3>
              <p className="text-muted-foreground">
                Using the latest technologies including React, Node.js, AWS, and Google Cloud
              </p>
            </div>
            <div className="text-center">
              <Users className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personal Service</h3>
              <p className="text-muted-foreground">
                Direct access to our veteran team - no account managers or middlemen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - UPDATED */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8">
            Start with our UX/UI Design consultation or explore our full development services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/ux-ui-design">UX/UI Design Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/web-development">Full Development Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// NEW UX/UI Design Page Component
const UXUIDesignPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">UX/UI Design Consultation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Professional design advice and mockups for your website project. Perfect for getting expert guidance before hiring any developer.
          </p>
          <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="text-2xl font-bold text-accent mb-2">$255 Total Investment</div>
            <div className="text-muted-foreground">3-step process • Professional mockups • Design recommendations</div>
          </div>
        </div>

        {/* What You Get */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What You Get</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional design consultation that you can take to any developer
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Palette className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Professional Mockups</h3>
              <p className="text-muted-foreground">
                3 custom landing page designs based on your inspiration websites and business needs
              </p>
            </Card>
            <Card className="p-6 text-center">
              <FileText className="h-16 w-16 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Design Recommendations</h3>
              <p className="text-muted-foreground">
                Detailed advice on layout, colors, functionality, and user experience best practices
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Code className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Developer-Ready Assets</h3>
              <p className="text-muted-foreground">
                Screenshots and specifications any web developer can use to build your site
              </p>
            </Card>
          </div>
        </section>

        {/* 3-Step Process */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our 3-Step Design Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Structured consultation process designed by veteran professionals
            </p>
          </div>

          <div className="space-y-8">
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/4 bg-gradient-to-br from-primary to-secondary p-6 text-white">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">01</div>
                    <div className="text-lg font-semibold">Discovery</div>
                    <div className="text-sm opacity-90">90 minutes</div>
                  </div>
                </div>
                <div className="md:w-3/4 p-6">
                  <h3 className="text-xl font-semibold mb-3">Discovery & Vision Meeting</h3>
                  <p className="text-muted-foreground mb-4">
                    We analyze your current website and business goals. You'll share 3 websites you love for style inspiration 
                    and 3 websites with functionality you want to replicate.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">What We'll Discuss:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Your current website analysis</li>
                        <li>• Business goals and target audience</li>
                        <li>• Style preferences and inspiration</li>
                        <li>• Desired functionality and features</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">What You'll Provide:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 3 websites you love (style inspiration)</li>
                        <li>• 3 websites with desired functionality</li>
                        <li>• Your business goals and requirements</li>
                        <li>• Current website (if you have one)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/4 bg-gradient-to-br from-secondary to-accent p-6 text-white">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">02</div>
                    <div className="text-lg font-semibold">Design</div>
                    <div className="text-sm opacity-90">60 minutes</div>
                  </div>
                </div>
                <div className="md:w-3/4 p-6">
                  <h3 className="text-xl font-semibold mb-3">Concept Presentation Meeting</h3>
                  <p className="text-muted-foreground mb-4">
                    We present 3 professional landing page mockups based on your inspiration websites. 
                    You'll see your vision transformed into concrete design concepts.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">What You'll Receive:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 3 custom landing page mockups</li>
                        <li>• Design rationale and recommendations</li>
                        <li>• Color scheme and typography guidance</li>
                        <li>• Layout and functionality explanations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Design Elements:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Professional screenshot mockups</li>
                        <li>• Mobile and desktop layouts</li>
                        <li>• User experience recommendations</li>
                        <li>• Technical implementation notes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/4 bg-gradient-to-br from-accent to-primary p-6 text-white">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">03</div>
                    <div className="text-lg font-semibold">Delivery</div>
                    <div className="text-sm opacity-90">45 minutes</div>
                  </div>
                </div>
                <div className="md:w-3/4 p-6">
                  <h3 className="text-xl font-semibold mb-3">Final Recommendations & Handoff</h3>
                  <p className="text-muted-foreground mb-4">
                    We finalize your chosen design direction and provide everything you need to take to any web developer for implementation.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Final Deliverables:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Refined design mockups</li>
                        <li>• Developer specification document</li>
                        <li>• Recommended next steps</li>
                        <li>• Implementation timeline guidance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Your Options:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Take designs to any developer</li>
                        <li>• Hire WNP for full development</li>
                        <li>• Build it yourself with guidance</li>
                        <li>• Shop around with professional specs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Pricing Breakdown */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional design consultation at $85/hour with complete transparency
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Discovery & Vision Meeting</div>
                      <div className="text-sm text-muted-foreground">90 minutes of professional consultation</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">$127.50</div>
                      <div className="text-xs text-muted-foreground">1.5 hours @ $85/hr</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Concept Presentation Meeting</div>
                      <div className="text-sm text-muted-foreground">60 minutes presenting 3 custom mockups</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">$85.00</div>
                      <div className="text-xs text-muted-foreground">1 hour @ $85/hr</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Final Recommendations & Handoff</div>
                      <div className="text-sm text-muted-foreground">45 minutes finalizing deliverables</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">$42.50</div>
                      <div className="text-xs text-muted-foreground">0.5 hours @ $85/hr</div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <div>Total Investment</div>
                      <div className="text-accent">$255.00</div>
                    </div>
                    <div className="text-center text-sm text-muted-foreground mt-2">
                      3 hours of professional design consultation
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose This Service */}
        <section className="mb-20">
          <div className="bg-muted/50 rounded-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our UX/UI Design Consultation?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Perfect for businesses who want professional design guidance without committing to full development
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Perfect If You:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <div>
                      <div className="font-medium">Want professional design advice</div>
                      <div className="text-sm text-muted-foreground">Get expert UX/UI guidance from veteran professionals</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <div>
                      <div className="font-medium">Have a preferred developer</div>
                      <div className="text-sm text-muted-foreground">Take our designs to any developer you choose</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <div>
                      <div className="font-medium">Want to shop around</div>
                      <div className="text-sm text-muted-foreground">Get professional specs to compare developer quotes</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <div>
                      <div className="font-medium">Need design clarity</div>
                      <div className="text-sm text-muted-foreground">Transform vague ideas into concrete visual concepts</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-secondary">What Makes Us Different:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <div>
                      <div className="font-medium">Military Precision</div>
                      <div className="text-sm text-muted-foreground">Structured process with clear deliverables and timelines</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <div>
                      <div className="font-medium">Transparent Pricing</div>
                      <div className="text-sm text-muted-foreground">$85/hour with detailed time tracking - no surprises</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <div>
                      <div className="font-medium">Veteran Team</div>
                      <div className="text-sm text-muted-foreground">Direct access to experienced veteran professionals</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <div>
                      <div className="font-medium">No Pressure</div>
                      <div className="text-sm text-muted-foreground">Pure consultation - no sales pitch for our development services</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-accent via-accent/90 to-secondary text-white rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Professional Design Guidance?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start with our 3-step UX/UI design consultation and get the professional mockups and recommendations you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Schedule Discovery Meeting</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent" asChild>
                <Link to="/web-development">Or Explore Full Development</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// Web Development Page Component - UPDATED to remove names and focus on development
const WebDevelopmentPage = () => {
  const packages = [
    {
      name: "Landing Page",
      hours: "25-35 hours",
      price: "$2,125-$2,975",
      description: "Perfect for businesses needing a professional single-page presence",
      features: [
        "Single page responsive design",
        "Contact form integration",
        "Basic SEO optimization",
        "Mobile-friendly layout",
        "Professional hosting setup"
      ],
      ideal: "Small businesses, service providers, personal brands"
    },
    {
      name: "Professional Website",
      hours: "50-70 hours", 
      price: "$4,250-$5,950",
      description: "Multi-page website with advanced functionality and professional design",
      features: [
        "5-10 page responsive website",
        "Content management system",
        "Advanced SEO optimization",
        "E-commerce integration (basic)",
        "Professional email setup"
      ],
      ideal: "Growing businesses, e-commerce stores, professional services"
    },
    {
      name: "Business Platform",
      hours: "80-120 hours",
      price: "$6,800-$10,200", 
      description: "Comprehensive business solution with custom functionality",
      features: [
        "Custom web application",
        "User authentication system",
        "Database integration",
        "Advanced e-commerce features",
        "Third-party API integrations"
      ],
      ideal: "Established businesses, complex requirements, custom workflows"
    },
    {
      name: "Enterprise Solution",
      hours: "150+ hours",
      price: "$12,750+",
      description: "Large-scale applications with enterprise-grade features",
      features: [
        "Complex web applications",
        "Advanced user management",
        "Custom reporting systems",
        "Enterprise integrations",
        "Scalable architecture"
      ],
      ideal: "Large organizations, complex business processes, high-traffic applications"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Development Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Professional web development with transparent hour-based pricing and military precision
          </p>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="text-2xl font-bold text-primary mb-2">$85/hour + Professional Timesheet Documentation</div>
            <div className="text-muted-foreground">Complete transparency in every project</div>
          </div>
        </div>

        {/* Hour-Based Packages */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hour-Based Development Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing based on actual hours worked, documented with professional timesheet tracking
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${index === 1 ? 'border-primary border-2 relative' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                      <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                      <div className="text-sm text-muted-foreground">{pkg.hours}</div>
                    </div>
                  </div>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-accent mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-sm font-medium mb-1">Perfect For:</div>
                      <div className="text-sm text-muted-foreground">{pkg.ideal}</div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6" variant={index === 1 ? 'default' : 'outline'} asChild>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Development Process - UPDATED to remove names */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Structured approach with military precision and complete transparency
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discovery & Planning</h3>
              <p className="text-muted-foreground">
                Comprehensive analysis of your requirements, goals, and technical specifications with realistic hour estimates
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Development & Documentation</h3>
              <p className="text-muted-foreground">
                Professional development with detailed timesheet tracking and regular progress updates
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Testing & Launch</h3>
              <p className="text-muted-foreground">
                Comprehensive testing, client approval, and professional launch with ongoing support options
              </p>
            </Card>
          </div>
        </section>

        {/* Why Hour-Based Pricing */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Why Hour-Based Pricing Works Better</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transparent, fair, and accountable - the way business should be done
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Benefits for You:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <div>
                      <div className="font-medium">Complete Transparency</div>
                      <div className="text-sm text-muted-foreground">See exactly what you're paying for with detailed timesheet documentation</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <div>
                      <div className="font-medium">No Surprise Costs</div>
                      <div className="text-sm text-muted-foreground">Changes and additions are clearly tracked and billed fairly</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <div>
                      <div className="font-medium">Fair Pricing</div>
                      <div className="text-sm text-muted-foreground">Pay for actual work performed, not inflated project estimates</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <div>
                      <div className="font-medium">Professional Documentation</div>
                      <div className="text-sm text-muted-foreground">Detailed records of all work performed for your business records</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-secondary">Our Commitment:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <div>
                      <div className="font-medium">Accurate Time Tracking</div>
                      <div className="text-sm text-muted-foreground">Professional timesheet system with task-level detail</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <div>
                      <div className="font-medium">Regular Updates</div>
                      <div className="text-sm text-muted-foreground">Weekly progress reports with time summaries</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <div>
                      <div className="font-medium">Military Accountability</div>
                      <div className="text-sm text-muted-foreground">Veteran-level commitment to deadlines and quality</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1">•</span>
                    <div>
                      <div className="font-medium">Direct Communication</div>
                      <div className="text-sm text-muted-foreground">Work directly with our veteran development team</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-white rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience transparent, professional web development with military precision and accountability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/ux-ui-design">Or Get Design Consultation First</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// Cloud Hosting Page Component - UPDATED (keeping your realistic version)
const CloudHostingPage = () => {
  const hostingOptions = [
    {
      name: "Basic Hosting Setup",
      monthlyTotal: 175,
      setupHours: "6-8 hours",
      setupCost: "510-680",
      features: [
        "Hostinger Premium hosting setup",
        "Domain configuration", 
        "Basic WordPress installation",
        "Email accounts setup",
        "Initial optimization"
      ],
      maintenance: [
        "Monthly check-in and updates",
        "Basic performance monitoring",
        "Backup verification",
        "Simple issue resolution"
      ],
      ideal: "Small businesses, simple websites",
      checkIn: "Once per month (1-2 hours)",
      monthlyBreakdown: {
        hosting: 25,
        maintenance: 150
      }
    },
    {
      name: "Professional Hosting Setup",
      monthlyTotal: 225,
      setupHours: "10-12 hours",
      setupCost: "850-1,020",
      features: [
        "AWS Lightsail professional setup",
        "Load balancer configuration",
        "Database optimization",
        "Email server setup",
        "Performance tuning"
      ],
      maintenance: [
        "Monthly performance review",
        "Update management",
        "Backup monitoring",
        "Issue troubleshooting as needed"
      ],
      ideal: "Growing businesses, e-commerce sites",
      checkIn: "Once per month (2-3 hours)",
      monthlyBreakdown: {
        hosting: 75,
        maintenance: 150
      }
    },
    {
      name: "Enterprise Hosting Setup",
      monthlyTotal: 300,
      setupHours: "15-20 hours",
      setupCost: "1,275-1,700",
      features: [
        "Google Cloud Platform setup",
        "Advanced configuration",
        "Database clustering",
        "Multi-region deployment",
        "Custom optimization"
      ],
      maintenance: [
        "Monthly system review",
        "Performance analysis",
        "Advanced troubleshooting",
        "Strategic recommendations"
      ],
      ideal: "Large businesses, high-traffic sites",
      checkIn: "Once per month (3-4 hours)",
      monthlyBreakdown: {
        hosting: 150,
        maintenance: 150
      }
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cloud Hosting & Deployment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Professional hosting setup with realistic monthly maintenance for busy business owners
          </p>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="text-2xl font-bold text-primary mb-2">$85/hour Setup + Monthly Maintenance</div>
            <div className="text-muted-foreground">Honest pricing for professional hosting services</div>
          </div>
        </div>

        {/* Hosting Packages */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hosting Setup Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We handle the technical setup, you focus on your business. Monthly check-ins keep everything running smoothly.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {hostingOptions.map((option, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${index === 0 ? 'border-primary border-2 relative' : ''}`}>
                {index === 0 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="text-center mb-4">
                    <CardTitle className="text-2xl mb-2">{option.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary mb-2">
                      ${option.monthlyTotal}/month
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      Setup: {option.setupHours} (${option.setupCost})
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Hosting: ${option.monthlyBreakdown.hosting} + Maintenance: ${option.monthlyBreakdown.maintenance}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Initial Setup Includes:</h4>
                      <div className="space-y-2">
                        {option.features.map((feature, i) => (
                          <div key={i} className="text-sm flex items-start gap-2">
                            <span className="text-accent mt-1">✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-secondary">Monthly Maintenance:</h4>
                      <div className="space-y-2">
                        {option.maintenance.map((service, i) => (
                          <div key={i} className="text-sm flex items-start gap-2">
                            <span className="text-secondary mt-1">•</span>
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-sm font-medium mb-1">Perfect For:</div>
                      <div className="text-sm text-muted-foreground mb-2">{option.ideal}</div>
                      <div className="text-xs text-muted-foreground">
                        <strong>Our Time Commitment:</strong> {option.checkIn}
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6" variant={index === 0 ? 'default' : 'outline'} asChild>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Realistic Approach - UPDATED to remove team size mention */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Our Realistic Approach</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We're honest about what we can deliver as a veteran-owned business with full-time commitments and families.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Professional Setup</h3>
                <p className="text-sm text-muted-foreground">We handle all the technical complexity upfront so your site runs smoothly</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Monthly Check-ins</h3>
                <p className="text-sm text-muted-foreground">Once per month we review performance, handle updates, and fix any issues</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Honest Communication</h3>
                <p className="text-sm text-muted-foreground">We'll tell you exactly what we can and can't do within our schedule</p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What's Actually Included</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No fancy promises we can't keep. Here's exactly what you get for your monthly maintenance fee.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-primary">Monthly Check-in (1-4 hours)</h3>
              <div className="space-y-2">
                <div className="text-sm flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Review website performance and uptime</span>
                </div>
                <div className="text-sm flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Apply necessary updates and patches</span>
                </div>
                <div className="text-sm flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Check backups and basic functionality</span>
                </div>
                <div className="text-sm flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Fix any issues that come up</span>
                </div>
                <div className="text-sm flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Brief status report via email</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-secondary">Emergency Support</h3>
              <div className="space-y-2">
                <div className="text-sm flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>If your site goes down, we'll fix it ASAP</span>
                </div>
                <div className="text-sm flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Response within 24 hours (usually faster)</span>
                </div>
                <div className="text-sm flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Phone/email support for urgent issues</span>
                </div>
                <div className="text-sm flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Basic troubleshooting and fixes</span>
                </div>
                <div className="text-sm flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Honest assessment if we can't help</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-white rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Ready for Honest, Professional Hosting?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              No overselling, no false promises. Just professional hosting setup and realistic monthly maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/web-development">View Web Development</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// VetTech Academy Page Component (keeping existing)
const VetTechAcademyPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">VetTech Academy</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            VA-funded tech training for veterans transitioning to civilian careers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Empowering Veterans Through Technology</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our VetTech Academy provides comprehensive technology training specifically designed for veterans 
              transitioning to civilian careers. Leveraging VA education benefits, we help fellow veterans 
              build the skills needed for success in the tech industry.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-medium">VA Education Benefits Accepted</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="font-medium">Veteran-Designed Curriculum</span>
              </div>
              <div className="flex items-center gap-3">
                <Code className="h-6 w-6 text-primary" />
                <span className="font-medium">Industry-Relevant Skills</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Program Highlights</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Hands-on training with real-world projects</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Mentorship from experienced veteran developers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Job placement assistance and career guidance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>Flexible scheduling for working veterans</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Training Programs */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Training Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Code className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">HTML/CSS Certification</h3>
              <p className="text-muted-foreground text-sm">
                Master the fundamentals of web development with comprehensive HTML and CSS training
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Star className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">JavaScript Development</h3>
              <p className="text-muted-foreground text-sm">
                Learn modern JavaScript programming and interactive web development techniques
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Cloud className="h-16 w-16 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">MySQL Backend</h3>
              <p className="text-muted-foreground text-sm">
                Database design and management with MySQL for backend development
              </p>
            </Card>
            <Card className="p-6 text-center">
              <GraduationCap className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">ReactJS Framework</h3>
              <p className="text-muted-foreground text-sm">
                Advanced frontend development with React for modern web applications
              </p>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-white rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Tech Career?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join fellow veterans in building the skills needed for a successful career in technology
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Learn More About VetTech Academy</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

// About Page Component - UPDATED to show founder and head developer
const AboutPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About WNP Brokerage</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            U.S. Army veterans bringing military discipline and transparent pricing to professional web development
          </p>
        </div>

        {/* Leadership Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the veteran founders leading WNP Web Development Brokerage
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary">JH</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Joshua Hammond</h3>
              <div className="text-lg text-primary font-semibold mb-4">Founder & CEO</div>
              <Badge className="mb-4">🏢 Licensed Business Owner</Badge>
              <p className="text-muted-foreground mb-6">
                U.S. Army veteran who created WNP's hour-based pricing model to bring complete transparency to web development. 
                Joshua focuses on business strategy, client relations, and ensuring every project meets military standards of excellence.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Business Strategy</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Client Relations</span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                    <Star className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Project Management</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-secondary">AW</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Anthony Williams</h3>
              <div className="text-lg text-secondary font-semibold mb-4">Head Developer</div>
              <Badge variant="secondary" className="mb-4">💻 Technical Lead</Badge>
              <p className="text-muted-foreground mb-6">
                U.S. Army veteran specializing in modern web development and user experience design. Anthony leads all technical 
                development and ensures every project is built with military precision and attention to detail.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Frontend Development</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">User Experience</span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                    <Star className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Responsive Design</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Company Mission */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-white rounded-lg p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl mb-6 max-w-4xl mx-auto">
                WNP Web Development Brokerage, LLC provides transparent, hour-based web development and UX/UI design services 
                with military precision. As a veteran-owned business, we focus on quality over quantity, ensuring every client 
                receives personal attention and honest communication throughout their project.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <Shield className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Military Discipline</h3>
                  <p>Punctuality, accountability, and attention to detail in every project</p>
                </div>
                <div className="text-center">
                  <DollarSign className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                  <p>Hour-based contracts with detailed timesheet documentation</p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Personal Service</h3>
                  <p>Direct access to our veteran team for maximum quality</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions with military precision and transparent pricing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <Code className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-muted-foreground mb-4">
                Professional website development with hour-based pricing and complete transparency. 
                From landing pages to enterprise applications, we deliver quality results.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Hour-based contracts ($85/hour)</li>
                <li>• Professional timesheet documentation</li>
                <li>• Modern technology stack</li>
                <li>• Responsive design and optimization</li>
              </ul>
            </Card>

            <Card className="p-6">
              <Palette className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">UX/UI Design Consultation</h3>
              <p className="text-muted-foreground mb-4">
                Professional design advice and mockups that you can take to any developer. 
                Perfect for getting expert guidance before committing to full development.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• 3-step design process ($255 total)</li>
                <li>• Professional mockups and recommendations</li>
                <li>• Developer-ready specifications</li>
                <li>• No pressure to use our development services</li>
              </ul>
            </Card>

            <Card className="p-6">
              <Cloud className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cloud Hosting & Maintenance</h3>
              <p className="text-muted-foreground mb-4">
                Realistic hosting solutions with honest monthly maintenance. We handle the technical 
                complexity while you focus on your business.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Professional hosting setup</li>
                <li>• Monthly check-ins and maintenance</li>
                <li>• Emergency support within 24 hours</li>
                <li>• Transparent pricing and communication</li>
              </ul>
            </Card>

            <Card className="p-6">
              <GraduationCap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">VetTech Academy</h3>
              <p className="text-muted-foreground mb-4">
                VA-funded technology training for veterans transitioning to civilian careers. 
                Helping fellow veterans build successful tech careers.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• HTML/CSS and JavaScript training</li>
                <li>• MySQL and ReactJS programs</li>
                <li>• Veteran-designed curriculum</li>
                <li>• Job placement assistance</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Transparent Approach</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Why we chose hour-based contracts and how it benefits our clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Hour-Based Pricing</h3>
              <p className="text-muted-foreground mb-4">
                Unlike fixed-price projects that hide costs and create conflicts, our $85/hour rate with detailed 
                timesheet documentation ensures you know exactly what you're paying for.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Complete transparency in time tracking</li>
                <li>• No surprise costs or hidden fees</li>
                <li>• Fair pricing for actual work performed</li>
                <li>• Professional documentation you can review</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Military Precision</h3>
              <p className="text-muted-foreground mb-4">
                Our veteran background brings discipline, accountability, and attention to detail 
                that sets us apart from typical web development companies.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Punctual project delivery</li>
                <li>• Detailed progress reporting</li>
                <li>• Clear communication and expectations</li>
                <li>• Commitment to quality and excellence</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Company Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-muted-foreground">
                Hour-based pricing, detailed timesheets, and honest communication about what we can deliver.
              </p>
            </Card>
            <Card className="text-center p-6">
              <Star className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-muted-foreground">
                We focus on delivering excellent results rather than taking on too many projects.
              </p>
            </Card>
            <Card className="text-center p-6">
              <Code className="h-16 w-16 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Accountability</h3>
              <p className="text-muted-foreground">
                Military training taught us to be accountable for our work and commitments to our clients.
              </p>
            </Card>
            <Card className="text-center p-6">
              <GraduationCap className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Service</h3>
              <p className="text-muted-foreground">
                Dedicated to serving our clients with the same commitment we showed in military service.
              </p>
            </Card>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <div className="bg-muted/50 rounded-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Why Choose WNP?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Advantages of working with a veteran-owned business focused on transparency and quality
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">What You Get:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <div>
                      <div className="font-medium">Direct Access to Veterans</div>
                      <div className="text-sm text-muted-foreground">Work directly with experienced veteran professionals</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <div>
                      <div className="font-medium">Personal Attention</div>
                      <div className="text-sm text-muted-foreground">Focused approach ensuring quality for each client</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <div>
                      <div className="font-medium">Transparent Pricing</div>
                      <div className="text-sm text-muted-foreground">Hour-based contracts with detailed timesheet documentation</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <div>
                      <div className="font-medium">Military Reliability</div>
                      <div className="text-sm text-muted-foreground">Punctuality, accountability, and commitment to deadlines</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-secondary">What You Avoid:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <div>
                      <div className="font-medium">Hidden Costs</div>
                      <div className="text-sm text-muted-foreground">No surprise fees or scope creep charges</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <div>
                      <div className="font-medium">Account Managers</div>
                      <div className="text-sm text-muted-foreground">Direct communication with the people doing the work</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <div>
                      <div className="font-medium">Communication Issues</div>
                      <div className="text-sm text-muted-foreground">Clear, direct communication with veteran professionals</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✗</span>
                    <div>
                      <div className="font-medium">Rushed Work</div>
                      <div className="text-sm text-muted-foreground">Quality-focused approach over quantity</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-white rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Ready to Work with Veterans Who Deliver?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience transparent pricing, military reliability, and personal attention from a dedicated veteran-owned business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/ux-ui-design">Start with UX/UI Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};











// UPDATED ContactPage Component with Netlify Forms Integration
// Replace the existing ContactPage component in your App.jsx file (around line 1812-2000)

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your digital presence? Get in touch with our veteran-owned team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get Started Today</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card className="p-4 border-2 border-accent">
                <div className="text-center">
                  <Palette className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">UX/UI Design</h3>
                  <p className="text-sm text-muted-foreground mb-2">Professional design consultation</p>
                  <div className="text-lg font-bold text-accent">$255</div>
                  <div className="text-xs text-muted-foreground">3-step process</div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="text-center">
                  <Code className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Web Development</h3>
                  <p className="text-sm text-muted-foreground mb-2">Full website development</p>
                  <div className="text-lg font-bold text-primary">$85/hour</div>
                  <div className="text-xs text-muted-foreground">Transparent pricing</div>
                </div>
              </Card>
            </div>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">
                      Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">
                      There was an error sending your message. Please try again or contact us directly.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Netlify Form */}
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: 'none' }}>
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                >
                  <option value="">Select a service</option>
                  <option value="UX/UI Design Consultation ($255)">UX/UI Design Consultation ($255)</option>
                  <option value="Web Development (Hour-Based)">Web Development (Hour-Based)</option>
                  <option value="Cloud Hosting & Monthly Maintenance">Cloud Hosting & Monthly Maintenance</option>
                  <option value="VetTech Academy Training">VetTech Academy Training</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                >
                  <option value="">Select budget range</option>
                  <option value="Under $1,000">Under $1,000</option>
                  <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                  <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000+">$10,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                >
                  <option value="">Select timeline</option>
                  <option value="ASAP (Rush Job)">ASAP (Rush Job)</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6+ months">6+ months</option>
                  <option value="Just exploring options">Just exploring options</option>
                </select>
              </div>

              <div>
                <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  rows={4}
                  required
                  placeholder="Tell us about your project goals, specific requirements, current website (if any), target audience, and any other relevant details..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                ></textarea>
              </div>

              <div>
                <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about us?
                </label>
                <select
                  id="referral"
                  name="referral"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                >
                  <option value="">Select source</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Referral from friend/colleague">Referral from friend/colleague</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Veteran Network">Veteran Network</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                <p>Or contact us directly:</p>
                <p>Email: <a href="mailto:dankadouken2222@gmail.com" className="text-primary hover:underline">dankadouken2222@gmail.com</a></p>
                <p>Phone: <a href="tel:254-350-9369" className="text-primary hover:underline">254-350-9369</a></p>
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:dankadouken2222@gmail.com" className="hover:underline">dankadouken2222@gmail.com</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:254-350-9369" className="hover:underline">254-350-9369</a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Dallas, Texas</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>Monday - Friday: 9:00 AM - 6:00 PM CST</div>
                <div>Saturday: 10:00 AM - 4:00 PM CST</div>
                <div>Sunday: Closed</div>
                <div className="text-primary font-medium">Response within 24 hours</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Why Choose WNP?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Veteran-Owned & Operated</div>
                    <div className="text-sm text-muted-foreground">Military discipline and accountability in every project</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <DollarSign className="h-5 w-5 text-accent mt-1" />
                  <div>
                    <div className="font-medium">Transparent Pricing</div>
                    <div className="text-sm text-muted-foreground">Hour-based contracts with detailed timesheet documentation</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-secondary mt-1" />
                  <div>
                    <div className="font-medium">Quality Over Quantity</div>
                    <div className="text-sm text-muted-foreground">Focused approach ensuring excellence for each client</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Quick Response Guarantee</h4>
              <p className="text-sm text-muted-foreground mb-3">
                We respond to all inquiries within 24 hours during business days. For urgent requests, call us directly.
              </p>
              <div className="text-xs text-muted-foreground">
                <p>✓ Free initial consultation</p>
                <p>✓ No obligation project assessment</p>
                <p>✓ Transparent pricing discussion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




// Main App Component - UPDATED with new routing
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/web-development" element={<WebDevelopmentPage />} />
          <Route path="/ux-ui-design" element={<UXUIDesignPage />} />
          <Route path="/cloud-hosting" element={<CloudHostingPage />} />
          <Route path="/vettech-academy" element={<VetTechAcademyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;