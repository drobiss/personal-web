import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRightIcon,
  CodeBracketIcon,
  CircleStackIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  PaperAirplaneIcon,
  ArrowTopRightOnSquareIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
  SparklesIcon,
  PlayIcon,
  CheckIcon,
  ClipboardDocumentListIcon,
  RocketLaunchIcon,
  CogIcon,
} from "@heroicons/react/24/outline";

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  const heroTexts = [
    "Frontend Developer",
    "Web Designer",
    "React Specialist",
    "UI/UX Enthusiast",
  ];

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentText = heroTexts[currentTextIndex];

    if (typedText.length < currentText.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(
        () => {
          if (typedText.length === 0) {
            setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
          } else {
            setTypedText(currentText.slice(0, typedText.length - 1));
          }
        },
        typedText.length === currentText.length ? 2000 : 50
      );
      return () => clearTimeout(timeout);
    }
  }, [typedText, currentTextIndex, heroTexts]);

  const services = [
    {
      icon: <CodeBracketIcon className="w-8 h-8" />,
      title: "Tvorba moderních webů",
      description:
        "Kompletní vývoj webových stránek s moderními technologiemi jako React, Tailwind CSS a responsivním designem",
      delay: "0ms",
    },
    {
      icon: <PaintBrushIcon className="w-8 h-8" />,
      title: "Redesign stávajících webů",
      description:
        "Modernizace zastaralých webových stránek s důrazem na uživatelský zážitek a současné trendy",
      delay: "100ms",
    },
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
      title: "Responzivní design",
      description:
        "Weby optimalizované pro všechna zařízení - od mobilních telefonů po desktopy",
      delay: "200ms",
    },
    {
      icon: <MagnifyingGlassIcon className="w-8 h-8" />,
      title: "Základní SEO optimalizace",
      description:
        "Optimalizace pro vyhledávače s důrazem na rychlost načítání a správnou strukturu",
      delay: "300ms",
    },
    {
      icon: <CircleStackIcon className="w-8 h-8" />,
      title: "Integrace do WordPressu",
      description:
        "Převod statických designů do WordPress témat s uživatelsky přívětivým administrátorským rozhraním",
      delay: "400ms",
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      title: "Landing pages",
      description:
        "Efektivní prezentační stránky zaměřené na konverze a dosažení obchodních cílů",
      delay: "500ms",
    },
  ];

  const processSteps = [
    {
      icon: <ClipboardDocumentListIcon className="w-8 h-8" />,
      title: "Analýza požadavků",
      description:
        "Detailní analýza vašich potřeb, cílové skupiny a obchodních cílů. Společně definujeme požadavky a očekávání.",
      delay: "0ms",
    },
    {
      icon: <PaintBrushIcon className="w-8 h-8" />,
      title: "Design & Prototyping",
      description:
        "Vytvoření wireframů a designu, který odpovídá vaší značce. Iterace až do dosažení perfektního výsledku.",
      delay: "100ms",
    },
    {
      icon: <CogIcon className="w-8 h-8" />,
      title: "Vývoj & Testování",
      description:
        "Implementace designu pomocí moderních technologií. Důkladné testování na všech zařízeních a prohlížečích.",
      delay: "200ms",
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      title: "Spuštění & Podpora",
      description:
        "Nasazení na produkční server, SEO optimalizace a následná podpora. Váš web bude připraven k použití.",
      delay: "300ms",
    },
  ];

  const testimonials = [
    {
      name: "Jana Nováková",
      company: "Café Moments",
      text: "David vytvořil pro naši kavárnu fantastický web. Design je moderní a zákazníci si pochvalují jednoduchost rezervačního systému.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Tomáš Dvořák",
      company: "TechStart s.r.o.",
      text: "Profesionální přístup a rychlé dodání. Náš nový web vypadá skvěle a funguje bez problémů na všech zařízeních.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Marie Svobodová",
      company: "Fitness Studio",
      text: "Spolupráce s Davidem byla velmi příjemná. Rozumí tomu, co klient potřebuje, a dokáže to převést do krásného designu.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const technologies = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "WordPress",
    "HTML & CSS",
    "Figma",
  ];

  const GithubIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );

  const LinkedinIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  // Parallax animated background elements
  const ParallaxBackground = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Geometric shapes with parallax */}
      <div
        className="absolute w-96 h-96 border border-blue-500/10 rounded-full"
        style={{
          top: "10%",
          left: "5%",
          transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
        }}
      />
      <div
        className="absolute w-64 h-64 border border-purple-500/10 rounded-full"
        style={{
          top: "60%",
          right: "10%",
          transform: `translate(${-scrollY * 0.15}px, ${scrollY * 0.08}px)`,
        }}
      />
      <div
        className="absolute w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl rotate-45"
        style={{
          top: "30%",
          right: "20%",
          transform: `translate(${scrollY * 0.2}px, ${
            -scrollY * 0.1
          }px) rotate(${45 + scrollY * 0.1}deg)`,
        }}
      />
      <div
        className="absolute w-20 h-20 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-lg"
        style={{
          top: "80%",
          left: "15%",
          transform: `translate(${-scrollY * 0.12}px, ${scrollY * 0.06}px)`,
        }}
      />

      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
            transform: `translate(${
              scrollY * (0.05 + Math.random() * 0.1)
            }px, ${scrollY * (0.02 + Math.random() * 0.05)}px)`,
          }}
        >
          <div
            className={`w-1 h-1 bg-blue-400 rounded-full`}
            style={{
              filter: "blur(0.5px)",
            }}
          />
        </div>
      ))}
    </div>
  );

  const InteractiveCursor = () => (
    <div
      className="fixed w-12 h-12 pointer-events-none z-50 transition-all duration-300 ease-out mix-blend-difference"
      style={{
        left: mousePosition.x - 24,
        top: mousePosition.y - 24,
        transform: `scale(${isLoaded ? 1 : 0})`,
      }}
    >
      <div className="w-full h-full border border-white rounded-full opacity-50"></div>
      <div className="absolute inset-4 bg-white rounded-full"></div>
    </div>
  );

  return (
    <div className="bg-black text-white font-light overflow-x-hidden">
      <ParallaxBackground />
      <InteractiveCursor />

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 p-6">
        <div
          className={`backdrop-blur-xl bg-black/90 border border-gray-800 rounded-2xl px-8 py-4 transition-all duration-700 ${
            scrollY > 50
              ? "shadow-2xl border-gray-700 bg-black/95 backdrop-blur-2xl"
              : ""
          }`}
        >
          <div className="flex justify-between items-center">
            <div className="text-xl font-medium tracking-wide text-white relative">
              DAVID BŘEZINA
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 animate-pulse"></div>
            </div>
            <div className="hidden md:flex space-x-8 text-sm tracking-wide">
              {["O MNĚ", "SLUŽBY", "PROCES", "KONTAKT"].map((item) => (
                <a
                  key={item}
                  href={`#${item
                    .toLowerCase()
                    .replace(" ", "")
                    .replace("ě", "e")}`}
                  className="relative text-gray-400 hover:text-white transition-all duration-300 group"
                >
                  {item}
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Dynamic animated background */}
        <div className="absolute inset-0 bg-black">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(59,130,246,0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(147,51,234,0.2) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(59,130,246,0.1) 0%, transparent 60%)
              `,
              animation: "gradient-shift 12s ease-in-out infinite",
              transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
            }}
          />
        </div>

        {/* Enhanced grid pattern with parallax */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            animation: "grid-pulse 6s ease-in-out infinite",
            transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.02}px)`,
          }}
        />

        <div className="flex items-center justify-center w-full max-w-7xl mx-auto px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* Enhanced Profile Photo - bez ikonek */}
            <div
              className={`flex justify-center lg:justify-end transition-all duration-1500 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="relative group">
                {/* Animated rings */}
                <div className="absolute inset-0 rounded-2xl">
                  <div className="absolute inset-0 border border-blue-500/20 rounded-2xl animate-ping"></div>
                  <div
                    className="absolute inset-2 border border-blue-500/10 rounded-2xl animate-ping"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute inset-4 border border-blue-500/5 rounded-2xl animate-ping"
                    style={{ animationDelay: "2s" }}
                  ></div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700 animate-pulse"></div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="David Březina"
                    className="w-80 h-80 object-cover rounded-2xl border border-gray-800 shadow-2xl group-hover:border-blue-500/50 transition-all duration-700 relative z-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl z-20"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Text Content - bez frontend developer textu */}
            <div
              className={`text-center lg:text-left transition-all duration-1500 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="mb-6">
                <h1
                  className="text-5xl md:text-7xl font-light mb-6 tracking-tight"
                  style={{ animationDelay: "500ms" }}
                >
                  <span className="text-white relative">
                    David
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-transparent blur-lg opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  </span>
                  <br />
                  <span className="text-white relative">
                    Březina
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-transparent blur-lg opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  </span>
                </h1>

                <p
                  className="text-xl md:text-2xl text-gray-400 font-light mb-12 leading-relaxed max-w-xl lg:max-w-none"
                  style={{ animationDelay: "700ms" }}
                >
                  Tvořím moderní digitální zážitky, které kombinují krásný
                  design s perfektní funkcionalitou a přinášejí vašemu podnikání
                  <span className="text-blue-400 font-medium"> výsledky</span>.
                </p>
              </div>

              <div
                className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6"
                style={{ animationDelay: "900ms" }}
              >
                <a
                  href="#kontakt"
                  className="group relative flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-medium overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <span className="relative z-10">ZAČNĚME SPOLUPRÁCI</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </a>

                <a
                  href="#sluzby"
                  className="group relative border border-gray-700 text-gray-300 hover:text-white hover:border-blue-500/50 px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium overflow-hidden"
                >
                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">PROZKOUMAT SLUŽBY</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
          <span className="text-xs tracking-widest rotate-90 origin-center text-gray-500">
            SCROLL
          </span>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section
        id="omne"
        ref={aboutRef}
        className="py-24 px-8 bg-gray-900/20 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div
              className={`transition-all duration-1000 ${
                visibleSections.has("omne")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="sticky top-32">
                <h2 className="text-4xl md:text-5xl font-light mb-8 text-white leading-tight">
                  O MNĚ
                </h2>
                <div className="w-16 h-px bg-gradient-to-r from-blue-500 to-transparent mb-10"></div>

                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Jsem David Březina, frontend developer a web designer s
                    vášní pro vytváření moderních digitálních zážitků.
                    Specializuji se na tvorbu responzivních webových stránek,
                    které nejen skvěle vypadají, ale také perfektně fungují.
                  </p>
                  <p>
                    Moje práce kombinuje estetiku s funkcionalitou. Věřím, že
                    dobrý web by měl být rychlý, přístupný a intuitivní pro
                    uživatele. Každý projekt beru jako příležitost vytvořit něco
                    unikátního a efektivního.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`space-y-8 transition-all duration-1000 delay-300 ${
                visibleSections.has("omne")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              {/* Simplified Technologies Section */}
              <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

                <h3 className="text-xl font-medium mb-6 text-white flex items-center relative z-10">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg mr-3 flex items-center justify-center">
                    <CodeBracketIcon className="w-4 h-4 text-blue-400" />
                  </div>
                  TECHNOLOGIE
                </h3>

                <div className="grid grid-cols-2 gap-3 relative z-10">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-gray-800/50 rounded-lg px-4 py-3 hover:bg-gray-800/70 transition-all duration-300 group"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:bg-blue-300 transition-colors duration-300"></div>
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section
        id="sluzby"
        ref={servicesRef}
        className="py-24 px-8 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
              SLUŽBY
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-blue-500 to-transparent mx-auto"></div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Každý projekt je pro mě jedinečný. Nabízím komplexní služby od
              návrhu po implementaci, vždy s důrazem na kvalitu a detaily.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-gray-900/30 border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-gray-900/50 transition-all duration-500 transform hover:scale-105 relative overflow-hidden ${
                  visibleSections.has("sluzby")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  animationDelay: service.delay,
                  transitionDelay: service.delay,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gray-800 rounded-xl mb-6 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/10 group-hover:text-blue-300 transition-all duration-500">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-medium mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Process Section */}
      <section
        id="proces"
        className="py-24 px-8 bg-gray-900/20 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
              PROCES PRÁCE
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-blue-500 to-transparent mx-auto"></div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mt-6">
              Transparentní a strukturovaný přístup k vývoju vašeho webového
              projektu od prvotního návrhu až po finální spuštění.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ${
                  visibleSections.has("proces") || visibleSections.has("sluzby")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  animationDelay: step.delay,
                  transitionDelay: step.delay,
                }}
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium z-10">
                  {index + 1}
                </div>

                <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-gray-900/50 transition-all duration-500 relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gray-800 rounded-xl mb-6 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/10 group-hover:text-blue-300 transition-all duration-500">
                      {step.icon}
                    </div>

                    <h3 className="text-xl font-medium mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connection line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-blue-500/50 to-transparent transform -translate-y-1/2 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24 px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
              CO ŘÍKAJÍ KLIENTI
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-blue-500 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-gray-900/50 transition-all duration-500 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 border border-gray-700"
                    />
                    <div>
                      <div className="font-medium text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-4 h-4 text-yellow-400 mr-1">
                        ⭐
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-300 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section
        id="kontakt"
        className="py-24 px-8 bg-gray-900/20 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
            ZAČNĚME NĚCO VYTVÁŘET
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-blue-500 to-transparent mx-auto mb-8"></div>

          <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
            Máte nápad na projekt? Rád si s vámi promluvím o tom, jak můžeme
            společně vytvořit něco výjimečného.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <a
              href="mailto:david@example.com"
              className="group flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              <EnvelopeIcon className="w-5 h-5" />
              <span>NAPIŠTE MI</span>
            </a>

            <a
              href="tel:+420123456789"
              className="group border border-gray-700 text-gray-300 hover:text-white hover:border-blue-500/50 px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium flex items-center space-x-3"
            >
              <span>+420 123 456 789</span>
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="border-t border-gray-800 py-12 px-8 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <div className="text-xl font-medium text-white mb-2">
                DAVID BŘEZINA
              </div>
              <p className="text-gray-400 text-sm">
                Frontend Developer & Web Designer
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 David Březina. Všechna práva vyhrazena.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes gradient-shift {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes grid-pulse {
          0%,
          100% {
            opacity: 0.03;
          }
          50% {
            opacity: 0.06;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }

        ::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
      `}</style>
    </div>
  );
};

export default App;
