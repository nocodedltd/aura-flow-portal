
import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <main className="pt-32 pb-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg dark:prose-invert mx-auto max-w-4xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="text-muted-foreground mb-8">
            <p>Last updated: 28 April 2025</p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              NoCoded Ltd ("we," "our," or "us") operates the website nocoded.co.uk (the "Site"). 
              This page informs you of our policies regarding the collection, use, and disclosure of 
              Personal Information we receive from users of the Site.
            </p>
            <p>
              We are committed to protecting your personal information and your right to privacy. 
              If you have any questions or concerns about this privacy policy or our practices with 
              regard to your personal information, please contact us at info@nocoded.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information Collection and Use</h2>
            <p>
              We collect several types of information for various purposes to provide and improve our 
              service to you.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Types of Data Collected:</h3>
            <p><strong>Personal Data</strong>: When you contact us through our form, we collect:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number (optional)</li>
              <li>Company name (optional)</li>
              <li>Message content</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3">Use of Data:</h3>
            <ul>
              <li>To respond to your enquiries</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Data Retention</h2>
            <p>
              We will retain your Personal Data only for as long as is necessary for the purposes set out 
              in this Privacy Policy. We will retain and use your Personal Data to the extent necessary 
              to comply with our legal obligations (for example, if we are required to retain your data 
              to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Transfer of Data</h2>
            <p>
              Your information, including Personal Data, may be transferred to — and maintained on — 
              computers located outside of your county, district, country or other governmental jurisdiction 
              where the data protection laws may differ from those of your jurisdiction.
            </p>
            <p>
              If you are located outside the United Kingdom and choose to provide information to us, please 
              note that we transfer the data, including Personal Data, to the United Kingdom and process it there.
            </p>
            <p>
              Your consent to this Privacy Policy followed by your submission of such information represents 
              your agreement to that transfer.
            </p>
            <p>
              NoCoded Ltd will take all the steps reasonably necessary to ensure that your data is treated 
              securely and in accordance with this Privacy Policy and no transfer of your Personal Data will 
              take place to an organisation or a country unless there are adequate controls in place including 
              the security of your data and other personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Disclosure of Data</h2>
            <p>
              We may disclose your Personal Data in the good faith belief that such action is necessary to:
            </p>
            <ul>
              <li>Comply with a legal obligation</li>
              <li>Protect and defend the rights or property of NoCoded Ltd</li>
              <li>Prevent or investigate possible wrongdoing in connection with the service</li>
              <li>Protect the personal safety of users of the service or the public</li>
              <li>Protect against legal liability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Security of Data</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over 
              the Internet or method of electronic storage is 100% secure. While we strive to use commercially 
              acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Your Data Protection Rights Under the General Data Protection Regulation (GDPR)</h2>
            <p>
              If you are a resident of the European Economic Area (EEA), you have certain data protection rights. 
              NoCoded Ltd aims to take reasonable steps to allow you to correct, amend, delete or limit the use 
              of your Personal Data.
            </p>
            <p>You have the following data protection rights:</p>
            <ul>
              <li><strong>The right to access, update or delete</strong> the information we have on you.</li>
              <li><strong>The right of rectification.</strong> You have the right to have your information rectified if that information is inaccurate or incomplete.</li>
              <li><strong>The right to object.</strong> You have the right to object to our processing of your Personal Data.</li>
              <li><strong>The right of restriction.</strong> You have the right to request that we restrict the processing of your personal information.</li>
              <li><strong>The right to data portability.</strong> You have the right to be provided with a copy of the information we have on you in a structured, machine-readable and commonly used format.</li>
              <li><strong>The right to withdraw consent.</strong> You also have the right to withdraw your consent at any time where NoCoded Ltd relied on your consent to process your personal information.</li>
            </ul>
            <p>
              Please note that we may ask you to verify your identity before responding to such requests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Cookies</h2>
            <p>
              Cookies are files with a small amount of data which may include an anonymous unique identifier. 
              Cookies are sent to your browser from a website and stored on your device. We use "cookies" to 
              collect information. You can instruct your browser to refuse all cookies or to indicate when a 
              cookie is being sent. However, if you do not accept cookies, you may not be able to use some 
              portions of our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page.
            </p>
            <p>
              We will let you know via a prominent notice on our service, prior to the change becoming effective 
              and update the "Last updated" date at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy 
              Policy are effective when they are posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li><strong>By email</strong>: info@nocoded.com</li>
              <li>
                <strong>By post</strong>:<br />
                NoCoded Ltd<br />
                Studio 37 Fruitworks Coworking<br />
                1–2 Jewry Lane<br />
                Canterbury<br />
                CT1 2NP<br />
                United Kingdom
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <p className="text-sm text-muted-foreground">
              NoCoded Ltd is registered in England and Wales under company number 15625774.
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
