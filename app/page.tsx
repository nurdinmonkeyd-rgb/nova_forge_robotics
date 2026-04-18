import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Zap, Activity, Factory, Home, CheckCircle, MessageSquare, HelpCircle, Star } from "lucide-react";

export default function NovaForgeHome() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 relative overflow-hidden pb-12">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>
      
      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center border-b border-white/5 z-10 py-20 lg:py-0">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="var(--primary)"
        />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="flex flex-col space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center space-x-3 bg-white/5 rounded-full px-5 py-2 w-fit glass">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm uppercase tracking-widest font-semibold text-gray-300">Next-Gen Autonomous Systems</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight">
              Nova Forge<br /><span className="text-primary">Robotics</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl leading-relaxed">
              We build advanced humanoid robots for home and industry. Accelerating the transition to an automated future with intelligent, safe, and versatile machines.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="w-full sm:w-auto px-10 py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/90 transition-all duration-300 shadow-[0_0_30px_rgba(192,132,252,0.4)] hover:shadow-[0_0_40px_rgba(192,132,252,0.6)] hover:-translate-y-1 text-lg">
                Pre-order Nexus-1
              </button>
              <button className="w-full sm:w-auto px-10 py-4 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 text-lg">
                View Specifications
              </button>
            </div>
          </div>
          
          <div className="h-[500px] lg:h-[700px] w-full relative group order-1 lg:order-2">
            <div className="absolute inset-20 bg-primary/20 blur-[120px] rounded-full group-hover:bg-primary/30 transition-all duration-700"></div>
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full relative z-10 cursor-grab"
            />
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <section className="py-24 container mx-auto px-6 lg:px-12 relative z-10 border-b border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Unmatched Capabilities</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Engineered to seamlessly integrate into any environment, from living rooms to factory floors.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover:border-primary/50 hover:-translate-y-2">
            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <Home className="w-8 h-8" />
              </div>
              <CardTitle>Home Assistance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Handles chores, organizes items, and prepares meals safely around humans and pets. Capable of carrying up to 45 lbs seamlessly.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="hover:border-primary/50 hover:-translate-y-2">
            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <Factory className="w-8 h-8" />
              </div>
              <CardTitle>Manufacturing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Precision object manipulation, repetitive task automation, and dynamic pathfinding in complex warehouse environments.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="hover:border-primary/50 hover:-translate-y-2">
            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <Activity className="w-8 h-8" />
              </div>
              <CardTitle>Healthcare Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Assists with patient mobility, sanitizes equipment, and manages logistics so medical professionals can focus on care.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tech Specs Section */}
      <section className="py-24 container mx-auto px-6 lg:px-12 relative z-10 border-b border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Core Specifications</h2>
            <p className="text-xl text-muted-foreground mb-8">Built with aerospace-grade materials and powered by our proprietary Neural Forge AI.</p>
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Cpu className="w-10 h-10" />
            </div>
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-8 hover:border-primary/50 transition-all hover:-translate-y-1">
              <h3 className="text-xl font-bold text-primary mb-3">Neural Engine</h3>
              <p className="text-muted-foreground leading-relaxed">10 PetaFLOPS of onboard compute for real-time physics and visual processing.</p>
            </Card>
            <Card className="p-8 hover:border-primary/50 transition-all hover:-translate-y-1">
              <h3 className="text-xl font-bold text-primary mb-3">Actuation Systems</h3>
              <p className="text-muted-foreground leading-relaxed">28 degrees of freedom in hands, capable of lifting fragile objects and 20kg loads.</p>
            </Card>
            <Card className="p-8 hover:border-primary/50 transition-all hover:-translate-y-1">
              <h3 className="text-xl font-bold text-primary mb-3">Battery Life</h3>
              <p className="text-muted-foreground leading-relaxed">High-density solid-state battery providing 16 hours of continuous operation.</p>
            </Card>
            <Card className="p-8 hover:border-primary/50 transition-all hover:-translate-y-1">
              <h3 className="text-xl font-bold text-primary mb-3">Safety & Vision</h3>
              <p className="text-muted-foreground leading-relaxed">8x LiDAR sensors and 360-degree optical cameras with collision avoidance.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages & Pricing */}
      <section className="py-24 container mx-auto px-6 lg:px-12 relative z-10 border-b border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Deploy Nova Forge</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Select the model that fits your operational needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="relative overflow-hidden hover:border-primary/50 transition-all duration-300">
            <CardHeader className="text-center pb-6 pt-10">
              <CardTitle className="text-3xl font-bold mb-2">Consumer Edition</CardTitle>
              <div className="text-5xl font-extrabold text-primary my-4">$19,999</div>
              <CardDescription className="text-lg">Perfect for home assistance and daily tasks.</CardDescription>
            </CardHeader>
            <CardContent className="px-10 pb-10">
              <ul className="space-y-5">
                <li className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg text-gray-300">Standard Neural AI Model</span>
                </li>
                <li className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg text-gray-300">Household task automation</span>
                </li>
                <li className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg text-gray-300">3-Year Consumer Warranty</span>
                </li>
              </ul>
              <button className="w-full mt-10 px-6 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-all text-lg">Reserve Now</button>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-primary/40 bg-primary/5 hover:border-primary shadow-[0_0_30px_rgba(192,132,252,0.15)] transition-all duration-300 scale-100 md:scale-105 z-10">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <CardHeader className="text-center pb-6 pt-10">
              <div className="inline-block bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">Enterprise Choice</div>
              <CardTitle className="text-3xl font-bold mb-2">Industrial Pro</CardTitle>
              <div className="text-5xl font-extrabold text-primary my-4">$35,000</div>
              <CardDescription className="text-lg">For heavy-duty manufacturing and logistics.</CardDescription>
            </CardHeader>
            <CardContent className="px-10 pb-10">
              <ul className="space-y-5">
                <li className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg text-gray-300">Advanced Fleet Management API</span>
                </li>
                <li className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg text-gray-300">Reinforced Titanium Actuators</span>
                </li>
                <li className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg text-gray-300">24/7 Priority Support & Maintenance</span>
                </li>
              </ul>
              <button className="w-full mt-10 px-6 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(192,132,252,0.3)] text-lg">Contact Sales</button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials & FAQ Grid */}
      <section className="py-24 container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Testimonials */}
          <div>
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Partner Feedback</h2>
            </div>
            <div className="space-y-6">
              <Card className="p-8 hover:border-primary/30 transition-all">
                <div className="flex space-x-1 mb-6">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                </div>
                <p className="text-xl italic text-gray-300 mb-6 leading-relaxed">"Integrating Nova Forge units into our logistics pipeline increased efficiency by 40%. They run 24/7 and adapt to dynamic warehouse changes instantly."</p>
                <p className="text-base font-bold text-primary tracking-wide uppercase">— Global Freight Systems</p>
              </Card>
              <Card className="p-8 hover:border-primary/30 transition-all">
                <div className="flex space-x-1 mb-6">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                </div>
                <p className="text-xl italic text-gray-300 mb-6 leading-relaxed">"The consumer model has changed my family's life. From folding laundry to preparing dinner, the software is surprisingly intuitive and safe."</p>
                <p className="text-base font-bold text-primary tracking-wide uppercase">— Sarah Jenkins, Early Adopter</p>
              </Card>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">System FAQ</h2>
            </div>
            <div className="space-y-6">
              <Card className="p-8 border-white/5 hover:border-primary/20 transition-all">
                <h3 className="text-xl font-bold mb-3 text-white">How safe is the technology?</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">Safety is our core foundation. The AI is hard-coded with collision avoidance and force-limitation parameters. If human contact is detected, actuators immediately yield.</p>
              </Card>
              <Card className="p-8 border-white/5 hover:border-primary/20 transition-all">
                <h3 className="text-xl font-bold mb-3 text-white">Does the robot require internet access?</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">For core operations, no. The 10 PetaFLOP neural engine runs locally. However, over-the-air (OTA) updates and advanced fleet management require Wi-Fi or 5G connectivity.</p>
              </Card>
              <Card className="p-8 border-white/5 hover:border-primary/20 transition-all">
                <h3 className="text-xl font-bold mb-3 text-white">When will the consumer edition be available?</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">We are currently in limited beta. Mass production for consumer models is scheduled to begin in Q3 2026, with pre-orders shipping shortly after.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
