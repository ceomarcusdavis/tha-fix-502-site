import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/guidelines")({
  head: () => ({
    meta: [
      { title: "Commenting & Community Guidelines — Tha Fix" },
      { name: "description", content: "Rules for participating in Tha Fix interactive areas and community features." },
      { property: "og:title", content: "Commenting & Community Guidelines" },
      { property: "og:description", content: "Rules for participating in Tha Fix interactive areas and community features." },
    ],
  }),
  component: GuidelinesPage,
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

function GuidelinesPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Commenting & Community Guidelines" />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-4 text-foreground/80 leading-relaxed">
          <p className="font-bold leading-tight">
            Effective Date: July 20, 2026
            <br />
            Last Updated: July 20, 2026
          </p>

          <P>
            Tha Fix is intended to support honest conversation, strong opinions, creative expression, networking, and meaningful debate. Members do not have to agree with Tha Fix, its guests, its contributors, or one another.
          </P>
          <P>
            These Commenting & Community Guidelines (“Guidelines”) establish the rules for participating in interactive areas operated by <strong>Back To Marketing LLC</strong>, doing business as <strong>Tha Fix</strong> (“Tha Fix,” “we,” “us,” or “our”).
          </P>
          <P>
            By commenting, publishing, messaging, participating in a community, or otherwise contributing to an interactive area, you agree to these Guidelines, the Tha Fix Terms of Use, Membership Terms, and Privacy Policy.
          </P>

          <H2>1. Scope</H2>
          <P>These Guidelines apply to all Tha Fix interactive areas, including:</P>
          <UL>
            <li>Blog comments;</li>
            <li>Member-created blog posts;</li>
            <li>Community feeds;</li>
            <li>Private member communities;</li>
            <li>Webinar and livestream chats;</li>
            <li>Member and guest profiles;</li>
            <li>Direct messages, if offered;</li>
            <li>Questions and topic submissions;</li>
            <li>Polls and voting features;</li>
            <li>Event discussions;</li>
            <li>Networking sessions;</li>
            <li>Tha Fix After Hours discussions;</li>
            <li>Founder sessions; and</li>
            <li>Other areas where users may submit, publish, or exchange content.</li>
          </UL>
          <P>These Guidelines apply whether the content is public, members-only, private, live, recorded, temporary, or archived.</P>

          <H2>2. Eligibility</H2>
          <P>Commenting and community participation are generally limited to active paid members who:</P>
          <UL>
            <li>Are at least 18 years old;</li>
            <li>Maintain an account in good standing;</li>
            <li>Use their own account;</li>
            <li>Provide accurate account information;</li>
            <li>Follow these Guidelines and other applicable Tha Fix policies; and</li>
            <li>Meet any additional eligibility requirements for a particular feature or event.</li>
          </UL>
          <P>
            A member may use their real name or an approved screen name. A screen name may not impersonate another person, business, organization, public official, Tha Fix representative, or member.
          </P>
          <P>
            Membership and participation privileges are personal. Members may not share accounts, allow another person to post through their account, or use another person’s account to avoid a restriction.
          </P>

          <H2>3. Tha Fix’s Community Standard</H2>
          <P>Tha Fix permits:</P>
          <UL>
            <li>Strong opinions;</li>
            <li>Good-faith disagreement;</li>
            <li>Unpopular viewpoints;</li>
            <li>Ordinary profanity;</li>
            <li>Humor and satire;</li>
            <li>Criticism;</li>
            <li>Debate about political, cultural, religious, and social issues; and</li>
            <li>Discussion of controversial subjects.</li>
          </UL>
          <P>Profanity or blunt language is not automatically a violation. Context matters.</P>
          <P>
            However, strong opinions do not excuse threats, harassment, hate speech, doxxing, personal abuse, unlawful conduct, or other prohibited behavior.
          </P>
          <P>
            Members should challenge ideas and conduct without attempting to intimidate, dehumanize, or relentlessly target another person.
          </P>

          <H2>4. Criticism and Personal Attacks</H2>
          <P>Members may criticize:</P>
          <UL>
            <li>Ideas and opinions;</li>
            <li>Public statements;</li>
            <li>Public conduct;</li>
            <li>Businesses and products;</li>
            <li>Creative work;</li>
            <li>Political positions;</li>
            <li>Public figures;</li>
            <li>Tha Fix content and decisions; and</li>
            <li>Other matters appropriate for public discussion.</li>
          </UL>
          <P>Criticism may be forceful. It must not become targeted abuse or harassment.</P>
          <P>Members may not:</P>
          <UL>
            <li>Repeatedly insult or antagonize another person;</li>
            <li>Follow someone across discussions to provoke them;</li>
            <li>Encourage others to target a member;</li>
            <li>Use degrading personal attacks unrelated to the discussion;</li>
            <li>Threaten or intimidate another person;</li>
            <li>Contact someone repeatedly after being asked to stop; or</li>
            <li>Use criticism as a pretext for harassment or unlawful discrimination.</li>
          </UL>
          <P>
            Disagreement, criticism, or being offended does not automatically establish harassment. Tha Fix will consider context, frequency, severity, intent, and reasonably foreseeable effect.
          </P>

          <H2>5. Prohibited Content and Conduct</H2>
          <P>The following content and conduct are prohibited.</P>

          <H3>Threats and violence</H3>
          <P>Members may not:</P>
          <UL>
            <li>Make credible or implied threats of harm;</li>
            <li>Encourage violence against a person or group;</li>
            <li>Glorify serious violence in a manner likely to encourage harm;</li>
            <li>Provide instructions for committing violent acts;</li>
            <li>Solicit or coordinate violence;</li>
            <li>Recruit for gangs or violent organizations; or</li>
            <li>Celebrate or encourage actual injury, death, or abuse.</li>
          </UL>
          <P>
            Good-faith news reporting, documentary discussion, criticism, education, or analysis may be permitted when it does not encourage harm.
          </P>

          <H3>Harassment and abuse</H3>
          <P>Members may not:</P>
          <UL>
            <li>Harass, stalk, bully, intimidate, or repeatedly target another person;</li>
            <li>Direct abusive profanity at another person;</li>
            <li>Make unwanted sexual comments or advances;</li>
            <li>Coordinate or encourage pile-ons;</li>
            <li>Retaliate against someone for making a good-faith report; or</li>
            <li>Use direct messages or multiple accounts to continue unwanted contact.</li>
          </UL>

          <H3>Hate speech and unlawful discrimination</H3>
          <P>
            Members may not attack, dehumanize, threaten, or promote hatred or unlawful discrimination against people based on legally protected characteristics.
          </P>
          <P>
            Good-faith discussion about identity, religion, politics, culture, public policy, or social issues is allowed. Criticism of an idea, belief, institution, government, or public policy is not automatically hate speech.
          </P>

          <H3>Graphic sexual and exploitative content</H3>
          <P>Members may not publish:</P>
          <UL>
            <li>Graphic sexual content;</li>
            <li>Sexually exploitative material;</li>
            <li>Nonconsensual intimate material;</li>
            <li>Sexual content involving minors;</li>
            <li>Sexual threats or harassment; or</li>
            <li>Links directing users to prohibited sexual material.</li>
          </UL>

          <H3>Illegal sales and solicitations</H3>
          <P>Members may not use Tha Fix to:</P>
          <UL>
            <li>Sell or facilitate illegal drugs;</li>
            <li>Sell or facilitate firearms or prohibited weapons;</li>
            <li>Recruit for gangs;</li>
            <li>Arrange unlawful services;</li>
            <li>Conduct fraudulent fundraising;</li>
            <li>Operate scams or deceptive solicitations; or</li>
            <li>Promote or coordinate other illegal transactions.</li>
          </UL>

          <H3>Doxxing and private information</H3>
          <P>
            Members may not publish, threaten to publish, solicit, or distribute another person’s private or sensitive information without authorization.
          </P>
          <P>This includes:</P>
          <UL>
            <li>Home addresses;</li>
            <li>Personal telephone numbers;</li>
            <li>Private email addresses;</li>
            <li>Precise nonpublic locations;</li>
            <li>Government identification numbers;</li>
            <li>Financial information;</li>
            <li>Medical information;</li>
            <li>Account credentials;</li>
            <li>Private communications;</li>
            <li>Information about minors; and</li>
            <li>Information that could reasonably expose someone to harm, fraud, stalking, or harassment.</li>
          </UL>
          <P>
            Information being obtainable elsewhere does not necessarily make reposting it appropriate on Tha Fix.
          </P>

          <H3>Impersonation and deception</H3>
          <P>Members may not:</P>
          <UL>
            <li>Impersonate another person or organization;</li>
            <li>Falsely claim affiliation with Tha Fix;</li>
            <li>Misrepresent their identity, credentials, business, or membership status;</li>
            <li>Create deceptive accounts;</li>
            <li>Use another member’s account; or</li>
            <li>Manipulate discussions, polls, engagement, or voting through false identities.</li>
          </UL>

          <H3>Deceptive AI and manipulated media</H3>
          <P>
            Members are not generally required to disclose ordinary use of artificial-intelligence tools.
          </P>
          <P>However, members may not use AI or manipulated media to:</P>
          <UL>
            <li>Impersonate a real person;</li>
            <li>Fabricate statements or conduct and present them as authentic;</li>
            <li>Create or distribute deceptive deepfakes;</li>
            <li>Mislead others about the source or authenticity of material;</li>
            <li>Commit fraud, harassment, defamation, or identity theft; or</li>
            <li>Evade another rule in these Guidelines.</li>
          </UL>
          <P>
            Tha Fix may require clarification or labeling when the authenticity of submitted material is materially relevant.
          </P>

          <H3>Harmful false information</H3>
          <P>
            Tha Fix may remove demonstrably false or materially deceptive content that could cause meaningful harm, including:
          </P>
          <UL>
            <li>Fraudulent claims;</li>
            <li>Dangerous medical or health claims;</li>
            <li>Fabricated accusations;</li>
            <li>Manipulated media presented as authentic;</li>
            <li>False emergency information;</li>
            <li>Impersonation;</li>
            <li>Scams; or</li>
            <li>False information intended to cause financial, physical, legal, or reputational harm.</li>
          </UL>
          <P>
            A disputed opinion, unpopular position, prediction, satire, mistake, or good-faith disagreement is not automatically prohibited misinformation.
          </P>
          <P>
            When context is unclear, Tha Fix may request a source, clarification, correction, or additional context.
          </P>

          <H3>Unverified accusations</H3>
          <P>
            Members may not present an unverified allegation of criminal, abusive, fraudulent, unethical, or professionally damaging conduct as an established fact.
          </P>
          <P>When discussing allegations, members should distinguish among:</P>
          <UL>
            <li>Personal opinion;</li>
            <li>Firsthand experience;</li>
            <li>Publicly documented information;</li>
            <li>An allegation;</li>
            <li>A pending investigation; and</li>
            <li>A proven or adjudicated fact.</li>
          </UL>
          <P>Members remain legally responsible for their statements.</P>

          <H3>Spam and deceptive promotion</H3>
          <P>
            Members may promote their businesses, products, services, events, fundraisers, projects, and social-media accounts, provided that the promotion is not:
          </P>
          <UL>
            <li>Repetitive;</li>
            <li>Irrelevant to the discussion;</li>
            <li>Deceptive;</li>
            <li>Fraudulent;</li>
            <li>Misleading;</li>
            <li>Unlawful;</li>
            <li>Posted through automated or coordinated spam;</li>
            <li>Designed primarily to overwhelm community discussion; or</li>
            <li>Presented as endorsed by Tha Fix without authorization.</li>
          </UL>
          <P>
            Tha Fix may limit promotional frequency, require disclosure of a financial interest, relocate promotional content, or establish designated promotional areas.
          </P>
          <P>Permission to self-promote does not constitute an endorsement by Tha Fix.</P>

          <H3>Intellectual-property violations</H3>
          <P>Members may not publish content that infringes another person’s:</P>
          <UL>
            <li>Copyright;</li>
            <li>Trademark;</li>
            <li>Right of publicity;</li>
            <li>Privacy rights;</li>
            <li>Trade secrets; or</li>
            <li>Other intellectual-property or proprietary rights.</li>
          </UL>
          <P>Members should post only content they own or have permission to use.</P>

          <H3>Malware and interference</H3>
          <P>Members may not:</P>
          <UL>
            <li>Upload malware or malicious code;</li>
            <li>Post deceptive or harmful links;</li>
            <li>Attempt to compromise an account;</li>
            <li>Circumvent access controls;</li>
            <li>Scrape member information without authorization;</li>
            <li>Disrupt the Services;</li>
            <li>Manipulate platform functions; or</li>
            <li>Help another person commit a security violation.</li>
          </UL>

          <H2>6. Private and Members-Only Content</H2>
          <P>
            Access to private communities, webinars, livestreams, After Hours discussions, networking sessions, Founder sessions, direct messages, and other restricted content does not authorize public redistribution.
          </P>
          <P>Without appropriate permission, members may not:</P>
          <UL>
            <li>Record private sessions;</li>
            <li>Take or distribute screenshots;</li>
            <li>Repost private discussions;</li>
            <li>Publish another member’s private messages;</li>
            <li>Share restricted recordings or downloads;</li>
            <li>Provide private access links to nonmembers;</li>
            <li>Livestream a private session elsewhere; or</li>
            <li>Summarize private information in a way that identifies or harms participants.</li>
          </UL>
          <P>
            Tha Fix may separately authorize recording or distribution. Participants will be notified when Tha Fix records an official session.
          </P>
          <P>
            Members should understand that Tha Fix cannot guarantee that another participant will follow these rules. Members should avoid sharing highly sensitive information in community spaces.
          </P>

          <H2>7. Comments</H2>
          <P>Members may comment on eligible Tha Fix blog posts while their paid membership is active.</P>
          <P>Members may:</P>
          <UL>
            <li>Use their real name or an approved screen name;</li>
            <li>Edit their own comments;</li>
            <li>Delete their own comments when the feature is available;</li>
            <li>Reply to other participants; and</li>
            <li>Report suspected violations.</li>
          </UL>
          <P>Edited comments should display an “Edited” label when technically available.</P>
          <P>
            Editing a comment does not prevent Tha Fix from retaining earlier versions when reasonably necessary for moderation, security, dispute resolution, or legal compliance.
          </P>
          <P>When paid access ends, the member may no longer post new comments. Existing comments may remain visible unless:</P>
          <UL>
            <li>The member deletes them;</li>
            <li>The member submits an appropriate removal request;</li>
            <li>Tha Fix removes them;</li>
            <li>The applicable author-moderator hides or removes them; or</li>
            <li>Removal is required by law.</li>
          </UL>

          <H2>8. Member-Created Blog Posts</H2>
          <P>
            Eligible Network and Founder members may create and publish blog posts, subject to the Membership Terms and Tha Fix’s editorial and technical requirements.
          </P>
          <P>
            Member-created posts must comply with these Guidelines. Publishing access does not permit prohibited, infringing, deceptive, or unlawful content.
          </P>
          <P>Tha Fix may:</P>
          <UL>
            <li>Review a post;</li>
            <li>Request corrections or revisions;</li>
            <li>Edit formatting or technical elements;</li>
            <li>Add categories, labels, or disclosures;</li>
            <li>Decline publication;</li>
            <li>Restrict visibility; or</li>
            <li>Remove or unpublish a post.</li>
          </UL>
          <P>
            Blog authors remain responsible for their submissions and must disclose material business, sponsorship, affiliate, or financial interests when needed to prevent deception.
          </P>

          <H2>9. Author Moderation</H2>
          <P>
            Authorized Network and Founder members who publish blog posts may moderate comments appearing under their own posts.
          </P>
          <P>Author-moderators may:</P>
          <UL>
            <li>Hide or remove comments from their posts;</li>
            <li>Close discussion on a post when the feature is available;</li>
            <li>Report serious violations to Tha Fix;</li>
            <li>Request assistance from a Tha Fix administrator; and</li>
            <li>Manage discussion for relevance and civility.</li>
          </UL>
          <P>Author-moderators may not:</P>
          <UL>
            <li>Suspend or terminate another member’s account;</li>
            <li>Access private account or payment information;</li>
            <li>Retaliate against someone for respectful criticism;</li>
            <li>Use moderation to harass or discriminate unlawfully;</li>
            <li>Alter another member’s comment to change its meaning; or</li>
            <li>Represent themselves as having authority beyond their own post.</li>
          </UL>
          <P>
            Account-wide warnings, restrictions, suspensions, and terminations may be imposed only by authorized Tha Fix administrators or platform moderators.
          </P>
          <P>
            Tha Fix may review or reverse an author-moderation decision and may remove moderation privileges if they are misused.
          </P>

          <H2>10. Moderation Principles</H2>
          <P>Tha Fix may consider:</P>
          <UL>
            <li>The content itself;</li>
            <li>Context;</li>
            <li>Severity;</li>
            <li>Frequency;</li>
            <li>Whether the conduct was intentional;</li>
            <li>Previous violations;</li>
            <li>Risk of harm;</li>
            <li>Whether the conduct occurred publicly or privately;</li>
            <li>Whether the member attempted to correct the issue; and</li>
            <li>Whether immediate action is necessary.</li>
          </UL>
          <P>Tha Fix generally may use the following progression:</P>
          <OL>
            <li>Informal reminder;</li>
            <li>Formal warning;</li>
            <li>Temporary commenting or participation restriction;</li>
            <li>Account or membership suspension; and</li>
            <li>Termination.</li>
          </OL>
          <P>
            Tha Fix is not required to use every step or apply them in that order. Serious conduct may result in immediate removal, suspension, or termination.
          </P>
          <P>
            Examples that may justify immediate action include credible threats, doxxing, severe harassment, fraud, sexual exploitation, malicious impersonation, dangerous conduct, malware, or attempts to compromise the platform.
          </P>
          <P>
            Moderation decisions require judgment. Similar-looking situations may receive different outcomes because of context, severity, history, or available evidence.
          </P>

          <H2>11. Content Removal</H2>
          <P>Tha Fix and authorized author-moderators may remove, hide, restrict, label, close, or limit content that:</P>
          <UL>
            <li>Violates these Guidelines;</li>
            <li>Violates another Tha Fix policy;</li>
            <li>Creates a safety or legal risk;</li>
            <li>Is substantially off-topic or disruptive;</li>
            <li>Contains private information;</li>
            <li>Infringes another person’s rights;</li>
            <li>Appears fraudulent or malicious;</li>
            <li>Interferes with platform operation; or</li>
            <li>Must be restricted under applicable law.</li>
          </UL>
          <P>Tha Fix is not required to provide advance notice before removing content.</P>
          <P>
            Removal does not necessarily mean that Tha Fix has determined that the content was unlawful. Content may be removed as a community, safety, editorial, or risk-management decision.
          </P>
          <P>
            Tha Fix may retain nonpublic copies and moderation records for security, appeals, legal compliance, dispute resolution, and enforcement.
          </P>

          <H2>12. Suspension and Termination</H2>
          <P>Tha Fix may restrict, suspend, or terminate:</P>
          <UL>
            <li>Commenting privileges;</li>
            <li>Blog-publishing privileges;</li>
            <li>Direct-messaging access;</li>
            <li>Community access;</li>
            <li>Event or chat participation;</li>
            <li>Author-moderation privileges;</li>
            <li>Membership access; or</li>
            <li>The entire account.</li>
          </UL>
          <P>A temporary restriction may apply to one feature or the entire account.</P>
          <P>
            A person terminated for misconduct generally loses all active membership benefits without a refund, subject to the Membership Terms and applicable law.
          </P>
          <P>
            An official Founder terminated for later misconduct may retain historical Founder recognition under the Membership Terms, but loses commenting, publishing, community, discount, content, collaboration, and other active benefits.
          </P>

          <H2>13. Moderation Evasion</H2>
          <P>Members may not evade or attempt to defeat a moderation decision by:</P>
          <UL>
            <li>Creating or using another account;</li>
            <li>Posting through another person’s account;</li>
            <li>Reposting removed content;</li>
            <li>Slightly changing spelling, images, or formatting;</li>
            <li>Posting screenshots of removed content;</li>
            <li>Directing others to repost it;</li>
            <li>Moving prohibited conduct into direct messages;</li>
            <li>Using coded language to continue the same violation; or</li>
            <li>Returning to a discussion after being directed to stop.</li>
          </UL>
          <P>Moderation evasion may result in a longer restriction, suspension, or termination.</P>

          <H2>14. Reporting Content or Conduct</H2>
          <P>Members may report suspected violations by:</P>
          <UL>
            <li>Using the “Report” function associated with the content or account; or</li>
            <li>
              Emailing <strong>info@thafix502.com</strong> with the subject line <strong>“Community Report.”</strong>
            </li>
          </UL>
          <P>A useful report should include:</P>
          <UL>
            <li>The reporting person’s name and account email;</li>
            <li>A description of the concern;</li>
            <li>The location of the content;</li>
            <li>The date or approximate time;</li>
            <li>Relevant links or screenshots;</li>
            <li>The username or display name involved; and</li>
            <li>Any immediate safety concern.</li>
          </UL>
          <P>Members should not repost prohibited content publicly merely to report it.</P>
          <P>
            If a report involves an immediate threat or emergency, contact the appropriate emergency or law-enforcement service. Tha Fix’s reporting system is not an emergency-response service.
          </P>

          <H2>15. False Reports and Retaliation</H2>
          <P>Members may not knowingly submit false, deceptive, or retaliatory reports.</P>
          <P>
            A good-faith report will not violate these Guidelines merely because Tha Fix determines that no enforcement action is necessary.
          </P>
          <P>
            Members may not threaten, harass, expose, or retaliate against someone they believe submitted a report.
          </P>
          <P>
            Tha Fix may restrict reporting tools or take account action against someone who repeatedly abuses the reporting process.
          </P>

          <H2>16. Report Review and Confidentiality</H2>
          <P>
            Tha Fix will review reports based on available information and relative urgency. We do not guarantee a particular response time or outcome.
          </P>
          <P>
            To protect privacy, security, and the integrity of the review process, Tha Fix may not disclose:
          </P>
          <UL>
            <li>The identity of a reporting person;</li>
            <li>Private account information;</li>
            <li>Internal moderation notes;</li>
            <li>Security information;</li>
            <li>The full evidence considered; or</li>
            <li>Every action taken against another account.</li>
          </UL>
          <P>Tha Fix may contact the reporting person or affected member for clarification.</P>

          <H2>17. Appeals</H2>
          <P>
            A member may appeal a content removal, participation restriction, suspension, termination, or loss of moderation privileges by emailing:
          </P>
          <P>
            <strong>info@thafix502.com</strong>
            <br />
            <strong>Subject:</strong> Community Moderation Appeal
          </P>
          <P>The appeal should be submitted within 14 calendar days after notice of the decision and should include:</P>
          <UL>
            <li>The member’s name;</li>
            <li>The account email;</li>
            <li>The decision being appealed;</li>
            <li>The relevant content or event;</li>
            <li>Why the member believes the decision should be reconsidered; and</li>
            <li>Any relevant context or evidence.</li>
          </UL>
          <P>Submission of an appeal does not automatically pause the decision.</P>
          <P>
            Tha Fix may uphold, modify, or reverse the original action. A decision following the appeal will ordinarily be treated as final, although Tha Fix may reopen a matter if significant new information becomes available.
          </P>
          <P>
            Abusive, threatening, repetitive, or fraudulent appeals may be disregarded and may result in additional enforcement.
          </P>

          <H2>18. No Obligation to Monitor Everything</H2>
          <P>
            Tha Fix may moderate interactive areas but is not required to review every comment, post, profile, message, chat, or submission before or after publication.
          </P>
          <P>
            The presence of content does not mean Tha Fix approves, endorses, verifies, or agrees with it.
          </P>
          <P>
            Members are responsible for their own content and interactions. If you see a suspected violation, use the reporting process.
          </P>

          <H2>19. Privacy and Safety</H2>
          <P>
            Do not share information you do not want other participants to see. Even content posted in a restricted area may be copied or disclosed in violation of these Guidelines.
          </P>
          <P>Members should use caution before:</P>
          <UL>
            <li>Meeting another member;</li>
            <li>Entering a business arrangement;</li>
            <li>Sending money;</li>
            <li>Sharing confidential information;</li>
            <li>Following professional advice;</li>
            <li>Clicking external links; or</li>
            <li>Participating in an opportunity promoted by another member.</li>
          </UL>
          <P>
            Tha Fix does not guarantee the identity, qualifications, intentions, or reliability of community participants.
          </P>

          <H2>20. Relationship to Other Tha Fix Policies</H2>
          <P>These Guidelines supplement the:</P>
          <UL>
            <li>Terms of Use;</li>
            <li>Membership Terms;</li>
            <li>Privacy Policy;</li>
            <li>Copyright and intellectual-property reporting process; and</li>
            <li>Any event-specific, promotional, or contributor terms.</li>
          </UL>
          <P>
            If these Guidelines conflict with a more specific applicable policy, the more specific policy controls for that issue.
          </P>

          <H2>21. Changes to These Guidelines</H2>
          <P>
            Tha Fix may update these Guidelines as the community, platform, features, or legal requirements change.
          </P>
          <P>
            The revised policy will display an updated “Last Updated” date. Material changes may receive additional notice when appropriate or required.
          </P>
          <P>
            Continued participation after revised Guidelines take effect constitutes acceptance when permitted by law.
          </P>

          <H2>22. Contact</H2>
          <P>Questions, reports, or appeals may be directed to:</P>
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
