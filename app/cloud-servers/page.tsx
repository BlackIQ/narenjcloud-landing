"use client";

import { useEffect, useMemo, useState } from "react";

type Language = "en" | "ru" | "zh";
type Theme = "dark" | "light";

const content = {
  en: {
    badge: "Scalable cloud servers in Iran & globally",
    title: "Cloud Servers Built for Performance",
    description:
      "Deploy instances in seconds with complete customization. Choose from Linux distributions, pre-installed applications, and flexible resources. Windows & Exchange servers available on demand.",
    ctaPrimary: "Go to console",
    ctaSecondary: "See pricing",
    navServices: "Services",
    navAbout: "About",
    navContact: "Contact",
    
    // Features section
    featureTitle: "Deploy in your way",
    features: [
      {
        title: "Instant Deployment",
        description: "Spin up a new server in under 60 seconds with your preferred OS and configuration.",
      },
      {
        title: "Full Customization",
        description: "Choose your CPU cores, RAM, storage type and size, and uplink speed to match your workload.",
      },
      {
        title: "Pre-installed Apps",
        description: "Get GitLab, Gitea, OwnCloud, NextCloud and more running immediately without manual setup.",
      },
      {
        title: "24/7 Support",
        description: "Our infrastructure team is always available to help you scale and troubleshoot.",
      },
    ],

    // OS Images section
    osTitle: "Operating Systems",
    osDescription: "Choose from leading Linux distributions optimized for performance and stability",
    osImages: [
      { name: "Ubuntu", versions: "22.04 LTS, 24.04 LTS" },
      { name: "Fedora", versions: "39, 40, 41" },
      { name: "Rocky", versions: "8, 9" },
      { name: "AlmaLinux", versions: "8, 9" },
      { name: "Alpine", versions: "3.18, 3.19" },
      { name: "CentOS", versions: "7, Stream 9" },
    ],

    // Applications section
    appTitle: "Pre-installed Applications",
    appDescription: "Get your development environment ready to go with popular applications",
    applications: [
      {
        name: "GitLab",
        description: "Complete DevOps platform with CI/CD, repositories, and issue tracking",
      },
      {
        name: "Gitea",
        description: "Lightweight self-hosted Git service, perfect for smaller teams",
      },
      {
        name: "OwnCloud",
        description: "Private file synchronization and storage solution",
      },
      {
        name: "NextCloud",
        description: "Feature-rich collaboration platform with storage, calendar, and contacts",
      },
      {
        name: "Docker",
        description: "Container runtime for deploying and managing containerized applications",
      },
      {
        name: "Kubernetes",
        description: "Orchestrate containers at scale with the industry standard platform",
      },
      {
        name: "PostgreSQL",
        description: "Enterprise-grade relational database management system",
      },
      {
        name: "MongoDB",
        description: "NoSQL database for flexible, scalable data storage",
      },
    ],

    // Customization section
    customTitle: "Build Your Perfect Server",
    customDescription: "Complete control over your infrastructure",
    customOptions: [
      {
        label: "CPU",
        description: "1 core to 32+ cores",
        icon: "⚙️",
      },
      {
        label: "RAM",
        description: "512MB to 256GB",
        icon: "💾",
      },
      {
        label: "Storage",
        description: "SSD or HDD, 10GB to 2TB+",
        icon: "💿",
      },
      {
        label: "Uplink",
        description: "1Gbps to 25Gbps",
        icon: "🔗",
      },
    ],

    // Windows section
    windowsTitle: "Enterprise Windows & Exchange",
    windowsDescription: "For workloads that require Windows Server or Microsoft Exchange",
    windowsFeatures: [
      "Windows Server 2016, 2019, 2022",
      "Microsoft Exchange Server hosting",
      "Active Directory support",
      "Full administrative access",
      "Backup and disaster recovery options",
    ],



    // CTA section
    ctaHeading: "Ready to get started?",
    ctaSubheading: "Deploy your first server in minutes",
    
    // Contact
    contactTitle: "Questions?",
    email: "Email",
    call: "Call",
    console: "Console",
  },

  ru: {
    badge: "Масштабируемые облачные серверы в Иране и глобально",
    title: "Облачные серверы для высокой производительности",
    description:
      "Запустите экземпляры за секунды с полной кастомизацией. Выбирайте из Linux дистрибутивов, предустановленных приложений и гибких ресурсов. Windows и Exchange серверы доступны по запросу.",
    ctaPrimary: "Перейти в консоль",
    ctaSecondary: "Смотреть цены",
    navServices: "Сервисы",
    navAbout: "О нас",
    navContact: "Контакты",

    featureTitle: "Развертывайте на ваших условиях",
    features: [
      {
        title: "Мгновенное развертывание",
        description: "Запустите новый сервер менее чем за 60 секунд с предпочитаемой ОС и конфигурацией.",
      },
      {
        title: "Полная кастомизация",
        description: "Выбирайте количество ядер, объем RAM, тип и размер хранилища, скорость канала.",
      },
      {
        title: "Предустановленные приложения",
        description: "GitLab, Gitea, OwnCloud, NextCloud и другое уже готовы к работе без ручной настройки.",
      },
      {
        title: "Поддержка 24/7",
        description: "Наша инфраструктурная команда всегда готова помочь масштабированию и решению проблем.",
      },
    ],

    osTitle: "Операционные системы",
    osDescription: "Выбирайте из ведущих дистрибутивов Linux, оптимизированных для производительности",
    osImages: [
      { name: "Ubuntu", versions: "22.04 LTS, 24.04 LTS" },
      { name: "Fedora", versions: "39, 40, 41" },
      { name: "Rocky", versions: "8, 9" },
      { name: "AlmaLinux", versions: "8, 9" },
      { name: "Alpine", versions: "3.18, 3.19" },
      { name: "CentOS", versions: "7, Stream 9" },
    ],

    appTitle: "Предустановленные приложения",
    appDescription: "Получите готовое окружение для разработки с популярными приложениями",
    applications: [
      {
        name: "GitLab",
        description: "Полная DevOps платформа с CI/CD, репозиториями и отслеживанием задач",
      },
      {
        name: "Gitea",
        description: "Легкий самохостируемый Git сервис, идеален для небольших команд",
      },
      {
        name: "OwnCloud",
        description: "Приватное решение синхронизации файлов и хранилища",
      },
      {
        name: "NextCloud",
        description: "Полнофункциональная платформа сотрудничества с хранилищем, календарем и контактами",
      },
      {
        name: "Docker",
        description: "Runtime контейнеризации для развертывания приложений",
      },
      {
        name: "Kubernetes",
        description: "Оркестрация контейнеров в масштабе с индустриальным стандартом",
      },
      {
        name: "PostgreSQL",
        description: "Корпоративная система управления релационными базами данных",
      },
      {
        name: "MongoDB",
        description: "NoSQL база данных для гибкого и масштабируемого хранилища",
      },
    ],

    customTitle: "Соберите идеальный сервер",
    customDescription: "Полный контроль над вашей инфраструктурой",
    customOptions: [
      {
        label: "Процессор",
        description: "От 1 ядра до 32+ ядер",
        icon: "⚙️",
      },
      {
        label: "ОЗУ",
        description: "От 512MB до 256GB",
        icon: "💾",
      },
      {
        label: "Хранилище",
        description: "SSD или HDD, 10GB до 2TB+",
        icon: "💿",
      },
      {
        label: "Канал",
        description: "От 1Gbps до 25Gbps",
        icon: "🔗",
      },
    ],

    windowsTitle: "Корпоративные Windows и Exchange",
    windowsDescription: "Для рабочих нагрузок, требующих Windows Server или Microsoft Exchange",
    windowsFeatures: [
      "Windows Server 2016, 2019, 2022",
      "Хостинг Microsoft Exchange Server",
      "Поддержка Active Directory",
      "Полный административный доступ",
      "Опции резервного копирования и восстановления",
    ],



    ctaHeading: "Готовы начать?",
    ctaSubheading: "Запустите первый сервер за минуты",

    contactTitle: "Вопросы?",
    email: "Email",
    call: "Телефон",
    console: "Консоль",
  },

  zh: {
    badge: "可扩展的云服务器 - 伊朗及全球",
    title: "为高性能而构建的云服务器",
    description:
      "秒级部署实例，完全可定制。选择 Linux 发行版、预装应用和灵活的资源配置。按需提供 Windows 和 Exchange 服务器。",
    ctaPrimary: "进入控制台",
    ctaSecondary: "查看价格",
    navServices: "服务",
    navAbout: "关于",
    navContact: "联系",

    featureTitle: "按您的方式部署",
    features: [
      {
        title: "即时部署",
        description: "在 60 秒内使用首选操作系统和配置启动新服务器。",
      },
      {
        title: "完全可定制",
        description: "选择 CPU 核心、内存、存储类型和大小、以及链路速度来匹配工作负载。",
      },
      {
        title: "预装应用",
        description: "GitLab、Gitea、OwnCloud、NextCloud 等无需手动设置即可立即运行。",
      },
      {
        title: "24/7 支持",
        description: "我们的基础设施团队随时准备帮助您扩展和排除故障。",
      },
    ],

    osTitle: "操作系统",
    osDescription: "从优化性能和稳定性的主流 Linux 发行版中选择",
    osImages: [
      { name: "Ubuntu", versions: "22.04 LTS, 24.04 LTS" },
      { name: "Fedora", versions: "39, 40, 41" },
      { name: "Rocky", versions: "8, 9" },
      { name: "AlmaLinux", versions: "8, 9" },
      { name: "Alpine", versions: "3.18, 3.19" },
      { name: "CentOS", versions: "7, Stream 9" },
    ],

    appTitle: "预装应用",
    appDescription: "通过热门应用获得随时可用的开发环境",
    applications: [
      {
        name: "GitLab",
        description: "包含 CI/CD、仓库和问题追踪的完整 DevOps 平台",
      },
      {
        name: "Gitea",
        description: "轻量级自托管 Git 服务，完美适合小型团队",
      },
      {
        name: "OwnCloud",
        description: "私有文件同步和存储解决方案",
      },
      {
        name: "NextCloud",
        description: "具有存储、日历和联系人的功能丰富的协作平台",
      },
      {
        name: "Docker",
        description: "用于部署和管理容器化应用的容器运行时",
      },
      {
        name: "Kubernetes",
        description: "使用行业标准平台大规模编排容器",
      },
      {
        name: "PostgreSQL",
        description: "企业级关系数据库管理系统",
      },
      {
        name: "MongoDB",
        description: "用于灵活、可扩展数据存储的 NoSQL 数据库",
      },
    ],

    customTitle: "构建您的完美服务器",
    customDescription: "完全控制您的基础设施",
    customOptions: [
      {
        label: "CPU",
        description: "1 核到 32+ 核",
        icon: "⚙️",
      },
      {
        label: "内存",
        description: "512MB 到 256GB",
        icon: "💾",
      },
      {
        label: "存储",
        description: "SSD 或 HDD，10GB 到 2TB+",
        icon: "💿",
      },
      {
        label: "链路",
        description: "1Gbps 到 25Gbps",
        icon: "🔗",
      },
    ],

    windowsTitle: "企业级 Windows 与 Exchange",
    windowsDescription: "适用于需要 Windows Server 或 Microsoft Exchange 的工作负载",
    windowsFeatures: [
      "Windows Server 2016, 2019, 2022",
      "Microsoft Exchange Server 托管",
      "Active Directory 支持",
      "完整管理员访问权限",
      "备份和灾难恢复选项",
    ],



    ctaHeading: "准备好开始了吗?",
    ctaSubheading: "在几分钟内部署您的第一台服务器",

    contactTitle: "有问题?",
    email: "邮箱",
    call: "电话",
    console: "控制台",
  },
};

