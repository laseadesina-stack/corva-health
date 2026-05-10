import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import jolaadePhoto from "@assets/354A9042-Edit_1777738742124.jpg";

const CREAM = "#EDE8D6";
const DARK = "#0D0D0F";
const GOLD = "#C9A96E";
const DARK_TEXT = "#1a1908";
const DARK_TEXT_MUTED = "#4a4840";

function CorvaLogo({ light = false }: { light?: boolean }) {
  const color = light ? CREAM : DARK;
  const gold = GOLD;
  return (
    <div className="flex items-center gap-3" data-testid="logo">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 2L4 8v10c0 8.5 6 16 14 18 8-2 14-9.5 14-18V8L18 2z" fill={gold} fillOpacity="0.15" stroke={gold} strokeWidth="1.2"/>
        <path d="M11 18l5 5 9-9" stroke={gold} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div>
        <div className="font-serif text-xl font-medium leading-none" style={{ color: light ? CREAM : DARK_TEXT }}>Corva</div>
        <div className="text-[9px] tracking-[0.2em] uppercase font-sans leading-tight mt-0.5" style={{ color: gold }}>Health Consulting</div>
      </div>
    </div>
  );
}

function SectionLabel({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <p className="text-xs tracking-[0.25em] uppercase font-sans font-medium mb-4" style={{ color: GOLD }}>
      {children}
    </p>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } }
};

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 140]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: DARK, color: CREAM }}>
      {/* NAVIGATION */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-4 border-b border-white/5" : "py-5"
        }`}
        style={isScrolled ? { backgroundColor: "rgba(13,13,15,0.88)", backdropFilter: "blur(14px)" } : { backgroundColor: "transparent" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" data-testid="link-logo">
            <CorvaLogo light />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wide" style={{ color: "rgba(245,240,232,0.75)" }}>
            <a href="#services" className="hover:text-white transition-colors duration-300" data-testid="link-nav-services">Services</a>
            <a href="#case-studies" className="hover:text-white transition-colors duration-300" data-testid="link-nav-case-studies">Case Studies</a>
            <a href="#about" className="hover:text-white transition-colors duration-300" data-testid="link-nav-about">About</a>
            <a href="#process" className="hover:text-white transition-colors duration-300" data-testid="link-nav-resources">Resources</a>
          </div>
          <a
            href="mailto:enquiries@corvahealth.co.uk"
            className="text-sm font-medium tracking-wide px-6 py-3 transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: GOLD, color: DARK }}
            data-testid="button-nav-book"
          >Book a Confidential Call</a>
        </div>
      </nav>
      {/* HERO */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          css-note="parallax bg"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1800&q=80')`,
            }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,10,15,0.88) 55%, rgba(10,10,15,0.4) 100%)" }} />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.3em] uppercase font-sans mb-8"
              style={{ color: GOLD }}
            >
              CQC Consultancy · United Kingdom
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-serif font-medium leading-[1.06] mb-8"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 5rem)" }}
            >
              Healthcare Governance &amp; Quality Consulting
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg font-light leading-relaxed mb-12"
              style={{ color: "rgba(245,240,232,0.75)", maxWidth: "520px" }}
            >Independent CQC readiness, clinical audit, and governance advisory services for care homes, private hospitals, and independent healthcare providers. blindsided.</motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start gap-5">
              <a
                href="mailto:enquiries@corvahealth.co.uk"
                className="px-8 py-4 text-base font-medium tracking-wide transition-opacity duration-300 hover:opacity-85"
                style={{ backgroundColor: GOLD, color: DARK }}
                data-testid="button-hero-book"
              >
                Book a Confidential Call
              </a>
              <a
                href="#process"
                className="px-8 py-4 text-base font-medium tracking-wide flex items-center gap-2 transition-opacity duration-300 hover:opacity-75"
                style={{ color: CREAM }}
                data-testid="button-hero-results"
              >
                See how we work <span className="text-lg">→</span>
              </a>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-xs tracking-widest uppercase font-sans mt-16"
              style={{ color: "rgba(245,240,232,0.35)" }}
            >
              All enquiries handled privately. No obligation.
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "rgba(245,240,232,0.3)" }}>
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-8" style={{ background: "rgba(201,169,110,0.35)" }} />
        </div>
      </section>
      {/* MISSION / INTRO */}
      <section className="py-28 md:py-36" style={{ backgroundColor: CREAM }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="max-w-4xl"
          >
            <div className="w-8 h-px mb-12" style={{ backgroundColor: GOLD }} />
            <motion.p
              variants={fadeUp}
              className="font-serif leading-[1.3] mb-6"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: DARK_TEXT }}
            >
              Corva Health Consulting works privately with care providers, registered managers, and nursing home directors across the UK to prepare for inspection, rebuild governance, and turn regulatory pressure into measurable outcomes.{" "}
              <span style={{ color: GOLD }}>The work is direct, the standards are exact, and the results carry our name.</span>
            </motion.p>
            <motion.div variants={fadeUp} className="flex items-center gap-4 mt-10" style={{ color: DARK_TEXT_MUTED }}>
              <div className="h-px w-16" style={{ backgroundColor: "#C9A96E66" }} />
              <span className="text-xs tracking-[0.3em] uppercase font-sans">Est. 2024</span>
              <div className="h-px w-16" style={{ backgroundColor: "#C9A96E66" }} />
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* SERVICES */}
      <section id="services" className="py-28 md:py-36" style={{ backgroundColor: CREAM }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-16"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="font-serif font-medium" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: DARK_TEXT }}>
                Three areas of focused expertise
              </h2>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                num: "01",
                title: "Inspection Readiness",
                desc: "Honest pre-inspection review aligned to current CQC Key Lines of Enquiry. You walk in prepared, not blindsided.",
              },
              {
                num: "02",
                title: "Governance Rebuild",
                desc: "Full Well-Led framework: meeting structures, audit schedules, accountability lines — built from scratch when needed.",
              },
              {
                num: "03",
                title: "Policy & Compliance",
                desc: "Every policy rewritten to CQC standard, linked to regulation, and genuinely usable by staff on the floor.",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="group"
                data-testid={`card-service-${i}`}
              >
                <div className="text-sm font-sans font-medium mb-5" style={{ color: GOLD }}>{s.num}</div>
                <h3 className="font-serif text-xl font-medium mb-4" style={{ color: DARK_TEXT }}>{s.title}</h3>
                <p className="text-base leading-relaxed mb-6" style={{ color: DARK_TEXT_MUTED }}>{s.desc}</p>
                <a
                  href="#contact"
                  className="text-sm font-sans tracking-wide inline-flex items-center gap-1.5 transition-opacity duration-300 hover:opacity-60"
                  style={{ color: GOLD }}
                  data-testid={`link-service-learn-${i}`}
                >
                  Learn more <span>→</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* WHO THIS IS FOR */}
      <section className="py-28 md:py-36 pt-[100px] pb-[100px]" style={{ backgroundColor: CREAM }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="border-t pt-16" style={{ borderColor: "#C9A96E33" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="mb-14">
                <SectionLabel>Who This Is For</SectionLabel>
              </motion.div>
              <div className="space-y-7 max-w-2xl">
                {[
                  "Care home providers preparing for inspection",
                  "Registered managers recovering from a Requires Improvement rating",
                  "Nursing homes whose Well-Led section has always been the weak spot",
                  "Directors who want their next report to read differently",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex items-start gap-4"
                    data-testid={`item-for-${i}`}
                  >
                    <div className="mt-2.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: GOLD }} />
                    <p className="text-lg font-serif" style={{ color: DARK_TEXT }}>{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* THE WAY WE WORK */}
      <section id="process" className="py-28 md:py-36" style={{ backgroundColor: DARK }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-20"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>The Way We Work</SectionLabel>
              <h2 className="font-serif font-medium" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: CREAM }}>
                A process built on clarity
              </h2>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16 mb-20">
            {[
              {
                num: "I.",
                title: "Confidential conversation",
                desc: "We begin with a private discussion about your situation. No obligations, no templates.",
              },
              {
                num: "II.",
                title: "Diagnostic review",
                desc: "A thorough assessment against current CQC standards. We identify exactly where you stand.",
              },
              {
                num: "III.",
                title: "Clear action plan",
                desc: "A working document you can actually use — not a report to file away and forget.",
              },
              {
                num: "IV.",
                title: "We stay with you",
                desc: "Implementation support through the process. We see it through to the outcome.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="flex gap-6"
                data-testid={`step-process-${i}`}
              >
                <div className="font-serif text-xl font-light flex-shrink-0 mt-0.5" style={{ color: GOLD }}>{step.num}</div>
                <div>
                  <h3 className="font-serif text-xl font-medium mb-3" style={{ color: CREAM }}>{step.title}</h3>
                  <p className="text-base leading-relaxed font-light" style={{ color: "rgba(245,240,232,0.6)" }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <a
              href="mailto:enquiries@corvahealth.co.uk"
              className="inline-block px-8 py-4 text-base font-medium tracking-wide transition-opacity duration-300 hover:opacity-85"
              style={{ backgroundColor: GOLD, color: DARK }}
              data-testid="button-process-book"
            >
              Book a Confidential Call
            </a>
          </motion.div>
        </div>
      </section>
      {/* PROOF / REVIEWS */}
      <section id="case-studies" className="py-28 md:py-36" style={{ backgroundColor: CREAM }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mb-16"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Proof</SectionLabel>
              <h2 className="font-serif font-medium" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: DARK_TEXT }}>
                The outcomes speak for themselves
              </h2>
            </motion.div>
          </motion.div>

          <div className="space-y-12 max-w-3xl">
            {[
              {
                quote: "Jolaade came in before our re-inspection and was honest in a way we hadn't experienced from anyone before. The report identified exactly what the CQC raised, and we felt prepared, not blindsided. We went from Requires Improvement to Good. That outcome had her name on it.",
                name: "Sandra M.",
                role: "Registered Manager, Nursing Home — Cambridgeshire",
              },
              {
                quote: "The Well-Led section of our report had always been our weak spot. Jolaade rebuilt our governance framework from scratch — meetings, audit schedules, the whole structure. Our inspector commented on it specifically as a strength.",
                name: "David K.",
                role: "Provider Director — Lincoln",
              },
              {
                quote: "I had tried to get our policies updated for over a year. Jolaade did it in three weeks. Every single one was written to the CQC standard, easy for staff to use, and linked to the regulations. That alone was worth every penny.",
                name: "Kelly R.",
                role: "Registered Manager — Cambridgeshire",
              },
              {
                quote: "What I valued most was that she didn't just tell me what was wrong, she showed me how to fix it and stayed with us through the process. The action plan was something we could actually work from, not a document to file away.",
                name: "Patricia O.",
                role: "Registered Manager — Peterborough",
              },
            ].map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                className="pl-8 border-l-2"
                style={{ borderColor: GOLD + "55" }}
                data-testid={`card-review-${i}`}
              >
                <p className="font-serif italic text-lg leading-relaxed mb-5" style={{ color: DARK_TEXT, fontSize: "clamp(1rem, 1.8vw, 1.2rem)" }}>
                  "{r.quote}"
                </p>
                <div className="flex items-baseline gap-3">
                  <span className="font-sans font-semibold text-sm" style={{ color: DARK_TEXT }}>{r.name}</span>
                  <span className="font-sans text-sm" style={{ color: DARK_TEXT_MUTED }}>{r.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ABOUT */}
      <section id="about" className="py-28 md:py-36" style={{ backgroundColor: DARK }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] max-w-sm mx-auto w-full flex items-center justify-center"
              style={{ border: `1px solid ${GOLD}33`, padding: "2px" }}
            >
              <img
                src={jolaadePhoto}
                alt="Jolaade — Founder of Corva Health Consulting"
                className="w-full h-full object-cover object-top"
                data-testid="img-jolaade"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <SectionLabel>About Jolaade</SectionLabel>
              <h2 className="font-serif font-medium mb-8 leading-tight" style={{ fontSize: "clamp(1.8rem, 3vw, 2.75rem)", color: CREAM }}>
                Who Is Behind Corva Health Consulting?
              </h2>
              <p className="text-base leading-relaxed mb-6 font-light" style={{ color: "rgba(245,240,232,0.72)" }}>
                Jolaade brings a perspective most consultants don't have: she's worked within NHS England. She knows how the system thinks, what inspectors are trained to look for, and where the gaps between policy and practice actually live.
              </p>
              <p className="text-base leading-relaxed font-light" style={{ color: "rgba(245,240,232,0.72)" }}>
                Corva Health Consulting was built for care providers who want more than a checklist — they want someone who will stand next to them, tell them the truth, and help them come out the other side stronger.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section id="contact" className="py-28 md:py-36" style={{ backgroundColor: CREAM }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="h-px w-12 mx-auto mb-12" style={{ backgroundColor: GOLD }} />
            <h2 className="font-serif font-medium mb-6 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: DARK_TEXT }}>
              Ready to face your next inspection with confidence?
            </h2>
            <p className="text-lg font-light leading-relaxed mb-12" style={{ color: DARK_TEXT_MUTED }}>
              Book a consultation and find out exactly where you stand — and what it takes to get where you want to be.
            </p>
            <a
              href="mailto:enquiries@corvahealth.co.uk"
              className="inline-block px-10 py-5 text-base font-medium tracking-wide transition-opacity duration-300 hover:opacity-85"
              style={{ backgroundColor: GOLD, color: DARK }}
              data-testid="button-cta-book"
            >Book a Confidential Call</a>
          </motion.div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="py-16" style={{ backgroundColor: DARK, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="mb-4">
                <CorvaLogo light />
              </div>
              <p className="text-sm font-light" style={{ color: "rgba(245,240,232,0.4)" }}>
                Health Consulting · United Kingdom
              </p>
            </div>

            <div>
              <p className="text-xs tracking-[0.25em] uppercase font-sans mb-5" style={{ color: GOLD }}>Company</p>
              <div className="space-y-3">
                {[
                  { label: "About Jolaade", href: "#about" },
                  { label: "Services", href: "#services" },
                  { label: "Case Studies", href: "#case-studies" },
                  { label: "How We Work", href: "#process" },
                ].map((link) => (
                  <div key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-light transition-colors duration-300 hover:text-white"
                      style={{ color: "rgba(245,240,232,0.55)" }}
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      {link.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.25em] uppercase font-sans mb-5" style={{ color: GOLD }}>Contact</p>
              <div className="space-y-3">
                <div>
                  <a
                    href="mailto:enquiries@corvahealth.co.uk"
                    className="text-sm font-light transition-colors duration-300 hover:text-white"
                    style={{ color: "rgba(245,240,232,0.55)" }}
                    data-testid="link-footer-email"
                  >
                    enquiries@corvahealth.co.uk
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:enquiries@corvahealth.co.uk"
                    className="text-sm font-light transition-colors duration-300 hover:text-white"
                    style={{ color: "rgba(245,240,232,0.55)" }}
                    data-testid="link-footer-book"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
            <p className="text-xs font-light" style={{ color: "rgba(245,240,232,0.3)" }} data-testid="text-footer-copyright">
              © 2025 Corva Health Consulting. All rights reserved.
            </p>
            <p className="text-xs font-light" style={{ color: "rgba(245,240,232,0.3)" }} data-testid="text-footer-serving">
              Serving care providers across England.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
