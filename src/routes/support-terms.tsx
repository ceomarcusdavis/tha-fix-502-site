import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/support-terms")({
  head: () => ({
    meta: [
      { title: "Support Terms — Tha Fix" },
      { name: "description", content: "Voluntary support terms and disclosure for Tha Fix donations and contributions." },
      { property: "og:title", content: "Support Terms" },
      { property: "og:description", content: "Voluntary support terms and disclosure for Tha Fix." },
    ],
  }),
  component: SupportTermsPage,
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
function OL({ children }: { children: ReactNode }) {
  return <ol className="list-decimal pl-6 space-y-1">{children}</ol>;
}

function SupportTermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Support Terms" description="Voluntary support terms and disclosure for one-time and recurring contributions." />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-4 text-foreground/80 leading-relaxed">
          <p className="font-bold leading-tight">
            Effective Date: July 20, 2026
            <br />
            Last Updated: July 20, 2026
          </p>

          <P>
            These Voluntary Support Terms &amp; Disclosure (“Support Terms”) govern one-time and recurring financial support provided to Tha Fix through <strong>thafix502.com</strong> or an official payment method displayed on that website.
          </P>
          <P>
            Tha Fix is operated by <strong>Back To Marketing LLC</strong>, doing business as <strong>Tha Fix</strong> (“Tha Fix,” “we,” “us,” or “our”), from Louisville, Kentucky.
          </P>
          <P>
            By submitting voluntary support, you acknowledge and agree to these Support Terms, the Tha Fix Terms of Use, and the Privacy Policy.
          </P>

          <H2>1. Tha Fix Is a For-Profit Business</H2>
          <P>Back To Marketing LLC is a for-profit business. Tha Fix is not presented as a charity, charitable organization, nonprofit organization, private foundation, or tax-exempt organization.</P>
          <P>Payments made through the Support Tha Fix page are provided to a for-profit business.</P>
          <P>The words “support,” “contribution,” “gift,” “tip,” or “donation” may appear on the website or within a third-party payment service. Regardless of the label used by a payment provider, the payment is governed by these Support Terms.</P>

          <H2>2. Voluntary Gift or Tip</H2>
          <P>A support payment is a voluntary gift or tip intended to support Tha Fix and its business activities.</P>
          <P>Providing support is optional. A person is not required to support Tha Fix to access publicly available content.</P>
          <P>Supporters should contribute only an amount they voluntarily choose and can reasonably afford.</P>
          <P>Do not provide financial support if doing so would interfere with essential personal or household expenses, including housing, food, utilities, transportation, healthcare, taxes, debt obligations, or dependent care.</P>

          <H2>3. Not a Charitable Contribution</H2>
          <P>Support payments are not charitable contributions.</P>
          <P>Back To Marketing LLC and Tha Fix do not represent that support payments qualify for a federal, state, local, or international charitable tax deduction.</P>
          <P>A payment receipt from Tha Fix, Stripe, PayPal, Cash App, Chime, Zelle, a bank, or another provider is proof of a payment transaction. It is not a charitable-contribution receipt or acknowledgment from a tax-exempt organization.</P>
          <P>
            The IRS generally limits charitable-contribution deductions to contributions made to qualified organizations. <a href="https://www.irs.gov/charities-non-profits/charitable-organizations/charitable-contribution-deductions" className="underline" target="_blank" rel="noopener noreferrer">IRS charitable-contribution guidance</a>
          </P>
          <P>Supporters should consult their own qualified tax adviser concerning any tax treatment. Tha Fix does not provide tax advice.</P>

          <H2>4. No Product, Service, or Consideration Promised</H2>
          <P>A voluntary support payment does not purchase or guarantee:</P>
          <UL>
            <li>Merchandise;</li>
            <li>Membership access;</li>
            <li>Members-only content;</li>
            <li>Founder or Inner Circle status;</li>
            <li>Founder or supporter recognition;</li>
            <li>Event admission;</li>
            <li>Advertising;</li>
            <li>Business promotion;</li>
            <li>A guest appearance;</li>
            <li>A collaboration;</li>
            <li>A response or personal communication;</li>
            <li>Editorial influence;</li>
            <li>Voting authority;</li>
            <li>Preferential treatment;</li>
            <li>A tax benefit;</li>
            <li>Any other product, service, access, opportunity, or consideration.</li>
          </UL>
          <P>If a person wishes to purchase merchandise, a membership, event admission, advertising, sponsorship, or another product or service, they must use the applicable purchase process and agree to the separate terms for that transaction.</P>
          <P>A support payment will not be treated as payment for another product or obligation unless Tha Fix expressly agrees in writing.</P>

          <H2>5. No Ownership, Investment, or Control</H2>
          <P>Support does not provide:</P>
          <UL>
            <li>Ownership in Back To Marketing LLC or Tha Fix;</li>
            <li>Equity;</li>
            <li>Securities;</li>
            <li>Investment rights;</li>
            <li>Profit-sharing;</li>
            <li>Revenue-sharing;</li>
            <li>Repayment rights;</li>
            <li>Creditor status;</li>
            <li>Voting power;</li>
            <li>Management authority;</li>
            <li>Editorial control;</li>
            <li>Intellectual-property ownership;</li>
            <li>A partnership, agency, employment, or joint-venture relationship; or</li>
            <li>A right to influence business decisions.</li>
          </UL>
          <P>Supporters should not provide funds with an expectation of financial return, repayment, ownership, or control.</P>

          <H2>6. One-Time Support</H2>
          <P>A one-time support payment is charged once in the amount the supporter selects and approves.</P>
          <P>The supporter should review the amount and payment method before submitting the transaction.</P>
          <P>A one-time payment does not authorize Tha Fix to charge the supporter again unless the supporter separately enrolls in recurring support or completes another transaction.</P>

          <H2>7. Recurring Support</H2>
          <P>Where available, a supporter may choose automatically recurring support.</P>
          <P>Before enrolling, the payment page must disclose:</P>
          <UL>
            <li>The recurring amount;</li>
            <li>The billing frequency;</li>
            <li>That charges continue automatically until canceled;</li>
            <li>The payment method;</li>
            <li>How to cancel; and</li>
            <li>A link to these Support Terms.</li>
          </UL>
          <P>By selecting recurring support, the supporter authorizes Back To Marketing LLC and the applicable payment provider to charge the selected payment method automatically at the disclosed interval until canceled.</P>
          <P>Recurring support is not a membership and does not include membership benefits.</P>
          <P>Billing dates may shift slightly because of weekends, holidays, differing month lengths, provider processing, or circumstances outside Tha Fix’s reasonable control.</P>

          <H2>8. Canceling Recurring Support</H2>
          <P>A supporter may cancel recurring support through the payment provider used to establish it.</P>
          <P>Depending on the payment method, cancellation controls may be available through:</P>
          <UL>
            <li>Stripe;</li>
            <li>PayPal;</li>
            <li>Cash App;</li>
            <li>Chime;</li>
            <li>Zelle;</li>
            <li>The supporter’s bank or financial institution; or</li>
            <li>Another provider identified during enrollment.</li>
          </UL>
          <P>If the supporter cannot locate the cancellation control, they may contact <strong>info@thafix502.com</strong> for reasonable assistance.</P>
          <P>Cancellation stops future recurring charges after it becomes effective. It does not automatically refund a charge completed before cancellation.</P>
          <P>Supporters should cancel before the next scheduled billing date. Tha Fix cannot guarantee that a cancellation request received after processing begins will stop that charge.</P>

          <H2>9. General Refund Policy</H2>
          <P>Voluntary support payments are generally final and nonrefundable because no product, service, or other consideration is promised in exchange.</P>
          <P>A refund may be available for:</P>
          <UL>
            <li>A duplicate charge;</li>
            <li>An unauthorized transaction;</li>
            <li>A technical or payment-processing error;</li>
            <li>A qualifying accidental payment reported within two calendar days; or</li>
            <li>A refund required by applicable law.</li>
          </UL>
          <P>Tha Fix may also issue a discretionary refund when it determines that doing so is appropriate. Issuing an exception does not require Tha Fix to issue the same exception in another situation.</P>

          <H2>10. Accidental-Payment Requests</H2>
          <P>A supporter may request cancellation and refund of an accidental support payment by contacting Tha Fix within <strong>two calendar days after the charge.</strong></P>
          <P>The request should include:</P>
          <UL>
            <li>The supporter’s name;</li>
            <li>The email address or account associated with the payment;</li>
            <li>The payment date;</li>
            <li>The amount;</li>
            <li>The payment method;</li>
            <li>The transaction identifier, if available; and</li>
            <li>A brief explanation of the mistake.</li>
          </UL>
          <P>Submit requests to:</P>
          <P>
            <strong>Email:</strong> <a href="mailto:info@thafix502.com" className="underline">info@thafix502.com</a>
            <br />
            <strong>Suggested subject:</strong> Accidental Support Payment
          </P>
          <P>This policy applies to both one-time support and completed recurring-support charges.</P>
          <P>Requests submitted more than two calendar days after the charge will generally be reviewed only for duplicate charges, unauthorized transactions, processing errors, legal requirements, or exceptional circumstances.</P>

          <H2>11. Unauthorized Transactions</H2>
          <P>A person who believes a transaction was unauthorized should promptly:</P>
          <OL>
            <li>Contact the payment provider or financial institution;</li>
            <li>Secure the affected account;</li>
            <li>Follow the provider’s unauthorized-transaction process; and</li>
            <li>Notify Tha Fix at <strong>info@thafix502.com</strong>.</li>
          </OL>
          <P>Tha Fix may request reasonable information to locate the transaction and prevent fraud.</P>
          <P>Nothing in these Support Terms limits rights concerning unauthorized electronic transfers that cannot lawfully be waived.</P>

          <H2>12. Refund Processing</H2>
          <P>Approved refunds will be sent to the original payment method whenever reasonably possible.</P>
          <P>After Tha Fix or the payment provider processes a refund, additional time may be required for the financial institution to post it.</P>
          <P>Tha Fix does not control processing times imposed by Stripe, PayPal, Cash App, Chime, Zelle, banks, card networks, or other providers.</P>
          <P>A refund ends any claim by the supporter that the refunded payment should create recognition, access, influence, or another benefit.</P>

          <H2>13. Use of Support Funds</H2>
          <P>Tha Fix may use support funds for any lawful business purpose, including:</P>
          <UL>
            <li>Content production;</li>
            <li>Video, audio, and media production;</li>
            <li>Equipment;</li>
            <li>Technology;</li>
            <li>Website and platform development;</li>
            <li>Software and hosting;</li>
            <li>Payroll and contractor costs;</li>
            <li>Marketing and promotion;</li>
            <li>Events;</li>
            <li>Merchandise development;</li>
            <li>Administrative expenses;</li>
            <li>Professional services;</li>
            <li>General operating expenses; and</li>
            <li>Other activities supporting Back To Marketing LLC or Tha Fix.</li>
          </UL>
          <P>Unless Tha Fix enters into a separate written agreement expressly restricting a payment, support funds are unrestricted business funds.</P>
          <P>Tha Fix is not required to segregate support funds from other business revenue or provide individual supporters with an accounting of how their particular payment was used.</P>

          <H2>14. Campaigns, Goals, and Suggested Uses</H2>
          <P>Tha Fix may describe a current goal, project, episode, event, equipment need, platform feature, or intended use for support.</P>
          <P>Such descriptions communicate Tha Fix’s present intentions. They do not:</P>
          <UL>
            <li>Legally restrict the funds to that purpose;</li>
            <li>Establish a trust or fiduciary relationship;</li>
            <li>Guarantee that the stated project will be completed;</li>
            <li>Guarantee a completion date;</li>
            <li>Promise a particular result; or</li>
            <li>Create a right to direct how funds are used.</li>
          </UL>
          <P>Business priorities and circumstances may change after support is received.</P>

          <H2>15. Delayed, Changed, or Canceled Projects</H2>
          <P>A project, episode, event, feature, production, or goal described on the support page may be:</P>
          <UL>
            <li>Delayed;</li>
            <li>Rescheduled;</li>
            <li>Modified;</li>
            <li>Combined with another project;</li>
            <li>Replaced;</li>
            <li>Reduced in scope; or</li>
            <li>Canceled.</li>
          </UL>
          <P>Because support is voluntary and no consideration is promised, such a change does not ordinarily create a refund right.</P>
          <P>This does not prevent Tha Fix from voluntarily issuing a refund or other response when appropriate.</P>

          <H2>16. Optional Recognition</H2>
          <P>Tha Fix may voluntarily thank or recognize supporters. Recognition is discretionary and does not constitute consideration for the payment.</P>
          <P>A supporter may choose whether public recognition displays:</P>
          <UL>
            <li>Their real name;</li>
            <li>An approved screen name;</li>
            <li>An approved business name; or</li>
            <li>No public name.</li>
          </UL>
          <P>Selecting a public name does not guarantee when, where, how long, or in what format recognition will appear.</P>
          <P>Tha Fix may decline, remove, format, or modify recognition when reasonably necessary because of:</P>
          <UL>
            <li>Impersonation;</li>
            <li>Infringement;</li>
            <li>Deception;</li>
            <li>Safety concerns;</li>
            <li>Technical limitations;</li>
            <li>Policy violations;</li>
            <li>Legal requirements; or</li>
            <li>A request from the supporter.</li>
          </UL>
          <P>Recognition does not mean Tha Fix endorses the supporter, their business, products, services, opinions, or conduct.</P>

          <H2>17. Optional Support Messages</H2>
          <P>Supporters may be permitted to submit an optional message with their payment.</P>
          <P>Messages are subject to:</P>
          <UL>
            <li>The Terms of Use;</li>
            <li>The Commenting &amp; Community Guidelines;</li>
            <li>The Privacy Policy; and</li>
            <li>Reasonable formatting and technical requirements.</li>
          </UL>
          <P>Tha Fix may review, decline, hide, edit for formatting, or remove a message. Submission does not guarantee publication.</P>
          <P>A support message may not contain:</P>
          <UL>
            <li>Threats or harassment;</li>
            <li>Hate speech;</li>
            <li>Doxxing or private information;</li>
            <li>Defamation or fabricated accusations;</li>
            <li>Spam;</li>
            <li>Fraudulent promotion;</li>
            <li>Illegal solicitations;</li>
            <li>Infringing material;</li>
            <li>Malware or deceptive links;</li>
            <li>Impersonation; or</li>
            <li>Other prohibited content.</li>
          </UL>
          <P>Public messages and recognition are User Submissions governed by the applicable license in the Terms of Use.</P>

          <H2>18. Payment Methods</H2>
          <P>Tha Fix may accept support through:</P>
          <UL>
            <li>Stripe;</li>
            <li>Cash App;</li>
            <li>Chime;</li>
            <li>Zelle;</li>
            <li>PayPal; and</li>
            <li>Other payment methods expressly displayed on thafix502.com.</li>
          </UL>
          <P>Payment-method availability may change.</P>
          <P>Each provider operates under its own terms, fees, privacy practices, security controls, and dispute procedures. Supporters are responsible for reviewing the applicable provider’s terms.</P>

          <H2>19. Verified Payment Information</H2>
          <P>Use only payment links, account names, QR codes, telephone numbers, email addresses, or handles displayed on the official <strong>thafix502.com</strong> Support Tha Fix page.</P>
          <P>Tha Fix is not responsible for payments sent to:</P>
          <UL>
            <li>An impersonator;</li>
            <li>An outdated or unofficial account;</li>
            <li>Information received through an unauthorized message;</li>
            <li>A fraudulent social-media profile;</li>
            <li>A mistyped handle or address; or</li>
            <li>Another recipient not controlled by Back To Marketing LLC.</li>
          </UL>
          <P>If payment instructions received elsewhere conflict with thafix502.com, do not submit the payment. Contact <strong>info@thafix502.com</strong> for verification.</P>
          <P>Tha Fix will never require a support payment in exchange for releasing a prize, processing a supposed reward, avoiding a threat, or gaining access to money.</P>

          <H2>20. Provider and Bank Fees</H2>
          <P>The supporter is responsible for fees separately imposed by:</P>
          <UL>
            <li>Cash App;</li>
            <li>Chime;</li>
            <li>Zelle;</li>
            <li>PayPal;</li>
            <li>A bank;</li>
            <li>A card issuer;</li>
            <li>A currency-conversion service;</li>
            <li>An international-payment provider; or</li>
            <li>Another financial service.</li>
          </UL>
          <P>The amount received by Tha Fix may differ from the amount sent because of provider charges or currency conversion.</P>
          <P>Tha Fix is not responsible for refunding a third-party fee it did not receive, except where required by law.</P>

          <H2>21. Receipts</H2>
          <P>Stripe or the applicable payment provider may issue an electronic transaction receipt.</P>
          <P>A receipt may show:</P>
          <UL>
            <li>The payment amount;</li>
            <li>The transaction date;</li>
            <li>The payment method;</li>
            <li>The recipient;</li>
            <li>The recurring frequency, if applicable; and</li>
            <li>A transaction identifier.</li>
          </UL>
          <P>The receipt documents a commercial payment to a for-profit business. It is not a charitable tax receipt.</P>

          <H2>22. Large or Unusual Payments</H2>
          <P>Tha Fix does not establish a general maximum support amount. However, Tha Fix may review, delay, reject, or return a payment that appears:</P>
          <UL>
            <li>Unusually large;</li>
            <li>Accidental;</li>
            <li>Suspicious;</li>
            <li>Inconsistent with the supporter’s prior activity;</li>
            <li>Connected to fraud;</li>
            <li>Legally problematic;</li>
            <li>Subject to sanctions or trade restrictions;</li>
            <li>Intended to obtain improper influence; or</li>
            <li>Likely to create unreasonable risk.</li>
          </UL>
          <P>Tha Fix may request identity, source-of-funds, payment-authorization, or other reasonable verification before accepting or retaining such a payment.</P>
          <P>Reviewing or returning a payment does not accuse the sender of wrongdoing.</P>

          <H2>23. Prohibited Sources and Purposes</H2>
          <P>Tha Fix may reject, freeze where legally required, or return support reasonably believed to involve:</P>
          <UL>
            <li>Stolen funds;</li>
            <li>Fraud;</li>
            <li>Money laundering;</li>
            <li>Sanctions violations;</li>
            <li>Identity theft;</li>
            <li>Unauthorized payment instruments;</li>
            <li>Illegal activity;</li>
            <li>Bribery;</li>
            <li>Extortion;</li>
            <li>An attempt to obtain improper influence;</li>
            <li>Evasion of another Tha Fix payment rule; or</li>
            <li>Another prohibited source or purpose.</li>
          </UL>
          <P>Tha Fix may cooperate with payment providers, financial institutions, regulators, or lawful authorities when appropriate or required.</P>

          <H2>24. No Editorial Influence</H2>
          <P>Support does not allow a supporter to control or require:</P>
          <UL>
            <li>Editorial decisions;</li>
            <li>Topics;</li>
            <li>Guests;</li>
            <li>Investigations;</li>
            <li>Opinions;</li>
            <li>Political positions;</li>
            <li>Moderation decisions;</li>
            <li>Business relationships;</li>
            <li>Hiring;</li>
            <li>Sponsorships;</li>
            <li>Product decisions; or</li>
            <li>Public statements.</li>
          </UL>
          <P>Tha Fix retains full editorial and operational independence.</P>
          <P>A supporter may separately submit topic suggestions or questions through an available feature, but support does not guarantee selection or response.</P>

          <H2>25. Age and Capacity</H2>
          <P>A supporter must be at least 18 years old and legally capable of authorizing the payment.</P>
          <P>By providing support, the person represents that:</P>
          <UL>
            <li>They are authorized to use the payment method;</li>
            <li>The payment is voluntary;</li>
            <li>The information submitted is accurate; and</li>
            <li>The transaction does not violate applicable law.</li>
          </UL>
          <P>Tha Fix may reject or return a payment when age, authorization, identity, or legal capacity cannot reasonably be verified.</P>

          <H2>26. Privacy</H2>
          <P>Tha Fix and its payment providers may process information needed to complete, document, secure, and administer support transactions.</P>
          <P>This may include:</P>
          <UL>
            <li>Name;</li>
            <li>Email address;</li>
            <li>Payment amount;</li>
            <li>Transaction identifier;</li>
            <li>Billing information;</li>
            <li>Provider information;</li>
            <li>Recurring-payment status;</li>
            <li>Public-recognition choice;</li>
            <li>Optional message; and</li>
            <li>Fraud-prevention information.</li>
          </UL>
          <P>Tha Fix’s handling of personal information is described in the Privacy Policy. Payment providers also apply their own privacy policies.</P>

          <H2>27. Changes to These Support Terms</H2>
          <P>Tha Fix may update these Support Terms to reflect changes in payment methods, business practices, legal requirements, or support features.</P>
          <P>The updated policy will display a revised “Last Updated” date.</P>
          <P>The terms disclosed when a payment is authorized will generally govern that payment. Material changes to recurring support will receive any notice or renewed consent required by applicable law.</P>

          <H2>28. Contact</H2>
          <P>Questions, accidental-payment requests, recurring-support issues, or transaction concerns may be directed to:</P>
          <P>
            <strong>Back To Marketing LLC</strong>
            <br />
            <strong>Doing business as Tha Fix</strong>
            <br />
            Louisville, Kentucky
            <br />
            <strong>Email:</strong> <a href="mailto:info@thafix502.com" className="underline">info@thafix502.com</a>
            <br />
            <strong>Website:</strong> thafix502.com
          </P>
        </div>
      </section>
    </>
  );
}