export default function CloudServersPage() {
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
        {/* Header */}
        <header
          className={`glass-card mb-8 flex flex-col gap-4 rounded-[16px] px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between ${
            isLight ? "border-orange-200/70 bg-white/75 text-slate-900" : "border-white/10 bg-slate-950/40 text-slate-50"
          }`}
        >
          <a href="/" className="text-lg font-semibold tracking-[0.26em] text-orange-500">
            NARENJ<span className={`ml-1 ${isLight ? "text-slate-900" : "text-white"}`}>CLOUD</span>
          </a>
          <nav className={`hidden items-center gap-6 text-sm md:flex ${isLight ? "text-slate-700" : "text-slate-300"}`}>
            <a href="/#services" className="transition hover:text-orange-500">
              {t.navServices}
            </a>
            <a href="/#about" className="transition hover:text-orange-500">
              {t.navAbout}
            </a>
            <a href="/#contact" className="transition hover:text-orange-500">
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

        <main id="top" className="flex-1 space-y-12 pb-10">
          {/* Hero Section */}
          <section className={`glass-card rounded-[24px] p-8 sm:p-12 lg:p-16 ${isLight ? "border-orange-200/70 bg-white/70 text-slate-900" : "border-white/10 bg-slate-950/40 text-slate-50"}`}>
            <span className={`inline-flex rounded-full border px-3 py-1 text-sm font-medium ${isLight ? "border-orange-300 bg-orange-100 text-orange-700" : "border-orange-400/30 bg-orange-500/10 text-orange-200"}`}>
              {t.badge}
            </span>
            <h1 className={`mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl ${isLight ? "text-slate-900" : "text-white"}`}>
              {t.title}
            </h1>
            <p className={`mt-5 max-w-3xl text-lg leading-8 ${isLight ? "text-slate-700" : "text-slate-300"}`}>
              {t.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://console.narenj.cloud"
                className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                {t.ctaPrimary}
              </a>
              <button
                className={`rounded-full border px-6 py-3 text-sm font-semibold transition ${
                  isLight ? "border-slate-300 bg-white/80 text-slate-800 hover:bg-white" : "border-white/15 bg-white/5 text-slate-100 hover:bg-white/10"
                }`}
              >
                {t.ctaSecondary}
              </button>
            </div>
          </section>

          {/* Features Section */}
          <section className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                {t.featureTitle}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {t.features.map((feature) => (
                <div key={feature.title} className={`glass-card rounded-[20px] p-6 ${isLight ? "border-orange-200/70 bg-white/75 text-slate-900" : "border-white/10 bg-slate-950/40 text-slate-50"}`}>
                  <h3 className={`text-lg font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>{feature.title}</h3>
                  <p className={`mt-3 text-sm leading-6 ${isLight ? "text-slate-700" : "text-slate-300"}`}>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Operating Systems Section */}
          <section className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                {t.osTitle}
              </p>
              <h2 className={`mt-2 text-3xl font-semibold sm:text-4xl ${isLight ? "text-slate-900" : "text-white"}`}>
                {t.osDescription}
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.osImages.map((os) => (
                <div key={os.name} className={`glass-card rounded-[16px] p-6 ${isLight ? "border-slate-200 bg-slate-50" : "border-white/10 bg-white/5"}`}>
                  <h3 className={`text-lg font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>{os.name}</h3>
                  <p className={`mt-2 text-sm ${isLight ? "text-slate-600" : "text-slate-400"}`}>{os.versions}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Applications Section */}
          <section className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                {t.appTitle}
              </p>
              <h2 className={`mt-2 text-3xl font-semibold sm:text-4xl ${isLight ? "text-slate-900" : "text-white"}`}>
                {t.appDescription}
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {t.applications.map((app) => (
                <div key={app.name} className={`glass-card rounded-[20px] p-6 ${isLight ? "border-slate-200 bg-slate-50" : "border-white/10 bg-white/5"}`}>
                  <h3 className={`text-lg font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>{app.name}</h3>
                  <p className={`mt-2 text-sm leading-6 ${isLight ? "text-slate-700" : "text-slate-300"}`}>{app.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Customization Section */}
          <section className={`glass-card rounded-[24px] p-8 sm:p-12 ${isLight ? "border-orange-200/70 bg-white/70 text-slate-900" : "border-white/10 bg-slate-950/40 text-slate-50"}`}>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                {t.customTitle}
              </p>
              <h2 className={`mt-2 text-3xl font-semibold sm:text-4xl ${isLight ? "text-slate-900" : "text-white"}`}>
                {t.customDescription}
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {t.customOptions.map((option) => (
                <div key={option.label} className={`rounded-[16px] border p-6 ${isLight ? "border-slate-200 bg-slate-50" : "border-white/10 bg-white/5"}`}>
                  <div className="mb-3 text-4xl">{option.icon}</div>
                  <h3 className={`text-lg font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>{option.label}</h3>
                  <p className={`mt-2 text-sm ${isLight ? "text-slate-600" : "text-slate-400"}`}>{option.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Windows & Exchange Section */}
          <section className={`glass-card rounded-[24px] p-8 sm:p-12 ${isLight ? "border-orange-200/70 bg-white/70 text-slate-900" : "border-white/10 bg-slate-950/40 text-slate-50"}`}>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Enterprise
            </p>
            <h2 className={`mt-2 text-3xl font-semibold sm:text-4xl ${isLight ? "text-slate-900" : "text-white"}`}>
              {t.windowsTitle}
            </h2>
            <p className={`mt-4 text-lg ${isLight ? "text-slate-700" : "text-slate-300"}`}>
              {t.windowsDescription}
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {t.windowsFeatures.map((feature) => (
                <div key={feature} className={`flex items-start gap-3 rounded-lg border p-3 ${isLight ? "border-slate-200 bg-slate-50" : "border-white/10 bg-white/5"}`}>
                  <span className="text-orange-500">✓</span>
                  <span className={isLight ? "text-slate-700" : "text-slate-300"}>{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className={`glass-card rounded-[24px] p-8 sm:p-12 text-center ${isLight ? "border-orange-200/70 bg-white/70 text-slate-900" : "border-white/10 bg-slate-950/40 text-slate-50"}`}>
            <h2 className={`text-3xl font-semibold sm:text-4xl ${isLight ? "text-slate-900" : "text-white"}`}>
              {t.ctaHeading}
            </h2>
            <p className={`mt-4 text-lg ${isLight ? "text-slate-700" : "text-slate-300"}`}>
              {t.ctaSubheading}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://console.narenj.cloud"
                className="rounded-full bg-orange-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                {t.ctaPrimary}
              </a>
              <a
                href="/"
                className={`rounded-full border px-8 py-3 text-sm font-semibold transition ${
                  isLight ? "border-slate-300 bg-white/80 text-slate-800 hover:bg-white" : "border-white/15 bg-white/5 text-slate-100 hover:bg-white/10"
                }`}
              >
                {t.navAbout}
              </a>
            </div>
          </section>

          {/* Contact Section */}
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
              Founder & Creator: <a href="https://amirhossein.info" target="_blank" rel="noreferrer" className="font-semibold text-orange-500 hover:text-orange-400">Amirhossein Mohammadi</a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
