const stats = [
  { label: "Coverage", value: "Iran + 25+ countries" },
  { label: "Uplinks", value: "10G backbone" },
  { label: "Hardware", value: "FortiGate + HPE G10" },
];

const services = [
  {
    title: "Cloud Servers",
    description:
      "Reliable cloud infrastructure in Iran and global regions, designed for performance and stability.",
  },
  {
    title: "Narenj Mesh",
    description:
      "Connect multiple sites and MikroTik routers even without static IPs and build private routes with ease.",
  },
  {
    title: "Narenj Link",
    description:
      "Create secure connectivity to any location in the world, from regional branches to international offices.",
  },
  {
    title: "Dedicated HPE Servers",
    description:
      "Bring in dedicated enterprise-grade HPE hardware for workloads that need more control and power.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060b08] text-slate-50">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,132,0,0.25),transparent_36%),radial-gradient(circle_at_85%_15%,rgba(255,180,0,0.18),transparent_24%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,140,0,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,140,0,0.16)_1px,transparent_1px)] [background-size:70px_70px]" />
        <div className="absolute left-[-6%] top-24 h-72 w-72 rounded-full border border-orange-400/20 blur-3xl" />
        <div className="absolute bottom-[-8%] right-[-4%] h-80 w-80 rounded-full border border-orange-300/15 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="glass-card mb-8 flex items-center justify-between rounded-full px-4 py-3 sm:px-6">
          <a href="#top" className="text-lg font-semibold tracking-[0.26em] text-orange-300">
            NARENJ<span className="ml-1 text-white">CLOUD</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-orange-300">
              Services
            </a>
            <a href="#about" className="transition hover:text-orange-300">
              About
            </a>
            <a href="#contact" className="transition hover:text-orange-300">
              Contact
            </a>
          </nav>
          <a
            href="https://console.narenj.cloud"
            className="rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-200 transition hover:bg-orange-500/20"
          >
            Go to console
          </a>
        </header>

        <main id="top" className="flex-1 space-y-8 pb-10">
          <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="glass-card rounded-[32px] p-8 sm:p-10 lg:p-12">
              <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-200">
                Cloud infrastructure • Iran & 25+ countries
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Secure cloud and connectivity, built for modern networks.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                NarenjCloud delivers dependable cloud servers, private site-to-site networking, and global links with a strong infrastructure backbone powered by FortiGate firewalls and HPE G10 systems.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://console.narenj.cloud"
                  className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
                >
                  Go to console
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                >
                  Explore services
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                    <p className="text-2xl font-semibold text-white">{item.value}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-[32px] p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
                Why teams choose us
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-orange-400/20 bg-orange-500/10 p-4">
                  <p className="font-semibold text-white">FortiGate protection</p>
                  <p className="mt-1 text-sm text-slate-300">Security-first architecture for critical workloads and routed environments.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">10G uplinks</p>
                  <p className="mt-1 text-sm text-slate-300">High-capacity connectivity with strong throughput for demanding services.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">Dedicated HPE options</p>
                  <p className="mt-1 text-sm text-slate-300">Flexible server choices for customers who need more control and power.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="space-y-5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
                  Services
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                  Infrastructure that moves with your business.
                </h2>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <article key={service.title} className="glass-card rounded-[24px] p-6">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="about" className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="glass-card rounded-[32px] p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">About us</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Built by people who know networks from the inside.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                NarenjCloud began as a dream of three friends who spent years working together across many companies. Today, that shared experience is turning into a company focused on dependable infrastructure, smart connectivity, and real-world service.
              </p>
            </div>

            <div className="glass-card rounded-[32px] p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">Contact</p>
              <div id="contact" className="mt-5 space-y-4 text-slate-300">
                <a href="mailto:info@narenj.cloud" className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="mt-1 font-medium text-white">info@narenj.cloud</p>
                </a>
                <a href="tel:+9892022908" className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                  <p className="text-sm text-slate-400">Call</p>
                  <p className="mt-1 font-medium text-white">+98 920 229 08</p>
                </a>
                <a
                  href="https://console.narenj.cloud"
                  className="flex items-center justify-between rounded-2xl border border-orange-400/30 bg-orange-500/10 p-4 transition hover:bg-orange-500/20"
                >
                  <span>
                    <p className="text-sm text-orange-200">Console</p>
                    <p className="mt-1 font-medium text-white">console.narenj.cloud</p>
                  </span>
                  <span className="text-orange-300">→</span>
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
