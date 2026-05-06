import type { Metadata } from 'next';
import { generateBreadcrumbSchema, SITE_NAME, SITE_URL, CONTACT_EMAIL } from '@/lib/seo-helpers';

export const metadata: Metadata = {
  title: `Terms of Service | ${SITE_NAME}`,
  description: 'Read the T-blogs Terms of Service. Understand the rules for using our website, our content ownership policy, and limitations of liability.',
  alternates: { canonical: `${SITE_URL}/terms-of-service` },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Terms of Service', href: '/terms-of-service' },
]);

const LAST_UPDATED = 'May 6, 2026';

export default function TermsOfServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div style={{ width: '100%' }}>
        {/* Hero */}
        <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-light)', padding: '56px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-orange)', fontFamily: 'var(--font-body)', marginBottom: '12px' }}>Legal</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--ink-primary)', marginBottom: '12px', letterSpacing: '-0.03em' }}>
              Terms of Service
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--ink-tertiary)' }}>
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </section>

        <article style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 24px 96px', fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--ink-secondary)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '24px' }}>
            By accessing or using {SITE_NAME} at {SITE_URL} (the &ldquo;Site&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree with these Terms, please do not use the Site.
          </p>

          {[
            {
              heading: '1. Use of the Site',
              content: (
                <>
                  <p style={{ marginBottom: '12px' }}>The Site is provided for informational and educational purposes. You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of others.</p>
                  <p><strong>You must not:</strong></p>
                  <ul style={{ paddingLeft: '24px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <li>Use the Site in any way that violates applicable local, national, or international laws or regulations.</li>
                    <li>Reproduce, redistribute, or republish content from the Site without prior written permission.</li>
                    <li>Attempt to gain unauthorised access to any part of the Site or its infrastructure.</li>
                    <li>Use automated tools to scrape content in bulk without permission.</li>
                  </ul>
                </>
              ),
            },
            {
              heading: '2. Intellectual Property',
              content: (
                <>
                  <p style={{ marginBottom: '12px' }}>All content on the Site — including articles, text, graphics, logos, and design elements — is the property of {SITE_NAME} and its contributors, protected under applicable copyright and intellectual property laws.</p>
                  <p>You may share links to our content and quote brief excerpts (up to 50 words) with proper attribution and a link back to the original article. Any other use requires prior written permission from us.</p>
                </>
              ),
            },
            {
              heading: '3. Disclaimer of Warranties',
              content: (
                <p>The Site and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
              ),
            },
            {
              heading: '4. Accuracy of Information',
              content: (
                <p>We make every effort to ensure the accuracy of the information published on the Site, but we cannot guarantee that all information is complete, accurate, or current. Technical content — particularly around rapidly evolving fields like artificial intelligence — may become outdated. Always verify critical information through primary sources before making decisions based on it.</p>
              ),
            },
            {
              heading: '5. Limitation of Liability',
              content: (
                <p>To the fullest extent permitted by law, {SITE_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Site, even if we have been advised of the possibility of such damages. Our total liability to you for any claim arising under these Terms shall not exceed USD $100.</p>
              ),
            },
            {
              heading: '6. Third-Party Links and Advertising',
              content: (
                <>
                  <p style={{ marginBottom: '12px' }}>The Site may contain links to third-party websites and display advertisements through Google AdSense. We are not responsible for the content, accuracy, or privacy practices of third-party sites or advertisers.</p>
                  <p>Clicking on advertisements or third-party links is at your own risk. We recommend reviewing the terms and privacy policies of any third-party site you visit.</p>
                </>
              ),
            },
            {
              heading: '7. User Comments and Submissions',
              content: (
                <p>If you contact us with feedback, suggestions, or ideas, you grant us a non-exclusive, royalty-free licence to use, reproduce, and publish that content in any form. We will not share your personal contact information publicly without your permission.</p>
              ),
            },
            {
              heading: '8. Modifications to the Site or Terms',
              content: (
                <p>We reserve the right to modify the Site, discontinue any feature, or update these Terms at any time without prior notice. Updated Terms will be posted on this page with a revised &ldquo;Last updated&rdquo; date. Continued use of the Site after any changes constitutes your acceptance of the updated Terms.</p>
              ),
            },
            {
              heading: '9. Governing Law',
              content: (
                <p>These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the relevant courts.</p>
              ),
            },
            {
              heading: '10. Contact',
              content: (
                <p>For questions about these Terms, contact us at <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--accent-orange)' }}>{CONTACT_EMAIL}</a>.</p>
              ),
            },
          ].map((section) => (
            <section key={section.heading} style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--ink-primary)', marginBottom: '16px', paddingBottom: '10px', borderBottom: '1px solid var(--border-light)' }}>
                {section.heading}
              </h2>
              {section.content}
            </section>
          ))}
        </article>
      </div>
    </>
  );
}
