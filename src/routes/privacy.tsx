import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Tha Fix" },
      { name: "description", content: "How Tha Fix handles your data and privacy." },
      { property: "og:title", content: "Privacy Policy" },
      { property: "og:description", content: "How Tha Fix handles your data and privacy." },
    ],
  }),
  component: PrivacyPage,
});

function H2({ children }: { children: ReactNode }) {
  return <h2 className="font-display text-2xl font-bold mt-10">{children}</h2>;
}
function H3({ children }: { children: ReactNode }) {
  return <h3 className="font-display text-xl font-bold mt-8">{children}</h3>;
}
function P({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}
function UL({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-6 space-y-1">{children}</ul>;
}

function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-4 text-foreground/80 leading-relaxed">
          <p className="font-bold leading-tight">
            Effective Date: July 19, 2026
            <br />
            Last Updated: July 19, 2026
          </p>

          <P>
            Back To Marketing LLC operates Tha Fix and the website located at <strong>thafix502.com</strong>. In this Privacy Policy, “Tha Fix,” “we,” “us,” and “our” refer to Back To Marketing LLC in its operation of Tha Fix.
          </P>
          <P>This Privacy Policy explains how we collect, use, disclose, store, and protect personal information when you:</P>
          <UL>
            <li>Visit thafix502.com;</li>
            <li>Create or use an account;</li>
            <li>Purchase a membership;</li>
            <li>Purchase merchandise;</li>
            <li>Make a voluntary support payment, gift, or tip;</li>
            <li>Register for a future event;</li>
            <li>Submit a form;</li>
            <li>Subscribe to emails;</li>
            <li>Post a blog comment;</li>
            <li>Create or maintain a public profile;</li>
            <li>Appear as a host, guest, Founder, member, sponsor, or other featured participant;</li>
            <li>Communicate or otherwise interact with Tha Fix.</li>
          </UL>
          <P>By using the website, you acknowledge the practices described in this Privacy Policy.</P>

          <H2>1. Information We Collect</H2>
          <P>The information we collect depends on how you use Tha Fix.</P>

          <H3>A. Information You Provide Through Forms</H3>
          <P>When you complete a form, we may collect:</P>
          <UL>
            <li>Name;</li>
            <li>Email address;</li>
            <li>Telephone number;</li>
            <li>Business or organization name;</li>
            <li>Social-media usernames or profile links;</li>
            <li>Website address;</li>
            <li>Inquiry type;</li>
            <li>Subject and message;</li>
            <li>Guest pitch or interview information;</li>
            <li>Sponsor or advertising inquiry information;</li>
            <li>Newsletter preferences;</li>
            <li>Event-registration information;</li>
            <li>Questions or topics submitted for consideration;</li>
            <li>Files, images, or other materials you voluntarily upload;</li>
            <li>Any other information you choose to provide.</li>
          </UL>
          <P>Please do not submit sensitive personal information that we have not requested.</P>

          <H3>B. Account and Profile Information</H3>
          <P>When you create or use an account, we may collect:</P>
          <P>Name; Email address; Username; Password or authentication credentials; Display name or screen name; Profile photograph; Biography; Business name; Website; Social-media links; Membership tier; Membership status; Account preferences; Communication preferences; Account-creation and login information; Records of benefits, permissions, and access; Information you choose to make public.</P>
          <P>Passwords and authentication credentials may be processed through Supabase or another approved authentication provider. We do not intend to store passwords in readable form.</P>
          <P>Accounts, memberships, purchases, and comments are limited to people who are at least 18 years old.</P>

          <H3>C. Public Profile Information</H3>
          <P>Some Tha Fix features are designed to publish information publicly.</P>
          <P>Depending on your relationship with Tha Fix and the information you submit or authorize, public information may include:</P>
          <UL>
            <li>Your name;</li>
            <li>A chosen display name or screen name;</li>
            <li>Profile photograph;</li>
            <li>Biography;</li>
            <li>Business or organization;</li>
            <li>Website;</li>
            <li>Social-media links;</li>
            <li>Guest profile;</li>
            <li>Host profile;</li>
            <li>Sponsor profile;</li>
            <li>Founder recognition;</li>
            <li>Published comments;</li>
            <li>Featured-member or business spotlight;</li>
            <li>Approved interview, episode, article, video, photograph, or other content.</li>
          </UL>
          <P>Guest profiles may contain publicly approved biographies, photographs, professional information, social links, and related Tha Fix content.</P>
          <P>Tha Fix may also publish a Founder-recognition page containing the names of people who joined through the limited Founder membership offer.</P>
          <P>Before submitting information for a public profile, you should understand that it may be visible to anyone, indexed by search engines after the website’s pre-launch indexing restrictions are removed, copied by others, and shared outside Tha Fix.</P>
          <P>Where appropriate, we will obtain authorization before publishing a guest profile, sponsor profile, Founder name, photograph, biography, or similar personal content.</P>

          <H3>D. Membership Information</H3>
          <P>When you enroll in or manage a paid membership, we may collect:</P>
          <UL>
            <li>Selected membership plan;</li>
            <li>First-wave or normal pricing eligibility;</li>
            <li>Enrollment date;</li>
            <li>Membership status;</li>
            <li>Billing status;</li>
            <li>Renewal date;</li>
            <li>Cancellation information;</li>
            <li>Access entitlements;</li>
            <li>Benefit usage;</li>
            <li>Merchandise-discount eligibility;</li>
            <li>Commenting eligibility;</li>
            <li>Community eligibility;</li>
            <li>Founder or Inner Circle status;</li>
            <li>Records necessary to enforce membership limits and existing-member terms.</li>
          </UL>
          <P>Payment-card information is processed by Stripe and is not intended to be stored directly by Tha Fix in complete form.</P>

          <H3>E. Merchandise and Order Information</H3>
          <P>When you purchase merchandise, we may collect:</P>
          <P>Name; Email address; Billing information; Shipping address; Product selections; Product size, color, and other variants; Quantity; Discount information; Order amount; Tax and shipping information; Order status; Fulfillment information; Shipment tracking; Return, replacement, and customer-service information.</P>
          <P>We provide information necessary to fulfill merchandise orders to Printful and relevant shipping providers.</P>

          <H3>F. Payment Information</H3>
          <P>Stripe may process card payments for:</P>
          <P>Paid memberships; Merchandise; Future event tickets; Voluntary card-based support payments, gifts, or tips; Other approved Tha Fix purchases.</P>
          <P>Payment information may include:</P>
          <P>Name; Email address; Billing address; Payment method; Transaction amount; Transaction date; Payment status; Limited payment-method details, such as card type and last four digits; Fraud-prevention and verification information.</P>
          <P>Stripe processes complete card details under its own terms and privacy practices. Tha Fix does not intend to directly receive or store complete payment-card numbers or card-security codes.</P>

          <H3>G. Alternative Support Methods</H3>
          <P>The Donate/Support page may provide information for supporting Tha Fix through:</P>
          <P>Cash App; Chime; Zelle; PayPal; Other approved payment services.</P>
          <P>When you use one of these services, the payment provider may collect information under its own privacy policy. Tha Fix may receive your name, username, email address, transaction amount, message, transaction identifier, and other information the payment service provides to recipients.</P>
          <P>Tha Fix is a for-profit business. Support payments are voluntary gifts or tips, are not charitable contributions, and are not tax-deductible. Unless expressly stated otherwise, making a support payment does not create a membership, purchase, sponsorship, or right to receive goods or services.</P>

          <H3>H. Event Information</H3>
          <P>If Tha Fix offers events in the future, we may collect:</P>
          <P>Attendee name; Email address; Telephone number; Ticket type; Payment and transaction information; Accessibility or accommodation requests; Event preferences; Check-in or attendance status; Information necessary to provide livestream or virtual-event access.</P>
          <P>Additional notices may be presented when you register for a particular event.</P>

          <H3>I. Blog Comments and Other User Content</H3>
          <P>Eligible paid members may be permitted to comment on blog posts.</P>
          <P>When you submit a comment, we may collect:</P>
          <UL>
            <li>Account identifier;</li>
            <li>Membership and eligibility status;</li>
            <li>Real name;</li>
            <li>Chosen display name or screen name;</li>
            <li>Comment text;</li>
            <li>Date and time;</li>
            <li>Associated blog post;</li>
            <li>IP address;</li>
            <li>Device or browser information;</li>
            <li>Moderation status;</li>
            <li>Reports or complaints;</li>
            <li>Records of moderation or account restrictions.</li>
          </UL>
          <P>Members may choose whether an eligible comment displays their real name or an approved screen name.</P>
          <P>Comments are public unless clearly identified otherwise. Do not include private, confidential, financial, medical, or other sensitive information in a public comment.</P>
          <P>Tha Fix may review, approve, reject, hide, remove, or preserve comments in accordance with its Terms of Use and Commenting and Community Guidelines.</P>

          <H3>J. Email Information</H3>
          <P>When you subscribe to emails, create an account, make a purchase, or otherwise communicate with Tha Fix, we may collect:</P>
          <UL>
            <li>Name;</li>
            <li>Email address;</li>
            <li>Subscription source;</li>
            <li>Email preferences;</li>
            <li>Consent records;</li>
            <li>Messages sent and received;</li>
            <li>Transactional-email history;</li>
            <li>Delivery status;</li>
            <li>Bounce or failure information;</li>
            <li>Open and click information, if enabled;</li>
            <li>Unsubscribe requests;</li>
            <li>Suppression-list status.</li>
          </UL>
          <P>Resend will be used to deliver transactional emails and may also be used for occasional newsletters and marketing communications.</P>

          <H3>K. Information Collected Automatically</H3>
          <P>When you visit or use the website, we and our service providers may automatically collect:</P>
          <UL>
            <li>IP address;</li>
            <li>Browser type and version;</li>
            <li>Device type;</li>
            <li>Operating system;</li>
            <li>Approximate geographic location;</li>
            <li>Referring website;</li>
            <li>Pages viewed;</li>
            <li>Links or buttons selected;</li>
            <li>Videos or content accessed;</li>
            <li>Date and time of access;</li>
            <li>Session duration;</li>
            <li>Website-performance information;</li>
            <li>Error and diagnostic information;</li>
            <li>Cookie identifiers;</li>
            <li>Account and session identifiers;</li>
            <li>Other usage information.</li>
          </UL>

          <H2>2. Cookies and Similar Technologies</H2>
          <P>Tha Fix may use cookies, local storage, pixels, tags, and similar technologies for:</P>
          <UL>
            <li>Authentication;</li>
            <li>Security;</li>
            <li>Session management;</li>
            <li>Remembering preferences;</li>
            <li>Shopping-cart functionality;</li>
            <li>Membership access;</li>
            <li>Website performance;</li>
            <li>Fraud prevention;</li>
            <li>Analytics;</li>
            <li>Email measurement.</li>
          </UL>
          <P>Some cookies are necessary for the website to function. Others, such as analytics cookies, help us understand how people use the website.</P>
          <P>You may be able to control cookies through the cookie-preference tool provided on the website and through your browser settings. Blocking necessary cookies may prevent certain features from working.</P>

          <H2>3. Google Analytics</H2>
          <P>Tha Fix intends to use Google Analytics to understand website traffic and usage.</P>
          <P>Google Analytics may collect information such as:</P>
          <UL>
            <li>Device and browser information;</li>
            <li>Approximate location;</li>
            <li>Pages viewed;</li>
            <li>Referring sources;</li>
            <li>Interactions with website features;</li>
            <li>Session and engagement information;</li>
            <li>Cookie or device identifiers.</li>
          </UL>
          <P>Google Analytics uses first-party cookies, including cookies that help distinguish users and sessions. Google may process analytics information according to its own privacy practices.</P>
          <P>Tha Fix does not initially intend to use Google Analytics data for targeted advertising, personalized advertising, or surveillance pricing.</P>
          <P>You may be able to limit Google Analytics through:</P>
          <P>The website’s cookie-preference controls; Your browser settings; Google’s Analytics Opt-out Browser Add-on; Other privacy tools supported by your browser or device.</P>
          <P>More information is available through the Google Privacy Policy and Google Analytics documentation.</P>

          <H2>4. How We Use Personal Information</H2>
          <P>We may use personal information to:</P>
          <P>Operate and maintain the website; Create and manage accounts; Authenticate users; Provide membership access and benefits; Enforce first-wave membership limits; Process payments; Process voluntary support payments; Process and fulfill merchandise orders; Manage shipping, returns, and replacements; Register users for future events; Publish approved host, guest, Founder, sponsor, and member information; Display and moderate blog comments; Respond to forms, inquiries, and support requests; Evaluate guest, sponsor, advertising, and collaboration inquiries; Send transactional emails; Send newsletters and marketing communications when permitted; Maintain email preferences and unsubscribe requests; Provide customer service; Personalize the website and member experience; Analyze traffic, engagement, and website performance; Diagnose technical problems; Detect fraud, spam, abuse, and security threats; Enforce our Terms of Use, Membership Terms, and other policies; Protect Tha Fix, Back To Marketing LLC, our users, and the public; Maintain business, accounting, tax, and transaction records; Comply with legal obligations; Establish, exercise, or defend legal claims; Support a merger, financing, acquisition, reorganization, or sale involving the business; Carry out other purposes disclosed when information is collected or authorized by you.</P>

          <H2>5. How We Disclose Personal Information</H2>
          <P>We may disclose personal information as described below.</P>

          <H3>A. Service Providers</H3>
          <P>We may provide information to companies that perform services for us, including:</P>
          <P>Website hosting; Database services; Authentication; File storage; Payment processing; Merchandise production and fulfillment; Shipping; Email delivery; Analytics; Security; Fraud prevention; Customer support; Professional services.</P>
          <P>Service providers are permitted to process information as necessary to provide their services and according to their agreements and legal obligations.</P>

          <H3>B. Public Disclosures</H3>
          <P>Information you authorize for a public profile, comment, Founder listing, guest profile, sponsor profile, interview, episode, article, or other public feature may be disclosed to anyone who accesses the website or related Tha Fix channels.</P>

          <H3>C. Legal and Safety Disclosures</H3>
          <P>We may disclose information when we reasonably believe it is necessary to:</P>
          <UL>
            <li>Comply with applicable law;</li>
            <li>Respond to a subpoena, court order, or lawful government request;</li>
            <li>Protect our legal rights;</li>
            <li>Enforce our agreements;</li>
            <li>Investigate fraud, abuse, or security incidents;</li>
            <li>Protect the safety of Tha Fix, our users, or others;</li>
            <li>Prevent or address illegal or harmful conduct.</li>
          </UL>

          <H3>D. Business Transactions</H3>
          <P>Personal information may be disclosed as part of a merger, acquisition, financing, reorganization, bankruptcy, sale of assets, or similar transaction. Any successor may continue to process information subject to this Privacy Policy or another notice provided as required by law.</P>

          <H3>E. With Your Direction or Consent</H3>
          <P>We may disclose information when you direct us to do so, authorize the disclosure, or intentionally use a feature designed to make information public.</P>

          <H2>6. No Sale of Personal Information</H2>
          <P>Tha Fix does not sell personal information for money.</P>
          <P>Tha Fix does not initially intend to disclose personal information for cross-context behavioral advertising or targeted advertising.</P>
          <P>If our practices change, we will update this Privacy Policy and provide any notices, consent tools, or opt-out mechanisms required by applicable law before beginning the new practice.</P>
          <P>We may disclose information to service providers that process it on our behalf. Such operational disclosures are not intended to constitute a sale of personal information.</P>

          <H2>7. Our Service Providers and Third Parties</H2>
          <P>The launch stack may include the following providers:</P>

          <H3>Supabase</H3>
          <P>Supabase may provide:</P>
          <UL>
            <li>Database hosting;</li>
            <li>Authentication;</li>
            <li>Account management;</li>
            <li>File and media storage;</li>
            <li>APIs;</li>
            <li>Edge Functions;</li>
            <li>Security and access controls.</li>
          </UL>
          <P>Supabase may process account, profile, membership, comment, transaction, content, media, and operational information on our behalf.</P>
          <P>Privacy information: <a className="text-primary underline" href="https://supabase.com/privacy">https://supabase.com/privacy</a></P>

          <H3>Stripe</H3>
          <P>Stripe may process payments for memberships, merchandise, future event tickets, and card-based support.</P>
          <P>Stripe may collect payment, billing, identity, transaction, device, and fraud-prevention information.</P>
          <P>Privacy information: <a className="text-primary underline" href="https://stripe.com/privacy">https://stripe.com/privacy</a></P>

          <H3>Printful</H3>
          <P>Printful may receive information necessary to produce and fulfill merchandise, including:</P>
          <UL>
            <li>Customer name;</li>
            <li>Shipping address;</li>
            <li>Email address where necessary;</li>
            <li>Product selection;</li>
            <li>Size, color, and variant;</li>
            <li>Order and fulfillment information.</li>
          </UL>
          <P>Printful and shipping providers may use this information to produce, ship, track, and support orders.</P>
          <P>Privacy information: <a className="text-primary underline" href="https://www.printful.com/policies/privacy">https://www.printful.com/policies/privacy</a></P>

          <H3>Resend</H3>
          <P>Resend may process:</P>
          <UL>
            <li>Recipient names;</li>
            <li>Email addresses;</li>
            <li>Email content;</li>
            <li>Email metadata;</li>
            <li>Delivery events;</li>
            <li>Bounce and failure information;</li>
            <li>Open and click information, if enabled.</li>
          </UL>
          <P>Privacy information: <a className="text-primary underline" href="https://resend.com/legal/privacy-policy">https://resend.com/legal/privacy-policy</a></P>

          <H3>Google Analytics</H3>
          <P>Google Analytics may process website-usage, cookie, browser, device, approximate-location, and interaction information.</P>
          <P>Privacy information: <a className="text-primary underline" href="https://policies.google.com/privacy">https://policies.google.com/privacy</a></P>

          <H3>Netlify</H3>
          <P>Netlify hosts and deploys the website. Netlify may process:</P>
          <UL>
            <li>IP addresses;</li>
            <li>Device and browser information;</li>
            <li>Server and access logs;</li>
            <li>Deployment information;</li>
            <li>Security and performance data.</li>
          </UL>
          <P>Privacy information: <a className="text-primary underline" href="https://www.netlify.com/privacy/">https://www.netlify.com/privacy/</a></P>

          <H3>GitHub</H3>
          <P>GitHub stores and manages website source code and deployment-related files.</P>
          <P>Tha Fix does not intend to store customer payment information, passwords, or production personal information in the public source-code repository.</P>
          <P>Privacy information: <a className="text-primary underline" href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement</a></P>

          <H3>Lovable</H3>
          <P>Lovable is used as a development interface for building and maintaining the website and connected application.</P>
          <P>Lovable may process project code, instructions, preview information, and technical information associated with development. Production personal information should not be placed into Lovable prompts unless necessary and appropriately protected.</P>

          <H3>PayPal, Cash App, Chime, and Zelle</H3>
          <P>If you use PayPal, Cash App, Chime, or Zelle to support Tha Fix, those services collect and process information according to their own agreements and privacy policies.</P>
          <P>Your use of those services creates a direct relationship between you and the applicable payment provider. Tha Fix does not control the provider’s independent privacy practices.</P>

          <H3>Other Providers</H3>
          <P>We may replace, remove, or add providers as our technology and business operations change.</P>
          <P>We will update this Privacy Policy when a change materially affects how personal information is collected, used, or disclosed.</P>

          <H2>8. Email and Marketing Choices</H2>
          <P>We may send:</P>
          <UL>
            <li>Account-verification messages;</li>
            <li>Password-reset messages;</li>
            <li>Membership notices;</li>
            <li>Payment confirmations;</li>
            <li>Order and shipping updates;</li>
            <li>Support responses;</li>
            <li>Security alerts;</li>
            <li>Policy notices;</li>
            <li>Event-related communications;</li>
            <li>Newsletters;</li>
            <li>Promotional or marketing emails.</li>
          </UL>
          <P>Transactional and service-related messages are necessary to operate accounts, memberships, purchases, and requested services. You may not be able to opt out of essential transactional messages while maintaining the applicable account or service.</P>
          <P>You may unsubscribe from marketing emails by using the unsubscribe link included in the message or by contacting us.</P>
          <P>We will honor valid unsubscribe requests as required by applicable law. Unsubscribing from marketing does not automatically cancel a membership, order, or account.</P>

          <H2>9. Public Comments and Profiles</H2>
          <P>You are responsible for information you choose to publish.</P>
          <P>Public information may be:</P>
          <UL>
            <li>Viewed by anyone;</li>
            <li>Shared by other users;</li>
            <li>Indexed by search engines;</li>
            <li>Copied or captured by third parties;</li>
            <li>Retained outside our control after deletion from Tha Fix.</li>
          </UL>
          <P>When available, members may manage certain profile information through their account dashboard.</P>
          <P>You may request correction or removal of eligible public profile information by contacting us.</P>
          <P>We may retain limited records where necessary for moderation, legal compliance, fraud prevention, disputes, or enforcement.</P>
          <P>Removing a comment or public profile from Tha Fix does not guarantee removal from search-engine caches, screenshots, archives, or copies made by third parties.</P>

          <H2>10. Data Retention</H2>
          <P>We retain personal information for as long as reasonably necessary to:</P>
          <UL>
            <li>Provide accounts, memberships, products, content, and services;</li>
            <li>Complete transactions and fulfill orders;</li>
            <li>Maintain payment, tax, accounting, and business records;</li>
            <li>Provide customer service;</li>
            <li>Maintain membership and benefit history;</li>
            <li>Manage comments and moderation;</li>
            <li>Honor email preferences and unsubscribe requests;</li>
            <li>Prevent fraud, abuse, and security incidents;</li>
            <li>Resolve disputes;</li>
            <li>Enforce agreements;</li>
            <li>Comply with legal obligations;</li>
            <li>Establish, exercise, or defend legal claims.</li>
          </UL>
          <P>Retention periods may vary based on the nature and sensitivity of the information, the purpose for which it was collected, operational requirements, and applicable law.</P>
          <P>When information is no longer reasonably necessary, we may delete, anonymize, or aggregate it.</P>
          <P>Backup copies may remain for a limited period until overwritten or removed through ordinary backup processes.</P>

          <H2>11. Security</H2>
          <P>We use reasonable administrative, technical, and organizational measures designed to protect personal information.</P>
          <P>These measures may include:</P>
          <UL>
            <li>Authentication controls;</li>
            <li>Role-based access;</li>
            <li>Row Level Security;</li>
            <li>Encryption in transit;</li>
            <li>Secure payment processing;</li>
            <li>Restricted administrative access;</li>
            <li>Logging and monitoring;</li>
            <li>Data backups;</li>
            <li>Vendor security controls;</li>
            <li>Fraud and abuse prevention.</li>
          </UL>
          <P>No website, database, transmission method, or storage system is completely secure. We cannot guarantee absolute security.</P>
          <P>You are responsible for:</P>
          <UL>
            <li>Using a strong, unique password;</li>
            <li>Protecting your login credentials;</li>
            <li>Keeping your contact information current;</li>
            <li>Signing out of shared devices;</li>
            <li>Promptly notifying us of suspected unauthorized account access.</li>
          </UL>

          <H2>12. Your Privacy Rights</H2>
          <P>Depending on where you live and subject to applicable exceptions, you may have the right to:</P>
          <UL>
            <li>Confirm whether we process your personal information;</li>
            <li>Access personal information we maintain about you;</li>
            <li>Correct inaccurate information;</li>
            <li>Delete certain personal information;</li>
            <li>Obtain a portable copy of certain information;</li>
            <li>Opt out of the sale of personal information;</li>
            <li>Opt out of targeted advertising;</li>
            <li>Opt out of certain profiling;</li>
            <li>Withdraw consent where processing is based on consent;</li>
            <li>Appeal the denial of a privacy request;</li>
            <li>Receive equal service without unlawful discrimination for exercising a privacy right.</li>
          </UL>
          <P>Tha Fix does not currently sell personal information or use personal information for targeted advertising.</P>

          <H3>Submitting a Request</H3>
          <P>You may submit a privacy request by emailing:</P>
          <P><a className="text-primary underline" href="mailto:info@thafix502.com">info@thafix502.com</a></P>
          <P>Please use a subject such as:</P>
          <UL>
            <li>“Privacy Request”</li>
            <li>“Data Access Request”</li>
            <li>“Correction Request”</li>
            <li>“Deletion Request”</li>
            <li>“Privacy Appeal”</li>
          </UL>
          <P>We may need to verify your identity before completing a request. Verification may require confirming information associated with your account or prior interactions.</P>
          <P>Authorized agents may submit requests where permitted by applicable law. We may require evidence of the agent’s authority and verification of the consumer’s identity.</P>
          <P>We will respond within the period required by applicable law. Certain information may be exempt from access, correction, deletion, or portability requirements.</P>

          <H3>Appealing a Decision</H3>
          <P>If we deny a privacy request, you may submit an appeal by emailing <a className="text-primary underline" href="mailto:info@thafix502.com">info@thafix502.com</a> with the subject “Privacy Appeal” and explaining why you believe the decision should be reconsidered.</P>
          <P>We will review and respond to eligible appeals as required by applicable law.</P>

          <H3>Dashboard Controls</H3>
          <P>Tha Fix intends to add privacy and account-management controls to the member dashboard.</P>
          <P>Until those tools are available, privacy requests may be submitted by email.</P>

          <H2>13. Kentucky Privacy Rights</H2>
          <P>Back To Marketing LLC operates Tha Fix from Louisville, Kentucky.</P>
          <P>When the Kentucky Consumer Data Protection Act applies to Tha Fix or a particular request, eligible Kentucky consumers may have rights to:</P>
          <UL>
            <li>Confirm whether their personal data is being processed;</li>
            <li>Access their personal data;</li>
            <li>Correct inaccuracies;</li>
            <li>Delete certain personal data;</li>
            <li>Obtain a copy of certain personal data;</li>
            <li>Opt out of targeted advertising;</li>
            <li>Opt out of the sale of personal data;</li>
            <li>Opt out of certain profiling;</li>
            <li>Appeal the denial of a request.</li>
          </UL>
          <P>These rights are subject to the law’s applicability thresholds, definitions, exemptions, verification requirements, and exceptions.</P>

          <H2>14. Other State Privacy Rights</H2>
          <P>Residents of other states may have additional privacy rights under applicable law.</P>
          <P>We will evaluate verified requests based on the requester’s state of residence and the laws applicable to Tha Fix and Back To Marketing LLC.</P>
          <P>If a state-specific notice becomes necessary because of our size, activities, or legal obligations, we may add a supplemental notice to this Privacy Policy.</P>

          <H2>15. Adults Only</H2>
          <P>Accounts, memberships, purchases, support payments, event registrations, and comments are intended only for people who are at least 18 years old.</P>
          <P>Tha Fix is not directed to children and does not knowingly collect personal information from anyone under 18 for these features.</P>
          <P>If we learn that a person under 18 has created an account or submitted personal information through an age-restricted feature, we may close the account and delete or restrict the information as appropriate.</P>
          <P>A parent or legal guardian who believes a minor has provided personal information may contact us at <a className="text-primary underline" href="mailto:info@thafix502.com">info@thafix502.com</a>.</P>

          <H2>16. United States Operations and Data Transfers</H2>
          <P>Tha Fix is operated from Louisville, Kentucky, and initially serves an audience primarily located in the United States.</P>
          <P>Our service providers may process or store information in the United States or other countries.</P>
          <P>Those locations may have privacy laws different from the laws where you live.</P>
          <P>By using Tha Fix, you understand that information may be processed in locations where we and our service providers operate, subject to applicable legal requirements.</P>

          <H2>17. Third-Party Websites and Services</H2>
          <P>The website may link to:</P>
          <UL>
            <li>Social-media platforms;</li>
            <li>Guest websites;</li>
            <li>Sponsor websites;</li>
            <li>Payment services;</li>
            <li>Merchandise services;</li>
            <li>Video platforms;</li>
            <li>External articles;</li>
            <li>Other third-party websites.</li>
          </UL>
          <P>We do not control third-party websites or their privacy practices. This Privacy Policy does not apply to information collected independently by a third party.</P>
          <P>You should review the privacy policy of any third-party service before submitting information.</P>

          <H2>18. Changes to This Privacy Policy</H2>
          <P>We may update this Privacy Policy to reflect:</P>
          <UL>
            <li>Changes to the website;</li>
            <li>New features;</li>
            <li>New service providers;</li>
            <li>Changes to our data practices;</li>
            <li>Changes to legal requirements;</li>
            <li>Changes to our business operations.</li>
          </UL>
          <P>When we make changes, we will update the “Last Updated” date.</P>
          <P>If a change materially affects how we use or disclose personal information, we may provide additional notice through the website, account dashboard, or email as required by law.</P>

          <H2>19. Contact Us</H2>
          <P>Back To Marketing LLC operates Tha Fix from Louisville, Kentucky.</P>
          <P>For privacy questions, requests, or complaints, contact:</P>
          <P><strong>Back To Marketing LLC — Tha Fix</strong><br /><strong>Email:</strong> <a className="text-primary underline" href="mailto:info@thafix502.com">info@thafix502.com</a></P>
        </div>
      </section>
    </>
  );
}