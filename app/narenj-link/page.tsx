"use client";

import { useEffect, useMemo, useState } from "react";

type Language = "en" | "ru" | "zh" | "fa";
type Theme = "dark" | "light";

const content = {
  en: {
    badge: "Global connectivity solutions",
    title: "Connect to Any Location Worldwide",
    description:
      "Narenj Link provides secure, dedicated connectivity between your infrastructure and any destination globally. Guaranteed uptime, low latency, and premium performance for critical workloads.",
    ctaPrimary: "Go to console",
    ctaSecondary: "Check availability",
    navServices: "Services",
    navAbout: "About",
    navContact: "Contact",

    // Features section
    featureTitle: "Why Narenj Link",
    features: [
      {
        title: "Dedicated Bandwidth",
        description: "Guaranteed, non-shared bandwidth for consistent performance and reliability.",
      },
      {
        title: "Global Coverage",
        description: "Connect to 25+ countries from Iran. Direct peering and low latency routes.",
      },
      {
        title: "SLA Guaranteed",
        description: "99.99% uptime SLA with compensation for failures. Your traffic, our responsibility.",
      },
      {
        title: "24/7 NOC Support",
        description: "Dedicated support team monitoring your links around the clock, every day.",
      },
    ],

    // Global Reach section
    reachTitle: "Global Reach",
    reachDescription: "Connect to major regions worldwide",
    regions: [
      { region: "Europe", countries: "Germany, France, Netherlands, UK, Poland, More" },
      { region: "Asia-Pacific", countries: "Singapore, Hong Kong, Japan, Australia, India, More" },
      { region: "Americas", countries: "USA, Canada, Brazil, Mexico, More" },
      { region: "Middle East", countries: "UAE, Saudi Arabia, Qatar, Turkey, More" },
      { region: "Africa", countries: "South Africa, Nigeria, Egypt, More" },
      { region: "CIS Region", countries: "Russia, Kazakhstan, Belarus, More" },
    ],

    // Connection Types section
    typesTitle: "Connection Types",
    typesDescription: "Choose the perfect connectivity solution",
    connectionTypes: [
      {
        name: "Direct International Link",
        description: "Dedicated fiber directly to your destination with guaranteed SLA.",
        speed: "1Gbps - 25Gbps",
      },
      {
        name: "IP Transit",
        description: "Cost-effective IP connectivity with excellent performance globally.",
        speed: "100Mbps - 10Gbps",
      },
      {
        name: "Managed MPLS",
        description: "Enterprise-grade traffic engineering with QoS and advanced features.",
        speed: "10Mbps - 25Gbps",
      },
      {
        name: "Cloud Backbone",
        description: "Direct connectivity to major cloud providers worldwide.",
        speed: "1Gbps - 25Gbps",
      },
    ],

    // Use Cases section
    useCaseTitle: "Perfect For",
    useCaseDescription: "Enterprise and mission-critical applications",
    useCases: [
      {
        name: "International E-Commerce",
        description: "Low-latency connections to global customer bases for optimal performance.",
      },
      {
        name: "Finance & Banking",
        description: "Dedicated, secure links for time-sensitive transactions and data.",
      },
      {
        name: "Media & CDN",
        description: "Fast delivery of content to users across continents.",
      },
      {
        name: "Software as a Service",
        description: "Reliable global infrastructure for multi-region deployments.",
      },
      {
        name: "IoT & Sensor Networks",
        description: "Connect edge devices with consistent, low-latency performance.",
      },
      {
        name: "Remote Offices",
        description: "Fast, reliable connections for distributed teams and branch offices.",
      },
    ],

    // Performance section
    performanceTitle: "Performance Metrics",
    performanceDescription: "What to expect from Narenj Link",
    metrics: [
      {
        icon: "⚡",
        title: "Ultra-Low Latency",
        value: "<20ms",
        description: "To most major regions from Iran",
      },
      {
        icon: "📈",
        title: "Throughput",
        value: "Up to 25Gbps",
        description: "Non-oversubscribed dedicated bandwidth",
      },
      {
        icon: "🛡️",
        title: "Uptime SLA",
        value: "99.99%",
        description: "With compensation for failures",
      },
      {
        icon: "🔍",
        title: "Jitter Control",
        value: "<5ms",
        description: "Stable, predictable performance",
      },
    ],

    // Features Grid
    capabilitiesTitle: "Advanced Capabilities",
    capabilities: [
      {
        icon: "🔐",
        title: "End-to-End Encryption",
        description: "Secure your international traffic with optional encryption",
      },
      {
        icon: "📊",
        title: "Traffic Engineering",
        description: "MPLS TE for optimal path selection and load balancing",
      },
      {
        icon: "🌐",
        title: "Anycast Routing",
        description: "Route traffic to nearest edge locations for better performance",
      },
      {
        icon: "⚙️",
        title: "BGP Communities",
        description: "Advanced routing control with BGP communities and policies",
      },
      {
        icon: "📉",
        title: "DDoS Protection",
        description: "Upstream DDoS mitigation and traffic scrubbing",
      },
      {
        icon: "🎯",
        title: "QoS & Prioritization",
        description: "Guarantee bandwidth for critical applications",
      },
    ],



    // SLA section
    slaTitle: "SLA & Support",
    slaFeatures: [
      "99.99% monthly uptime guarantee",
      "Service credits for downtime",
      "24/7 dedicated NOC support",
      "15-minute emergency response",
      "Quarterly performance reports",
      "Advanced monitoring and alerts",
    ],

    // CTA section
    ctaHeading: "Ready to Go Global?",
    ctaSubheading: "Connect to the world with guaranteed performance",
    
    // Contact
    contactTitle: "Questions?",
    email: "Email",
    call: "Call",
    console: "Console",
  },

  ru: {
    badge: "Глобальные решения для связности",
    title: "Подключитесь к любому месту в мире",
    description:
      "Narenj Link предоставляет защищённую выделенную связность между вашей инфраструктурой и любым местом на земле. Гарантированное время работы, низкая задержка и премиум производительность для критически важных систем.",
    ctaPrimary: "Перейти в консоль",
    ctaSecondary: "Проверить доступность",
    navServices: "Сервисы",
    navAbout: "О нас",
    navContact: "Контакты",

    featureTitle: "Почему выбирают Narenj Link",
    features: [
      {
        title: "Выделенная пропускная способность",
        description: "Гарантированная, невыделённая пропускная способность для стабильной производительности.",
      },
      {
        title: "Глобальное покрытие",
        description: "Подключитесь к 25+ странам из Ирана. Прямой пиринг и маршруты с низкой задержкой.",
      },
      {
        title: "SLA гарантирован",
        description: "99.99% гарантия времени работы с компенсацией за отказы.",
      },
      {
        title: "Поддержка NOC 24/7",
        description: "Выделённая команда поддержки контролирует ваши каналы 24/7.",
      },
    ],

    reachTitle: "Глобальное покрытие",
    reachDescription: "Подключайтесь к ведущим регионам по всему миру",
    regions: [
      { region: "Европа", countries: "Германия, Франция, Нидерланды, Великобритания, Польша, Ещё" },
      { region: "Азиатско-Тихоокеанский регион", countries: "Сингапур, Гонконг, Япония, Австралия, Индия, Ещё" },
      { region: "Америка", countries: "США, Канада, Бразилия, Мексика, Ещё" },
      { region: "Ближний Восток", countries: "ОАЭ, Саудовская Аравия, Катар, Турция, Ещё" },
      { region: "Африка", countries: "Южная Африка, Нигерия, Египет, Ещё" },
      { region: "Регион СНГ", countries: "Россия, Казахстан, Беларусь, Ещё" },
    ],

    typesTitle: "Типы соединения",
    typesDescription: "Выбирайте идеальное решение для подключения",
    connectionTypes: [
      {
        name: "Прямой международный канал",
        description: "Выделённое волокно напрямую в пункт назначения с гарантированной SLA.",
        speed: "1Gbps - 25Gbps",
      },
      {
        name: "IP Transit",
        description: "Экономичная IP связность с отличной производительностью глобально.",
        speed: "100Mbps - 10Gbps",
      },
      {
        name: "Управляемый MPLS",
        description: "Корпоративная инженерия трафика с QoS и передовыми функциями.",
        speed: "10Mbps - 25Gbps",
      },
      {
        name: "Cloud Backbone",
        description: "Прямое соединение с крупнейшими поставщиками облачных услуг.",
        speed: "1Gbps - 25Gbps",
      },
    ],

    useCaseTitle: "Идеально подходит для",
    useCaseDescription: "Корпоративные и критически важные приложения",
    useCases: [
      {
        name: "Международная E-Commerce",
        description: "Подключения с низкой задержкой к глобальной базе клиентов.",
      },
      {
        name: "Финансы и банкинг",
        description: "Выделённые защищённые каналы для срочных транзакций.",
      },
      {
        name: "Медиа и CDN",
        description: "Быстрая доставка контента пользователям по всему миру.",
      },
      {
        name: "Software as a Service",
        description: "Надёжная инфраструктура для развертывания в нескольких регионах.",
      },
      {
        name: "IoT и сети датчиков",
        description: "Подключайте граничные устройства с стабильной низкой задержкой.",
      },
      {
        name: "Удалённые офисы",
        description: "Быстрые и надежные соединения для распределённых команд.",
      },
    ],

    performanceTitle: "Метрики производительности",
    performanceDescription: "Чего ожидать от Narenj Link",
    metrics: [
      {
        icon: "⚡",
        title: "Ультра-низкая задержка",
        value: "<20ms",
        description: "В большинство крупных регионов из Ирана",
      },
      {
        icon: "📈",
        title: "Пропускная способность",
        value: "До 25Gbps",
        description: "Невыделённая выделённая пропускная способность",
      },
      {
        icon: "🛡️",
        title: "SLA время работы",
        value: "99.99%",
        description: "С компенсацией за отказы",
      },
      {
        icon: "🔍",
        title: "Контроль джиттера",
        value: "<5ms",
        description: "Стабильная, предсказуемая производительность",
      },
    ],

    capabilitiesTitle: "Передовые возможности",
    capabilities: [
      {
        icon: "🔐",
        title: "Сквозное шифрование",
        description: "Защитите ваш международный трафик с опциональным шифрованием",
      },
      {
        icon: "📊",
        title: "Инженерия трафика",
        description: "MPLS TE для оптимального выбора маршрута и балансировки нагрузки",
      },
      {
        icon: "🌐",
        title: "Маршрутизация Anycast",
        description: "Направляйте трафик к ближайшим граничным узлам",
      },
      {
        icon: "⚙️",
        title: "BGP сообщества",
        description: "Продвинутый контроль маршрутизации с BGP сообществами",
      },
      {
        icon: "📉",
        title: "Защита от DDoS",
        description: "Смягчение DDoS атак на уровне вышестоящего провайдера",
      },
      {
        icon: "🎯",
        title: "QoS и приоритизация",
        description: "Гарантируйте пропускную способность для критических приложений",
      },
    ],



    slaTitle: "SLA и поддержка",
    slaFeatures: [
      "Гарантия времени работы 99.99% в месяц",
      "Кредиты услуг за простои",
      "Выделённая поддержка NOC 24/7",
      "Ответ в критических ситуациях за 15 минут",
      "Ежеквартальные отчёты о производительности",
      "Продвинутый мониторинг и уведомления",
    ],

    ctaHeading: "Готовы выйти в глобальный масштаб?",
    ctaSubheading: "Подключитесь к миру с гарантированной производительностью",

    contactTitle: "Вопросы?",
    email: "Email",
    call: "Телефон",
    console: "Консоль",
  },

  zh: {
    badge: "全球连接解决方案",
    title: "连接到全球任何地点",
    description:
      "Narenj Link 为您的基础设施与全球任何目的地之间提供安全、专用的连接。保证正常运行时间、低延迟和优质性能的关键工作负载。",
    ctaPrimary: "进入控制台",
    ctaSecondary: "查看可用性",
    navServices: "服务",
    navAbout: "关于",
    navContact: "联系",

    featureTitle: "为何选择 Narenj Link",
    features: [
      {
        title: "专用带宽",
        description: "保证的非共享带宽，确保一致的性能和可靠性。",
      },
      {
        title: "全球覆盖",
        description: "从伊朗连接到 25+ 个国家。直接对等和低延迟路由。",
      },
      {
        title: "SLA 保障",
        description: "99.99% 的正常运行时间 SLA，故障可获赔偿。",
      },
      {
        title: "24/7 NOC 支持",
        description: "专业支持团队全天候监控您的链路。",
      },
    ],

    reachTitle: "全球覆盖",
    reachDescription: "连接全球主要地区",
    regions: [
      { region: "欧洲", countries: "德国、法国、荷兰、英国、波兰、更多" },
      { region: "亚太地区", countries: "新加坡、香港、日本、澳大利亚、印度、更多" },
      { region: "美洲", countries: "美国、加拿大、巴西、墨西哥、更多" },
      { region: "中东", countries: "阿联酋、沙特阿拉伯、卡塔尔、土耳其、更多" },
      { region: "非洲", countries: "南非、尼日利亚、埃及、更多" },
      { region: "独联体地区", countries: "俄罗斯、哈萨克斯坦、白俄罗斯、更多" },
    ],

    typesTitle: "连接类型",
    typesDescription: "选择完美的连接解决方案",
    connectionTypes: [
      {
        name: "直接国际链路",
        description: "到目标地点的专用光纤，具有保证的 SLA。",
        speed: "1Gbps - 25Gbps",
      },
      {
        name: "IP 传输",
        description: "具有全球优异性能的经济型 IP 连接。",
        speed: "100Mbps - 10Gbps",
      },
      {
        name: "托管 MPLS",
        description: "具有 QoS 和高级功能的企业级流量工程。",
        speed: "10Mbps - 25Gbps",
      },
      {
        name: "云骨干网",
        description: "与全球主要云提供商的直接连接。",
        speed: "1Gbps - 25Gbps",
      },
    ],

    useCaseTitle: "适用于",
    useCaseDescription: "企业和关键任务应用",
    useCases: [
      {
        name: "国际电子商务",
        description: "到全球客户群的低延迟连接，实现最佳性能。",
      },
      {
        name: "金融和银行",
        description: "用于时间敏感型交易和数据的专用安全链路。",
      },
      {
        name: "媒体和 CDN",
        description: "向全球用户快速传输内容。",
      },
      {
        name: "软件即服务",
        description: "用于多区域部署的可靠全球基础设施。",
      },
      {
        name: "物联网和传感器网络",
        description: "用一致的低延迟连接边缘设备。",
      },
      {
        name: "远程办公室",
        description: "为分布式团队和分支机构提供快速、可靠的连接。",
      },
    ],

    performanceTitle: "性能指标",
    performanceDescription: "从 Narenj Link 您能得到什么",
    metrics: [
      {
        icon: "⚡",
        title: "超低延迟",
        value: "<20ms",
        description: "到伊朗的大多数主要地区",
      },
      {
        icon: "📈",
        title: "吞吐量",
        value: "高达 25Gbps",
        description: "非超额订阅的专用带宽",
      },
      {
        icon: "🛡️",
        title: "正常运行时间 SLA",
        value: "99.99%",
        description: "故障可获赔偿",
      },
      {
        icon: "🔍",
        title: "抖动控制",
        value: "<5ms",
        description: "稳定、可预测的性能",
      },
    ],

    capabilitiesTitle: "高级功能",
    capabilities: [
      {
        icon: "🔐",
        title: "端到端加密",
        description: "使用可选加密保护您的国际流量",
      },
      {
        icon: "📊",
        title: "流量工程",
        description: "MPLS TE 用于最优路径选择和负载均衡",
      },
      {
        icon: "🌐",
        title: "任播路由",
        description: "将流量路由到最近的边缘位置以获得更好的性能",
      },
      {
        icon: "⚙️",
        title: "BGP 社区",
        description: "使用 BGP 社区和策略的高级路由控制",
      },
      {
        icon: "📉",
        title: "DDoS 防护",
        description: "上游 DDoS 缓解和流量洗流",
      },
      {
        icon: "🎯",
        title: "QoS 和优先级",
        description: "为关键应用保证带宽",
      },
    ],



    slaTitle: "SLA 和支持",
    slaFeatures: [
      "99.99% 月度正常运行时间保证",
      "停机服务积分",
      "24/7 专业 NOC 支持",
      "15 分钟紧急响应",
      "季度性能报告",
      "高级监控和告警",
    ],

    ctaHeading: "准备好走向全球?",
    ctaSubheading: "通过保证的性能连接到世界",

    contactTitle: "有问题?",
    email: "邮箱",
    call: "电话",
    console: "控制台",
  },
  fa: {
    badge: "راه حل های اتصال جهانی",
    title: "به هر مکانی در جهان متصل شوید",
    description:
      "Narenj Link اتصال اختصاصی ایمن بین زیرساخت شما و هر مقصدی در جهان فراهم می کند. زمان فعالیت تضمینی، تاخیر کم و عملکرد بی نقص برای بارهای کاری بحرانی.",
    ctaPrimary: "ورود به کنسول",
    ctaSecondary: "بررسی دسترس پذیری",
    navServices: "خدمات",
    navAbout: "درباره ما",
    navContact: "تماس",
    featureTitle: "چرا Narenj Link را انتخاب کنید",
    features: [
      {
        title: "پهنای باند اختصاصی",
        description: "پهنای باند تضمینی و غیر اشتراکی برای عملکرد و قابلیت اعتماد سازگار.",
      },
      {
        title: "پوشش جهانی",
        description: "از ایران به 25+ کشور متصل شوید. هم تراز مستقیم و مسیرهای تاخیر کم.",
      },
      {
        title: "SLA تضمینی",
        description: "تضمین 99.99% زمان فعالیت با جبران خسارت برای خرابی ها.",
      },
      {
        title: "پشتیبانی NOC 24/7",
        description: "تیم پشتیبانی اختصاصی پیوندهای شما را 24/7 نظارت می کند.",
      },
    ],
    reachTitle: "پوشش جهانی",
    reachDescription: "به مناطق اصلی جهان متصل شوید",
    regions: [
      { region: "اروپا", countries: "آلمان، فرانسه، هلند، انگلیس، لهستان و غیره" },
      { region: "آسیا و اقیانوس آرام", countries: "سنگاپور، هنگ کنگ، ژاپن، استرالیا، هند و غیره" },
      { region: "امریکا", countries: "ایالات متحده، کانادا، برزیل، مکزیک و غیره" },
      { region: "خاورمیانه", countries: "امارات، عربستان سعودی، قطر، ترکیه و غیره" },
      { region: "آفریقا", countries: "آفریقای جنوبی، نیجریه، مصر و غیره" },
      { region: "منطقه CIS", countries: "روسیه، قزاقستان، بلاروس و غیره" },
    ],
    typesTitle: "انواع اتصال",
    typesDescription: "راه حل اتصال مناسب خود را انتخاب کنید",
    connectionTypes: [
      {
        name: "پیوند بین المللی مستقیم",
        description: "فیبر اختصاصی مستقیم به مقصد شما با SLA تضمینی.",
        speed: "1Gbps - 25Gbps",
      },
      {
        name: "IP Transit",
        description: "اتصال IP مقرون به صرفه با عملکرد بی نقص در سراسر جهان.",
        speed: "100Mbps - 10Gbps",
      },
      {
        name: "MPLS مدیریت شده",
        description: "مهندسی ترافیک سطح سازمانی با QoS و ویژگی های پیشرفته.",
        speed: "10Mbps - 25Gbps",
      },
      {
        name: "Cloud Backbone",
        description: "اتصال مستقیم به بزرگترین ارائه دهندگان ابری در جهان.",
        speed: "1Gbps - 25Gbps",
      },
    ],
    useCaseTitle: "عالی برای",
    useCaseDescription: "برنامه های سطح سازمانی و مأموریت انتقادی",
    useCases: [
      {
        name: "تجارت الکترونیکی بین المللی",
        description: "اتصالات تاخیر کم به پایگاه مشتریان جهانی.",
      },
      {
        name: "امور مالی و بانکی",
        description: "پیوندهای اختصاصی محافظ شده برای تراکنش های حساس به زمان.",
      },
      {
        name: "رسانه و CDN",
        description: "تحویل سریع محتوا به کاربران در سراسر قاره ها.",
      },
      {
        name: "نرم افزار به عنوان خدمات",
        description: "زیرساخت جهانی قابل اعتماد برای استقرار چندمنطقه ای.",
      },
      {
        name: "شبکه های IoT و حسگر",
        description: "دستگاه های لبه را با عملکرد سازگار و تاخیر کم متصل کنید.",
      },
      {
        name: "دفاتر دور",
        description: "اتصالات سریع و قابل اعتماد برای تیم های توزیع شده.",
      },
    ],
    performanceTitle: "معیار های عملکرد",
    performanceDescription: "از Narenj Link چه انتظاری می رود",
    metrics: [
      {
        icon: "⚡",
        title: "تاخیر فوق العاده کم",
        value: "<20ms",
        description: "به بیشتر مناطق اصلی از ایران",
      },
      {
        icon: "📈",
        title: "بازده",
        value: "تا 25Gbps",
        description: "پهنای باند اختصاصی غیر فوق الحد",
      },
      {
        icon: "🛡️",
        title: "SLA زمان فعالیت",
        value: "99.99%",
        description: "با جبران خسارت برای خرابی ها",
      },
      {
        icon: "🔍",
        title: "کنترل لرزش",
        value: "<5ms",
        description: "عملکرد پایدار و قابل پیش بینی",
      },
    ],
    capabilitiesTitle: "توانایی های پیشرفته",
    capabilities: [
      {
        icon: "🔐",
        title: "رمزگذاری سراسری",
        description: "ترافیک بین المللی خود را با رمزگذاری اختیاری محافظت کنید",
      },
      {
        icon: "📊",
        title: "مهندسی ترافیک",
        description: "MPLS TE برای انتخاب مسیر بهینه و موازنه بار",
      },
      {
        icon: "🌐",
        title: "مسیریابی Anycast",
        description: "ترافیک را به مکان های لبه نزدیکتر برای عملکرد بهتر هدایت کنید",
      },
      {
        icon: "⚙️",
        title: "انجمن های BGP",
        description: "کنترل مسیریابی پیشرفته با انجمن ها و سیاست های BGP",
      },
      {
        icon: "📉",
        title: "محافظت DDoS",
        description: "کاهش DDoS بالادست و تمیز کردن ترافیک",
      },
      {
        icon: "🎯",
        title: "QoS و اولویت",
        description: "پهنای باند را برای برنامه های بحرانی تضمین کنید",
      },
    ],
    slaTitle: "SLA و پشتیبانی",
    slaFeatures: [
      "تضمین زمان فعالیت 99.99% ماهانه",
      "اعتبارات خدمات برای توقف",
      "پشتیبانی NOC اختصاصی 24/7",
      "پاسخ فوری 15 دقیقه ای",
      "گزارش های عملکرد سه ماهه",
      "نظارت و هشدار پیشرفته",
    ],
    ctaHeading: "آماده رفتن به جهان؟",
    ctaSubheading: "به جهان با عملکرد تضمینی متصل شوید",
    contactTitle: "سوالی دارید؟",
    email: "ایمیل",
    call: "تماس",
    console: "کنسول",
  },
};

