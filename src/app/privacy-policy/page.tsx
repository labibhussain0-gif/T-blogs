import type { Metadata } from 'next';
import { generateBreadcrumbSchema, SITE_NAME, SITE_URL, CONTACT_EMAIL } from '@/lib/seo-helpers';

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: 'Read the T-blogs Privacy Policy. Learn how we collect, use, and protect your data, including information about Google AdSense and third-party cookies.',
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', href: '/' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
]);

const LAST_UPDATED = 'May 6, 2026';

export default function PrivacyPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div style={{ width: '100%' }}>
        {/* Hero */}
        <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border-light)', padding: '56px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <span style={{ display: 'inline-block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-orange)', fontFamily: 'var(--font-body)', marginBottom: '12px' }}>Legal</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--ink-primary)', marginBottom: '12px', letterSpacing: '-0.03em' }}>
              Privacy Policy
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--ink-tertiary)' }}>
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </section>

        {/* Content */}
        <article style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 24px 96px', fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--ink-secondary)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '24px' }}>
            This Privacy Policy describes how {SITE_NAME} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and protects information when you visit our website at {SITE_URL} (the &ldquo;Site&rdquo;). By using the Site, you agree to the collection and use of information in accordance with this policy.
          </p>

          {[
            {
              heading: '1. Information We Collect',
              content: (
                <>
                  <p style={{ marginBottom: '12px' }}><strong>Automatically Collected Information:</strong> When you visit the Site, we may automatically collect certain information about your device and browsing behaviour, including your IP address, browser type, operating system, referring URLs, pages viewed, and the time and date of your visit. This information is collected via third-party analytics tools.</p>
                  <p><strong>Information You Provide:</strong> If you contact us via email, we collect the information you include in your message, such as your name and email address. We do not operate user accounts, forms requiring personal data, or comment sections that store data on our servers.</p>
                </>
              ),
            },
            {
              heading: '2. Cookies and Tracking Technologies',
              content: (
                <>
                  <p style={{ marginBottom: '12px' }}>We use cookies and similar tracking technologies to improve your experience on the Site. Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
                  <p><strong>Types of cookies we use:</strong></p>
                  <ul style={{ paddingLeft: '24px', marginTop: '8px', marginBottom: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <li><strong>Analytics cookies:</strong> Used to understand how visitors interact with the Site (e.g., Google Analytics).</li>
                    <li><strong>Advertising cookies:</strong> Used to serve relevant advertisements through Google AdSense (see Section 4).</li>
                    <li><strong>Preference cookies:</strong> Used to remember your preferences and settings.</li>
                  </ul>
                </>
              ),
            },
            {
              heading: '3. How We Use Your Information',
              content: (
                <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <li>To analyse site traffic and improve the quality and relevance of our content.</li>
                  <li>To serve targeted advertisements through Google AdSense.</li>
                  <li>To respond to inquiries or feedback you send us via email.</li>
                  <li>To monitor and prevent technical issues or abuse.</li>
                </ul>
              ),
            },
            {
              heading: '4. Google AdSense and Third-Party Advertising',
              content: (
                <>
                  <p style={{ marginBottom: '12px' }}>We use Google AdSense to display advertisements on the Site. Google AdSense uses cookies to serve ads based on your prior visits to our Site and other websites on the internet. Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.</p>
                  <p style={{ marginBottom: '12px' }}>You may opt out of personalised advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-orange)' }}>Google Ads Settings</a>, or by visiting <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-orange)' }}>aboutads.info</a>.</p>
                  <p>Google&apos;s privacy policy is available at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-orange)' }}>policies.google.com/privacy</a>.</p>
                </>
              ),
            },
            {
              heading: '5. Third-Party Links',
              content: <p>The Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to read the privacy policy of every website you visit.</p>,
            },
            {
              heading: '6. Data Retention',
              content: <p>We retain analytics data in aggregate form only and do not store personally identifiable information on our servers unless you contact us via email, in which case we retain your message for as long as necessary to respond to your inquiry.</p>,
            },
            {
              heading: '7. Your Rights',
              content: (
                <>
                  <p style={{ marginBottom: '12px' }}>Depending on your location, you may have the right to access, correct, or delete personal data we hold about you. To exercise these rights, contact us at <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--accent-orange)' }}>{CONTACT_EMAIL}</a>.</p>
                  <p>If you are located in the European Economic Area, you have additional rights under the GDPR, including the right to data portability and the right to lodge a complaint with a supervisory authority.</p>
                </>
              ),
            },
            {
              heading: '8. Children\'s Privacy',
              content: <p>The Site is not directed to children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.</p>,
            },
            {
              heading: '9. Changes to This Policy',
              content: <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. Continued use of the Site after any changes constitutes your acceptance of the updated policy.</p>,
            },
            {
              heading: '10. Contact Us',
              content: <p>If you have questions about this Privacy Policy, please contact us at <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--accent-orange)' }}>{CONTACT_EMAIL}</a>.</p>,
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
