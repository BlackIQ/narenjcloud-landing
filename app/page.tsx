"use client";

import { useEffect, useMemo, useState } from "react";

type Language = "en" | "ru" | "zh";
type Theme = "dark" | "light";

const content = {
  en: {
    badge: "Cloud infrastructure • Iran & 25+ countries",
    title: "Secure cloud and connectivity, built for modern networks.",
    description:
      "NarenjCloud delivers dependable cloud servers, private site-to-site networking, and global links with a strong infrastructure backbone powered by FortiGate firewalls and HPE G10 systems.",
    ctaPrimary: "Go to console",
    ctaSecondary: "Explore services",
    navServices: "Services",
    navAbout: "About",
    navContact: "Contact",
    stats: [
      { label: "Coverage", value: "Iran + 25+ countries" },
      { label: "Uplinks", value: "10G backbone" },
      { label: "Hardware", value: "FortiGate + HPE G10" },
    ],
    whyTitle: "Why organizations choose NarenjCloud",
    feature1Title: "Next-Generation Firewall Security",
    feature1Text: "Security-first architecture for critical workloads, routed environments, and protected traffic flows.",
    feature2Title: "Enterprise Switching Infrastructure",
    feature2Text: "Cisco Nexus series switching for reliable, scalable, and high-performance datacenter connectivity.",
    feature3Title: "Advanced Routing Platforms",
    feature3Text: "CCR2216 series routers for advanced routing, flexibility, and dependable network edge deployments.",
    feature4Title: "1G to 25G Uplink",
    feature4Text: "Flexible connectivity with 1G, 10G, and 25G uplinks for different performance and capacity needs.",
    feature5Title: "High-Performance Server Platforms",
    feature5Text: "Enterprise-grade HPE ProLiant Gen11 and Gen10 servers for workloads that require high performance, flexibility, and dependable uptime.",
    servicesTitle: "Infrastructure that moves with your business.",
    services: [
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
    ],
    aboutTitle: "Built by people who know networks from the inside.",
    aboutText:
      "NarenjCloud began as a dream of three friends who spent years working together across many companies. Today, that shared experience is shaping a company focused on dependable infrastructure, smart connectivity, and real-world service.",
    locationsTitle: "Top locations",
    locations: [
      { name: "Iran (HQ)", note: "Primary headquarters and regional operations." },
      { name: "Russia", note: "Strong infrastructure presence with reliable connectivity." },
      { name: "UAE", note: "Regional expansion for international reach." },
      { name: "Netherlands", note: "Strategic gateway for global traffic and links." },
      { name: "China", note: "A new office is planned to launch soon." },
    ],
    contactTitle: "Contact",
    email: "Email",
    call: "Call",
    console: "Console",
  },
  ru: {
    badge: "Облачная инфраструктура • Иран и 25+ стран",
    title: "Надёжное облако и подключение для современных сетей.",
    description:
      "NarenjCloud предоставляет надёжные облачные серверы, частные соединения между площадками и глобальные каналы связи на базе мощной инфраструктуры с FortiGate и HPE G10.",
    ctaPrimary: "Перейти в консоль",
    ctaSecondary: "Смотреть сервисы",
    navServices: "Сервисы",
    navAbout: "О нас",
    navContact: "Контакты",
    stats: [
      { label: "Покрытие", value: "Иран + 25+ стран" },
      { label: "Уплинки", value: "10G магистраль" },
      { label: "Оборудование", value: "FortiGate + HPE G10" },
    ],
    whyTitle: "Почему компании выбирают NarenjCloud",
    feature1Title: "Современная защитa сети",
    feature1Text: "Архитектура с акцентом на безопасность для критически важных нагрузок, маршрутизации и защищённого трафика.",
    feature2Title: "Корпоративная коммутация",
    feature2Text: "Коммутаторы серии Cisco Nexus для надёжной, масштабируемой и высокопроизводительной связности дата-центров.",
    feature3Title: "Передовые маршрутизаторы",
    feature3Text: "Маршрутизаторы серии CCR2216 для продвинутой маршрутизации, гибкости и надёжной работы на границе сети.",
    feature4Title: "Волоконные uplink от 1G до 25G",
    feature4Text: "Гибкая связность с uplinks на 1G, 10G и 25G для разных задач по производительности и ёмкости.",
    feature5Title: "Платформы серверов HPE ProLiant",
    feature5Text: "Корпоративные серверы HPE ProLiant Gen11 и Gen10 для рабочих нагрузок, которым нужна высокая производительность, гибкость и надёжная доступность.",
    servicesTitle: "Инфраструктура, которая движется вместе с вашим бизнесом.",
    services: [
      {
        title: "Облачные серверы",
        description:
          "Надёжная облачная инфраструктура в Иране и в международных регионах с акцентом на стабильность.",
      },
      {
        title: "Narenj Mesh",
        description:
          "Подключайте несколько площадок и MikroTik даже без статических IP и строите частные маршруты без лишних сложностей.",
      },
      {
        title: "Narenj Link",
        description:
          "Создавайте безопасное соединение с любым нужным вам местом в мире — от филиалов до международных офисов.",
      },
      {
        title: "Выделенные серверы HPE",
        description:
          "Подбираем выделенное оборудование HPE для задач, которым нужен высокий уровень контроля и мощности.",
      },
    ],
    aboutTitle: "Создано людьми, которые понимают сети изнутри.",
    aboutText:
      "NarenjCloud начался как мечта трёх друзей, много лет работавших вместе в разных компаниях. Сегодня этот общий опыт превращается в компанию, которая делает ставку на надёжную инфраструктуру, умную связность и практический сервис.",
    locationsTitle: "Ключевые локации",
    locations: [
      { name: "Иран (HQ)", note: "Главный хаб и региональные операции." },
      { name: "Россия", note: "Сильное присутствие и надёжная инфраструктура." },
      { name: "ОАЭ", note: "Региональное развитие для международного охвата." },
      { name: "Нидерланды", note: "Стратегический узел для глобального трафика и связности." },
      { name: "Китай", note: "Новый офис будет открыт в ближайшее время." },
    ],
    contactTitle: "Контакты",
    email: "Email",
    call: "Телефон",
    console: "Консоль",
  },
  zh: {
    badge: "云基础设施 • 伊朗及 25+ 个国家",
    title: "为现代网络构建安全可靠的云与连接方案。",
    description:
      "NarenjCloud 提供稳定的云服务器、站点间私有网络连接以及全球链路服务，底层依托 FortiGate 防火墙与 HPE G10 系统构建强大基础设施。",
    ctaPrimary: "进入控制台",
    ctaSecondary: "查看服务",
    navServices: "服务",
    navAbout: "关于我们",
    navContact: "联系我们",
    stats: [
      { label: "覆盖范围", value: "伊朗 + 25+ 国家" },
      { label: "链路能力", value: "10G 骨干网络" },
      { label: "硬件平台", value: "FortiGate + HPE G10" },
    ],
    whyTitle: "为何企业选择 NarenjCloud",
    feature1Title: "下一代防火墙安全",
    feature1Text: "面向关键业务与网络路由场景的安全优先架构。",
    feature2Title: "企业级交换基础设施",
    feature2Text: "Cisco Nexus 系列交换机，提供稳定、可扩展且高性能的数据中心连接。",
    feature3Title: "高级路由平台",
    feature3Text: "CCR2216 系列路由器，适用于高级路由、灵活部署和可靠的边缘网络场景。",
    feature4Title: "1G 至 25G 上联链路",
    feature4Text: "提供 1G、10G 和 25G 上联链路，满足不同容量和性能需求。",
    feature5Title: "高性能服务器平台",
    feature5Text: "HPE ProLiant Gen11 与 Gen10 企业级服务器，适用于需要高性能、灵活性和稳定可用性的业务场景。",
    servicesTitle: "与业务同步发展的基础设施。",
    services: [
      {
        title: "云服务器",
        description: "在伊朗及全球多个区域提供可靠的云基础设施，兼顾稳定性与性能。",
      },
      {
        title: "Narenj Mesh",
        description: "即使没有静态 IP，也能连接多个站点和 MikroTik 设备，轻松搭建私有路由。",
      },
      {
        title: "Narenj Link",
        description: "为全球任意目标地点提供安全连接，适用于分支机构与国际业务场景。",
      },
      {
        title: "专用 HPE 服务器",
        description: "为需要更高控制力与算力的场景提供企业级 HPE 专用硬件。",
      },
    ],
    aboutTitle: "由深谙网络的团队打造。",
    aboutText:
      "NarenjCloud 起源于三位志同道合的朋友多年来共同工作所积累的经验。如今，他们正在将这份经验转化为一个专注于可靠基础设施、智能连接与实用服务的公司。",
    locationsTitle: "核心节点",
    locations: [
      { name: "伊朗（总部）", note: "总部与区域运营中心。" },
      { name: "俄罗斯", note: "强大的基础设施与稳定连接能力。" },
      { name: "阿联酋", note: "面向国际业务扩展的区域节点。" },
      { name: "荷兰", note: "连接全球流量与跨境链路的战略节点。" },
      { name: "中国", note: "新的办公地点即将启动。" },
    ],
    contactTitle: "联系方式",
    email: "邮箱",
    call: "电话",
    console: "控制台",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("narenj-theme") as Theme | null;
    const storedLanguage = window.localStorage.getItem("narenj-language") as Language | null;
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    }
    if (storedLanguage === "en" || storedLanguage === "ru" || storedLanguage === "zh") {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.setAttribute("data-theme", theme);
    window.localStorage.setItem("narenj-theme", theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem("narenj-language", language);
  }, [language]);

  const t = useMemo(() => content[language], [language]);
  const isLight = theme === "light";

  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
        isLight ? "bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.14),transparent_30%),linear-gradient(135deg,#fffaf4_0%,#fff7ed_100%)] text-slate-900" : "bg-[#060b08] text-slate-50"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute inset-0 ${
            isLight
              ? "bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.18),transparent_34%),radial-gradient(circle_at_85%_15%,rgba(251,191,36,0.14),transparent_24%)]"
              : "bg-[radial-gradient(circle_at_top_left,rgba(255,132,0,0.25),transparent_36%),radial-gradient(circle_at_85%_15%,rgba(255,180,0,0.18),transparent_24%)]"
          }`}
        />
        <div
          className={`absolute inset-0 opacity-30 ${
            isLight ? "[background-image:linear-gradient(rgba(249,115,22,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.12)_1px,transparent_1px)]" : "[background-image:linear-gradient(rgba(255,140,0,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,140,0,0.16)_1px,transparent_1px)]"
          } [background-size:70px_70px]`}
        />
        <div className={`absolute left-[-6%] top-24 h-72 w-72 rounded-full ${isLight ? "border border-orange-400/20" : "border border-orange-400/20"} blur-3xl`} />
        <div className={`absolute bottom-[-8%] right-[-4%] h-80 w-80 rounded-full ${isLight ? "border border-orange-300/20" : "border border-orange-300/15"} blur-3xl`} />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header
          className={`glass-card mb-8 flex flex-col gap-4 rounded-[16px] px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between ${
            isLight ? "border-orange-200/70 bg-white/75 text-slate-900" : "border-white/10 bg-slate-950/40 text-slate-50"
          }`}
        >
          <a href="#top" className="text-lg font-semibold tracking-[0.26em] text-orange-500">
            NARENJ<span className={`ml-1 ${isLight ? "text-slate-900" : "text-white"}`}>CLOUD</span>
          </a>
          <nav className={`hidden items-center gap-6 text-sm md:flex ${isLight ? "text-slate-700" : "text-slate-300"}`}>
            <a href="#services" className="transition hover:text-orange-500">
              {t.navServices}
            </a>
            <a href="#about" className="transition hover:text-orange-500">
              {t.navAbout}
            </a>
            <a href="#contact" className="transition hover:text-orange-500">
              {t.navContact}
            </a>
          </nav>
          <div className="flex flex-wrap items-center gap-2">
            <div className={`inline-flex items-center gap-1 rounded-[14px] border p-1 ${isLight ? "border-orange-200 bg-orange-50" : "border-white/10 bg-slate-900/70"}`}>
              {(["en", "ru", "zh"] as Language[]).map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={language === value}
                  onClick={() => setLanguage(value)}
                  className={`rounded-[10px] px-3 py-2 text-sm font-semibold transition ${
                    language === value
                      ? isLight
                        ? "bg-orange-500 text-white shadow-sm"
                        : "bg-orange-500/90 text-white"
                      : isLight
                        ? "text-slate-700 hover:bg-white"
                        : "text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {value.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`rounded-[14px] border px-3 py-2 text-sm font-medium transition ${
                isLight
                  ? "border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100"
                  : "border-orange-400/30 bg-orange-500/10 text-orange-200 hover:bg-orange-500/20"
              }`}
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
            <a
              href="https://console.narenj.cloud"
              className={`rounded-[14px] border px-4 py-2 text-sm font-medium transition ${
                isLight
                  ? "border-orange-300 bg-orange-500/10 text-orange-700 hover:bg-orange-500/20"
                  : "border-orange-400/40 bg-orange-500/10 text-orange-200 hover:bg-orange-500/20"
              }`}
            >
              {t.ctaPrimary}
            </a>
          </div>
        </header>

        <main id="top" className="flex-1 space-y-8 pb-10">
          <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div
              className={`glass-card rounded-[24px] p-8 sm:p-10 lg:p-12 ${
                isLight ? "border-orange-200/70 bg-white/70 text-slate-900" : "border-white/10 bg-slate-950/40 text-slate-50"
              }`}
            >
              <span className={`inline-flex rounded-full border px-3 py-1 text-sm font-medium ${isLight ? "border-orange-300 bg-orange-100 text-orange-700" : "border-orange-400/30 bg-orange-500/10 text-orange-200"}`}>
                {t.badge}
              </span>
              <h1 className={`mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl ${isLight ? "text-slate-900" : "text-white"}`}>
                {t.title}
              </h1>
              <p className={`mt-5 max-w-2xl text-lg leading-8 ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                {t.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://console.narenj.cloud"
                  className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
                >
                  {t.ctaPrimary}
                </a>
                <a
                  href="#services"
                  className={`rounded-full border px-6 py-3 text-sm font-semibold transition ${
                    isLight ? "border-slate-300 bg-white/80 text-slate-800 hover:bg-white" : "border-white/15 bg-white/5 text-slate-100 hover:bg-white/10"
                  }`}
                >
                  {t.ctaSecondary}
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {t.stats.map((item) => (
                  <div key={item.label} className={`rounded-2xl border p-4 ${isLight ? "border-orange-200/70 bg-orange-50/70" : "border-white/10 bg-slate-950/30"}`}>
                    <p className={`text-2xl font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>{item.value}</p>
                    <p className={`mt-1 text-sm ${isLight ? "text-slate-600" : "text-slate-400"}`}>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`glass-card rounded-[24px] p-8 sm:p-10 ${isLight ? "border-orange-200/70 bg-white/70 text-slate-900" : "border-white/10 bg-slate-950/40 text-slate-50"}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                {t.whyTitle}
              </p>
              <div className="mt-6 space-y-4">
                <div className={`rounded-[16px] border p-4 ${isLight ? "border-orange-200 bg-orange-50/80" : "border-orange-400/20 bg-orange-500/10"}`}>
                  <p className={`font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>{t.feature1Title}</p>
                  <p className={`mt-1 text-sm ${isLight ? "text-slate-700" : "text-slate-300"}`}>{t.feature1Text}</p>
                </div>
                <div className={`rounded-[16px] border p-4 ${isLight ? "border-slate-200 bg-slate-50" : "border-white/10 bg-white/5"}`}>
                  <p className={`font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>{t.feature2Title}</p>
                  <p className={`mt-1 text-sm ${isLight ? "text-slate-700" : "text-slate-300"}`}>{t.feature2Text}</p>
                </div>
                <div className={`rounded-[16px] border p-4 ${isLight ? "border-slate-200 bg-slate-50" : "border-white/10 bg-white/5"}`}>
                  <p className={`font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>{t.feature3Title}</p>
                  <p className={`mt-1 text-sm ${isLight ? "text-slate-700" : "text-slate-300"}`}>{t.feature3Text}</p>
                </div>
                <div className={`rounded-[16px] border p-4 ${isLight ? "border-slate-200 bg-slate-50" : "border-white/10 bg-white/5"}`}>
                  <p className={`font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>{t.feature4Title}</p>
                  <p className={`mt-1 text-sm ${isLight ? "text-slate-700" : "text-slate-300"}`}>{t.feature4Text}</p>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="space-y-5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                  {t.navServices}
                </p>
                <h2 className={`mt-2 text-3xl font-semibold sm:text-4xl ${isLight ? "text-slate-900" : "text-white"}`}>
                  {t.servicesTitle}
                </h2>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {t.services.map((service) => (
                <article key={service.title} className={`glass-card rounded-[20px] p-6 ${isLight ? "border-orange-200/70 bg-white/75 text-slate-900" : "border-white/10 bg-slate-950/40 text-slate-50"}`}>
                  <h3 className={`text-xl font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>{service.title}</h3>
                  <p className={`mt-3 text-sm leading-7 ${isLight ? "text-slate-700" : "text-slate-300"}`}>{service.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="about" className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className={`glass-card rounded-[32px] p-8 sm:p-10 ${isLight ? "border-orange-200/70 bg-white/75 text-slate-900" : "border-white/10 bg-slate-950/40 text-slate-50"}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">{t.navAbout}</p>
              <h2 className={`mt-3 text-3xl font-semibold sm:text-4xl ${isLight ? "text-slate-900" : "text-white"}`}>
                {t.aboutTitle}
              </h2>
              <p className={`mt-5 text-lg leading-8 ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                {t.aboutText}
              </p>
            </div>

            <div className={`glass-card rounded-[24px] p-8 sm:p-10 ${isLight ? "border-orange-200/70 bg-white/75 text-slate-900" : "border-white/10 bg-slate-950/40 text-slate-50"}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">{t.locationsTitle}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {t.locations.map((location) => (
                  <div key={location.name} className={`rounded-2xl border p-4 ${isLight ? "border-slate-200 bg-slate-50" : "border-white/10 bg-white/5"}`}>
                    <p className={`font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>{location.name}</p>
                    <p className={`mt-1 text-sm ${isLight ? "text-slate-600" : "text-slate-400"}`}>{location.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className={`glass-card rounded-[24px] p-8 sm:p-10 ${isLight ? "border-orange-200/70 bg-white/75 text-slate-900" : "border-white/10 bg-slate-950/40 text-slate-50"}`}>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">{t.contactTitle}</p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <a href="mailto:info@narenj.cloud" className={`block rounded-2xl border p-4 transition ${isLight ? "border-slate-200 bg-slate-50 hover:bg-slate-100" : "border-white/10 bg-white/5 hover:bg-white/10"}`}>
                <p className={`text-sm ${isLight ? "text-slate-600" : "text-slate-400"}`}>{t.email}</p>
                <p className={`mt-1 font-medium ${isLight ? "text-slate-900" : "text-white"}`}>info@narenj.cloud</p>
              </a>
              <a href="tel:+9892022908" className={`block rounded-2xl border p-4 transition ${isLight ? "border-slate-200 bg-slate-50 hover:bg-slate-100" : "border-white/10 bg-white/5 hover:bg-white/10"}`}>
                <p className={`text-sm ${isLight ? "text-slate-600" : "text-slate-400"}`}>{t.call}</p>
                <p className={`mt-1 font-medium ${isLight ? "text-slate-900" : "text-white"}`}>+98 920 229 08</p>
              </a>
              <a href="https://console.narenj.cloud" className={`flex items-center justify-between rounded-2xl border p-4 transition ${isLight ? "border-orange-200 bg-orange-50 hover:bg-orange-100" : "border-orange-400/30 bg-orange-500/10 hover:bg-orange-500/20"}`}>
                <span>
                  <p className={`text-sm ${isLight ? "text-orange-700" : "text-orange-200"}`}>{t.console}</p>
                  <p className={`mt-1 font-medium ${isLight ? "text-slate-900" : "text-white"}`}>console.narenj.cloud</p>
                </span>
                <span className={isLight ? "text-orange-700" : "text-orange-300"}>→</span>
              </a>
            </div>
            <div className={`mt-6 border-t pt-4 text-sm ${isLight ? "border-slate-200 text-slate-600" : "border-white/10 text-slate-400"}`}>
              CEO: <a href="https://amirhossein.info" target="_blank" rel="noreferrer" className="font-semibold text-orange-500 hover:text-orange-400">Amirhossein Mohammadi</a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
