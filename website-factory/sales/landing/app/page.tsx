import Image from "next/image";
import Nav from "./components/Nav";
import FadeIn from "./components/FadeIn";
import StackCard from "./components/StackCard";
import LeadMagnetPopup from "./components/LeadMagnetPopup";
import FloatingPhone from "./components/FloatingPhone";

const stackItems = [
  {
    label: "Component 1",
    title: "High-Converting HVAC Website",
    description:
      "Custom-built for your brand. Mobile-first because that's where your customers are. Click-to-call on every page. Service area pages that rank in Google. Trust badges, review displays, before/after project galleries. A conversion machine built on frameworks proven across the HVAC industry.",
    value: "$3,500",
  },
  {
    label: "Component 2",
    title: "AI Voice Agent -- Never Miss Another Call",
    description:
      "An AI receptionist that picks up every call your team can't. Nights. Weekends. Lunch breaks. It answers professionally, captures the caller's information, qualifies the job type, and books it directly on your calendar. Your phone never goes to voicemail again.",
    value: "$3,000",
  },
  {
    label: "Component 3",
    title: "CRM + Lead Pipeline -- Every Lead Tracked",
    description:
      'Done-for-you CRM setup so every lead is visible from first contact to completed job. No more sticky notes. No more "did anyone call that person back?" You see the full picture -- who\'s waiting on a quote, who needs a follow-up, who\'s ready to book.',
    value: "$2,500",
  },
  {
    label: "Component 4",
    title: "Automated Follow-Up Sequences",
    description:
      "Quote sent but no response? The system follows up automatically at day 1, day 3, and day 7 via email and text. Past customer hasn't booked maintenance? Seasonal reminder. You stop chasing. The system chases for you, every time, without forgetting.",
    value: "$2,000",
  },
  {
    label: "Component 5",
    title: "Google Business Profile Optimization",
    description:
      'When someone searches "HVAC near me," you need to be in the top 3 map results. We fully optimize your Google Business Profile -- photos, service categories, descriptions, and a review strategy that builds your reputation on autopilot.',
    value: "$1,500",
  },
  {
    label: "Component 6",
    title: "90-Day SEO Content Plan",
    description:
      'A custom content roadmap targeting exactly what your customers type into Google: "AC repair [your city]," "furnace not turning on," "emergency HVAC service." You\'ll know what to publish, when to publish it, and why it brings in calls.',
    value: "$1,500",
  },
];

const bonusItems = [
  {
    label: "Bonus",
    title: "Online Booking Integration",
    description:
      "Homeowners book appointments directly from your website. No phone call required. Syncs with your calendar. Sends automatic confirmation texts. For the customer who wants to book at 11pm on a Tuesday -- you're open.",
    value: "$1,000",
  },
  {
    label: "Bonus",
    title: "Review Generation System",
    description:
      "After every completed job, your customer gets an automated text asking for a Google review. More reviews = higher rankings = more calls. The cycle feeds itself.",
    value: "$750",
  },
];

const comparisonRows = [
  ["What you get", "A pretty website", "Full booking + follow-up engine"],
  ["Missed calls", "Still missed", "AI agent catches every one"],
  ["Follow-up", '"We recommend you do that"', "Automated -- runs without you"],
  ["SEO", '"We can add that for extra"', "Built in from day one"],
  ["Reviews", "Not their problem", "Automated review requests"],
  ["HVAC-specific", "Generic template", "Built for your industry"],
  ["Guarantee", "None", "10 jobs in 90 days or I work free"],
];