export default function NarenjLinkPage() {
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
      dir={language === 'fa' ? 'rtl' : 'ltr'}
      className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
        isLight ? "bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.14),transparent_30%),linear-gradient(135deg,#fffaf4_0%,#fff7ed_100%)] text-slate-900" : "bg-[#060b08] text-slate-50"
      } ${language === 'fa' ? 'font-[--font-vazirmatn]' : ''}`}
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

          {/* Global Reach Section */}
          <section className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                {t.reachTitle}
              </p>
              <h2 className={`mt-2 text-3xl font-semibold sm:text-4xl ${isLight ? "text-slate-900" : "text-white"}`}>
                {t.reachDescription}
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {t.regions.map((region) => (
                <div key={region.region} className={`glass-card rounded-[16px] p-6 ${isLight ? "border-slate-200 bg-slate-50" : "border-white/10 bg-white/5"}`}>
                  <h3 className={`text-lg font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>{region.region}</h3>
                  <p className={`mt-2 text-sm ${isLight ? "text-slate-600" : "text-slate-400"}`}>{region.countries}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Connection Types Section */}
          <section className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                {t.typesTitle}
              </p>
              <h2 className={`mt-2 text-3xl font-semibold sm:text-4xl ${isLight ? "text-slate-900" : "text-white"}`}>
                {t.typesDescription}
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {t.connectionTypes.map((type) => (
                <div key={type.name} className={`glass-card rounded-[20px] p-6 ${isLight ? "border-orange-200/70 bg-white/75 text-slate-900" : "border-white/10 bg-slate-950/40 text-slate-50"}`}>
                  <h3 className={`text-lg font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>{type.name}</h3>
                  <p className={`mt-2 text-sm leading-6 ${isLight ? "text-slate-700" : "text-slate-300"}`}>{type.description}</p>
                  <p className={`mt-3 text-xs font-semibold text-orange-500`}>{type.speed}</p>
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

          {/* Performance Section */}
          <section className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                {t.performanceTitle}
              </p>
              <h2 className={`mt-2 text-3xl font-semibold sm:text-4xl ${isLight ? "text-slate-900" : "text-white"}`}>
                {t.performanceDescription}
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {t.metrics.map((metric) => (
                <div key={metric.title} className={`glass-card rounded-[20px] p-6 ${isLight ? "border-orange-200/70 bg-white/75 text-slate-900" : "border-white/10 bg-slate-950/40 text-slate-50"}`}>
                  <div className="mb-3 text-3xl">{metric.icon}</div>
                  <h3 className={`text-lg font-semibold ${isLight ? "text-slate-900" : "text-white"}`}>{metric.title}</h3>
                  <p className={`mt-2 text-2xl font-bold text-orange-500`}>{metric.value}</p>
                  <p className={`mt-1 text-sm ${isLight ? "text-slate-600" : "text-slate-400"}`}>{metric.description}</p>
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

          {/* SLA Section */}
          <section className={`glass-card rounded-[24px] p-8 sm:p-12 ${isLight ? "border-orange-200/70 bg-white/70 text-slate-900" : "border-white/10 bg-slate-950/40 text-slate-50"}`}>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              {t.slaTitle}
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {t.slaFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
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
