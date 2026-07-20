import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/membership-terms")({
  head: () => ({
    meta: [
      { title: "Membership Terms — Tha Fix" },
      { name: "description", content: "Terms and conditions governing Tha Fix paid memberships." },
      { property: "og:title", content: "Membership Terms" },
      { property: "og:description", content: "Terms and conditions governing Tha Fix paid memberships." },
    ],
  }),
  component: MembershipTermsPage,
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

function MembershipTermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Membership Terms" />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-4 text-foreground/80 leading-relaxed">
          <p className="font-bold leading-tight">
            Effective Date: July 19, 2026
            <br />
            Last Updated: July 19, 2026
          </p>

          <P>
            These Membership Terms (“Membership Terms”) govern paid memberships offered through <strong>thafix502.com</strong> and related Tha Fix services.
          </P>
          <P>
            Tha Fix is operated by <strong>Back To Marketing LLC</strong>, doing business as <strong>Tha Fix</strong> (“Tha Fix,” “we,” “us,” or “our”), from Louisville, Kentucky.
          </P>
          <P>
            By applying for, purchasing, renewing, or using a Tha Fix membership, you agree to these Membership Terms, our Terms of Use, Privacy Policy, Comment and Community Guidelines, and any additional terms presented during enrollment or checkout.
          </P>
          <P>Please review these Membership Terms before purchasing a membership.</P>

          <H2>1. Eligibility</H2>
          <P>Tha Fix memberships are available only to individuals who:</P>
          <UL>
            <li>Are at least 18 years old;</li>
            <li>Can legally enter into a binding agreement;</li>
            <li>Provide accurate and complete registration information;</li>
            <li>Maintain only one account unless Tha Fix gives written permission otherwise; and</li>
            <li>Meet any eligibility or verification requirements associated with the selected membership.</li>
          </UL>
          <P>Membership accounts and benefits are personal. They may not be shared, divided, resold, transferred, assigned, inherited, or used by another person.</P>
          <P>We may require reasonable identity, age, payment, or eligibility verification before approving or continuing a membership.</P>

          <H2>2. Membership Plans</H2>
          <P>Tha Fix initially offers the following paid-membership plans.</P>

          <H3>The Audience</H3>
          <P><strong>First-wave price:</strong> $7 per month for the first 100 qualifying Audience members.</P>
          <P><strong>Standard price:</strong> $9 per month after the first-wave allocation is filled.</P>
          <P>The Audience includes:</P>
          <UL>
            <li>Early access to new episodes, generally 24–48 hours before public release;</li>
            <li>Members-only bonus clips;</li>
            <li>Access to members-only discussions through the community feed;</li>
            <li>The ability to submit questions and topics for episodes; and</li>
            <li>The ability to comment on blog posts.</li>
          </UL>
          <P>Early-access timing may occasionally change because of production, editorial, legal, technical, sponsorship, or scheduling requirements.</P>
          <P>Submitting a question or topic does not guarantee that it will be selected, answered, or included in an episode.</P>

          <H3>The Network</H3>
          <P><strong>First-wave price:</strong> $19 per month for the first 100 qualifying Network members.</P>
          <P><strong>Standard price:</strong> $29 per month after the first-wave allocation is filled.</P>
          <P>The Network includes:</P>
          <UL>
            <li>All active benefits included with The Audience;</li>
            <li>Full access to Tha Fix After Hours content;</li>
            <li>Behind-the-scenes content and raw discussions;</li>
            <li>Voting opportunities concerning episode topics;</li>
            <li>A 10% discount on qualifying merchandise purchases;</li>
            <li>A monthly live webinar or networking session;</li>
            <li>Private-community access; and</li>
            <li>The ability to create and publish blog posts, subject to the editorial and content requirements in these Membership Terms.</li>
          </UL>
          <P>Voting provides an opportunity to influence content planning but does not transfer editorial control or guarantee that the winning topic will be produced.</P>

          <H3>The Founder</H3>
          <P><strong>Price:</strong> $297 as a one-time payment.</P>
          <P><strong>Availability:</strong> Limited to 100 approved and fully paid Founder members.</P>
          <P>The Founder includes:</P>
          <UL>
            <li>All active benefits included with The Network;</li>
            <li>Lifetime access to Tha Fix content, as “lifetime” is defined below;</li>
            <li>One free exclusive Tha Fix T-shirt;</li>
            <li>Recognition on the Tha Fix website as a Founding Member;</li>
            <li>A private strategy and networking session each quarter;</li>
            <li>A 15% discount on qualifying merchandise purchases;</li>
            <li>Exclusive members-only documentary content;</li>
            <li>Priority consideration and placement in collaborations and guest opportunities;</li>
            <li>A featured spotlight involving the Founder’s eligible brand, product, or service;</li>
            <li>Early access to future events, monetization opportunities, and platform features;</li>
            <li>Opportunity notifications involving potential guest slots, brand collaborations, and event features; and</li>
            <li>Priority question-and-answer submission with a guaranteed response.</li>
          </UL>
          <P>Founder opportunities remain subject to eligibility, capacity, scheduling, editorial standards, legal requirements, brand suitability, and the continued operation of the applicable program.</P>
          <P>“Priority” means Founder submissions receive consideration before or above ordinary submissions when reasonably practicable. Except for the specifically promised brand spotlight and response to a priority question, priority status does not guarantee selection, participation, publication, compensation, revenue, or a particular outcome.</P>
          <P>A guaranteed response means Tha Fix will provide a reasonable response to an eligible priority submission. It does not guarantee a particular answer, conclusion, response format, publication, or immediate response time.</P>

          <H3>Inner Circle</H3>
          <P>After all Founder positions have been secured and the Founder offer closes, Tha Fix intends to replace that offer with an <strong>Inner Circle membership priced at $497 as a one-time payment.</strong></P>
          <P>Inner Circle is a separate membership and does not confer Founder status or Founding Member recognition unless expressly stated otherwise.</P>
          <P>The benefits, eligibility requirements, and conditions applicable to Inner Circle will be displayed before it becomes available for purchase. No person will be charged for an Inner Circle membership without being shown and agreeing to the applicable offer terms.</P>

          <H2>3. Meaning of Founder “Lifetime Access”</H2>
          <P>For the Founder membership, “lifetime access” means access for as long as Tha Fix continues to operate as an active business and continues to provide membership content or substantially comparable member services.</P>
          <P>It does not mean the natural lifetime of the Founder member, Back To Marketing LLC, its owners, or any other individual.</P>
          <P>Founder access may end if:</P>
          <UL>
            <li>Tha Fix permanently ceases business operations;</li>
            <li>Tha Fix permanently discontinues its membership and content services;</li>
            <li>Continued performance becomes unlawful or impossible;</li>
            <li>The Founder receives a refund or initiates a successful chargeback;</li>
            <li>The Founder voluntarily relinquishes the membership; or</li>
            <li>The Founder’s access is terminated for misconduct or violation of applicable terms.</li>
          </UL>
          <P>Founder membership has no cash-redemption, ownership, equity, voting, investment, inheritance, resale, or transfer value.</P>
          <P>The one-time Founder price does not guarantee that every current feature, platform, content category, or benefit will remain unchanged indefinitely.</P>

          <H2>4. Securing a Founder Position</H2>
          <P>Founder membership requires both:</P>
          <OL>
            <li>Submission of the required application and payment information; and</li>
            <li>Approval by Tha Fix and successful completion of the $297 payment.</li>
          </OL>
          <P>Application and payment may occur together. Payment does not, by itself, guarantee approval or secure a Founder position.</P>
          <P>If an applicant is not approved after payment has been collected, Tha Fix will issue a full refund. The applicant will not receive Founder access, recognition, or a secured Founder position.</P>
          <P>A position is officially secured only after approval and successful payment. Tha Fix may display the number of available or secured positions, but temporary technical, payment-processing, or application-review delays may affect real-time availability.</P>
          <P>A Founder position becomes available again if:</P>
          <UL>
            <li>An application is rejected;</li>
            <li>The payment fails;</li>
            <li>The payment is refunded;</li>
            <li>The applicant exercises the 30-day guarantee;</li>
            <li>The payment is successfully disputed or charged back; or</li>
            <li>The applicant otherwise fails to complete the approval process.</li>
          </UL>
          <P>Tha Fix’s goal is to maintain 100 official, approved, and fully paid Founders before closing the Founder offer.</P>

          <H2>5. Founder Recognition</H2>
          <P>An approved Founder may choose to be recognized using:</P>
          <UL>
            <li>Their real name;</li>
            <li>An approved business or screen name; or</li>
            <li>An anonymous designation.</li>
          </UL>
          <P>Founder names, business names, and screen names remain subject to reasonable formatting, accuracy, intellectual-property, impersonation, safety, and content requirements.</P>
          <P>A Founder may request a change to how their recognition appears, subject to reasonable verification and technical limitations.</P>
          <P>If an active Founder is later terminated for serious misconduct, all membership access and benefits end. However, the historical Founding Member recognition may remain on the Founder list.</P>
          <P>Continued historical recognition does not indicate that the person remains an active member, is in good standing, or is endorsed by Tha Fix. Tha Fix may identify a listing as inactive where appropriate.</P>
          <P>Founder recognition will be removed if the original Founder transaction is refunded, charged back, fraudulent, unapproved, or never successfully completed. Tha Fix may also withhold or modify a listing when required by law, necessary to prevent impersonation or infringement, or requested by the Founder.</P>

          <H2>6. Founder T-Shirt</H2>
          <P>Each eligible Founder is entitled to one exclusive Tha Fix T-shirt.</P>
          <P>The Founder must provide accurate size, name, and delivery information within any stated fulfillment deadline. Products remain subject to reasonable availability, production limitations, and fulfillment requirements.</P>
          <P>If the originally planned item becomes unavailable, Tha Fix may provide a reasonably comparable replacement. Shipping, fulfillment, exchange, and delivery matters are subject to the merchandise and shipping policies presented by Tha Fix.</P>
          <P>The T-shirt benefit cannot be redeemed for cash and ordinarily cannot be replaced after successful delivery unless required by law or the item arrives damaged or materially defective.</P>

          <H2>7. Monthly Billing and Automatic Renewal</H2>
          <P>The Audience and The Network are automatically renewing monthly memberships.</P>
          <P>By purchasing one of these plans, you authorize Back To Marketing LLC and Stripe, or another disclosed payment processor, to charge your selected payment method:</P>
          <UL>
            <li>On the date of your initial purchase; and</li>
            <li>Approximately once each month thereafter,</li>
          </UL>
          <P>until you cancel or the membership is otherwise terminated.</P>
          <P>The amount charged will be the membership price disclosed at enrollment, plus any legally required taxes or charges disclosed at checkout.</P>
          <P>Billing dates may shift slightly because of weekends, differing month lengths, payment-processing issues, or circumstances outside our reasonable control.</P>

          <H2>8. First-Wave Price Protection</H2>
          <P>A first-wave Audience or Network member will retain the introductory monthly price for as long as that membership remains continuously active and in good standing.</P>
          <P>Price protection ends if:</P>
          <UL>
            <li>The member cancels;</li>
            <li>The membership terminates;</li>
            <li>A payment remains unpaid after the applicable grace period;</li>
            <li>The member changes to a different plan, unless otherwise stated; or</li>
            <li>The membership is refunded or successfully charged back.</li>
          </UL>
          <P>A former member who later rejoins must pay the price available at the time of re-enrollment. A previously held first-wave position or price cannot be reclaimed.</P>
          <P>A brief payment failure corrected within the three-business-day grace period will not, by itself, eliminate first-wave pricing.</P>

          <H2>9. Payment Authorization and Information</H2>
          <P>You agree to provide valid and current payment information and authorize our payment processor to store and use that information for authorized charges.</P>
          <P>Tha Fix does not directly receive or store complete payment-card numbers when Stripe or another payment processor handles the transaction.</P>
          <P>You are responsible for:</P>
          <UL>
            <li>Keeping your billing information current;</li>
            <li>Ensuring that your payment method can accept charges;</li>
            <li>Reviewing receipts and account activity; and</li>
            <li>Promptly reporting suspected billing errors.</li>
          </UL>
          <P>Payment processing remains subject to the payment provider’s applicable terms and privacy practices.</P>

          <H2>10. Failed Payments and Grace Period</H2>
          <P>If a recurring monthly payment fails, Tha Fix will provide a grace period of three business days to correct the payment problem.</P>
          <P>For this purpose, a “business day” generally means Monday through Friday, excluding federal holidays.</P>
          <P>During the grace period, Tha Fix may:</P>
          <UL>
            <li>Retry the payment through Stripe;</li>
            <li>Notify the member about the failed payment;</li>
            <li>Ask the member to update their payment method; and</li>
            <li>Temporarily maintain or limit membership access.</li>
          </UL>
          <P>If payment is not successfully completed by the end of the grace period, Tha Fix may suspend or terminate paid access and benefits.</P>
          <P>If the membership terminates for nonpayment, rejoining will be subject to the then-current price and availability. First-wave pricing is not guaranteed after termination.</P>

          <H2>11. Cancellation</H2>
          <P>Members may cancel a recurring monthly membership through the member dashboard.</P>
          <P>Cancellation stops future automatic renewals. Unless a refund is issued or access is terminated for a separate reason, the member will retain paid access through the end of the current billing period.</P>
          <P>After that period:</P>
          <UL>
            <li>Paid access ends;</li>
            <li>The member may no longer use members-only features;</li>
            <li>Merchandise discounts end;</li>
            <li>The ability to post new comments ends;</li>
            <li>The ability to create or publish member blog posts ends; and</li>
            <li>Other membership benefits end.</li>
          </UL>
          <P>Cancellation does not automatically refund an already completed payment.</P>
          <P>Members should cancel before the next billing date to avoid another charge. If the dashboard cancellation function is unavailable because of a technical problem, the member should contact info@thafix502.com before renewal and retain evidence of the request.</P>
          <P>One-time Founder and Inner Circle purchases do not automatically renew and therefore do not require recurring-billing cancellation.</P>

          <H2>12. Thirty-Day Money-Back Guarantee</H2>
          <P>Tha Fix provides a 30-calendar-day money-back guarantee on the initial purchase of an eligible membership.</P>
          <P>The guarantee:</P>
          <UL>
            <li>Is available once per person for each membership plan;</li>
            <li>Applies to the first successful payment for that plan;</li>
            <li>Includes initial Founder and Inner Circle purchases;</li>
            <li>Requires a complete refund request within 30 calendar days after the initial payment;</li>
            <li>Does not apply to later monthly renewals;</li>
            <li>Cannot be repeatedly used by canceling and rejoining; and</li>
            <li>May require reasonable identity, account, and transaction verification.</li>
          </UL>
          <P>A qualifying refund will return the amount paid for the membership, subject to applicable law.</P>
          <P>When the refund is processed:</P>
          <UL>
            <li>Membership access and benefits end immediately;</li>
            <li>Any first-wave price protection ends;</li>
            <li>A refunded Founder position becomes available to another applicant;</li>
            <li>Founder recognition is removed;</li>
            <li>Unused discounts and opportunities expire; and</li>
            <li>The person must pay the then-current price and satisfy current availability and eligibility requirements if they later reapply.</li>
          </UL>
          <P>Merchandise already shipped, products already redeemed, or other tangible benefits received during the guarantee period may be handled under the applicable merchandise or promotion terms. Tha Fix may deduct or require the return of a separately valued physical benefit when permitted by law and clearly disclosed before purchase.</P>
          <P>Refund requests should be submitted through the account-support process or to info@thafix502.com with sufficient information to identify the membership transaction.</P>

          <H2>13. Accidental Monthly Renewals</H2>
          <P>A member may request a refund of an accidental Audience or Network renewal by contacting Tha Fix within two calendar days after the renewal charge.</P>
          <P>If approved under this policy:</P>
          <UL>
            <li>The full renewal payment will be refunded;</li>
            <li>Membership access will end when the refund is processed;</li>
            <li>The refunded billing period will not remain available; and</li>
            <li>Any associated first-wave price protection will end because the membership is no longer continuously active.</li>
          </UL>
          <P>This policy applies only to recurring monthly renewal charges. Initial purchases are governed by the 30-day money-back guarantee.</P>
          <P>Requests made more than two calendar days after the renewal charge are generally nonrefundable except where required by law or where Tha Fix approves an exception.</P>

          <H2>14. Other Refund Rules</H2>
          <P>Except for the 30-day guarantee, the two-day accidental-renewal policy, an unapproved Founder application, or a right provided by law:</P>
          <UL>
            <li>Membership payments are nonrefundable;</li>
            <li>Partial billing periods are not prorated;</li>
            <li>Failure to use benefits does not create a refund right;</li>
            <li>Missing a webinar, session, opportunity, or early-access period does not create a refund right;</li>
            <li>Cancellation does not retroactively refund prior billing periods; and</li>
            <li>Dissatisfaction with a moderation, editorial, collaboration, or content-selection decision does not create a refund right.</li>
          </UL>
          <P>Nothing in these Membership Terms limits any nonwaivable refund right provided by applicable law.</P>

          <H2>15. Merchandise Discounts</H2>
          <P>Eligible Network members receive 10% off qualifying merchandise. Eligible Founder members receive 15% off qualifying merchandise.</P>
          <P>Unless expressly stated otherwise:</P>
          <UL>
            <li>Discounts apply only while the applicable membership is active;</li>
            <li>Discounts cannot be combined with another offer;</li>
            <li>Discounts cannot be sold, transferred, or shared;</li>
            <li>Certain limited, collaborative, charitable, clearance, or specially priced products may be excluded;</li>
            <li>Discounts do not apply retroactively;</li>
            <li>Discounts do not apply to shipping, taxes, support payments, memberships, or event tickets unless expressly stated; and</li>
            <li>Tha Fix may use account-based or promotional-code controls to verify eligibility.</li>
          </UL>
          <P>If a member receives more than one potential discount, only the highest eligible discount will ordinarily apply.</P>

          <H2>16. Live Sessions, Networking, and Private Communities</H2>
          <P>Live webinars, networking sessions, strategy sessions, private communities, and similar benefits are subject to:</P>
          <UL>
            <li>Reasonable scheduling;</li>
            <li>Capacity;</li>
            <li>Technology availability;</li>
            <li>Member eligibility;</li>
            <li>Community standards;</li>
            <li>Host and guest availability; and</li>
            <li>Safety and legal requirements.</li>
          </UL>
          <P>Tha Fix may reschedule, combine, change the format of, or provide a reasonably comparable replacement for a session when necessary.</P>
          <P>Membership does not guarantee:</P>
          <UL>
            <li>Attendance by a particular guest;</li>
            <li>Individual speaking time;</li>
            <li>A business introduction;</li>
            <li>A collaboration;</li>
            <li>Employment;</li>
            <li>Revenue;</li>
            <li>Investment;</li>
            <li>Sponsorship;</li>
            <li>Publicity; or</li>
            <li>Any particular professional or financial result.</li>
          </UL>
          <P>Members remain responsible for evaluating contacts, opportunities, advice, and business relationships arising from community participation.</P>

          <H2>17. Blog Comments</H2>
          <P>All active paid-membership tiers may comment on eligible Tha Fix blog posts.</P>
          <P>Members may use their real name or an approved screen name. Comments remain subject to the Terms of Use, Privacy Policy, and Comment and Community Guidelines.</P>
          <P>Tha Fix may moderate, hide, edit for formatting, restrict, or remove comments and may suspend commenting privileges when reasonably necessary.</P>
          <P>When paid membership access expires or terminates, the former member may no longer post new comments. Existing comments may remain publicly visible unless:</P>
          <UL>
            <li>The former member deletes them through an available account control;</li>
            <li>The person submits an appropriate removal request;</li>
            <li>Tha Fix removes or restricts them through moderation; or</li>
            <li>Retention or removal is required by law.</li>
          </UL>
          <P>Cancellation does not require Tha Fix to remove discussions, replies, quotations, archives, or other content that incorporated a comment before cancellation.</P>

          <H2>18. Member-Created Blog Posts</H2>
          <P>Active Network, Founder, and any other expressly eligible members may create and publish blog posts through the tools Tha Fix provides.</P>
          <P>Member-created posts remain subject to:</P>
          <UL>
            <li>The Terms of Use;</li>
            <li>The Privacy Policy;</li>
            <li>Editorial and formatting requirements;</li>
            <li>Comment and Community Guidelines;</li>
            <li>Intellectual-property rules;</li>
            <li>Technical limitations; and</li>
            <li>Reasonable moderation.</li>
          </UL>
          <P>Tha Fix may review, format, categorize, correct technical issues in, request revisions to, refuse, unpublish, or remove a post that violates these requirements or creates legal, safety, operational, or reputational risk.</P>
          <P>Publishing access does not guarantee:</P>
          <UL>
            <li>Homepage placement;</li>
            <li>Featured-post status;</li>
            <li>A specific number of views;</li>
            <li>Promotion through Tha Fix channels;</li>
            <li>Advertising or sponsorship revenue;</li>
            <li>Payment to the author; or</li>
            <li>Permanent publication.</li>
          </UL>
          <P>Ownership and licensing of member-created posts are governed by the User Submissions provisions in the Terms of Use unless a separate written contributor agreement applies.</P>
          <P>When membership ends, the ability to create or publish new posts ends. Previously published posts may remain available under the license granted in the Terms of Use, although Tha Fix may remove them at its discretion.</P>

          <H2>19. Founder Spotlights and Opportunities</H2>
          <P>Founder spotlights, collaborations, guest opportunities, event features, and opportunity drops require reasonable cooperation from the Founder.</P>
          <P>A Founder may be required to provide:</P>
          <UL>
            <li>Accurate information;</li>
            <li>Original or properly licensed images and media;</li>
            <li>Business descriptions and links;</li>
            <li>Availability information;</li>
            <li>Necessary permissions or releases; and</li>
            <li>Confirmation that the featured business, product, or service is lawful and appropriate for the Tha Fix audience.</li>
          </UL>
          <P>Tha Fix may determine the format, timing, placement, duration, and editorial presentation of a spotlight. Scheduling remains subject to production capacity and eligibility.</P>
          <P>Tha Fix may decline or discontinue the promotion of a business, product, service, or proposed collaboration that is unlawful, deceptive, unsafe, infringing, materially inconsistent with Tha Fix standards, or likely to expose Tha Fix or its audience to unreasonable risk.</P>
          <P>Unless separately agreed in writing, membership opportunities do not establish an employment, partnership, agency, joint-venture, endorsement, investment, or profit-sharing relationship.</P>

          <H2>20. Changes to Benefits</H2>
          <P>Tha Fix may modify, replace, reschedule, or discontinue a membership benefit when reasonably necessary because of operational, editorial, technical, legal, safety, vendor, capacity, or business considerations.</P>
          <P>When reasonably practicable, Tha Fix will provide advance notice of a material adverse change.</P>
          <P>Tha Fix will not intentionally remove the core paid value of an active membership without providing an appropriate response, which may include:</P>
          <UL>
            <li>A reasonably comparable replacement benefit;</li>
            <li>A transition period;</li>
            <li>The opportunity to cancel before the next renewal;</li>
            <li>A partial or full refund when appropriate; or</li>
            <li>Another remedy required by applicable law.</li>
          </UL>
          <P>Minor changes, format changes, schedule adjustments, substitutions, improvements, and changes that do not materially reduce the overall membership value do not automatically create a refund right.</P>
          <P>Founder status and historical Founder recognition will not be converted into Inner Circle status merely because the Founder offer later closes.</P>

          <H2>21. Content and Feature Availability</H2>
          <P>Particular episodes, recordings, articles, community discussions, webinars, documentary content, or platform features may change over time.</P>
          <P>Tha Fix does not guarantee that every item of content will remain available permanently.</P>
          <P>Content may be removed or restricted because of:</P>
          <UL>
            <li>Expired licenses;</li>
            <li>Guest or contributor concerns;</li>
            <li>Legal complaints;</li>
            <li>Privacy or safety issues;</li>
            <li>Technical requirements;</li>
            <li>Editorial decisions; or</li>
            <li>Changes in the Services.</li>
          </UL>
          <P>Where reasonably practicable, Tha Fix may substitute comparable content or access, but is not required to preserve every individual item indefinitely.</P>

          <H2>22. Suspension and Termination</H2>
          <P>Tha Fix may restrict, suspend, or terminate a membership for:</P>
          <UL>
            <li>Violation of these Membership Terms or the Terms of Use;</li>
            <li>Prohibited or abusive comments;</li>
            <li>Account sharing;</li>
            <li>Fraud or payment abuse;</li>
            <li>Chargebacks involving legitimate authorized charges;</li>
            <li>Harassment, threats, impersonation, or doxxing;</li>
            <li>Misuse of private-community information;</li>
            <li>Infringement of intellectual-property rights;</li>
            <li>Misuse of discounts or opportunities;</li>
            <li>Failure to satisfy eligibility or verification requirements; or</li>
            <li>Conduct creating a material legal, safety, or operational risk.</li>
          </UL>
          <P>When immediate action is reasonably necessary, Tha Fix may act without advance notice.</P>
          <P>A person terminated for misconduct generally:</P>
          <UL>
            <li>Loses all remaining membership access;</li>
            <li>Loses commenting and publishing privileges;</li>
            <li>Loses unused discounts;</li>
            <li>Loses access to private communities and content;</li>
            <li>Loses eligibility for spotlights, collaborations, and opportunities; and</li>
            <li>Is not entitled to a refund, subject to applicable law.</li>
          </UL>
          <P>An official Founder terminated for later misconduct may retain historical Founding Member recognition as described in Section 5, but will lose every other Founder benefit.</P>
          <P>Termination does not eliminate obligations or liabilities that arose before termination.</P>

          <H2>23. Chargebacks and Payment Disputes</H2>
          <P>Members should contact <strong>info@thafix502.com</strong> before initiating a payment dispute so that Tha Fix has a reasonable opportunity to investigate and resolve the issue.</P>
          <P>A chargeback or payment reversal may result in immediate suspension while the transaction is investigated.</P>
          <P>A successful chargeback concerning a Founder or Inner Circle purchase ends the associated access and benefits. A charged-back Founder position returns to the available Founder allocation, and Founder recognition is removed.</P>
          <P>Nothing in this section prevents a member from exercising lawful rights through their payment provider.</P>

          <H2>24. Taxes</H2>
          <P>Membership prices do not include taxes unless stated otherwise. Tha Fix may collect sales, use, or similar taxes when required by law.</P>
          <P>You remain responsible for taxes or obligations that applicable law assigns directly to you.</P>

          <H2>25. No Ownership or Guaranteed Outcome</H2>
          <P>Membership does not provide:</P>
          <UL>
            <li>Ownership in Back To Marketing LLC or Tha Fix;</li>
            <li>Equity or investment rights;</li>
            <li>Control over editorial or business decisions;</li>
            <li>A guaranteed audience, collaboration, guest appearance, sponsorship, sale, or income;</li>
            <li>Employment or contractor status;</li>
            <li>A share of Tha Fix revenue; or</li>
            <li>A guaranteed financial or promotional result.</li>
          </UL>
          <P>Membership benefits provide access and opportunities only as expressly described.</P>

          <H2>26. Privacy</H2>
          <P>Personal information associated with memberships, applications, billing, public recognition, comments, profiles, and participation is handled as described in the Tha Fix Privacy Policy.</P>
          <P>Payment processing may be handled by Stripe. Email communications may be sent through Resend. Membership information and content may be stored using Supabase and other disclosed service providers.</P>
          <P>Founder recognition and member-generated content may be publicly visible when the member chooses or authorizes public display.</P>

          <H2>27. Changes to These Membership Terms</H2>
          <P>Tha Fix may update these Membership Terms to reflect changes in memberships, benefits, billing systems, legal requirements, or business practices.</P>
          <P>Updated terms will display a revised “Last Updated” date. When required, Tha Fix will provide additional notice or request renewed acceptance.</P>
          <P>A material change will apply prospectively. It will not retroactively alter a completed refund request or payment dispute.</P>
          <P>Continued use or renewal after revised Membership Terms take effect constitutes acceptance when permitted by law.</P>

          <H2>28. Relationship to the Terms of Use</H2>
          <P>The Tha Fix Terms of Use govern matters not specifically addressed here, including:</P>
          <UL>
            <li>Intellectual-property ownership;</li>
            <li>User Submissions;</li>
            <li>Prohibited conduct;</li>
            <li>Enforcement;</li>
            <li>Disclaimers;</li>
            <li>Limitations of liability;</li>
            <li>Indemnification;</li>
            <li>Arbitration;</li>
            <li>Class-action waiver;</li>
            <li>Governing law; and</li>
            <li>Court venue.</li>
          </UL>
          <P>If these Membership Terms directly conflict with the general Terms of Use concerning a membership-specific issue, these Membership Terms control for that issue.</P>

          <H2>29. Contact</H2>
          <P>Questions, cancellation problems, refund requests, billing concerns, or membership-support requests may be directed to:</P>
          <P>
            <strong>Back To Marketing LLC</strong>
            <br />
            <strong>Doing business as Tha Fix</strong>
            <br />
            Louisville, Kentucky
            <br />
            <strong>Email:</strong> info@thafix502.com
            <br />
            <strong>Website:</strong> thafix502.com
          </P>
        </div>
      </section>
    </>
  );
}
