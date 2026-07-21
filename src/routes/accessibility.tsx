import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility Statement — Tha Fix" },
      { name: "description", content: "Tha Fix accessibility commitment and assistance information." },
      { property: "og:title", content: "Accessibility Statement" },
      { property: "og:description", content: "Tha Fix accessibility commitment and assistance information." },
    ],
  }),
  component: AccessibilityPage,
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

function AccessibilityPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Accessibility Statement" />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-4 text-foreground/80 leading-relaxed">
          <p className="font-bold leading-tight">
            Effective Date: July 20, 2026
            <br />
            Last Updated: July 20, 2026
          </p>

          <P>
            Tha Fix is committed to making <strong>thafix502.com</strong> and its digital content reasonably accessible to people with disabilities.
          </P>
          <P>
            Tha Fix is operated by <strong>Back To Marketing LLC</strong>, doing business as <strong>Tha Fix</strong>, from Louisville, Kentucky.
          </P>

          <H2>Our Accessibility Goal</H2>
          <P>
            Tha Fix is working toward conformance with the{" "}
            <a
              href="https://www.w3.org/TR/WCAG22/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline"
            >
              Web Content Accessibility Guidelines 2.2
            </a>{" "}
            at Level AA (“WCAG 2.2 AA”).
          </P>
          <P>
            WCAG provides guidance for making digital content more perceivable, operable, understandable, and robust for people with a wide range of disabilities.
          </P>
          <P>
            The Tha Fix website has not yet completed a formal professional accessibility audit. Therefore, this statement expresses our accessibility goal and ongoing commitment; it is not a certification or claim that every page, feature, or item of content currently conforms fully to WCAG 2.2 AA.
          </P>

          <H2>Our Ongoing Efforts</H2>
          <P>
            As the website is developed and maintained, Tha Fix intends to incorporate accessibility into its design, content, and technical practices.
          </P>
          <P>These efforts may include:</P>
          <UL>
            <li>Providing meaningful alternative text for informative images;</li>
            <li>Using headings and page structure in a logical order;</li>
            <li>Supporting keyboard navigation;</li>
            <li>Maintaining visible keyboard-focus indicators;</li>
            <li>Using descriptive link and button labels;</li>
            <li>Maintaining reasonable color contrast;</li>
            <li>Avoiding reliance on color alone to communicate meaning;</li>
            <li>Allowing text to resize without unnecessarily losing content or functionality;</li>
            <li>Providing labels and instructions for forms;</li>
            <li>Presenting form errors in understandable text;</li>
            <li>Supporting captions or transcripts for important prerecorded audio and video when reasonably practicable;</li>
            <li>Avoiding content that flashes in a manner likely to create a seizure risk;</li>
            <li>Using consistent navigation and controls;</li>
            <li>Testing important pages and transaction processes; and</li>
            <li>Reviewing accessibility feedback and making reasonable improvements.</li>
          </UL>
          <P>Accessibility is an ongoing process. Content, platform features, integrations, and technology may change over time.</P>

          <H2>Known Limitations</H2>
          <P>Some content or functionality may not yet provide an ideal accessible experience. Potential limitations may involve:</P>
          <UL>
            <li>Older content;</li>
            <li>Videos or audio that do not yet have complete captions or transcripts;</li>
            <li>Documents provided in formats that are difficult for some assistive technologies;</li>
            <li>User-submitted content;</li>
            <li>Embedded media;</li>
            <li>Third-party checkout or payment tools;</li>
            <li>Social-media embeds; or</li>
            <li>Features that are still being developed or remediated.</li>
          </UL>
          <P>Tha Fix welcomes reports about these or other accessibility difficulties.</P>

          <H2>Third-Party Services</H2>
          <P>The website may use or link to services controlled by third parties, including:</P>
          <UL>
            <li>Stripe;</li>
            <li>Printful;</li>
            <li>PayPal;</li>
            <li>Cash App;</li>
            <li>Chime;</li>
            <li>Zelle;</li>
            <li>Embedded video or audio players;</li>
            <li>Social-media platforms; and</li>
            <li>Other external websites or applications.</li>
          </UL>
          <P>
            Tha Fix does not control every accessibility feature or limitation of these third-party services. Those services maintain their own accessibility practices, terms, and support processes.
          </P>
          <P>
            We still welcome reports about accessibility problems encountered while using a third-party service through the Tha Fix website. When reasonably possible, we will attempt to provide assistance, identify an alternative, correct an issue within our control, or communicate the concern to the applicable provider.
          </P>

          <H2>Requesting Assistance or Alternative Access</H2>
          <P>
            If an accessibility barrier prevents you from accessing information or completing a function, contact us at:
          </P>
          <p className="font-bold">
            Email: info@thafix502.com
            <br />
            Suggested subject: Accessibility Assistance
          </p>
          <P>When reasonably possible, Tha Fix will attempt to provide assistance or an accessible alternative. Depending on the request, this may include:</P>
          <UL>
            <li>Providing information in another reasonable format;</li>
            <li>Describing visual information;</li>
            <li>Providing available captions or transcripts;</li>
            <li>Helping locate accessible content;</li>
            <li>Assisting with a nonfinancial form;</li>
            <li>Identifying another way to access a feature; or</li>
            <li>Correcting a technical problem within our control.</li>
          </UL>
          <P>
            The availability and form of an alternative may depend on the content, request, technology, security requirements, and resources reasonably available.
          </P>
          <P>For security reasons, do not email:</P>
          <UL>
            <li>Passwords;</li>
            <li>Complete payment-card numbers;</li>
            <li>Bank-account credentials;</li>
            <li>Government identification numbers;</li>
            <li>Authentication codes; or</li>
            <li>Other highly sensitive information.</li>
          </UL>
          <P>Tha Fix will not ask you to send a password or complete card number by email.</P>

          <H2>Reporting an Accessibility Difficulty</H2>
          <P>To report an accessibility difficulty, email:</P>
          <p className="font-bold">info@thafix502.com</p>
          <P>Including the following information can help us investigate:</P>
          <UL>
            <li>The page address or URL;</li>
            <li>A description of the difficulty;</li>
            <li>What you were trying to accomplish;</li>
            <li>The device and browser used;</li>
            <li>The assistive technology used, if any; and</li>
            <li>Your preferred method of contact.</li>
          </UL>
          <P>
            Providing information about a disability or assistive technology is optional. Please provide only the information you are comfortable sharing.
          </P>
          <P>Screenshots may be helpful but are not required.</P>

          <H2>Our Response</H2>
          <P>Tha Fix will review accessibility reports and respond as reasonably practicable.</P>
          <P>Depending on the issue, we may:</P>
          <UL>
            <li>Request clarification;</li>
            <li>Provide an alternative means of access;</li>
            <li>Correct content or code;</li>
            <li>Coordinate with a third-party provider;</li>
            <li>Add the issue to planned accessibility work; or</li>
            <li>Explain a technical or operational limitation.</li>
          </UL>
          <P>
            Submitting a report does not guarantee that a particular modification can be completed immediately or in the exact form requested. Tha Fix will consider the nature of the barrier, the requested solution, available alternatives, technical feasibility, security, legal requirements, and resources.
          </P>

          <H2>Good-Faith Feedback and Nonretaliation</H2>
          <P>Accessibility feedback is welcome.</P>
          <P>
            No person will lose access, membership privileges, commenting rights, or other benefits merely because they submit a good-faith accessibility report or request reasonable assistance.
          </P>
          <P>
            The reporting process may not be used to threaten, harass, submit fraudulent claims, compromise security, or violate another Tha Fix policy.
          </P>

          <H2>Changes to This Statement</H2>
          <P>
            Tha Fix may update this Accessibility Statement as the website, services, standards, testing practices, or accessibility efforts change.
          </P>
          <P>The statement will display a revised “Last Updated” date when updated.</P>

          <H2>Contact</H2>
          <P>Accessibility questions, assistance requests, and reports may be directed to:</P>
          <p className="font-bold leading-tight">
            Back To Marketing LLC
            <br />
            Doing business as Tha Fix
            <br />
            Louisville, Kentucky
          </p>
          <p className="font-bold">
            Email: info@thafix502.com
            <br />
            Website: thafix502.com
          </p>
        </div>
      </section>
    </>
  );
}