export default function Home() {
  return (
    <>
      <Nav />
      <LeadMagnetPopup />
      <FloatingPhone />

      {/* HERO */}
      <section className="pt-40 pb-24 text-center px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="inline-block bg-accent-glow border border-accent/30 text-accent px-4 py-1.5 rounded-full text-[13px] font-semibold tracking-wide mb-8">
            Built Exclusively for HVAC Companies
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] tracking-[-2px] max-w-[850px] mx-auto mb-6">
            Stop Losing Jobs to HVAC Companies With{" "}
            <span className="text-accent">Worse Service</span> and Better
            Websites
          </h1>
          <p className="text-lg sm:text-xl text-secondary max-w-[640px] mx-auto mb-10 leading-relaxed">
            The Jobs Booked System turns your online presence into a 24/7
            booking machine -- so every missed call, every late-night search,
            and every &quot;I&apos;ll call back later&quot; becomes a job on
            your calendar.
          </p>
          <a
            href="#stack"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-9 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-0.5 shadow-[0_0_40px_rgba(255,107,43,0.2)] hover:shadow-[0_0_60px_rgba(255,107,43,0.3)]"
          >
            See How It Works &darr;
          </a>
          <p className="mt-12 text-sm text-muted max-w-[500px] mx-auto">
            70% of homeowners search for HVAC on their phone. If your site
            doesn&apos;t convert mobile visitors into booked jobs, you&apos;re
            paying for traffic that calls your competitor.
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-[13px] font-semibold text-accent uppercase tracking-[2px] mb-4">
            The Problem
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-[-1.5px] mb-12">
            You&apos;re Great at HVAC.
            <br />
            Your Website Isn&apos;t Great at Booking Jobs.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "📞",
                title: "Missed Calls = Lost Revenue",
                body: "Your team can't answer every call. Nights, weekends, lunch breaks -- every missed call is a $3,000 to $15,000 job walking to your competitor. And they're not leaving voicemails. They're calling the next company on Google.",
              },
              {
                icon: "⏰",
                title: '"We\'ll Follow Up" Never Happens',
                body: "You sent the quote. Then life happened. No follow-up at day 3. No check-in at day 7. The homeowner went with someone who stayed in front of them. Not because they were better. Because they showed up.",
              },
              {
                icon: "🚫",
                title: "Your Website Looks Like 2016",
                body: "No online booking. No click-to-call. Slow on mobile. No reviews visible. No trust signals. Your service is top-tier but your online presence tells a different story. Homeowners judge in 3 seconds.",
              },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-card border border-border rounded-2xl p-9 h-full hover:border-red transition-colors duration-300">
                  <div className="w-12 h-12 bg-red-muted rounded-xl flex items-center justify-center text-2xl mb-5">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-secondary text-[15px] leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AGITATE */}
      <section className="py-24 px-6 bg-gradient-to-b from-red/[0.04] to-transparent border-y border-red/10 text-center">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-[13px] font-semibold text-accent uppercase tracking-[2px] mb-4">
            The Cost of Doing Nothing
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-[-1.5px] mb-8">
            Every Week This Goes Unfixed, You&apos;re Leaving Money on the Table
          </h2>
          <div className="text-5xl sm:text-7xl md:text-8xl font-black text-red tracking-[-3px] my-8">
            $24K-$120K
          </div>
          <div className="text-lg text-secondary mb-8">
            lost per month from missed calls and no follow-up
          </div>
          <p className="text-[17px] text-secondary max-w-[640px] mx-auto leading-relaxed">
            If you miss 5 calls a week and just 2 would have been jobs,
            that&apos;s $6,000 to $30,000 per week you&apos;re not collecting.
            Not because your work isn&apos;t excellent. Because your systems
            aren&apos;t catching what your team can&apos;t.
          </p>
          <p className="text-[17px] font-semibold text-white max-w-[640px] mx-auto mt-5">
            Your competitors aren&apos;t better at HVAC. They&apos;re better at
            capturing demand online.
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-24 px-6 text-center bg-gradient-to-b from-transparent via-accent-glow to-transparent">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-[13px] font-semibold text-accent uppercase tracking-[2px] mb-4">
            The Solution
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-[-1.5px] mb-6">
            The Jobs Booked System
          </h2>
          <p className="text-lg text-secondary max-w-[600px] mx-auto leading-relaxed">
            We don&apos;t build &quot;websites.&quot; We build revenue systems
            designed specifically for HVAC companies. Every page, every
            automation, every follow-up sequence has one job: put more work on
            your calendar without adding to your plate.
          </p>
        </div>
      </section>

      {/* VALUE STACK */}
      <section id="stack" className="py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-[13px] font-semibold text-accent uppercase tracking-[2px] mb-4">
            Everything You Get
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-[-1.5px] mb-12">
            The Complete System
          </h2>
          <div className="flex flex-col gap-5">
            {stackItems.map((item, i) => (
              <StackCard key={i} {...item} delay={i * 80} />
            ))}
            {bonusItems.map((item, i) => (
              <StackCard
                key={`bonus-${i}`}
                {...item}
                bonus
                delay={(stackItems.length + i) * 80}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-28 px-6 text-center">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-[13px] font-semibold text-accent uppercase tracking-[2px] mb-4">
            The Investment
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-[-1.5px] mb-12">
            One HVAC Job Pays for the Entire System
          </h2>
          <FadeIn>
            <div className="max-w-[600px] mx-auto bg-card border-2 border-accent rounded-2xl p-10 sm:p-12 shadow-[0_0_80px_rgba(255,107,43,0.08)]">
              <div className="flex justify-between items-center pb-6 border-b border-border mb-6">
                <span className="text-muted">Total Value</span>
                <span className="text-2xl font-bold text-muted line-through">
                  $15,750
                </span>
              </div>
              <div className="mb-2">
                <div className="text-sm text-secondary mb-2">
                  Your Investment
                </div>
                <div className="text-5xl sm:text-6xl font-black tracking-[-3px]">
                  <span className="text-accent">$5,500</span>
                </div>
              </div>
              <p className="text-muted text-[15px] mb-8">
                + $750/month for AI agent, system maintenance, and content
              </p>
              <div className="bg-accent-glow border border-accent/20 rounded-xl p-4 text-accent font-semibold">
                Everything after the first booked job is profit.
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-24 px-6 text-center bg-green-glow border-y border-green/15">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn>
            <div className="max-w-[680px] mx-auto bg-card border-2 border-green rounded-2xl p-10 sm:p-12">
              <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                💪
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-5">
                The Jobs Booked Guarantee
              </h2>
              <p className="text-secondary text-base leading-relaxed mb-3">
                Launch the full system. Keep it active for 90 days. If you
                haven&apos;t booked at least{" "}
                <span className="text-green font-bold">10 new jobs</span>{" "}
                through the system, I&apos;ll work with you for free until you
                do.
              </p>
              <p className="text-secondary text-base leading-relaxed mb-5">
                No fine print. No weasel words. If it doesn&apos;t book jobs,
                you don&apos;t pay for ongoing service until it does.
              </p>
              <p className="text-white text-base leading-relaxed">
                I can offer this because the system works. It&apos;s built on
                proven HVAC industry data -- the pages that convert, the
                follow-up timing that closes, the search terms that bring in
                ready-to-buy homeowners.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-[13px] font-semibold text-accent uppercase tracking-[2px] mb-4">
            Why This Is Different
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-[-1.5px] mb-12">
            This Isn&apos;t a Website. It&apos;s a Revenue System.
          </h2>
          <FadeIn>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-5 text-sm font-bold uppercase tracking-wide text-muted" />
                    <th className="text-left py-4 px-5 text-sm font-bold uppercase tracking-wide text-muted">
                      Typical Web Agency
                    </th>
                    <th className="text-left py-4 px-5 text-sm font-bold uppercase tracking-wide text-accent">
                      Jobs Booked System
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([feature, typical, jbs], i) => (
                    <tr key={i} className="border-b border-border">
                      <td className="py-4 px-5 font-semibold text-[15px]">
                        {feature}
                      </td>
                      <td className="py-4 px-5 text-muted text-[15px]">
                        {typical}
                      </td>
                      <td className="py-4 px-5 text-green font-medium text-[15px]">
                        {jbs}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-[13px] font-semibold text-accent uppercase tracking-[2px] mb-4">
            Is This For You?
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-[-1.5px] mb-12">
            Built for HVAC Companies Tired of Losing Jobs They Should Be Winning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-card border border-border rounded-2xl p-9 h-full">
                <h3 className="text-lg font-bold text-green mb-5">
                  This is for you if:
                </h3>
                <ul className="space-y-3.5">
                  {[
                    "You're doing great work but your phone isn't ringing enough",
                    "You know you're losing calls after hours and on weekends",
                    'Your follow-up process is "when we remember"',
                    "You've paid for a website before and it didn't do anything",
                    "You're watching competitors with worse service outrank you on Google",
                    "You want a system that works while you're on the job site",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="text-secondary text-[15px] pl-7 relative before:content-['✓'] before:absolute before:left-0 before:text-green before:font-bold"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="bg-card border border-border rounded-2xl p-9 h-full">
                <h3 className="text-lg font-bold text-red mb-5">
                  This is NOT for you if:
                </h3>
                <ul className="space-y-3.5">
                  {[
                    "You want the cheapest option (we're not that)",
                    "You're not ready to invest in growth",
                    'You want to "think about it" for 6 months',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="text-secondary text-[15px] pl-7 relative before:content-['✗'] before:absolute before:left-0 before:text-red before:font-bold"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="cta"
        className="py-28 px-6 text-center bg-gradient-to-b from-transparent to-accent-glow"
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="inline-block bg-accent/10 border border-accent/20 text-accent px-5 py-2 rounded-full text-sm font-semibold mb-8">
            Only 3 New Clients Per Month
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-[-1.5px] max-w-[600px] mx-auto mb-4">
            Your Competitors Are Booking Jobs Right Now That Should Be Yours
          </h2>
          <p className="text-lg text-secondary max-w-[600px] mx-auto leading-relaxed mb-10">
            Free 30-minute strategy call. We&apos;ll look at your current
            setup, show you where you&apos;re losing jobs, and map out exactly
            how the Jobs Booked System would work for your business.
          </p>
          <a
            href="https://api.leadconnectorhq.com/widget/booking/gnxA1juE7jLnc4Uyz3DI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-11 py-5 rounded-2xl font-bold text-lg transition-all hover:-translate-y-0.5 shadow-[0_0_50px_rgba(255,107,43,0.2)] hover:shadow-[0_0_70px_rgba(255,107,43,0.3)]"
          >
            Book Your Strategy Call &rarr;
          </a>
          <p className="mt-4 text-sm text-muted">
            No pressure. If it&apos;s not a fit, you&apos;ll still walk away
            knowing what to fix.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 text-center px-6">
        <Image
          src="/logo.png"
          alt="The Website Department"
          width={340}
          height={76}
          className="h-18 w-auto mx-auto mb-6"
        />
        <p className="text-sm text-muted">
          &copy; 2026 The Website Department. All rights reserved.
        </p>
      </footer>
    </>
  );
}
