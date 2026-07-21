import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/shipping-returns")({
  head: () => ({
    meta: [
      { title: "Shipping & Returns — Tha Fix" },
      { name: "description", content: "Refund, return, and shipping policy for Tha Fix merchandise orders." },
      { property: "og:title", content: "Shipping & Returns" },
      { property: "og:description", content: "Refund, return, and shipping policy for Tha Fix merchandise orders." },
    ],
  }),
  component: ShippingReturnsPage,
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

function ShippingReturnsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Shipping & Returns" />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-4 text-foreground/80 leading-relaxed">
          <p className="font-bold leading-tight">
            Effective Date: July 20, 2026
            <br />
            Last Updated: July 20, 2026
          </p>

          <P>
            This <strong>Refund, Return &amp; Shipping Policy</strong> explains how merchandise orders placed through <strong>thafix502.com</strong> are produced, shipped, delivered, replaced, returned, and refunded.
          </P>
          <P>
            Tha Fix is operated by <strong>Back To Marketing LLC</strong>, doing business as <strong>Tha Fix</strong> (“Tha Fix,” “we,” “us,” or “our”), from Louisville, Kentucky.
          </P>
          <P>
            Tha Fix merchandise is generally produced and fulfilled on demand by third-party fulfillment providers, including <strong>Printful</strong>. Although a fulfillment provider may produce or ship an order, Tha Fix remains the customer-facing seller for orders placed through the Tha Fix website.
          </P>
          <P>
            This policy supplements the Tha Fix <strong>Terms of Use</strong>, <strong>Membership Terms</strong>, and <strong>Privacy Policy</strong>.
          </P>

          <H2>1. Scope</H2>
          <P>This policy applies to physical merchandise purchased directly through thafix502.com, including qualifying Founder membership merchandise.</P>
          <P>It does not govern:</P>
          <UL>
            <li>Membership cancellations or membership-payment refunds;</li>
            <li>Voluntary support payments;</li>
            <li>Digital products unless expressly stated;</li>
            <li>Event tickets;</li>
            <li>Sponsorship agreements;</li>
            <li>Purchases made directly from an unrelated third-party seller; or</li>
            <li>Products governed by separate written terms.</li>
          </UL>
          <P>Membership refunds are governed by the Membership Terms. Other products or transactions may be governed by terms presented at checkout.</P>

          <H2>2. Made-to-Order Products</H2>
          <P>Most Tha Fix merchandise is created specifically after an order is submitted. Production may begin shortly after payment is approved.</P>
          <P>Because products are made to order, Tha Fix generally does not accept returns, exchanges, or refunds for:</P>
          <UL>
            <li>Buyer’s remorse;</li>
            <li>A change of mind;</li>
            <li>Ordering the wrong size;</li>
            <li>Ordering the wrong color;</li>
            <li>Selecting the wrong product;</li>
            <li>Preferring a different design or style;</li>
            <li>Failure to review a size guide;</li>
            <li>Failure to use or wear the product; or</li>
            <li>Another preference-based reason unrelated to a defect or fulfillment error.</li>
          </UL>
          <P>Customers should carefully review product descriptions, colors, quantities, size guides, personalization, and shipping information before submitting an order.</P>
          <P>This section applies to the extent permitted by law. Any mandatory consumer right that cannot legally be waived remains unaffected.</P>

          <H2>3. Covered Product Problems</H2>
          <P>A customer may qualify for a free replacement or refund when:</P>
          <UL>
            <li>The product arrives damaged;</li>
            <li>The product has a manufacturing defect;</li>
            <li>The design is materially misprinted;</li>
            <li>The print placement or colors are materially incorrect;</li>
            <li>The customer receives the wrong product;</li>
            <li>The customer receives the wrong size or color because of a fulfillment error;</li>
            <li>Items are missing from the shipment;</li>
            <li>The package is confirmed lost in transit; or</li>
            <li>Another material fulfillment error occurred.</li>
          </UL>
          <P>Minor variations in color, placement, texture, size, or appearance that ordinarily result from screen settings or the production process may not qualify as defects.</P>
          <P>Normal wear, misuse, improper washing, accidental damage after delivery, or damage caused by failure to follow care instructions is not considered a manufacturing defect.</P>

          <H2>4. Available Remedies</H2>
          <P>For an approved damage, defect, misprint, wrong-item, or fulfillment-error claim, the customer may request:</P>
          <UL>
            <li>A free replacement; or</li>
            <li>A refund to the original payment method.</li>
          </UL>
          <P>The requested remedy will generally be honored when reasonably available. Tha Fix may offer a different appropriate remedy if:</P>
          <UL>
            <li>A replacement is unavailable;</li>
            <li>The product has been discontinued;</li>
            <li>Reshipment is impracticable;</li>
            <li>Fraud or abuse is reasonably suspected;</li>
            <li>Applicable law requires a different remedy; or</li>
            <li>Another resolution is reasonably necessary under the circumstances.</li>
          </UL>
          <P>A replacement normally must use the same product, design, size, color, and delivery information as the original correctly submitted order. A replacement claim cannot ordinarily be used to select a different size, color, design, or product.</P>

          <H2>5. Reporting Damaged, Defective, or Incorrect Products</H2>
          <P>Damage, defect, misprint, missing-item, and wrong-item claims must be submitted within <strong>30 calendar days after delivery</strong>.</P>
          <P>Send the claim to:</P>
          <P><strong>Email:</strong> info@thafix502.com</P>
          <P><strong>Suggested subject:</strong> Merchandise Order Problem</P>
          <P>The customer may be required to provide:</P>
          <UL>
            <li>Their name;</li>
            <li>The order number;</li>
            <li>The email address used for the purchase;</li>
            <li>A description of the problem;</li>
            <li>A clear photograph showing the entire product;</li>
            <li>Close-up photographs of the damage, defect, or error;</li>
            <li>Photographs of the packaging;</li>
            <li>A photograph of the shipping label;</li>
            <li>Photographs of all affected items; and</li>
            <li>A video when multiple products or a functional problem are involved.</li>
          </UL>
          <P>Clear photographs are generally required for damage or defect claims because Printful may be unable to approve a replacement without visual evidence.</P>
          <P>Customers should preserve the product, packaging, and shipping materials until the claim is resolved.</P>
          <P>Submitting a claim does not automatically guarantee approval. Tha Fix or its fulfillment provider may request additional information to verify the problem.</P>

          <H2>6. Do Not Send an Unauthorized Return</H2>
          <P>Do not mail merchandise to Tha Fix, Printful, a fulfillment facility, or an address appearing on a shipping label unless Tha Fix support provides written return instructions.</P>
          <P>An address on a package is not necessarily an authorized customer-return address.</P>
          <P>Sending an unauthorized return:</P>
          <UL>
            <li>Does not guarantee that it will be received;</li>
            <li>Does not guarantee a refund or replacement;</li>
            <li>May prevent the package from being identified;</li>
            <li>May result in additional shipping or handling costs; and</li>
            <li>May cause the merchandise to be lost or disposed of.</li>
          </UL>
          <P>For many approved damage or fulfillment-error claims, returning the defective product may not be necessary. Wait for written instructions before mailing anything.</P>

          <H2>7. Order Changes and Cancellations</H2>
          <P>Customers should contact info@thafix502.com immediately if they need to request an order change or cancellation.</P>
          <P>A change or cancellation is possible only if:</P>
          <UL>
            <li>The request is received before fulfillment begins;</li>
            <li>The fulfillment provider can stop or modify the order; and</li>
            <li>The requested change is technically and operationally available.</li>
          </UL>
          <P>Because production may begin quickly, Tha Fix cannot guarantee that a cancellation, address change, size change, color change, or product change can be completed.</P>
          <P>Once an order enters production, it ordinarily cannot be changed or canceled. A request sent before shipment does not necessarily mean production can still be stopped.</P>

          <H2>8. Shipping Destinations</H2>
          <P>Tha Fix may ship internationally to destinations supported by Printful and the available carrier network.</P>
          <P>Availability may depend on:</P>
          <UL>
            <li>The product;</li>
            <li>Fulfillment location;</li>
            <li>Delivery address;</li>
            <li>Carrier restrictions;</li>
            <li>Local law;</li>
            <li>Customs restrictions;</li>
            <li>Sanctions or trade controls;</li>
            <li>Temporary service suspensions; and</li>
            <li>Other fulfillment limitations.</li>
          </UL>
          <P>The availability of a country or shipping method may change without notice. Tha Fix may cancel and refund an order if it cannot legally or operationally be shipped to the submitted destination.</P>

          <H2>9. Shipping Charges</H2>
          <P>Available shipping methods and charges are calculated and displayed during checkout.</P>
          <P>Shipping charges may depend on:</P>
          <UL>
            <li>Delivery destination;</li>
            <li>Product type;</li>
            <li>Quantity;</li>
            <li>Package size and weight;</li>
            <li>Fulfillment location;</li>
            <li>Carrier;</li>
            <li>Shipping speed; and</li>
            <li>Whether products must be shipped separately.</li>
          </UL>
          <P>Tha Fix may occasionally offer free or discounted shipping through a promotion. Promotional shipping offers may have eligibility requirements, geographic restrictions, order minimums, product exclusions, or expiration dates.</P>
          <P>Unless an offer expressly says otherwise, a previous or expired promotion cannot be applied retroactively.</P>

          <H2>10. Production and Delivery Estimates</H2>
          <P>Estimated delivery time consists of:</P>
          <OL>
            <li>Production or fulfillment time; and</li>
            <li>Carrier shipping time after fulfillment.</li>
          </OL>
          <P>Production and shipping estimates are not guaranteed delivery dates.</P>
          <P>Orders may be delayed by:</P>
          <UL>
            <li>Product or inventory availability;</li>
            <li>Production volume;</li>
            <li>Quality-control review;</li>
            <li>Carrier congestion;</li>
            <li>Weather;</li>
            <li>Natural disasters;</li>
            <li>Customs processing;</li>
            <li>Incorrect or incomplete address information;</li>
            <li>Holidays;</li>
            <li>Labor disruptions;</li>
            <li>International transportation issues;</li>
            <li>Government action;</li>
            <li>Security screening; or</li>
            <li>Other circumstances outside Tha Fix’s reasonable control.</li>
          </UL>
          <P>A delay does not automatically create a refund right. Tha Fix will review exceptional delays and provide any remedy required by law or appropriate under the circumstances.</P>

          <H2>11. Tracking</H2>
          <P>When tracking is available, the customer will generally receive tracking information at the email address provided during checkout.</P>
          <P>Tracking may not update immediately after a shipping label is created. Some international shipping methods provide limited or incomplete tracking.</P>
          <P>Customers are responsible for monitoring tracking and making reasonable arrangements to receive the package.</P>

          <H2>12. Split Shipments</H2>
          <P>Items from the same order may be:</P>
          <UL>
            <li>Produced at different fulfillment facilities;</li>
            <li>Shipped in separate packages;</li>
            <li>Assigned separate tracking numbers; and</li>
            <li>Delivered on different dates.</li>
          </UL>
          <P>A partial delivery does not necessarily mean that another item is missing. Customers should review all tracking information before submitting a missing-item claim.</P>
          <P>Separate packages do not ordinarily result in an additional charge beyond the shipping amount disclosed at checkout.</P>

          <H2>13. Customer Address Responsibility</H2>
          <P>Customers are responsible for submitting a complete and accurate shipping address, including any necessary:</P>
          <UL>
            <li>Apartment, suite, or unit number;</li>
            <li>Recipient name;</li>
            <li>Business name;</li>
            <li>Postal code;</li>
            <li>Region or province;</li>
            <li>Country;</li>
            <li>Telephone number; and</li>
            <li>Other delivery information.</li>
          </UL>
          <P>If the customer provides an incomplete or incorrect address, the customer is responsible for costs associated with:</P>
          <UL>
            <li>Address correction;</li>
            <li>Return-to-sender processing;</li>
            <li>Reshipping;</li>
            <li>Reproduction, if necessary; and</li>
            <li>Other carrier or fulfillment charges.</li>
          </UL>
          <P>Tha Fix will correct an address error without charging the customer when the error was caused by Tha Fix or its fulfillment provider.</P>
          <P>Submitting an address-correction request does not guarantee that the correction can be made after fulfillment begins.</P>

          <H2>14. Unclaimed or Refused Packages</H2>
          <P>If a customer fails to claim a package, refuses delivery without an approved reason, or fails to respond to a carrier or customs request, the package may be returned or disposed of.</P>
          <P>The customer is responsible for costs required to:</P>
          <UL>
            <li>Recover the package;</li>
            <li>Correct the address;</li>
            <li>Reproduce the order; or</li>
            <li>Reship the merchandise.</li>
          </UL>
          <P>A refused or unclaimed package does not automatically qualify for a refund.</P>
          <P>If refusal was reasonably necessary because the package was visibly damaged or because Tha Fix or the fulfillment provider made an error, the customer should contact support promptly.</P>

          <H2>15. Lost Packages</H2>
          <P>A package that has not arrived must be reported within <strong>30 calendar days after the estimated delivery date</strong>.</P>
          <P>The customer should provide:</P>
          <UL>
            <li>The order number;</li>
            <li>The delivery address;</li>
            <li>The tracking information;</li>
            <li>The estimated delivery date; and</li>
            <li>Any available carrier communications.</li>
          </UL>
          <P>A package may qualify for a free replacement or refund if it is confirmed lost in transit and the claim is timely.</P>
          <P>A delayed scan or temporary tracking interruption does not necessarily mean the package is lost. Tha Fix or the fulfillment provider may allow a reasonable investigation period before approving a remedy.</P>
          <P>Claims submitted more than 30 calendar days after the estimated delivery date may be denied unless applicable law requires otherwise.</P>

          <H2>16. Packages Marked “Delivered”</H2>
          <P>If tracking shows that a package was delivered but the customer cannot locate it, the customer should first:</P>
          <UL>
            <li>Check the delivery location carefully;</li>
            <li>Check other entrances and secure package areas;</li>
            <li>Ask household members;</li>
            <li>Ask neighbors;</li>
            <li>Contact the property manager, front desk, mailroom, or receiving department;</li>
            <li>Wait until the end of the delivery day when appropriate; and</li>
            <li>Contact the carrier for delivery details.</li>
          </UL>
          <P>The customer should then contact info@thafix502.com with the order and tracking information.</P>
          <P>Tha Fix will review the circumstances but cannot guarantee a refund or replacement for a package that the carrier confirms was correctly delivered. Theft or loss after confirmed delivery may need to be reported to the carrier, property manager, local authority, or applicable insurer.</P>
          <P>This does not limit any right the customer may have under applicable law.</P>

          <H2>17. Customs, Duties, and International Charges</H2>
          <P>International orders may be subject to:</P>
          <UL>
            <li>Customs duties;</li>
            <li>Import taxes;</li>
            <li>Brokerage charges;</li>
            <li>Customs-processing fees;</li>
            <li>Local delivery charges; or</li>
            <li>Other government or carrier assessments.</li>
          </UL>
          <P>When these amounts are not collected during checkout, they are the customer’s responsibility.</P>
          <P>Tha Fix does not control the amount or timing of these charges. Customers should consult the appropriate customs or tax authority before ordering if they need an estimate.</P>
          <P>Failure to pay customs charges or provide information requested for clearance may cause delay, return, abandonment, or disposal of the package. Related recovery, reproduction, or reshipping costs may be charged to the customer.</P>
          <P>Where a Delivered Duty Paid or similar option is offered, covered duties may be collected during checkout. Charges not expressly included remain the customer’s responsibility.</P>

          <H2>18. Approved Refunds</H2>
          <P>Approved refunds will be issued to the original payment method whenever reasonably possible.</P>
          <P>After Tha Fix processes a refund, it may take approximately <strong>5–10 business days</strong> to appear, depending on Stripe, the payment method, the customer’s financial institution, and the applicable payment network.</P>
          <P>Tha Fix does not control a financial institution’s posting time.</P>
          <P>If the original payment method cannot receive the refund, Tha Fix will determine an appropriate lawful alternative after verifying the customer and transaction.</P>

          <H2>19. Shipping Refunds</H2>
          <P>For an approved defect or fulfillment error affecting the entire order, Tha Fix will refund the original standard shipping charge when a refund rather than replacement is selected.</P>
          <P>Premium or expedited shipping charges may be refunded when:</P>
          <UL>
            <li>The entire order was defective or incorrectly fulfilled;</li>
            <li>The purchased shipping service was not provided; or</li>
            <li>Applicable law requires it.</li>
          </UL>
          <P>For a defect affecting only one item in a multi-item order:</P>
          <UL>
            <li>The refund ordinarily covers only the affected item;</li>
            <li>The remaining usable items are not refunded; and</li>
            <li>The original shipping charge is not ordinarily refunded unless the entire order was unusable or the affected item caused the full shipping expense to provide no value.</li>
          </UL>
          <P>A free replacement includes reasonable standard reshipping costs for an approved claim.</P>

          <H2>20. Partial Refunds</H2>
          <P>When only part of an order is damaged, defective, missing, or incorrectly fulfilled, any refund will ordinarily be limited to:</P>
          <UL>
            <li>The affected product;</li>
            <li>Applicable tax associated with that product; and</li>
            <li>Any shipping amount that should reasonably be refunded under Section 19.</li>
          </UL>
          <P>An issue involving one product does not automatically qualify the entire order for a refund.</P>

          <H2>21. Founder T-Shirt</H2>
          <P>The complimentary Founder T-shirt is subject to this policy.</P>
          <P>A Founder is responsible for selecting the correct size and providing an accurate delivery address. The T-shirt generally cannot be exchanged because the Founder selected the wrong size, color, or preference.</P>
          <P>Tha Fix will provide an appropriate replacement at no additional charge if the Founder T-shirt:</P>
          <UL>
            <li>Arrives damaged or defective;</li>
            <li>Is materially misprinted;</li>
            <li>Is incorrectly fulfilled; or</li>
            <li>Is confirmed lost in transit,</li>
          </UL>
          <P>provided that the claim is timely and sufficiently documented.</P>
          <P>The Founder T-shirt benefit cannot be exchanged for cash. If a refund of the Founder membership occurs under the Membership Terms, the treatment of an already fulfilled T-shirt is governed by those Membership Terms and any disclosures presented during enrollment.</P>

          <H2>22. Fraud and Policy Abuse</H2>
          <P>Tha Fix may deny or limit a claim when there is reasonable evidence of:</P>
          <UL>
            <li>Fraud;</li>
            <li>Altered evidence;</li>
            <li>Intentional damage;</li>
            <li>Repeated abusive claims;</li>
            <li>False reports of nondelivery;</li>
            <li>Payment fraud;</li>
            <li>Chargeback abuse;</li>
            <li>Resale-related misuse; or</li>
            <li>Another attempt to exploit this policy.</li>
          </UL>
          <P>Tha Fix may request additional verification before approving a claim. Nothing in this section permits Tha Fix to deny a valid right provided by applicable law.</P>

          <H2>23. Legal Rights</H2>
          <P>This policy provides contractual remedies in addition to any mandatory consumer protections that apply to a transaction.</P>
          <P>Nothing in this policy excludes, restricts, or waives a customer right that cannot legally be excluded, restricted, or waived.</P>
          <P>If a provision conflicts with mandatory law in the customer’s jurisdiction, the mandatory law controls only to the extent of that conflict.</P>

          <H2>24. Policy Changes</H2>
          <P>Tha Fix may update this policy to reflect changes in products, fulfillment providers, shipping methods, business practices, or legal requirements.</P>
          <P>The policy in effect when an order is placed will generally govern that order unless:</P>
          <UL>
            <li>A later version gives the customer greater rights;</li>
            <li>Applicable law requires otherwise; or</li>
            <li>The parties agree to another resolution.</li>
          </UL>
          <P>Updated policies will display a revised “Last Updated” date.</P>

          <H2>25. Support</H2>
          <P>For order changes, delivery questions, damage claims, lost-package reports, or refund inquiries, contact:</P>
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
