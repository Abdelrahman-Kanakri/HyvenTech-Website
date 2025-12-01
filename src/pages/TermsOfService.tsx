import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 pt-48 pb-32 flex-grow max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service & Copyright</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Copyright Notice</h2>
            <p className="font-semibold text-foreground">All Rights Reserved © 2025 HyvenTech LLC.</p>
            <p>
              All content included on this site or within our software, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software (including our accounting systems and AI solutions), is the property of HyvenTech and is protected by local and international copyright laws.
            </p>
            <p>
              Strictly prohibited is the reproduction, distribution, display, or transmission of the content of this site or our software without the prior written permission of the company management.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Terms of Service / Use</h2>
            <p className="mb-4">Please read these terms carefully before using our services or purchasing our products.</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground">Acceptance of Terms</h3>
                <p>By using our website or purchasing any of our software (Accounting or Mobile Apps) or hardware, you agree to be bound by these terms.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-foreground">Software Licenses</h3>
                <p>When you purchase one of our accounting systems, we grant you a non-exclusive, non-transferable license to use the software for its intended purpose. You may not resell the software or reverse-engineer the source code.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground">Custom Development</h3>
                <p>Software developed "on-demand" is subject to separate contracts that define intellectual property rights and agreed-upon delivery schedules.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground">Hardware</h3>
                <p>We warrant that the barcode devices and accessories sold are free from manufacturing defects and are subject to the warranty policy attached to the invoice.</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground">Limitation of Liability</h3>
                <p>While HyvenTech strives to ensure the accuracy of its software, we are not liable for human errors in data entry by the client or misuse of the system.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
