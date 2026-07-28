import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/event-terms")({
  head: () => ({
    meta: [
      { title: "Event, RSVP, and Ticket Terms — Tha Fix" },
      { name: "description", content: "Terms governing event registration, RSVPs, tickets, and attendance for Tha Fix events." },
      { property: "og:title", content: "Event, RSVP, and Ticket Terms" },
      { property: "og:description", content: "Terms governing event registration, RSVPs, tickets, and attendance for Tha Fix events." },
    ],
  }),
  component: EventTermsPage,
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

function EventTermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Event, RSVP, and Ticket Terms" />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-4 text-foreground/80 leading-relaxed">
          <p className="font-bold leading-tight">
            Effective Date: July 28, 2026
            <br />
            Last Updated: July 28, 2026
          </p>

          <P>
            These Event, RSVP, and Ticket Terms (“Event Terms”) govern registrations, audience applications, reservations, tickets, passes, admissions, livestream access, and participation in events offered, organized, promoted, recorded, or ticketed by Back To Marketing LLC, doing business as Tha Fix (“Tha Fix,” “we,” “us,” or “our”).
          </P>
          <P>
            Tha Fix is operated from Louisville, Kentucky.
          </P>
          <P>
            Please read these Event Terms before registering for, purchasing access to, or attending an event. By submitting an RSVP or audience application, purchasing or accepting a ticket or pass, entering an event, or participating in an event, you agree to these Event Terms and any event-specific rules presented to you.
          </P>

          <H2>1. Related Terms and Order of Control</H2>
          <P>These Event Terms supplement and incorporate the Tha Fix:</P>
          <UL>
            <li>Terms of Use;</li>
            <li>Privacy Policy;</li>
            <li>Membership Terms, when a membership benefit or member-only event is involved;</li>
            <li>Comment and Community Guidelines, including rules applicable to event discussions and livestream chats;</li>
            <li>Accessibility Statement; and</li>
            <li>Any event-specific description, checkout disclosure, venue rule, release, waiver, code of conduct, or other term presented before registration, purchase, or entry.</li>
          </UL>
          <P>
            If provisions directly conflict, the more specific event or transaction term controls for that event. The Terms of Use control matters not specifically addressed here, including intellectual property, disclaimers, limitations of liability, indemnification, dispute resolution, arbitration, class-action waiver, governing law, and court venue.
          </P>

          <H2>2. Types of Events Covered</H2>
          <P>These Event Terms apply to Tha Fix activities including:</P>
          <UL>
            <li>Live show and episode recordings;</li>
            <li>Live-audience opportunities;</li>
            <li>Tha Fix On Location recordings and broadcasts;</li>
            <li>Public appearances and community conversations;</li>
            <li>Member meetups and networking sessions;</li>
            <li>Town halls and panel discussions;</li>
            <li>Livestreams and virtual events;</li>
            <li>Premieres, screenings, launch celebrations, and special events;</li>
            <li>Free events requiring an RSVP;</li>
            <li>Paid events requiring a ticket or pass; and</li>
            <li>Events produced with a venue, sponsor, community organization, promoter, or other partner.</li>
          </UL>
          <P>
            An event listing will identify, when applicable, whether the event is public, members-only, invitation-only, in person, virtual, hybrid, free, paid, livestreamed, recorded, subject to an application, or subject to limited capacity.
          </P>

          <H2>3. Age and Eligibility</H2>
          <P>
            Tha Fix events offered through the website at launch are limited to individuals who are at least 18 years old.
          </P>
          <P>By registering, purchasing, accepting a transfer, or attending, you represent that you:</P>
          <UL>
            <li>Are at least 18 years old;</li>
            <li>Are legally capable of agreeing to these Event Terms;</li>
            <li>Will provide accurate and complete registration or purchase information;</li>
            <li>Will satisfy any membership, identification, venue, or event-specific requirements; and</li>
            <li>Are not prohibited from attending under a prior suspension, removal, trespass notice, or other lawful restriction.</li>
          </UL>
          <P>
            Tha Fix or the venue may require a valid government-issued photo identification. Failure or refusal to provide required identification or eligibility verification may result in denied admission without a refund when the requirement was disclosed or is reasonably necessary for safety, fraud prevention, age verification, or legal compliance.
          </P>
          <P>
            Tha Fix may establish a different age rule for a future event only when that rule is clearly stated in the applicable event listing and event-specific terms.
          </P>

          <H2>4. Event Listings and Availability</H2>
          <P>
            Tha Fix will make reasonable efforts to provide accurate event information, including the scheduled date, time, time zone, location, format, price, access level, registration deadline, and material participation requirements.
          </P>
          <P>
            Event information may change because of production needs, venue requirements, weather, emergencies, safety concerns, illness, guest or host availability, technical problems, legal requirements, partner decisions, or circumstances outside our reasonable control.
          </P>
          <P>An event appearing on the website does not guarantee that:</P>
          <UL>
            <li>Space remains available;</li>
            <li>An RSVP or application will be approved;</li>
            <li>A particular seat or location will be provided;</li>
            <li>A particular host, guest, sponsor, or partner will appear;</li>
            <li>The event will be recorded or livestreamed;</li>
            <li>Every advertised segment or activity will occur; or</li>
            <li>The event will produce a particular personal, professional, promotional, or financial result.</li>
          </UL>
          <P>
            Tha Fix may correct a genuine listing, scheduling, availability, or pricing error. If we cancel a completed paid order because of our error, we will provide the refund required by these Event Terms and applicable law.
          </P>

          <H2>5. Free RSVPs</H2>
          <P>
            A free RSVP records a person’s intention to attend. Unless the event listing expressly states otherwise, an RSVP does not guarantee admission, seating, admission after a stated arrival time, or participation in a recorded segment. Free events may use: first-come, first-served admission; capacity limits; waitlists; check-in deadlines; membership or invitation requirements; identity verification; or overbooking reasonably intended to account for expected no-shows, when disclosed.
          </P>
          <P>
            If you can no longer attend a free event, you should cancel your RSVP as soon as reasonably possible so the space may be offered to someone else. Repeated failure to attend limited-capacity events without canceling may affect eligibility for future complimentary reservations or audience opportunities.
          </P>

          <H2>6. Audience Applications</H2>
          <P>
            Certain live recordings or special events may require an audience application rather than an ordinary RSVP. Submitting an application:
          </P>
          <UL>
            <li>Does not guarantee selection, approval, admission, seating, screen time, speaking time, or participation;</li>
            <li>Does not require Tha Fix to explain a selection decision;</li>
            <li>May be subject to capacity, suitability, production, safety, membership, or demographic needs reasonably related to the event; and</li>
            <li>May require additional confirmation, identification, releases, or arrival instructions.</li>
          </UL>
          <P>
            Only a final confirmation from Tha Fix secures an approved audience position. A waitlist notice, application receipt, or pending status is not an admission confirmation.
          </P>

          <H2>7. Ticket Prices, Fees, Taxes, and Payment</H2>
          <P>
            Paid tickets and event-related purchases may be processed by Stripe or another payment provider identified at checkout. Before payment, Tha Fix will display the required total price as clearly as reasonably possible, including mandatory ticket charges and fees required to complete the purchase. Optional products, upgrades, merchandise, food, donations, or other add-ons may be priced separately. Applicable taxes may be added or included as disclosed at checkout. By completing a purchase, you:
          </P>
          <UL>
            <li>Authorize the disclosed charge;</li>
            <li>Represent that you are authorized to use the selected payment method;</li>
            <li>Agree to provide accurate billing and contact information; and</li>
            <li>Accept the event description, price, restrictions, and refund rules displayed before payment.</li>
          </UL>
          <P>
            Ticket availability is not guaranteed until payment is successfully completed and an order confirmation is issued. A pending authorization, abandoned checkout, failed payment, or payment error does not reserve a ticket.
          </P>

          <H2>8. Order Confirmation and Ticket Delivery</H2>
          <P>
            After a successful purchase, Tha Fix or its ticketing provider will ordinarily send a confirmation to the email address supplied during checkout.
          </P>
          <P>You are responsible for:</P>
          <UL>
            <li>Providing a correct and accessible email address;</li>
            <li>Reviewing the confirmation and event details;</li>
            <li>Contacting Tha Fix promptly about a material error;</li>
            <li>Keeping confirmation information reasonably secure; and</li>
            <li>Following check-in, ticket-display, identification, and arrival instructions.</li>
          </UL>
          <P>
            Contact <strong>info@thafix502.com</strong> if a confirmation does not arrive within a reasonable period after a completed charge.
          </P>

          <H2>9. Purchase and Attendance Limits</H2>
          <P>
            Tha Fix may impose reasonable per-person, per-account, per-household, membership-level, or transaction limits.
          </P>
          <P>
            We may reject or cancel duplicate, automated, fraudulent, speculative, unauthorized, or limit-evading orders. If we cancel a legitimate completed charge under this section before the event, we will refund the amount required by applicable law and the applicable transaction terms.
          </P>
          <P>
            Tickets, RSVPs, audience positions, member opportunities, and event benefits have no ownership, investment, equity, or guaranteed resale value.
          </P>

          <H2>10. Attendee-Requested Cancellations and Refunds</H2>
          <P>
            Unless an event listing expressly provides a more favorable rule, a purchaser may request a refund for a paid ticket through <strong>11:59 p.m. Eastern Time on the date that is seven calendar days before the event’s scheduled start date.</strong>
          </P>
          <P>
            For example, if an event begins on Saturday, a qualifying attendee-requested refund must be submitted no later than 11:59 p.m. Eastern Time on the preceding Saturday.
          </P>
          <P>To request a refund, email <strong>info@thafix502.com</strong> with:</P>
          <UL>
            <li>The purchaser’s name;</li>
            <li>The email address used for the order;</li>
            <li>The event name;</li>
            <li>The order or confirmation number; and</li>
            <li>The number of tickets to be canceled.</li>
          </UL>
          <P>
            An eligible refund will ordinarily return the amount paid for the canceled admission, including mandatory ticket charges collected by Tha Fix, and any refundable taxes. Optional products, merchandise, donations, fulfilled benefits, or separately identified items remain subject to their own terms.
          </P>
          <P>Requests received after the seven-day deadline are generally nonrefundable except:</P>
          <UL>
            <li>When Tha Fix cancels, postpones, or materially changes the event as described below;</li>
            <li>When an event-specific term provides a more favorable right;</li>
            <li>When Tha Fix approves an exception in its reasonable discretion; or</li>
            <li>When a refund is required by applicable law.</li>
          </UL>
          <P>
            Failure to attend, late arrival, inability to travel, scheduling conflicts, failure to review event information, or dissatisfaction with an ordinary programming or lineup change does not create a refund right after the deadline.
          </P>
          <P>
            Refunds are issued to the original payment method whenever reasonably possible. Processing time may depend on the payment provider and financial institution.
          </P>

          <H2>11. Ticket Transfers and No Resale</H2>
          <P>
            A paid ticket may be transferred <em>one time</em> to another eligible person only with advance approval from Tha Fix.
          </P>
          <P>Unless event-specific terms provide otherwise:</P>
          <UL>
            <li>The original purchaser must request the transfer;</li>
            <li>The request must be received at least 48 hours before the scheduled event start;</li>
            <li>The proposed recipient must be at least 18 years old and meet all event requirements;</li>
            <li>Tha Fix may request identifying and contact information for both people;</li>
            <li>A transfer is not complete until Tha Fix confirms it;</li>
            <li>A transferred ticket may not be transferred again; and</li>
            <li>Approval may be denied when prohibited by venue rules, security requirements, law, capacity controls, membership eligibility, or event-specific restrictions.</li>
          </UL>
          <P>
            Tickets, passes, audience positions, complimentary admissions, member benefits, discount codes, and RSVPs may not be resold, auctioned, brokered, scalped, exchanged for value, or listed on a resale platform.
          </P>
          <P>
            Tha Fix may cancel a ticket or deny admission when it reasonably believes the ticket was resold, fraudulently transferred, duplicated, counterfeited, or obtained through prohibited conduct. No refund is required for a cancellation based on verified fraud, unauthorized resale, or intentional violation of these Event Terms, except where required by law.
          </P>

          <H2>12. Event Cancellation by Tha Fix</H2>
          <P>
            If Tha Fix cancels a paid event and does not reschedule it, Tha Fix will issue a refund of the amount paid directly to Tha Fix for the affected ticket, including mandatory ticket charges and refundable taxes.
          </P>
          <P>
            The refund will ordinarily be sent automatically to the original payment method. Tha Fix may request reasonable transaction or identity verification when necessary.
          </P>
          <P>
            Tha Fix is not responsible for independently purchased transportation, lodging, parking, meals, childcare, lost work, third-party fees, or other personal expenses arising from an event cancellation, except where applicable law requires otherwise.
          </P>
          <P>
            For a canceled free event, the RSVP or audience confirmation ends without payment or compensation.
          </P>

          <H2>13. Rescheduled Events</H2>
          <P>
            If an event is rescheduled, an existing paid ticket will ordinarily remain valid for the replacement date. The purchaser may instead request a refund by contacting <strong>info@thafix502.com</strong>:
          </P>
          <UL>
            <li>Within seven calendar days after Tha Fix sends the rescheduling notice; and</li>
            <li>Before the rescheduled event begins.</li>
          </UL>
          <P>
            If the purchaser does not submit a timely refund request, the ticket remains valid for the rescheduled event and becomes subject to the ordinary attendee-cancellation deadline calculated from the new event date. For free events, Tha Fix may require attendees to reconfirm their RSVP or audience position for the new date.
          </P>

          <H2>14. Postponed Events</H2>
          <P>
            An event is “postponed” when it will not occur as scheduled and a replacement date has not yet been confirmed. Tha Fix will provide updates when reasonably practicable. A paid ticket will remain valid while a new date is being arranged. If no replacement date is announced within 60 calendar days after the original scheduled date, the purchaser may request a refund before a replacement date is announced. If a replacement date is later announced, the rescheduling rules above apply. Tha Fix may provide a refund earlier when reasonably appropriate or required by law.
          </P>

          <H2>15. Material Event Changes</H2>
          <P>A “material change” generally includes:</P>
          <UL>
            <li>Moving an in-person event to a virtual-only format;</li>
            <li>Moving the event outside the Louisville metropolitan area;</li>
            <li>A substantial reduction of the event’s primary advertised experience; or</li>
            <li>Another change that reasonably alters the fundamental nature of the ticket purchased.</li>
          </UL>
          <P>Ordinary production or programming adjustments generally are not material changes. These may include:</P>
          <UL>
            <li>Substituting or removing a guest, panelist, sponsor, segment, or activity;</li>
            <li>Adjusting the start time by a reasonable amount;</li>
            <li>Moving to another reasonably comparable venue in the Louisville metropolitan area;</li>
            <li>Changing seating arrangements;</li>
            <li>Modifying the recording, livestream, or audience-participation format; or</li>
            <li>Making changes required for safety, accessibility, capacity, technical, legal, or operational reasons.</li>
          </UL>
          <P>
            When Tha Fix makes a material change, the purchaser may request a refund within seven calendar days after notice and before attending or using the changed event.
          </P>

          <H2>16. Force Majeure and Circumstances Beyond Reasonable Control</H2>
          <P>
            Tha Fix may cancel, postpone, reschedule, relocate, shorten, restrict, or change an event because of severe weather, natural disaster, fire, flood, epidemic, public-health concern, government order, civil disturbance, threat, security issue, power or internet failure, transportation disruption, labor issue, venue failure, host or guest emergency, or another circumstance beyond reasonable control.
          </P>
          <P>
            The cancellation, rescheduling, postponement, and material-change remedies in these Event Terms will apply. Nothing in this section eliminates a refund right provided elsewhere in these Event Terms or required by law.
          </P>

          <H2>17. Admission, Check-In, and Seating</H2>
          <P>Admission remains subject to:</P>
          <UL>
            <li>A valid confirmation, ticket, invitation, or approved RSVP;</li>
            <li>Required identification and age verification;</li>
            <li>Timely arrival and check-in;</li>
            <li>Capacity and seating availability;</li>
            <li>Compliance with venue and safety rules;</li>
            <li>Membership status when applicable; and</li>
            <li>Any required release, waiver, or participation form disclosed for the event.</li>
          </UL>
          <P>
            Unless assigned seating is expressly sold, seating is not guaranteed and may be first come, first served.
          </P>
          <P>
            Tha Fix may establish an arrival or check-in deadline. Late arrivals may be admitted at an appropriate break, directed to available seating, or denied entry when admission would disrupt a recording, livestream, performance, or safety procedure. A late arrival or no-show is not entitled to a refund.
          </P>
          <P>
            Leaving an event may end the right to reenter unless reentry is expressly permitted.
          </P>

          <H2>18. Venue Rules, Security, and Prohibited Items</H2>
          <P>
            Attendees must comply with reasonable instructions from Tha Fix, venue personnel, security personnel, emergency responders, and event partners.
          </P>
          <P>Prohibited items or conduct may include:</P>
          <UL>
            <li>Weapons or items reasonably considered dangerous;</li>
            <li>Illegal drugs or unlawful substances;</li>
            <li>Outside alcohol;</li>
            <li>Professional recording or broadcasting equipment without permission;</li>
            <li>Signs, materials, or equipment that obstruct views or operations;</li>
            <li>Unauthorized sales, solicitation, promotion, or distribution;</li>
            <li>Counterfeit, duplicated, altered, or resold tickets;</li>
            <li>Conduct that threatens, harasses, intimidates, or endangers another person; and</li>
            <li>Any item or activity prohibited by the venue or applicable law.</li>
          </UL>
          <P>
            Tha Fix or the venue may conduct lawful security screening and may deny entry to a person who refuses a required screening.
          </P>

          <H2>19. Attendee Conduct and Removal</H2>
          <P>
            Tha Fix welcomes strong opinions, disagreement, controversial discussion, and lawful criticism. Attendees must nevertheless behave in a manner consistent with the Tha Fix Comment and Community Guidelines and event-specific rules. Tha Fix or the venue may warn, relocate, refuse admission to, or remove a person for conduct including:
          </P>
          <UL>
            <li>Threats, violence, harassment, stalking, intimidation, or discrimination;</li>
            <li>Fighting or materially disruptive behavior;</li>
            <li>Interfering with hosts, guests, staff, equipment, recording, or other attendees;</li>
            <li>Doxxing or disclosing private information;</li>
            <li>Unauthorized entry into restricted areas;</li>
            <li>Unauthorized commercial activity, recording, or livestreaming;</li>
            <li>Intoxication or impairment creating a safety or operational risk;</li>
            <li>Fraud, ticket misuse, or misrepresentation;</li>
            <li>Refusal to follow reasonable safety or venue instructions; or</li>
            <li>Violation of these Event Terms, the Terms of Use, applicable law, or venue rules.</li>
          </UL>
          <P>
            A person denied entry or removed for misconduct is generally not entitled to a refund and may lose eligibility for future events, memberships, community features, or other opportunities, subject to applicable law and the relevant terms.
          </P>

          <H2>20. Health and Safety</H2>
          <P>
            Attendance at an in-person event involves ordinary risks associated with travel, crowds, facilities, weather, communicable illness, and interaction with other people.
          </P>
          <P>
            Attendees are responsible for evaluating their own health and circumstances and following event-specific health, emergency, and safety instructions.
          </P>
          <P>
            Tha Fix may implement reasonable health or safety measures based on venue requirements, public conditions, professional advice, or legal requirements. When reasonably practicable, material requirements will be disclosed before the event.
          </P>
          <P>
            In an emergency, attendees should follow instructions from venue staff, security personnel, and emergency responders.
          </P>

          <H2>21. Accessibility</H2>
          <P>
            Tha Fix is working toward conformance with WCAG 2.2 Level AA for its website and will offer reasonable event-related assistance or an accessible alternative when reasonably possible. An attendee requesting an accommodation should contact <strong>info@thafix502.com</strong> as early as reasonably possible and provide:
          </P>
          <UL>
            <li>The event name and date;</li>
            <li>A description of the requested accommodation or access difficulty;</li>
            <li>Relevant communication, mobility, sensory, dietary, seating, or technology needs; and</li>
            <li>A preferred contact method.</li>
          </UL>
          <P>
            Tha Fix will respond as reasonably practicable. Some accommodations may depend on advance notice, venue capabilities, third-party cooperation, available resources, safety requirements, or the nature of the event.
          </P>
          <P>
            Nothing in this section limits rights provided by applicable disability-access law.
          </P>

          <H2>22. Photography, Audio, Video, and Livestream Notice</H2>
          <P>
            Tha Fix is a media network. Its events may be photographed, audio recorded, video recorded, broadcast, or livestreamed for editorial, documentary, promotional, advertising, archival, commercial, and other lawful purposes.
          </P>
          <P>
            Event listings and venue notices will identify recording when reasonably practicable. By knowingly entering and remaining in a clearly identified recording area, you acknowledge that your image, likeness, voice, statements, and appearance may be captured incidentally or as part of the audience.
          </P>
          <P>
            To the extent permitted by law, you authorize Back To Marketing LLC and its affiliates, service providers, licensees, successors, and assigns to record, reproduce, edit, adapt, publish, display, perform, distribute, transmit, promote, advertise, archive, and otherwise use such event footage in any media or format, without additional compensation to you.
          </P>
          <P>
            Tha Fix may require a separate written appearance, guest, interview, photography, or recording release when a person:
          </P>
          <UL>
            <li>Is interviewed;</li>
            <li>Appears as a featured participant;</li>
            <li>Speaks on camera or into a microphone;</li>
            <li>Participates in a produced segment;</li>
            <li>Submits content for use; or</li>
            <li>Is otherwise used beyond ordinary or incidental audience coverage.</li>
          </UL>
          <P>
            If you do not want to be captured, contact event staff before entering the recording area. Tha Fix will consider reasonable alternatives when reasonably possible, but cannot guarantee exclusion from wide shots, crowd audio, livestreams, or incidental background footage at an event identified as being recorded.
          </P>

          <H2>23. Attendee Photography and Recording</H2>
          <P>
            Unless otherwise stated, attendees may use mobile phones for limited personal, noncommercial photography or short recordings that do not disrupt the event, violate another person’s rights, reveal restricted information, or interfere with Tha Fix’s production. Without prior written permission, attendees may not:
          </P>
          <UL>
            <li>Livestream or rebroadcast an event;</li>
            <li>Record a full episode, performance, presentation, or substantial portion of an event;</li>
            <li>Use professional audio, video, lighting, or photography equipment;</li>
            <li>Sell, license, monetize, or commercially exploit event recordings;</li>
            <li>Record in a restricted, private, backstage, or members-only area; or</li>
            <li>Use recordings in a misleading manner or in a way that infringes intellectual-property, privacy, publicity, or contractual rights.</li>
          </UL>
          <P>
            Tha Fix or the venue may prohibit all attendee recording for a particular event or segment.
          </P>

          <H2>24. Hosts, Guests, Programs, and Outcomes</H2>
          <P>
            Hosts, guests, speakers, sponsors, partners, topics, schedules, and programming remain subject to change. Unless an event-specific offer expressly provides otherwise, a change involving a host, guest, speaker, sponsor, topic, segment, or program does not automatically create a refund right when the event’s fundamental nature remains substantially intact. Attendance does not guarantee:
          </P>
          <UL>
            <li>Individual speaking time;</li>
            <li>An interview, on-camera appearance, or publication;</li>
            <li>A meeting or introduction;</li>
            <li>A collaboration, guest position, employment, sponsorship, investment, sale, or income;</li>
            <li>Promotion by Tha Fix;</li>
            <li>Access to restricted persons or areas; or</li>
            <li>Any particular professional, social, promotional, or financial result.</li>
          </UL>

          <H2>25. Member Events, Benefits, and Priority</H2>
          <P>
            Certain events, sessions, offers, or registration periods may be limited to active members or particular membership levels.
          </P>
          <P>Membership-related access remains subject to:</P>
          <UL>
            <li>Active membership status and good standing;</li>
            <li>Capacity;</li>
            <li>Timely registration;</li>
            <li>Event-specific eligibility;</li>
            <li>Safety and legal requirements; and</li>
            <li>The Tha Fix Membership Terms.</li>
          </UL>
          <P>
            Membership does not guarantee admission after capacity is reached. Founder early access or priority means an earlier or prioritized opportunity when reasonably practicable; it does not guarantee a ticket, seat, appearance, collaboration, or outcome.
          </P>
          <P>
            Membership merchandise discounts do not apply to event tickets, event packages, food, beverages, taxes, or fees unless the applicable offer expressly states otherwise.
          </P>
          <P>
            When a membership ends before a members-only event, eligibility may also end unless the event listing or confirmation expressly states otherwise. Any refund right will be determined by the Membership Terms, these Event Terms, and the event-specific offer.
          </P>

          <H2>26. Livestreams and Virtual Events</H2>
          <P>
            Livestream and virtual-event access may depend on internet availability, compatible equipment, supported software, account access, membership status, geographic restrictions, and third-party platforms.
          </P>
          <P>
            Tha Fix does not guarantee uninterrupted or error-free transmission. We may delay, interrupt, restart, edit, replace, archive, or discontinue a broadcast because of technical, production, safety, editorial, legal, or third-party requirements.
          </P>
          <P>
            If a paid virtual event becomes materially unavailable because of a failure within Tha Fix’s reasonable control, Tha Fix may provide:
          </P>
          <UL>
            <li>Restored or replacement access;</li>
            <li>Access to a recording;</li>
            <li>A rescheduled broadcast;</li>
            <li>A reasonably comparable substitute; or</li>
            <li>A partial or full refund when appropriate or required by law.</li>
          </UL>
          <P>
            Minor buffering, a viewer’s device or internet failure, failure to join on time, or a third-party issue outside Tha Fix’s reasonable control does not automatically create a refund right.
          </P>
          <P>
            Access links, passwords, and members-only broadcasts are personal and may not be shared, posted, resold, or redistributed.
          </P>

          <H2>27. Third-Party Venues, Partners, and Ticketing Services</H2>
          <P>
            An event may involve a venue, community organization, sponsor, promoter, food provider, security provider, parking operator, ticketing provider, livestream platform, or other third party.
          </P>
          <P>
            Third parties may impose additional lawful terms and privacy practices. You are responsible for reviewing applicable requirements presented to you.
          </P>
          <P>
            Tha Fix is not responsible for a third party’s separate products, services, representations, charges, parking, transportation, food, alcohol service, accessibility representations, security decisions, or independent conduct, except to the extent responsibility cannot lawfully be excluded.
          </P>
          <P>
            A partnership, sponsor reference, venue listing, guest appearance, or external link does not necessarily constitute an endorsement.
          </P>

          <H2>28. Lost, Stolen, Duplicated, or Compromised Tickets</H2>
          <P>
            Contact <strong>info@thafix502.com</strong> promptly if you believe a ticket or confirmation has been lost, stolen, duplicated, or compromised.
          </P>
          <P>
            Tha Fix may require identity, purchase, payment, or account verification before replacing or reissuing access. Replacement is not guaranteed when ownership cannot reasonably be verified or when venue or ticketing technology prevents reissuance.
          </P>
          <P>
            Only the first valid scan or confirmed holder may be admitted when multiple copies of the same ticket are presented.
          </P>

          <H2>29. Personal Property and Personal Expenses</H2>
          <P>
            Attendees remain responsible for their personal property. To the fullest extent permitted by law, Tha Fix is not responsible for lost, stolen, misplaced, or damaged items unless the loss results from liability that cannot legally be excluded.
          </P>
          <P>
            Attendees are also responsible for transportation, lodging, parking, meals, childcare, time away from work, and other personal arrangements. An event change or cancellation does not require Tha Fix to reimburse those independent expenses except where required by law.
          </P>

          <H2>30. Assumption of Ordinary Event Risks</H2>
          <P>
            To the fullest extent permitted by law, you voluntarily assume the ordinary and reasonably foreseeable risks of attending or participating in the event, including risks associated with crowds, travel, facilities, weather, communicable illness, audience participation, and incidental recording.
          </P>
          <P>
            Nothing in these Event Terms waives or limits liability for gross negligence, willful misconduct, fraud, or another liability or right that cannot legally be waived or limited.
          </P>
          <P>
            Additional voluntary activities with unusual risks may require a separate event-specific waiver.
          </P>

          <H2>31. Privacy and Event Communications</H2>
          <P>
            Tha Fix may collect and use registration, application, transaction, identity, accessibility, attendance, participation, recording, and communication information as described in the Privacy Policy. Information may be shared with service providers, venues, security personnel, event partners, payment processors, email providers, and other parties when reasonably necessary to:
          </P>
          <UL>
            <li>Process registration or payment;</li>
            <li>Deliver tickets and event communications;</li>
            <li>Verify eligibility;</li>
            <li>Operate the event;</li>
            <li>Provide requested accommodations;</li>
            <li>Maintain safety and security;</li>
            <li>Prevent fraud;</li>
            <li>Produce or distribute authorized media; or</li>
            <li>Comply with law.</li>
          </UL>
          <P>
            Transaction and operational messages may be sent electronically to the contact information supplied. Marketing messages remain subject to the Privacy Policy and applicable consent and unsubscribe requirements.
          </P>

          <H2>32. Payment Disputes and Chargebacks</H2>
          <P>
            Contact <strong>info@thafix502.com</strong> before initiating a payment dispute so Tha Fix has a reasonable opportunity to investigate and resolve the issue.
          </P>
          <P>
            A chargeback or payment reversal may result in cancellation of the associated ticket, reservation, membership benefit, or event access while the transaction is investigated.
          </P>
          <P>
            Nothing in this section prevents a purchaser from exercising lawful rights through a payment provider.
          </P>

          <H2>33. Enforcement, Suspension, and Future Eligibility</H2>
          <P>
            Tha Fix may deny, restrict, suspend, or revoke event access when reasonably necessary because of:
          </P>
          <UL>
            <li>Violation of these Event Terms or another applicable policy;</li>
            <li>Fraud, chargeback abuse, resale, or ticket misuse;</li>
            <li>Safety or security concerns;</li>
            <li>Harassment, threats, violence, or material disruption;</li>
            <li>Misuse of member-only or livestream access;</li>
            <li>Failure to satisfy eligibility or verification requirements; or</li>
            <li>Conduct creating material legal, operational, or reputational risk.</li>
          </UL>
          <P>
            Serious misconduct may also affect the person’s Tha Fix account, membership, community privileges, and eligibility for future events, subject to the applicable Terms of Use and Membership Terms.
          </P>

          <H2>34. Changes to These Event Terms</H2>
          <P>
            Tha Fix may update these Event Terms to reflect changes in events, ticketing practices, payment systems, venues, technology, safety measures, legal requirements, or business operations.
          </P>
          <P>
            Updated terms will display a revised “Last Updated” date. Changes apply prospectively from their effective date unless applicable law requires otherwise.
          </P>
          <P>
            The terms accepted at the time of a completed purchase will continue to govern that transaction to the extent required by law. Tha Fix will not retroactively remove a refund right that had already become available under the applicable terms.
          </P>

          <H2>35. Disputes, Arbitration, and Governing Law</H2>
          <P>
            The informal dispute-resolution, binding individual arbitration, class-action waiver, jury-trial waiver, arbitration opt-out, governing-law, and court-venue provisions in the Tha Fix Terms of Use apply to disputes arising from these Event Terms, an event, an RSVP, an audience application, a ticket, a purchase, attendance, or participation.
          </P>
          <P>In summary:</P>
          <UL>
            <li>A party must ordinarily provide a complete written Notice of Dispute and allow at least 30 days for informal resolution before starting arbitration or filing suit;</li>
            <li>Most disputes must be resolved through final and binding individual arbitration administered by the American Arbitration Association under its applicable Consumer Arbitration Rules;</li>
            <li>Eligible individual small-claims matters and other claims identified in the Terms of Use are excluded from mandatory arbitration;</li>
            <li>Claims must be brought individually rather than through a class, collective, coordinated, mass, private-attorney-general, or representative action, to the fullest extent permitted by law;</li>
            <li>A person may opt out of the arbitration provisions by following the procedure and 30-day deadline stated in the Terms of Use; and</li>
            <li>Kentucky law governs except where federal law applies or applicable law requires otherwise. Court proceedings permitted under the Terms of Use must be brought in the specified state or federal courts with jurisdiction over Jefferson County, Kentucky.</li>
          </UL>
          <P>Review the complete Terms of Use before registering for or purchasing an event.</P>

          <H2>36. Contact</H2>
          <P>
            Questions about an event, RSVP, audience application, ticket, transfer, accessibility request, cancellation, or refund may be directed to:
          </P>
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
          <P>
            For faster assistance, include the event name, purchaser or registrant name, email address used, and order or confirmation number.
          </P>
        </div>
      </section>
    </>
  );
}
