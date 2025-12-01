import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 pt-48 pb-32 flex-grow max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <p>
              At HyvenTech, we are committed to protecting the privacy of our clients and visitors. This policy outlines how we collect, use, and protect your personal information and financial data processed through our systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information Collection</h2>
            <p>
              We collect information that you provide directly to us when purchasing our accounting systems, requesting custom software development, or contacting us for social media solutions. This may include your name, email address, phone number, and company details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Use of Information</h2>
            <p>We use the information to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Install and activate software licenses.</li>
              <li>Provide technical support and maintenance for both hardware and software.</li>
              <li>Develop and improve AI algorithms (using anonymized data) to better serve the market.</li>
              <li>Communicate with you regarding updates or new offers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Protection</h2>
            <p>
              We understand the sensitivity of accounting and financial data; therefore, we implement strict security measures to protect your data from unauthorized access, alteration, or disclosure.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
