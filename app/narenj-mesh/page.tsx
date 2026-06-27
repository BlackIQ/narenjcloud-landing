"use client";

import { useEffect, useMemo, useState } from "react";

type Language = "en" | "ru" | "zh" | "fa";
type Theme = "dark" | "light";

const content = {
  en: {
    badge: "Private site-to-site networking",
    title: "Connect Multiple Sites Without Static IP",
    description:
      "Narenj Mesh is a modern site-to-site VPN solution that connects your offices, datacenters, and remote locations seamlessly. Build private, secure networks even with dynamic IP addresses.",
    ctaPrimary: "Go to console",
    ctaSecondary: "Learn more",
    navServices: "Services",
    navAbout: "About",
    navContact: "Contact",

    // Features section
    featureTitle: "Why Narenj Mesh",
    features: [
      {
        title: "No Static IP Required",
        description: "Works perfectly with dynamic IP addresses. Connect branch offices without a fixed IP.",
      },
      {
        title: "Automatic Discovery",
        description: "Endpoints automatically discover and connect to each other. Set and forget.",
      },
      {
        title: "Encrypted Tunnel",
        description: "Military-grade encryption ensures all traffic between sites stays private and secure.",
      },
      {
        title: "Low Latency",
        description: "Direct mesh connections minimize latency for better performance across locations.",
      },
    ],

    // Use Cases section
    useCaseTitle: "Perfect For",
    useCaseDescription: "From small businesses to large enterprises",
    useCases: [
      {
        name: "Multi-Office Networks",
        description: "Connect headquarters, branches, and regional offices into one private network.",
      },
      {
        name: "Datacenter Replication",
        description: "Mirror data and services between multiple datacenters securely.",
      },
      {
        name: "Hybrid Cloud Setup",
        description: "Seamlessly integrate on-premises infrastructure with cloud resources.",
      },
      {
        name: "Remote Worker Access",
        description: "Give remote employees secure access to internal resources.",
      },
      {
        name: "Disaster Recovery",
        description: "Build resilient networks with automatic failover between locations.",
      },
      {
        name: "IoT & Edge Networks",
        description: "Connect edge devices and IoT nodes to central management.",
      },
    ],

    // How it works section
    howTitle: "How It Works",
    howDescription: "Simple 3-step setup process",
    howSteps: [
      {
        number: "1",
        title: "Create a Mesh Network",
        description: "Set up a new Narenj Mesh instance in your console and choose your locations.",
      },
      {
        number: "2",
        title: "Add Endpoints",
        description: "Add your office locations, datacenters, or MikroTik routers as endpoints to the mesh.",
      },
      {
        number: "3",
        title: "Configure & Connect",
        description: "Automatic configuration and connection establishment. Your network is now live.",
      },
    ],

    // Features Grid
    capabilitiesTitle: "Capabilities",
    capabilities: [
      {
        icon: "🌐",
        title: "Multi-Site Connectivity",
        description: "Connect unlimited sites in a single mesh network",
      },
      {
        icon: "🔒",
        title: "End-to-End Encryption",
        description: "AES-256 encryption for all traffic between nodes",
      },
      {
        icon: "⚡",
        title: "High Performance",
        description: "Optimized routing for minimal latency and maximum throughput",
      },
      {
        icon: "📊",
        title: "Real-time Monitoring",
        description: "Dashboards showing network health, bandwidth, and active connections",
      },
      {
        icon: "🔄",
        title: "Automatic Failover",
        description: "Redundant paths ensure connectivity even if one link fails",
      },
      {
        icon: "🛠️",
        title: "MikroTik Integration",
        description: "Native support for MikroTik routers and other networking equipment",
      },
    ],

    // Protocols section
    protocolTitle: "Supported Protocols & Equipment",
    protocols: [
      {
        name: "WireGuard",
        description: "Modern, fast VPN protocol with excellent performance",
      },
      {
        name: "IPSec",
        description: "Industry-standard protocol for secure site-to-site connections",
      },
      {
        name: "MikroTik RouterOS",
        description: "Direct integration with MikroTik routers via native protocol",
      },
      {
        name: "OpenVPN",
        description: "OpenVPN-compatible endpoints for flexibility",
      },
    ],



    // CTA section
    ctaHeading: "Connect Your Global Network",
    ctaSubheading: "Start building your mesh network today",

    // Contact
    contactTitle: "Questions?",
    email: "Email",
    call: "Call",
    console: "Console",
  },

  ru: {
    badge: "Приватная сетевая связность между площадками",
    title: "Подключайте несколько площадок без статического IP",
    description:
      "Narenj Mesh это современное решение для VPN между площадками, которое связывает ваши офисы, дата-центры и удалённые локации. Строите приватные защищённые сети даже с динамическими IP адресами.",
    ctaPrimary: "Перейти в консоль",
    ctaSecondary: "Узнать больше",
    navServices: "Сервисы",
    navAbout: "О нас",
    navContact: "Контакты",

    featureTitle: "Почему выбирают Narenj Mesh",
    features: [
      {
        title: "Не нужен статический IP",
        description: "Работает отлично с динамическими IP адресами. Подключайте филиалы без фиксированного адреса.",
      },
      {
        title: "Автоматическое обнаружение",
        description: "Концы сети автоматически находят друг друга и подключаются. Установите и забудьте.",
      },
      {
        title: "Защифрованный туннель",
        description: "Военная криптография обеспечивает конфиденциальность всего трафика между площадками.",
      },
      {
        title: "Низкая задержка",
        description: "Прямые mesh соединения минимизируют задержку и улучшают производительность.",
      },
    ],

    useCaseTitle: "Идеально подходит для",
    useCaseDescription: "От небольших компаний до больших корпораций",
    useCases: [
      {
        name: "Многофилиальные сети",
        description: "Объединяет офисы, филиалы и региональные площадки в одну сеть.",
      },
      {
        name: "Репликация дата-центров",
        description: "Защищённо зеркалирует данные между несколькими дата-центрами.",
      },
      {
        name: "Гибридное облако",
        description: "Безопасно интегрирует локальную инфраструктуру с облачными ресурсами.",
      },
      {
        name: "Доступ удалённых сотрудников",
        description: "Предоставляет удалённым работникам защищённый доступ к внутренним сервисам.",
      },
      {
        name: "Аварийное восстановление",
        description: "Строит отказоустойчивые сети с автоматическим переключением.",
      },
      {
        name: "IoT и периферийные сети",
        description: "Подключает IoT устройства и граничные узлы к центральному управлению.",
      },
    ],

    howTitle: "Как это работает",
    howDescription: "Простая 3-х этапная настройка",
    howSteps: [
      {
        number: "1",
        title: "Создайте Mesh сеть",
        description: "Создайте новую Narenj Mesh сеть в консоли и выберите локации.",
      },
      {
        number: "2",
        title: "Добавьте точки подключения",
        description: "Добавьте ваши офисы, дата-центры или MikroTik маршрутизаторы как точки в сеть.",
      },
      {
        number: "3",
        title: "Настройте и подключитесь",
        description: "Автоматическая конфигурация и подключение. Ваша сеть готова к работе.",
      },
    ],

    capabilitiesTitle: "Возможности",
    capabilities: [
      {
        icon: "🌐",
        title: "Многосайтовое подключение",
        description: "Подключайте неограниченное количество площадок в одну сеть",
      },
      {
        icon: "🔒",
        title: "Сквозная шифрация",
        description: "AES-256 шифрование для всего трафика между узлами",
      },
      {
        icon: "⚡",
        title: "Высокая производительность",
        description: "Оптимизированная маршрутизация для минимальной задержки",
      },
      {
        icon: "📊",
        title: "Мониторинг в реальном времени",
        description: "Панели мониторинга состояния сети, пропускной способности и соединений",
      },
      {
        icon: "🔄",
        title: "Автоматическое переключение",
        description: "Резервные маршруты обеспечивают связность при отказе линии",
      },
      {
        icon: "🛠️",
        title: "Интеграция с MikroTik",
        description: "Встроенная поддержка маршрутизаторов MikroTik и другого оборудования",
      },
    ],

    protocolTitle: "Поддерживаемые протоколы и оборудование",
    protocols: [
      {
        name: "WireGuard",
        description: "Современный и быстрый VPN протокол с отличной производительностью",
      },
      {
        name: "IPSec",
        description: "Стандартный протокол для защищённых соединений между площадками",
      },
      {
        name: "MikroTik RouterOS",
        description: "Прямая интеграция с маршрутизаторами MikroTik через родной протокол",
      },
      {
        name: "OpenVPN",
        description: "OpenVPN-совместимые концы для гибкости",
      },
    ],



    ctaHeading: "Подключите вашу глобальную сеть",
    ctaSubheading: "Начните строить вашу mesh сеть сегодня",

    contactTitle: "Вопросы?",
    email: "Email",
    call: "Телефон",
    console: "Консоль",
  },

  zh: {
    badge: "站点间专用网络连接",
    title: "无需静态 IP 地址连接多个站点",
    description:
      "Narenj Mesh 是一个现代化的站点间 VPN 解决方案，可以无缝连接您的办公室、数据中心和远程位置。即使使用动态 IP 地址，也能构建私有安全网络。",
    ctaPrimary: "进入控制台",
    ctaSecondary: "了解详情",
    navServices: "服务",
    navAbout: "关于",
    navContact: "联系",

    featureTitle: "为何选择 Narenj Mesh",
    features: [
      {
        title: "无需静态 IP",
        description: "完美支持动态 IP 地址。连接分支机构无需固定 IP。",
      },
      {
        title: "自动发现",
        description: "网络端点自动相互发现和连接。配置后无需维护。",
      },
      {
        title: "加密隧道",
        description: "军用级别的加密确保站点间所有流量的隐私和安全。",
      },
      {
        title: "低延迟",
        description: "直接网状连接最小化延迟，提升跨地域性能。",
      },
    ],

    useCaseTitle: "适用于",
    useCaseDescription: "从小型企业到大型企业",
    useCases: [
      {
        name: "多办公室网络",
        description: "将总部、分支机构和地域办公室连接为统一私有网络。",
      },
      {
        name: "数据中心复制",
        description: "在多个数据中心之间安全地镜像数据和服务。",
      },
      {
        name: "混合云设置",
        description: "无缝集成本地基础设施与云资源。",
      },
      {
        name: "远程员工访问",
        description: "为远程员工提供对内部资源的安全访问。",
      },
      {
        name: "灾难恢复",
        description: "构建具有自动故障转移的弹性网络。",
      },
      {
        name: "物联网和边缘网络",
        description: "连接物联网设备和边缘节点至中央管理。",
      },
    ],

    howTitle: "工作原理",
    howDescription: "简单的三步设置流程",
    howSteps: [
      {
        number: "1",
        title: "创建网状网络",
        description: "在控制台中创建新的 Narenj Mesh 并选择位置。",
      },
      {
        number: "2",
        title: "添加端点",
        description: "将您的办公室、数据中心或 MikroTik 路由器作为端点添加到网络中。",
      },
      {
        number: "3",
        title: "配置并连接",
        description: "自动配置和连接建立。您的网络已上线。",
      },
    ],

    capabilitiesTitle: "功能特性",
    capabilities: [
      {
        icon: "🌐",
        title: "多站点连接",
        description: "在单个网状网络中连接无限个站点",
      },
      {
        icon: "🔒",
        title: "端到端加密",
        description: "节点间所有流量采用 AES-256 加密",
      },
      {
        icon: "⚡",
        title: "高性能",
        description: "优化的路由以实现最小延迟和最大吞吐量",
      },
      {
        icon: "📊",
        title: "实时监控",
        description: "显示网络健康、带宽和活动连接的仪表板",
      },
      {
        icon: "🔄",
        title: "自动故障转移",
        description: "冗余路径确保即使一条链路故障也能保持连接",
      },
      {
        icon: "🛠️",
        title: "MikroTik 集成",
        description: "原生支持 MikroTik 路由器和其他网络设备",
      },
    ],

    protocolTitle: "支持的协议和设备",
    protocols: [
      {
        name: "WireGuard",
        description: "现代高速 VPN 协议，性能优异",
      },
      {
        name: "IPSec",
        description: "站点间安全连接的行业标准协议",
      },
      {
        name: "MikroTik RouterOS",
        description: "通过原生协议与 MikroTik 路由器直接集成",
      },
      {
        name: "OpenVPN",
        description: "OpenVPN 兼容端点提供灵活性",
      },
    ],



    ctaHeading: "连接您的全球网络",
    ctaSubheading: "立即开始构建网状网络",

    contactTitle: "有问题?",
    email: "邮箱",
    call: "电话",
    console: "控制台",
  },
  fa: {
    badge: "اتصال شبکه خصوصی بین سایت ها",
    title: "چندین سایت را بدون IP ایستا متصل کنید",
    description:
      "Narenj Mesh یک راه حل VPN مدرن برای بین سایت ها است که دفاتر، مراکز داده و مکان های دوردست شما را بدون درز و بدون نیاز به آدرس IP ثابت متصل می کند.",
    ctaPrimary: "ورود به کنسول",
    ctaSecondary: "اطلاعات بیشتر",
    navServices: "خدمات",
    navAbout: "درباره ما",
    navContact: "تماس",
    featureTitle: "چرا Narenj Mesh را انتخاب کنید",
    features: [
      {
        title: "IP ایستا لازم نیست",
        description: "با آدرس های IP پویا به خوبی کار می کند. شعبات خود را بدون IP ثابت متصل کنید.",
      },
      {
        title: "کشف خودکار",
        description: "نقاط انتهایی شبکه خودکار یکدیگر را کشف و متصل می کنند. تنظیم و فراموشی کنید.",
      },
      {
        title: "تونل رمزگذاری شده",
        description: "رمزگذاری نظامی تمام ترافیک بین سایت ها را محافظت می کند.",
      },
      {
        title: "تاخیر کم",
        description: "اتصالات mesh مستقیم تاخیر و عملکرد را بهبود می بخشند.",
      },
    ],
    useCaseTitle: "عالی برای",
    useCaseDescription: "از کسب و کارهای کوچک تا بنگاه های بزرگ",
    useCases: [
      {
        name: "شبکه های چندسایتی",
        description: "دفتر مرکزی، شعبات و مکان های منطقه ای را در یک شبکه واحد متصل کنید.",
      },
      {
        name: "تکرار مرکز داده",
        description: "داده ها و خدمات را بین مراکز داده متعدد تکرار کنید.",
      },
      {
        name: "تنظیم ابری هیبریدی",
        description: "زیرساخت محلی را با منابع ابری ادغام کنید.",
      },
      {
        name: "دسترسی کارکنان دوردست",
        description: "به کارکنان دوردست دسترسی ایمن به منابع داخلی بدهید.",
      },
      {
        name: "بازیابی فاجعه",
        description: "شبکه های انعطاف پذیری با تعویض خودکار بسازید.",
      },
      {
        name: "شبکه های IoT و لبه",
        description: "دستگاه های لبه و گره های IoT را به مدیریت مرکزی متصل کنید.",
      },
    ],
    howTitle: "چگونه کار می کند",
    howDescription: "فرایند تنظیم 3 مرحله ای",
    howSteps: [
      {
        number: "1",
        title: "یک شبکه Mesh ایجاد کنید",
        description: "یک نمونه Narenj Mesh جدید در کنسول ایجاد کنید و مکان های خود را انتخاب کنید.",
      },
      {
        number: "2",
        title: "نقاط انتهایی اضافه کنید",
        description: "دفاتر، مراکز داده یا مسیریاب های MikroTik خود را به عنوان نقاط در شبکه اضافه کنید.",
      },
      {
        number: "3",
        title: "تنظیم و اتصال کنید",
        description: "تنظیم خودکار و برقراری اتصال. شبکه شما اکنون زنده است.",
      },
    ],
    capabilitiesTitle: "توانایی ها",
    capabilities: [
      {
        icon: "🌐",
        title: "اتصال چندسایتی",
        description: "در یک شبکه، سایت های نامحدود را متصل کنید",
      },
      {
        icon: "🔒",
        title: "رمزگذاری سراسری",
        description: "رمزگذاری AES-256 برای تمام ترافیک بین گره ها",
      },
      {
        icon: "⚡",
        title: "عملکرد بالا",
        description: "مسیریابی بهینه برای تاخیر حداقل و پهنای باند حداکثر",
      },
      {
        icon: "📊",
        title: "نظارت بلادرنگ",
        description: "داشبوردهای نشان دهنده سلامت شبکه، پهنای باند و اتصالات فعال",
      },
      {
        icon: "🔄",
        title: "تعویض خودکار",
        description: "مسیرهای پشتیبان برای اطمینان از اتصال حتی در صورت خرابی پیوند",
      },
      {
        icon: "🛠️",
        title: "یکپارچگی MikroTik",
        description: "پشتیبانی بومی برای مسیریاب های MikroTik و دستگاه های دیگر",
      },
    ],
    protocolTitle: "پروتکل ها و تجهیزات پشتیبان شده",
    protocols: [
      {
        name: "WireGuard",
        description: "پروتکل VPN مدرن و سریع با عملکرد عالی",
      },
      {
        name: "IPSec",
        description: "پروتکل استاندارد صنعت برای اتصالات امن بین سایت ها",
      },
      {
        name: "MikroTik RouterOS",
        description: "یکپارچگی مستقیم با مسیریاب های MikroTik از طریق پروتکل بومی",
      },
      {
        name: "OpenVPN",
        description: "نقاط انتهایی سازگار با OpenVPN برای انعطاف پذیری",
      },
    ],
    ctaHeading: "شبکه جهانی خود را متصل کنید",
    ctaSubheading: "امروز شبکه mesh خود را ساختن شروع کنید",
    contactTitle: "سوالی دارید؟",
    email: "ایمیل",
    call: "تماس",
    console: "کنسول",
  },
};

export default function NarenjMeshPage() {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("narenj-theme") as Theme | null;
    const storedLanguage = window.localStorage.getItem("narenj-language") as Language | null;
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    }
    if (storedLanguage === "en" || storedLanguage === "ru" || storedLanguage === "zh" || storedLanguage === "fa") {
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
              {(["en", "ru", "zh", "fa"] as Language[]).map((value) => (
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
              className={`rounded-[14px] border px-3 py-2 transition ${
                isLight
                  ? "border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100"
                  : "border-orange-400/30 bg-orange-500/10 text-orange-200 hover:bg-orange-500/20"
              }`}
            >
              {theme === "dark" ? "☀️" : "🌙"}
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

          {/* Use Cases Section */}
          <section className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                {t.useCaseTitle}
              </p>
              <h2 className={`mt-2 text-3xl font-semibold sm:text-4xl ${isLight ? "text-slate-900" : "text-white"}`}>
                {t.useCaseDescription}
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {t.useCases.map((useCase) => (
                <div key={useCase.name} className={`glass-card rounded-[20px] p-6 ${isLight ? "border-orange-200/70 bg-white/75 text-slate-900" : "border-white/10 bg-slate-950/40 text-slate-50"}`}>
                  <h3 className={`text-lg font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>{useCase.name}</h3>
                  <p className={`mt-2 text-sm leading-6 ${isLight ? "text-slate-700" : "text-slate-300"}`}>{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works Section */}
          <section className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                {t.howTitle}
              </p>
              <h2 className={`mt-2 text-3xl font-semibold sm:text-4xl ${isLight ? "text-slate-900" : "text-white"}`}>
                {t.howDescription}
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {t.howSteps.map((step) => (
                <div key={step.number} className={`glass-card rounded-[20px] p-6 ${isLight ? "border-orange-200/70 bg-white/75 text-slate-900" : "border-white/10 bg-slate-950/40 text-slate-50"}`}>
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg font-semibold ${isLight ? "bg-orange-100 text-orange-700" : "bg-orange-500/20 text-orange-300"}`}>
                    {step.number}
                  </div>
                  <h3 className={`mt-4 text-lg font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>{step.title}</h3>
                  <p className={`mt-2 text-sm leading-6 ${isLight ? "text-slate-700" : "text-slate-300"}`}>{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Capabilities Section */}
          <section className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                {t.capabilitiesTitle}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {t.capabilities.map((cap) => (
                <div key={cap.title} className={`glass-card rounded-[20px] p-6 ${isLight ? "border-orange-200/70 bg-white/75 text-slate-900" : "border-white/10 bg-slate-950/40 text-slate-50"}`}>
                  <div className="mb-3 text-4xl">{cap.icon}</div>
                  <h3 className={`text-lg font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>{cap.title}</h3>
                  <p className={`mt-2 text-sm leading-6 ${isLight ? "text-slate-700" : "text-slate-300"}`}>{cap.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Protocols Section */}
          <section className={`glass-card rounded-[24px] p-8 sm:p-12 ${isLight ? "border-orange-200/70 bg-white/70 text-slate-900" : "border-white/10 bg-slate-950/40 text-slate-50"}`}>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              {t.protocolTitle}
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {t.protocols.map((protocol) => (
                <div key={protocol.name} className={`rounded-[16px] border p-6 ${isLight ? "border-slate-200 bg-slate-50" : "border-white/10 bg-white/5"}`}>
                  <h3 className={`text-lg font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>{protocol.name}</h3>
                  <p className={`mt-2 text-sm ${isLight ? "text-slate-700" : "text-slate-300"}`}>{protocol.description}</p>
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
                <p className={`mt-1 font-medium ${isLight ? "text-slate-900" : "text-white"}`}>+98 9202 2965</p>
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
              Founder & Creator: <a href="https://amirhossein.info" target="_blank" rel="noreferrer" className="font-semibold text-orange-500 hover:text-orange-400">Amirhossein Mohammadi</a> {/* Always in English */}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
