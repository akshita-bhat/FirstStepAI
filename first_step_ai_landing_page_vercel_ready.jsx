import { useEffect } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, LineChart, Rocket, Layers, Mail, Calendar, ShieldCheck } from "lucide-react";

// Vercel-ready single-file React component
// TailwindCSS is assumed available by the host (ChatGPT canvas preview supports it)
// Replace CALENDLY_URL and CONTACT_EMAIL with your values before deploying.

const CALENDLY_URL = "https://calendly.com/akshita-bhat"; // TODO: set your Calendly link
const CONTACT_EMAIL = "akshita.bhat@outlook.com"; // TODO: set your contact email (or a mailto alias)

export default function FirstStepAI() {
  useEffect(() => {
    // Optional: Load Calendly widget script for enhanced behavior (not required for iframe)
    if (!document.querySelector('#calendly-script')) {
      const s = document.createElement('script');
      s.id = 'calendly-script';
      s.src = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      {/* Glow background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-emerald-500/10" />
        <motion.div
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(0,255,200,0.35), transparent)" }}
          animate={{ x: [0, 40, -10, 0], y: [0, -20, 20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(255,0,180,0.25), transparent)" }}
          animate={{ x: [0, -30, 0], y: [0, 20, -10, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-[#0A0F1A]/60">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-400 to-emerald-400 text-[#0A0F1A] font-bold">FS</div>
            <span className="font-semibold tracking-wide">FirstStep AI</span>
          </div>
          <div className="hidden gap-6 md:flex text-sm text-white/80">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#offer" className="hover:text-white">Offer</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#book" className="hover:text-white flex items-center gap-1"><Calendar className="h-4 w-4"/>Book</a>
          </div>
          <a href="#book" className="rounded-xl bg-white text-[#0A0F1A] px-4 py-2 text-sm font-semibold shadow-sm hover:shadow-md">Book a chat</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-12 md:pt-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Immigrant‑built. Future‑focused.
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Take your First Step into AI.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 max-w-xl text-white/80"
            >
              We’re highly skilled immigrants — AI engineers, ML specialists, and project managers — helping teams define strategy,
              build foundations, and ship proof‑of‑concepts that create real business value.
            </motion.p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#book" className="rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-3 text-[#0A0F1A] font-semibold shadow-lg hover:shadow-xl">Book a chat</a>
              <a href="#services" className="rounded-xl border border-white/20 px-5 py-3 text-white/90 hover:bg-white/5">Explore services</a>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-300">
              <ShieldCheck className="h-4 w-4" /> $200 credit on your first POC + free 1:1 consulting
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0C1424]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.15),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.15),transparent_60%)]" />
            <div className="absolute inset-0 grid place-items-center">
              <BrainCircuit className="h-24 w-24 text-white/20" />
            </div>
            <motion.div
              className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-2xl"
              animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
              className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-emerald-400/20 blur-2xl"
              animate={{ x: [0, -20, 0], y: [0, 10, 0] }}
              transition={{ duration: 11, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold"
        >
          What we do
        </motion.h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard icon={Layers} title="AI Foundations" desc="Data pipelines, feature stores, and MLOps basics to get you production‑ready." />
          <ServiceCard icon={Rocket} title="POCs & Prototypes" desc="De‑risk ideas with fast, high‑quality experiments that prove business value." />
          <ServiceCard icon={LineChart} title="Model Dev & Eval" desc="From baselines to rigorous evaluation, choose the right models with confidence." />
          <ServiceCard icon={BrainCircuit} title="Strategy & Roadmaps" desc="Align AI initiatives to measurable outcomes with pragmatic delivery plans." />
        </div>
      </section>

      {/* Offer */}
      <section id="offer" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6 sm:p-10">
          <h3 className="text-2xl font-semibold">Special Offer</h3>
          <p className="mt-2 text-white/85">Get a <span className="font-semibold text-emerald-300">$200 credit</span> on your first proof‑of‑concept and enjoy <span className="font-semibold text-emerald-300">free one‑on‑one consulting</span> to kick‑start your AI journey.</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a href="#book" className="rounded-xl bg-white px-5 py-3 text-[#0A0F1A] font-semibold shadow hover:shadow-lg">Claim the offer</a>
            <span className="text-sm text-white/60">Limited to the first engagement per client.</span>
          </div>
        </div>
      </section>

      {/* Calendly */}
      <section id="book" className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-6 flex items-center gap-2">
          <Calendar className="h-5 w-5 text-emerald-300" />
          <h3 className="text-2xl font-semibold">Book a chat</h3>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          {/* Simple, privacy‑respecting embed with query params to hide extra chrome */}
          <iframe
            title="Calendly Scheduling"
            src={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=10b981`}
            className="h-[780px] w-full"
            frameBorder="0"
          />
        </div>
        <p className="mt-3 text-sm text-white/60">Can’t see the embed? <a className="underline" href={CALENDLY_URL} target="_blank" rel="noreferrer">Open Calendly in a new tab</a>.</p>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-3xl px-6 pb-24">
        <div className="mb-6 flex items-center gap-2">
          <Mail className="h-5 w-5 text-cyan-300" />
          <h3 className="text-2xl font-semibold">Contact us</h3>
        </div>
        <form
          action={`mailto:${CONTACT_EMAIL}`}
          method="post"
          encType="text/plain"
          className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div className="grid gap-2">
            <label className="text-sm text-white/70" htmlFor="name">Name</label>
            <input id="name" name="Name" required className="rounded-lg border border-white/10 bg-[#0F1726] px-4 py-3 outline-none ring-emerald-400/30 focus:ring"/>
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-white/70" htmlFor="email">Email</label>
            <input id="email" type="email" name="Email" required className="rounded-lg border border-white/10 bg-[#0F1726] px-4 py-3 outline-none ring-emerald-400/30 focus:ring"/>
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-white/70" htmlFor="message">Message</label>
            <textarea id="message" name="Message" rows={5} className="rounded-lg border border-white/10 bg-[#0F1726] px-4 py-3 outline-none ring-emerald-400/30 focus:ring"/>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <button type="submit" className="rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-3 font-semibold text-[#0A0F1A]">Send message</button>
            <p className="text-xs text-white/60">Prefer email? Write to <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        <div className="mx-auto max-w-7xl px-6">
          <p>© {new Date().getFullYear()} FirstStep AI — Immigrant‑built. Future‑focused.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="group rounded-2xl border border-white/10 bg-[#0C1424]/70 p-6 shadow-lg backdrop-blur hover:border-emerald-300/30 hover:bg-[#0C1424]"
    >
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-tr from-cyan-400/20 to-emerald-400/20 text-emerald-300">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-white/70">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}
