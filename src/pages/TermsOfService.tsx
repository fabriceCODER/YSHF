import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold font-display text-foreground mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-sm text-muted-foreground mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the YouthServe Humanity Foundation ("YSHF") website and services, 
                you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by these terms, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
              <p>
                YSHF provides humanitarian services including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Volunteer coordination and management</li>
                <li>Donation processing and management</li>
                <li>Educational and outreach programs</li>
                <li>Community development initiatives</li>
                <li>Information and resources about our programs</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
              <p>As a user of our services, you agree to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide accurate and truthful information</li>
                <li>Maintain the confidentiality of your account information</li>
                <li>Use our services only for lawful purposes</li>
                <li>Respect the rights and dignity of all individuals</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not interfere with the proper functioning of our services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Volunteer Terms</h2>
              <p>Volunteers agree to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Complete required training and orientation programs</li>
                <li>Maintain professional conduct at all times</li>
                <li>Respect beneficiary confidentiality and dignity</li>
                <li>Follow all safety protocols and guidelines</li>
                <li>Report any incidents or concerns immediately</li>
                <li>Commit to agreed-upon volunteer schedules and duties</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Donation Terms</h2>
              <p>Regarding donations:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>All donations are final and non-refundable unless required by law</li>
                <li>Donations will be used to further YSHF's charitable purposes</li>
                <li>Donors will receive acknowledgment receipts for tax purposes where applicable</li>
                <li>YSHF reserves the right to use donations where the need is greatest</li>
                <li>Recurring donations can be cancelled at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, images, and software, 
                is the property of YSHF or its content suppliers and is protected by international 
                copyright laws. You may not reproduce, distribute, or create derivative works without 
                express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Privacy and Data Protection</h2>
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which also governs 
                your use of our services, to understand our practices regarding the collection and 
                use of your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Disclaimers and Limitation of Liability</h2>
              <p>
                YSHF provides services on an "as is" basis. We make no warranties, expressed or implied, 
                and hereby disclaim all other warranties including, without limitation, implied warranties 
                of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
              <p className="mt-4">
                YSHF shall not be liable for any damages of any kind arising from the use of our services, 
                including but not limited to direct, indirect, incidental, punitive, and consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless YSHF, its officers, directors, employees, 
                and volunteers from any claim or demand made by any third party due to or arising 
                out of your use of our services or violation of these Terms of Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Termination</h2>
              <p>
                YSHF may terminate or suspend your access to our services immediately, without prior 
                notice or liability, for any reason whatsoever, including breach of these Terms of Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Governing Law</h2>
              <p>
                These Terms of Service shall be interpreted and governed by the laws of Rwanda. 
                Any disputes relating to these terms will be subject to the exclusive jurisdiction 
                of the courts of Rwanda.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to Terms</h2>
              <p>
                YSHF reserves the right to modify these Terms of Service at any time. We will notify 
                users of any material changes by posting the new terms on our website. Your continued 
                use of our services after such modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <div className="bg-muted p-6 rounded-lg mt-4">
                <p><strong>YouthServe Humanity Foundation</strong></p>
                <p>Email: legal@yshf.org</p>
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

export default TermsOfService;