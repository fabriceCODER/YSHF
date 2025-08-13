import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold font-display text-foreground mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-sm text-muted-foreground mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Cookies</h2>
              <p>
                YouthServe Humanity Foundation ("YSHF") uses cookies to enhance your experience on our website. 
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>To remember your preferences and settings</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To improve website functionality and user experience</li>
                <li>To provide personalized content and advertisements</li>
                <li>To ensure website security and prevent fraud</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3">Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable basic functions 
                like page navigation and access to secure areas of the website.
              </p>

              <h3 className="text-xl font-medium text-foreground mb-3">Performance Cookies</h3>
              <p>
                These cookies collect information about how visitors use our website, such as which pages are 
                visited most often and if users get error messages from web pages.
              </p>

              <h3 className="text-xl font-medium text-foreground mb-3">Functionality Cookies</h3>
              <p>
                These cookies allow the website to remember choices you make and provide enhanced, 
                more personal features.
              </p>

              <h3 className="text-xl font-medium text-foreground mb-3">Targeting Cookies</h3>
              <p>
                These cookies are used to deliver advertisements more relevant to you and your interests. 
                They may be set by us or by third-party providers whose services we have added to our pages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Third-Party Cookies</h2>
              <p>We may also use third-party services that place cookies on your device, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                <li><strong>Payment Processors:</strong> To facilitate secure donation transactions</li>
                <li><strong>Email Marketing Services:</strong> To manage newsletter subscriptions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Managing Your Cookie Preferences</h2>
              <p>You can control and manage cookies in several ways:</p>
              
              <h3 className="text-xl font-medium text-foreground mb-3">Browser Settings</h3>
              <p>
                Most browsers allow you to view, manage, and delete cookies. You can usually find these 
                options in your browser's "Settings" or "Preferences" menu.
              </p>

              <h3 className="text-xl font-medium text-foreground mb-3">Opt-Out Tools</h3>
              <p>
                For advertising cookies, you can opt out through industry opt-out tools such as:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Digital Advertising Alliance (DAA) opt-out page</li>
                <li>Network Advertising Initiative (NAI) opt-out page</li>
                <li>European Interactive Digital Advertising Alliance (EDAA) opt-out page</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookie Retention</h2>
              <p>Cookies are stored on your device for different lengths of time:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them</li>
                <li><strong>Third-Party Cookies:</strong> Retention periods vary by provider</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Impact of Disabling Cookies</h2>
              <p>
                If you choose to disable cookies, some features of our website may not function properly:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>You may need to re-enter information more frequently</li>
                <li>Some personalized features may not be available</li>
                <li>Website performance tracking will be limited</li>
                <li>Certain interactive features may not work correctly</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Updates to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. Please revisit this page 
                periodically to stay informed about our use of cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Your Consent</h2>
              <p>
                By continuing to use our website, you consent to our use of cookies as described in 
                this Cookie Policy. You can withdraw your consent at any time by adjusting your 
                browser settings or contacting us directly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="bg-muted p-6 rounded-lg mt-4">
                <p><strong>YouthServe Humanity Foundation</strong></p>
                <p>Email: privacy@yshf.org</p>
                <p>Phone: +250 788 123 450</p>
                <p>Address: Bukure Sector, Rutsiro District, Western Province, Rwanda</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicy;