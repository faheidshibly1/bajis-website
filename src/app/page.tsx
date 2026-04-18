import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { SiteNavbar } from "@/components/site-navbar";
import {
  Briefcase,
  Calculator,
  FileText,
  Scale,
  Shield,
} from "lucide-react";

const services = [
  {
    title: "Basic Estate Planning",
    description:
      "Foundational estate planning including Wills and Revocable Living Trusts, with attorney-supported guidance to ensure proper drafting and implementation.",
    icon: FileText,
  },
  {
    title: "Advanced Estate Planning",
    description:
      "Comprehensive planning including Revocable Living Trusts, Estate Tax Planning, Charitable Planning, Asset Protection, Special Needs Trusts, Legacy Planning, Dynasty Planning, and Medicaid Planning.",
    icon: Shield,
  },
  {
    title: "Business Planning",
    description:
      "Strategic planning and structuring for businesses, including Corporations, LLCs, Holding Companies, and key agreements such as leases and vendor contracts.",
    icon: Briefcase,
  },
  {
    title: "Tax Planning",
    description:
      "Advisory and implementation services focused on building legal structures that improve tax efficiency and long-term financial outcomes.",
    icon: Calculator,
  },
];

const strategicPartners = [
  {
    description:
      "Access to a nationwide network of more than 100 attorneys with all levels of experience.",
  },
];

const reasons = [
  "Recommendations based on your assets, family needs, and long-term goals.",
  "Clear explanations for each document, structure, and implementation.",
  "Practical coordination for estate, business, and tax planning.",
  "Careful implementation of proper documents, execution, and funding.",
];

const contactDetails = [
  { label: "Phone", value: "602-492-6370", href: "tel:6024926370" },
  {
    label: "Email",
    value: "bajis@ignplan.com",
    href: "mailto:bajis@ignplan.com",
  },
];

// Scheduling URL used by consultation buttons and the embedded scheduler.
const schedulingUrl =
  "https://outlook.office.com/bookwithme/user/58853c43208a4fbda9f175761641e0e1@ignplan.com/meetingtype/R-_HMnecz0ylDicscIKk1Q2?anonymous&ismsaljsauthenabled&ep=mCardFromTile";

export default function Home() {
  return (
    <div id="top" className="bg-[var(--color-ivory)] text-slate-900">
      <SiteNavbar />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(14,30,64,0.08),rgba(255,255,255,0))]" />
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-28">
            <div className="space-y-8">
              <div className="space-y-5">
                <span className="inline-flex rounded-full border border-[var(--color-navy)]/15 bg-[var(--color-navy)]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-navy)]/75">
                  Estate Planning Attorney
                </span>
                <div className="space-y-5">
                  {/* Replace with the attorney's actual name. */}
                  <h1 className="max-w-3xl font-serif text-5xl tracking-tight text-slate-950 sm:text-6xl">
                    Bajis Awawdeh
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                    Helping individuals and families nationwide put the right
                    legal structure in place to avoid probate, protect assets,
                    minimize risk, and plan for the future.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={schedulingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-navy)] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-navy-dark)]"
                >
                  Schedule a Consultation
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-[var(--color-navy)] hover:text-[var(--color-navy)]"
                >
                  View Services
                </a>
              </div>

              <div className="grid gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3">
                <div>
                  <div className="text-2xl font-semibold text-[var(--color-navy)]">
                    Detail-Oriented
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Estate plans prepared with care, precision, and close
                    attention to what matters most.
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-[var(--color-navy)]">
                    Family-Focused
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Planning built around your family’s needs, including
                    avoiding probate, ensuring privacy, increasing asset
                    protection, and proper legacy planning.
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-[var(--color-navy)]">
                    Clear Process
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Practical advice that doesn’t feel overwhelming or
                    unnecessarily complex.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[400px] lg:mx-0 lg:ml-auto">
              <Image
                src="/bajis.jpg"
                alt="Bajis Awawdeh, Estate Planning Attorney"
                width={672}
                height={733}
                priority
                sizes="(min-width: 1024px) 400px, calc(100vw - 48px)"
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-28 border-t border-slate-200/80 bg-white">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <SectionHeading
              eyebrow="About"
              title="How we help"
              description="Practical planning focused on helping every family."
            />

            <div className="space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                Bajis Awawdeh provides estate, business, and tax planning
                solutions designed to help individuals and families avoid
                probate, protect their assets, structure their affairs
                properly, and plan for the future with clarity.
              </p>
              <p>
                Whether you are creating a basic estate plan or need more
                advanced strategies, the focus is building the right legal
                structure for your situation and ensuring everything is
                implemented correctly.
              </p>
              <p>
                Clients are guided through each step of the process with clear
                explanations and practical solutions. We make complex concepts
                easy to understand and do so affordably, so no family is left
                behind.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-28">
          <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
            <SectionHeading
              eyebrow="Services"
              title="Proper planning for all families."
              description="Select the right level of support, from foundational documents to advanced legal and tax strategies."
              align="center"
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="flex h-full flex-col rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.1)]"
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-navy)]/8 text-[var(--color-navy)]">
                      <Icon
                        className="h-6 w-6"
                        aria-hidden="true"
                        strokeWidth={1.8}
                      />
                    </div>
                    <h3 className="font-serif text-2xl text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[var(--color-navy)]/10 bg-[var(--color-navy)]/5 px-6 py-5 text-center">
              <p className="text-sm font-medium leading-7 text-slate-700">
                Complimentary 30-minute consultations are available for Estate
                Planning, Business Planning, and Tax Planning.
              </p>
            </div>
          </div>
        </section>

        <section id="strategic-partners" className="scroll-mt-28 bg-white">
          <div className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-[0_18px_70px_rgba(15,23,42,0.05)] sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
                <SectionHeading
                  eyebrow="Strategic Partner"
                  title="Coordinated nationwide support for every family need."
                  description="Select matters may be supported by specialized partner organizations where appropriate."
                />

                <div className="grid max-w-2xl gap-4">
                  {strategicPartners.map((partner) => (
                    <article
                      key={partner.description}
                      className="rounded-[1.5rem] border border-slate-200 bg-white p-6"
                    >
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-navy)] text-white">
                        <Scale
                          className="h-5 w-5"
                          aria-hidden="true"
                          strokeWidth={1.8}
                        />
                      </div>
                      <h3 className="font-serif text-2xl leading-snug text-slate-900 sm:text-3xl">
                        {partner.description}
                      </h3>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="why-choose-us"
          className="scroll-mt-28 border-y border-slate-200/80 bg-white"
        >
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Our mission is to make estate planning accessible and affordable for all families, so no family is left behind."
              description="The process is designed to help clients understand their options, choose the right structure, and complete the next steps properly."
            />

            <ul className="grid gap-4">
              {reasons.map((reason) => (
                <li
                  key={reason}
                  className="flex gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-5"
                >
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-navy)]" />
                  <p className="text-base leading-7 text-slate-700">{reason}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="consultation" className="scroll-mt-28">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <SectionHeading
              eyebrow="Appointments"
              title="Schedule a Free Consultation"
              description="Book a free 30-minute consultation to discuss your estate, business, or tax planning needs."
            />

            <div className="flex min-h-56 items-center justify-center rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-10">
              <a
                href={schedulingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-navy)] px-9 py-5 text-base font-semibold text-white transition hover:bg-[var(--color-navy-dark)] sm:w-auto sm:px-12 sm:text-lg"
              >
                Schedule a Free Consultation
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 border-t border-slate-200/80 bg-white">
          <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <SectionHeading
                eyebrow="Contact"
                title="Start the conversation with confidence."
                description="Get in touch to start building a plan that protects your assets and supports your long-term goals."
              />

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contactDetails.map((detail) => (
                  <a
                    key={detail.label}
                    href={detail.href}
                    className="block rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-4 transition hover:border-[var(--color-navy)]/30 hover:bg-white"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-navy)]/70">
                      {detail.label}
                    </div>
                    <div className="mt-2 text-base leading-7 text-slate-700">
                      {detail.value}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-[var(--color-navy)] text-slate-200">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            {/* Replace with the attorney or firm name. */}
            <p className="font-serif text-2xl text-white">Bajis Awawdeh</p>
            <p className="mt-2 text-sm text-slate-300">
              Copyright {new Date().getFullYear()} Bajis Awawdeh. All rights
              reserved.
            </p>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-300">
            {/* Replace this disclaimer with your jurisdiction-specific legal disclaimer. */}
            This website is for informational purposes
            only and does not create an attorney-client relationship.
          </p>
        </div>
      </footer>
    </div>
  );
}
