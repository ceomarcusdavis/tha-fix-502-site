import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Tha Fix" },
      { name: "description", content: "Terms governing use of the Tha Fix website and services." },
      { property: "og:title", content: "Terms of Use" },
      { property: "og:description", content: "Terms of use for Tha Fix." },
    ],
  }),
  component: TermsPage,
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

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-4 text-foreground/80 leading-relaxed">
          <p className="font-bold leading-tight">
            Effective Date: July 19, 2026
            <br />
            Last Updated: July 19, 2026
          </p>

          <P>
            These Terms of Use (“Terms”) govern your access to and use of <strong>thafix502.com</strong> and any related pages, accounts, profiles, content, features, memberships, comments, communications, products, and services operated under the Tha Fix name (collectively, the “Services”).
          </P>
          <P>
            The Services are operated by <strong>Back To Marketing LLC</strong>, doing business as <strong>Tha Fix</strong> (“Tha Fix,” “we,” “us,” or “our”), from Louisville, Kentucky.
          </P>
          <P>
            Please read these Terms carefully. They contain important provisions affecting your legal rights, including a binding individual arbitration agreement, a class-action waiver, and a jury-trial waiver.
          </P>
          <P>
            By accessing the Services, creating an account, purchasing a membership or product, submitting content, posting a comment, or otherwise using the Services, you agree to these Terms. If you do not agree, do not use the Services.
          </P>

          <H2>1. Related Policies and Additional Terms</H2>
          <P>These Terms incorporate by reference any additional policies or terms that apply to particular features or transactions, including our:</P>
          <UL>
            <li>Privacy Policy</li>
            <li>Membership Terms</li>
            <li>Comment and Community Guidelines</li>
            <li>Merchandise, Shipping, and Return Policy</li>
            <li>Donation and Support Terms</li>
            <li>Event or ticket terms, when applicable</li>
            <li>Any offer-specific terms displayed during checkout</li>
          </UL>
          <P>If an additional policy directly conflicts with these Terms, the more specific policy will control for the applicable feature or transaction.</P>

          <H2>2. Eligibility and Age Requirement</H2>
          <P>You must be at least 18 years old to:</P>
          <UL>
            <li>Create an account;</li>
            <li>Purchase or hold a membership;</li>
            <li>Make a purchase or financial contribution;</li>
            <li>Post a comment;</li>
            <li>Create or maintain a public profile; or</li>
            <li>Submit material for publication or promotional use.</li>
          </UL>
          <P>By using any age-restricted feature, you represent that you are at least 18 years old and legally capable of entering into a binding agreement.</P>
          <P>We may request reasonable information or documentation to verify your identity, age, membership eligibility, account ownership, or transaction.</P>

          <H2>3. Nature of Tha Fix</H2>
          <P>Tha Fix is a media, commentary, community, entertainment, membership, and commerce platform. The Services may include articles, blog posts, videos, interviews, podcasts, guest profiles, public discussions, opinions, merchandise, memberships, sponsorships, voluntary support options, and other content.</P>
          <P>Tha Fix content may include commentary, opinions, entertainment, personal experiences, humor, criticism, cultural discussion, political discussion, or guest perspectives.</P>
          <P>Unless expressly stated otherwise, content available through the Services is not legal, financial, medical, mental-health, political, tax, investment, or other professional advice. You should consult an appropriately qualified professional before acting on matters requiring professional guidance.</P>
          <P>Opinions expressed by guests, members, commenters, sponsors, interviewees, or other third parties are their own and do not necessarily represent the views of Tha Fix or Back To Marketing LLC.</P>

          <H2>4. Accounts</H2>
          <P>Certain features require an account. When creating or using an account, you agree to:</P>
          <UL>
            <li>Maintain only one personal account unless we expressly authorize otherwise;</li>
            <li>Provide accurate, current, and complete information;</li>
            <li>Keep your information updated;</li>
            <li>Protect your password and other account credentials;</li>
            <li>Not share your account or credentials with another person;</li>
            <li>Not sell, transfer, license, or assign your account;</li>
            <li>Notify us promptly if you suspect unauthorized access; and</li>
            <li>Accept responsibility for activity occurring through your account to the extent permitted by law.</li>
          </UL>
          <P>An account belongs to the person whose information was used to create it. Membership benefits cannot be shared, resold, or transferred unless the applicable Membership Terms expressly permit it.</P>
          <P>We may require identity, age, payment, or eligibility verification before granting or continuing access to an account or feature.</P>
          <P>Contact <strong>info@thafix502.com</strong> if you believe your account has been compromised.</P>

          <H2>5. Memberships and Paid Features</H2>
          <P>Paid memberships, including introductory, first-wave, Founder, Inner Circle, or other membership plans, are governed by the Membership Terms and the specific offer presented during enrollment.</P>
          <P>Membership prices, benefits, availability, enrollment limits, billing arrangements, renewal terms, cancellation rights, and refund rules may differ by plan or enrollment period.</P>
          <P>Some prices or benefits may be available only to a limited number of qualifying members. A closed, discontinued, or replaced membership plan does not create a right for other users to receive that plan’s former price or benefits.</P>
          <P>You authorize Tha Fix and its payment processor to charge the payment method you provide for the amounts and at the intervals disclosed at checkout.</P>

          <H2>6. Products, Merchandise, Tickets, and Other Purchases</H2>
          <P>Product descriptions, images, colors, sizing information, availability, fulfillment estimates, and delivery dates are provided as accurately as reasonably possible, but minor differences or delays may occur.</P>
          <P>Merchandise may be produced or fulfilled by third-party providers, including Printful. Payments may be processed by Stripe or another identified payment provider. Purchases remain subject to the applicable checkout terms and our Merchandise, Shipping, and Return Policy.</P>
          <P>Event tickets and event-related purchases, if offered, may be subject to additional terms, venue rules, schedules, cancellation policies, and refund restrictions displayed at the time of purchase.</P>
          <P>We may correct pricing or product-description errors, reject or cancel orders affected by an error, limit quantities, or decline a transaction when reasonably necessary. If we cancel a completed charge, we will issue any refund required by applicable law or the applicable transaction terms.</P>

          <H2>7. Voluntary Support and Contributions</H2>
          <P>Tha Fix may provide voluntary support options through Stripe, Cash App, Chime, Zelle, PayPal, or other services.</P>
          <P>Unless explicitly stated otherwise, these payments are voluntary gifts or tips supporting a for-profit business. They are not charitable donations, are not made to a tax-exempt organization, and are generally not tax-deductible as charitable contributions.</P>
          <P>Voluntary support does not purchase ownership, voting authority, editorial control, investment rights, or guaranteed benefits unless a specific written offer expressly says otherwise.</P>

          <H2>8. Ownership of the Services</H2>
          <P>Except for content owned by users or third parties, the Services and their contents are owned by or licensed to Back To Marketing LLC.</P>
          <P>This includes the Tha Fix name and branding, logos, graphics, page designs, layouts, videos, recordings, articles, photographs, illustrations, databases, software, source material, compilations, and other original content.</P>
          <P>These materials are protected by copyright, trademark, and other intellectual-property laws. No ownership rights are transferred to you under these Terms.</P>
          <P>Subject to these Terms, Tha Fix grants you a limited, personal, revocable, nonexclusive, nontransferable, and nonsublicensable license to access and use the Services for lawful personal use.</P>
          <P>Without written permission, you may not reproduce, republish, sell, license, distribute, modify, create derivative works from, publicly perform, publicly display, scrape, systematically download, or commercially exploit Tha Fix content except as allowed by law or through built-in sharing functions.</P>

          <H2>9. User Submissions and Ownership</H2>
          <P>“User Submissions” include comments, questions, testimonials, reviews, photographs, videos, recordings, guest pitches, biographies, profile information, business information, social links, topic suggestions, messages intended for publication, and other material you submit through or in connection with the Services.</P>
          <P>You retain any ownership rights you have in your User Submissions. However, by submitting a User Submission, you grant Back To Marketing LLC and its affiliates, service providers, licensees, successors, and assigns a:</P>
          <UL>
            <li>Worldwide;</li>
            <li>Nonexclusive;</li>
            <li>Royalty-free;</li>
            <li>Fully paid;</li>
            <li>Transferable;</li>
            <li>Sublicensable; and</li>
            <li>Perpetual and irrevocable, to the extent permitted by law,</li>
          </UL>
          <P>license to host, store, reproduce, use, publish, publicly display, publicly perform, distribute, transmit, modify, edit, format, adapt, translate, excerpt, combine with other material, create derivative works from, promote, advertise, and commercially use the User Submission in any media or format now known or later developed.</P>
          <P>This license permits use through the Tha Fix website, shows, videos, social-media accounts, promotional materials, advertising, newsletters, compilations, archives, and related commercial activities.</P>
          <P>You also authorize Tha Fix to use any name, display name, image, voice, likeness, biography, business information, or social-media identifier that you intentionally submit with the content for the same purposes.</P>
          <P>Tha Fix is not required to use, publish, promote, or retain any User Submission. We may remove or stop using it at any time. Removal from an active page may not remove copies already included in recordings, archived materials, promotional campaigns, backups, or previously distributed content.</P>
          <P>To the extent permitted by law, you waive or agree not to assert moral rights or similar rights that would prevent the uses authorized by this section.</P>
          <P>A separate written guest, photography, recording, or appearance release may be required for interviews, featured profiles, productions, events, or substantial promotional uses.</P>

          <H2>10. Your Promises About User Submissions</H2>
          <P>You represent and warrant that:</P>
          <UL>
            <li>You own the User Submission or have all necessary permissions to submit and license it;</li>
            <li>The submission does not violate another person’s copyright, trademark, privacy, publicity, contractual, or other rights;</li>
            <li>Any identifiable person appearing in the submission has provided any permission required for the intended use;</li>
            <li>The submission is accurate to the extent it states facts about you;</li>
            <li>The submission does not contain unlawful or malicious material; and</li>
            <li>Tha Fix’s authorized use will not require payment to you or another person unless we separately agree in writing.</li>
          </UL>
          <P>You remain responsible for your User Submissions and any consequences arising from them.</P>

          <H2>11. Comments and Public Profiles</H2>
          <P>Commenting may be limited to eligible paid members. Members may be permitted to comment using either their real name or an approved screen name.</P>
          <P>Comments and submitted profile information may be publicly visible. Depending on the feature, public information may include:</P>
          <UL>
            <li>A display name or screen name;</li>
            <li>A profile photograph;</li>
            <li>A biography;</li>
            <li>Business or professional information;</li>
            <li>Social-media or website links;</li>
            <li>Guest-profile information;</li>
            <li>Comments and the date they were posted; and</li>
            <li>Founder or other membership recognition, when applicable.</li>
          </UL>
          <P>Do not publish information you do not want made public. Never post another person’s sensitive or private information without lawful authorization.</P>
          <P>Tha Fix may display, organize, moderate, preserve, quote, excerpt, promote, or edit comments for formatting, length, clarity, technical compatibility, or compliance. We will not intentionally change the substantive meaning of a comment when making an ordinary formatting edit.</P>
          <P>The ability to comment or maintain a public profile is a privilege, not an unconditional right.</P>

          <H2>12. Prohibited Conduct</H2>
          <P>You may not use the Services to:</P>
          <UL>
            <li>Violate any law, regulation, court order, or another person’s rights;</li>
            <li>Threaten, harass, stalk, intimidate, abuse, or encourage harm against another person;</li>
            <li>Promote hatred or unlawful discrimination against a protected group;</li>
            <li>Post graphic sexual content or sexually exploitative material;</li>
            <li>Glorify, encourage, or provide instructions for violence;</li>
            <li>Recruit for or materially promote gang activity;</li>
            <li>Offer, arrange, or facilitate illegal drug sales;</li>
            <li>Offer, arrange, or facilitate firearm sales through the Services;</li>
            <li>Engage in fraudulent fundraising, deceptive solicitations, scams, or financial fraud;</li>
            <li>Dox another person or disclose private, confidential, identifying, financial, medical, or location information without authorization;</li>
            <li>Impersonate another person, organization, business, or Tha Fix representative;</li>
            <li>Misrepresent your identity, qualifications, affiliation, or membership status;</li>
            <li>Post spam, repetitive promotions, unauthorized advertisements, or deceptive links;</li>
            <li>Upload malware, malicious code, corrupted files, or technology intended to disrupt or compromise the Services;</li>
            <li>Infringe copyrights, trademarks, publicity rights, privacy rights, or other intellectual-property rights;</li>
            <li>Circumvent paywalls, access restrictions, security controls, membership requirements, or moderation measures;</li>
            <li>Scrape, harvest, copy, or systematically collect content or user information without authorization;</li>
            <li>Use automated systems or bots in a way that burdens, manipulates, or disrupts the Services;</li>
            <li>Manipulate comments, engagement, polls, reviews, transactions, or membership features;</li>
            <li>Share, resell, or transfer account access or paid content;</li>
            <li>Interfere with another person’s use of the Services;</li>
            <li>Retaliate against a person who submits a good-faith report; or</li>
            <li>Help another person engage in prohibited conduct.</li>
          </UL>
          <P>Context, newsworthiness, documentary value, criticism, education, or public-interest discussion may be considered during moderation, but does not guarantee that content will remain available.</P>

          <H2>13. Moderation and Enforcement</H2>
          <P>Tha Fix may investigate suspected violations and may, when reasonably appropriate:</P>
          <UL>
            <li>Reject, hide, edit, or remove content;</li>
            <li>Restrict or disable commenting;</li>
            <li>Limit access to a feature;</li>
            <li>Remove public-profile information;</li>
            <li>Issue a warning;</li>
            <li>Suspend or terminate an account or membership;</li>
            <li>Cancel an order or transaction;</li>
            <li>Preserve information relevant to an investigation;</li>
            <li>Report activity to a service provider or lawful authority; or</li>
            <li>Take other reasonable protective action.</li>
          </UL>
          <P>We may act without advance notice when we reasonably believe immediate action is necessary to protect users, Tha Fix, a third party, the integrity of the Services, or legal rights.</P>
          <P>We are not required to monitor every submission and cannot guarantee that objectionable or inaccurate content will be identified immediately.</P>
          <P>If an account or membership is terminated for misconduct, the user will generally lose access without a refund, subject to applicable law and the Membership Terms.</P>
          <P>Failure to enforce a provision in one instance does not waive our right to enforce it later.</P>

          <H2>14. Reporting Copyright or Intellectual-Property Concerns</H2>
          <P>If you believe content available through Tha Fix infringes your copyright or another intellectual-property right, send a written notice to:</P>
          <P><strong>Back To Marketing LLC / Tha Fix</strong></P>
          <P><strong>Email:</strong> info@thafix502.com</P>
          <P><strong>Subject:</strong> Copyright or Intellectual-Property Complaint</P>
          <P>Your notice should include:</P>
          <OL>
            <li>Your name and contact information;</li>
            <li>Identification of the protected work or right;</li>
            <li>Identification and location of the allegedly infringing material;</li>
            <li>A good-faith statement explaining why the use is not authorized;</li>
            <li>A statement that the information in the notice is accurate and that you are authorized to act for the rights holder; and</li>
            <li>Your physical or electronic signature.</li>
          </OL>
          <P>We may request additional information, remove or restrict access to disputed material, notify the person who submitted it, and take action against repeat infringers when appropriate.</P>
          <P>This contact information does not represent that Tha Fix has completed registration of a designated DMCA agent with the U.S. Copyright Office.</P>

          <H2>15. Third-Party Services and Content</H2>
          <P>The Services may contain third-party links, embedded videos, advertisements, sponsor materials, guest statements, payment tools, merchandise-fulfillment services, social-media features, or other third-party content.</P>
          <P>Third parties operate under their own terms and privacy policies. Tha Fix does not control and is not responsible for:</P>
          <UL>
            <li>The accuracy of third-party or guest statements;</li>
            <li>The availability or security of an external service;</li>
            <li>A third party’s collection or use of information;</li>
            <li>External products, services, promises, or business practices;</li>
            <li>Shipping or fulfillment delays outside our reasonable control; or</li>
            <li>Loss resulting from your separate dealings with a third party.</li>
          </UL>
          <P>A link, embed, guest appearance, or sponsor reference does not necessarily constitute an endorsement.</P>

          <H2>16. Service Changes and Availability</H2>
          <P>We may add, change, limit, suspend, or discontinue content, features, comments, memberships, products, or Services.</P>
          <P>We do not guarantee that the Services will always be uninterrupted, secure, error-free, or available on every device. Maintenance, security incidents, third-party outages, legal requirements, or circumstances outside our control may affect availability.</P>
          <P>Changes affecting paid-member rights remain subject to the applicable Membership Terms, transaction terms, and applicable law.</P>

          <H2>17. Disclaimers</H2>
          <P>To the fullest extent permitted by law, the Services are provided on an <strong>“as is”</strong> and <strong>“as available”</strong> basis.</P>
          <P>Back To Marketing LLC disclaims all warranties not expressly provided in writing, including implied warranties of merchantability, fitness for a particular purpose, title, noninfringement, accuracy, availability, and quiet enjoyment.</P>
          <P>We do not warrant that:</P>
          <UL>
            <li>Content will be complete, current, or error-free;</li>
            <li>The Services will always be available or secure;</li>
            <li>Defects will be corrected immediately;</li>
            <li>Content or communications will produce a particular result;</li>
            <li>A membership will create business, social, promotional, or financial opportunities; or</li>
            <li>Information provided by guests, commenters, sponsors, or third parties is accurate.</li>
          </UL>
          <P>You are responsible for evaluating information and deciding whether and how to act on it.</P>
          <P>Some jurisdictions do not permit certain warranty exclusions. In those jurisdictions, these exclusions apply only to the extent permitted by law.</P>

          <H2>18. Limitation of Liability</H2>
          <P>To the fullest extent permitted by law, Back To Marketing LLC and its owners, officers, employees, contractors, agents, affiliates, licensors, and service providers will not be liable for indirect, incidental, special, exemplary, punitive, or consequential damages, or for lost profits, lost revenue, lost data, loss of goodwill, business interruption, or reputational harm arising from or related to the Services.</P>
          <P>To the fullest extent permitted by law, the total combined liability of Back To Marketing LLC for all claims arising from or relating to the Services will not exceed the greater of:</P>
          <OL>
            <li>The amount you paid directly to Back To Marketing LLC through the Services during the 12 months preceding the event giving rise to the claim; or</li>
            <li>One hundred U.S. dollars ($100).</li>
          </OL>
          <P>These limitations do not apply to liability that cannot legally be limited or excluded. Your separate rights concerning a product, membership, payment, or transaction may also be governed by applicable law and the relevant transaction terms.</P>

          <H2>19. Indemnification</H2>
          <P>To the fullest extent permitted by law, you agree to defend, indemnify, and hold harmless Back To Marketing LLC and its owners, officers, employees, contractors, agents, affiliates, licensors, and service providers from claims, liabilities, judgments, losses, damages, and reasonable costs and attorneys’ fees arising from:</P>
          <UL>
            <li>Your unlawful or unauthorized use of the Services;</li>
            <li>Your User Submissions;</li>
            <li>Your violation of these Terms;</li>
            <li>Your violation of another person’s rights; or</li>
            <li>Fraud, willful misconduct, or misrepresentation by you.</li>
          </UL>
          <P>We may control the defense of a covered claim, and you agree to reasonably cooperate. You may not settle a claim in a manner that imposes liability or obligations on Tha Fix without our written consent.</P>

          <H2>20. Informal Dispute Resolution</H2>
          <P>Before starting arbitration or filing a lawsuit, the party raising a dispute must send the other party a written notice describing:</P>
          <UL>
            <li>The party’s name and contact information;</li>
            <li>The account or transaction involved;</li>
            <li>The facts supporting the dispute;</li>
            <li>The specific relief requested; and</li>
            <li>A good-faith calculation of any requested payment.</li>
          </UL>
          <P>Notices to Tha Fix must be emailed to <strong>info@thafix502.com</strong> with the subject line <strong>“Notice of Dispute.”</strong></P>
          <P>The parties will attempt in good faith to resolve the dispute for at least 30 days after a complete notice is received. Any applicable filing deadline will be tolled during this 30-day period to the extent permitted by law.</P>

          <H2>21. Binding Individual Arbitration</H2>
          <P><strong>Please read this section carefully. It affects your right to go to court.</strong></P>
          <P>Except for the excluded claims identified below, you and Back To Marketing LLC agree that any dispute, claim, or controversy arising from or relating to the Services, these Terms, a membership, a purchase, a User Submission, or the relationship between you and Tha Fix will be resolved through final and binding individual arbitration.</P>
          <P>The Federal Arbitration Act governs the interpretation and enforcement of this arbitration agreement. The arbitration will be administered by the American Arbitration Association (“AAA”) under its applicable Consumer Arbitration Rules, as modified by these Terms.</P>
          <P>Information about the AAA Consumer Arbitration Rules and filing process is available at <a href="https://www.adr.org" target="_blank" rel="noopener noreferrer" className="underline">adr.org</a>.</P>
          <P>The arbitrator may award the same individual remedies that would be available in court, subject to these Terms and applicable law. The arbitrator will issue a reasoned written decision when required by the applicable rules.</P>
          <P>Consumer filing fees and other arbitration costs will be allocated according to the AAA rules and applicable law. Back To Marketing LLC will pay costs it is required to pay under those rules or applicable law.</P>
          <P>The arbitration may be conducted by telephone, video conference, written submissions, or an in-person hearing at a reasonably convenient location, consistent with the applicable AAA rules.</P>
          <H3>Claims excluded from mandatory arbitration</H3>
          <P>Either party may:</P>
          <UL>
            <li>Bring an eligible individual claim in small-claims court;</li>
            <li>Seek emergency or temporary injunctive relief from a court to prevent imminent unauthorized access, cybersecurity harm, intellectual-property infringement, or misuse of confidential information; or</li>
            <li>Bring a claim that applicable law prohibits from being arbitrated.</li>
          </UL>
          <P>Seeking temporary relief does not waive arbitration of the remaining claims.</P>

          <H2>22. Class-Action and Representative-Action Waiver</H2>
          <P>To the fullest extent permitted by law, you and Back To Marketing LLC agree that each party may bring claims only in an individual capacity.</P>
          <P>Neither party may participate as a plaintiff, claimant, representative, or class member in a class, collective, consolidated, coordinated, mass, private-attorney-general, or representative action in arbitration.</P>
          <P>The arbitrator may not combine the claims of different people or preside over any class, collective, or representative proceeding without the written consent of every affected party.</P>
          <P>If a court determines that a particular claim or request for relief cannot lawfully be subject to this waiver, only that claim or request will proceed in court after all arbitrable matters have been completed, unless applicable law requires otherwise.</P>

          <H2>23. Jury-Trial Waiver</H2>
          <P>For any dispute that is permitted to proceed in court, you and Back To Marketing LLC knowingly and voluntarily waive the right to a trial by jury to the fullest extent permitted by law.</P>

          <H2>24. Right to Opt Out of Arbitration</H2>
          <P>You may opt out of Sections 21 through 23 by emailing <strong>info@thafix502.com</strong> within 30 days after you first accept these Terms.</P>
          <P>Your notice must:</P>
          <UL>
            <li>Use the subject line <strong>“Arbitration Opt-Out”</strong>;</li>
            <li>State your full name;</li>
            <li>Identify the email address associated with your account;</li>
            <li>State that you are opting out of the arbitration agreement; and</li>
            <li>Include the date of your notice.</li>
          </UL>
          <P>An opt-out applies only to the person who submits it. Opting out of arbitration will not affect the other provisions of these Terms or your ability to use the Services.</P>

          <H2>25. Governing Law and Court Venue</H2>
          <P>Except where federal law applies or applicable law requires otherwise, these Terms and any dispute arising from them are governed by the laws of the Commonwealth of Kentucky, without regard to conflict-of-law principles.</P>
          <P>Any dispute permitted to proceed in court must be filed exclusively in a state court located in Jefferson County, Kentucky, or in the United States District Court with jurisdiction over Jefferson County, Kentucky. You and Back To Marketing LLC consent to those courts’ personal jurisdiction and venue.</P>

          <H2>26. Suspension and Termination</H2>
          <P>You may stop using the Services at any time. Account deletion, membership cancellation, and refund rights are governed by the applicable account controls, Privacy Policy, Membership Terms, and transaction terms.</P>
          <P>We may suspend, restrict, or terminate access when we reasonably believe you have:</P>
          <UL>
            <li>Violated these Terms or another applicable policy;</li>
            <li>Created risk or legal exposure;</li>
            <li>Used the Services fraudulently or unlawfully;</li>
            <li>Threatened the safety or rights of another person;</li>
            <li>Failed required eligibility or identity verification; or</li>
            <li>Materially disrupted the Services.</li>
          </UL>
          <P>Termination does not eliminate payment obligations or liabilities that arose before termination.</P>
          <P>Sections concerning ownership, licenses, disclaimers, liability, indemnification, disputes, and any provisions that logically should survive will remain effective after termination.</P>

          <H2>27. Changes to These Terms</H2>
          <P>We may update these Terms to reflect changes in the Services, business practices, legal requirements, or risk controls.</P>
          <P>The revised Terms will display an updated “Last Updated” date. When required, we will provide additional notice or request renewed acceptance.</P>
          <P>Changes will apply prospectively from their effective date. A material change to the dispute-resolution provisions will not be applied retroactively to a dispute for which a complete written notice was received before the change, unless both parties agree.</P>
          <P>Your continued use after revised Terms become effective constitutes acceptance when permitted by law.</P>

          <H2>28. Electronic Communications</H2>
          <P>You consent to receive agreements, notices, disclosures, receipts, and other transaction-related communications electronically, including through the Services or at the email address associated with your account.</P>
          <P>You are responsible for keeping your email address current. Marketing messages will be handled in accordance with the Privacy Policy and applicable law.</P>

          <H2>29. Assignment</H2>
          <P>You may not transfer or assign your rights or obligations under these Terms without our written consent.</P>
          <P>Back To Marketing LLC may assign these Terms in connection with a merger, acquisition, reorganization, sale of assets, financing, change of control, or transfer of the Tha Fix business, subject to applicable law.</P>

          <H2>30. Severability</H2>
          <P>Except as specifically provided in the arbitration and class-waiver sections, if any provision of these Terms is found unenforceable, it will be enforced to the greatest extent legally permissible, and the remaining provisions will remain effective.</P>

          <H2>31. No Waiver</H2>
          <P>A failure or delay in enforcing a provision does not waive the right to enforce that provision or any other provision later.</P>

          <H2>32. Entire Agreement</H2>
          <P>These Terms, together with the Privacy Policy and any applicable additional terms, constitute the agreement between you and Back To Marketing LLC regarding the Services and replace prior understandings concerning the same subject.</P>

          <H2>33. Contact Us</H2>
          <P>Questions about these Terms may be directed to:</P>
          <P><strong>Back To Marketing LLC</strong></P>
          <P><strong>Doing business as Tha Fix</strong></P>
          <P>Louisville, Kentucky</P>
          <P><strong>Email:</strong> info@thafix502.com</P>
          <P><strong>Website:</strong> thafix502.com</P>
        </div>
      </section>
    </>
  );
}
