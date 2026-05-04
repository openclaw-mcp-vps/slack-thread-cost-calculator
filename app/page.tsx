export default function Home() {
  const faqs = [
    {
      q: "How does the cost calculation work?",
      a: "We connect to your Slack workspace via OAuth, analyze thread participation and timestamps, then multiply each participant's time by their configured hourly rate to produce a total meeting cost."
    },
    {
      q: "Is my Slack data stored?",
      a: "Thread metadata is stored only to display your analysis history. Message content is never stored. You can delete your data at any time from your dashboard."
    },
    {
      q: "Can I set different rates per team member?",
      a: "Yes. After connecting Slack you can assign custom hourly rates per user or apply a default rate across your whole workspace."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For Engineering Managers & CTOs
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          How much does that Slack thread<br />actually cost?
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your workspace, set hourly rates, and instantly see the dollar cost of every thread discussion. Stop guessing — start optimizing.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Free Trial — $19/mo
        </a>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited thread analyses",
              "Custom hourly rates per user",
              "Slack OAuth integration",
              "Analysis history & export",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm mt-20">
        © {new Date().getFullYear()} Slack Thread Cost Calculator. All rights reserved.
      </footer>
    </main>
  );
}
