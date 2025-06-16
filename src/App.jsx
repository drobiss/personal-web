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
} from "@heroicons/react/24/outline";

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const services = [
    {
      icon: <CodeBracketIcon className="w-8 h-8" />,
      title: "Tvorba moderních webů",
      description:
        "Kompletní vývoj webových stránek s moderními technologiemi jako React, Tailwind CSS a responsivním designem",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: <PaintBrushIcon className="w-8 h-8" />,
      title: "Redesign stávajících webů",
      description:
        "Modernizace zastaralých webových stránek s důrazem na uživatelský zážitek a současné trendy",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
      title: "Responzivní design",
      description:
        "Weby optimalizované pro všechna zařízení - od mobilních telefonů po desktopy",
      gradient: "from-pink-500 to-red-600",
    },
    {
      icon: <MagnifyingGlassIcon className="w-8 h-8" />,
      title: "Základní SEO optimalizace",
      description:
        "Optimalizace pro vyhledávače s důrazem na rychlost načítání a správnou strukturu",
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: <CircleStackIcon className="w-8 h-8" />,
      title: "Integrace do WordPressu",
      description:
        "Převod statických designů do WordPress témat s uživatelsky přívětivým administrátorským rozhraním",
      gradient: "from-teal-500 to-cyan-600",
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      title: "Landing pages",
      description:
        "Efektivní prezentační stránky zaměřené na konverze a dosažení obchodních cílů",
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

  const portfolioItems = [
    {
      title: "Café Moments",
      description:
        "Moderní web pro fiktivní kavárnu s online rezervačním systémem a galerií",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop",
      link: "#",
      color: "from-amber-400 to-orange-600",
    },
    {
      title: "FitApp Landing",
      description:
        "Landing page pro mobilní fitness aplikaci s animacemi a call-to-action",
      technologies: ["HTML", "CSS", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      link: "#",
      color: "from-green-400 to-emerald-600",
    },
    {
      title: "TechCorp Redesign",
      description:
        "Redesign corporate webu s moderním designem a lepší uživatelskou navigací",
      technologies: ["React", "TypeScript", "Styled Components"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      link: "#",
      color: "from-blue-400 to-indigo-600",
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

  // GitHub a LinkedIn ikony
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

  return (
    <div className="bg-black text-white font-light overflow-x-hidden">
      {/* Enhanced cursor with glow effect */}
      <div
        className="fixed w-6 h-6 pointer-events-none z-50 transition-transform duration-150"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isLoaded ? 1 : 0})`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-80 blur-sm"></div>
        <div className="absolute inset-2 bg-white rounded-full mix-blend-difference"></div>
      </div>

      {/* Enhanced Navigation with glassmorphism */}
      <nav className="fixed top-0 left-0 right-0 z-40 p-8">
        <div className="backdrop-blur-lg bg-black/20 border border-white/10 rounded-2xl px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold tracking-wider bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              DAVID BŘEZINA
            </div>
            <div className="hidden md:flex space-x-12 text-sm tracking-widest">
              <a
                href="#about"
                className="hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:bg-clip-text transition-all duration-300"
              >
                O MNĚ
              </a>
              <a
                href="#services"
                className="hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:bg-clip-text transition-all duration-300"
              >
                SLUŽBY
              </a>
              <a
                href="#portfolio"
                className="hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:bg-clip-text transition-all duration-300"
              >
                PORTFOLIO
              </a>
              <a
                href="#contact"
                className="hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:bg-clip-text transition-all duration-300"
              >
                KONTAKT
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section with animated background */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900"></div>

        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
            style={{
              transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
              left: "10%",
              top: "20%",
            }}
          ></div>
          <div
            className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
            style={{
              transform: `translate(${-scrollY * 0.1}px, ${scrollY * 0.08}px)`,
              right: "10%",
              bottom: "20%",
            }}
          ></div>
        </div>

        {/* Enhanced grid with glow */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="text-center z-10 max-w-6xl px-8">
          <div
            className={`transition-all duration-2000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-8">
                <SparklesIcon className="w-4 h-4 text-blue-400" />
                <span className="text-sm tracking-wider text-blue-300">
                  Frontend Developer & Web Designer
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-thin mb-4 tracking-wider">
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  David Březina
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-light">
                Tvořím moderní a rychlé weby, které zaujmou a fungují
              </p>
            </div>

            <h2 className="text-5xl md:text-8xl font-thin mb-8 tracking-wider leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Moderní weby
              </span>
              <br />
              <span className="font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                které přinášejí zákazníky
              </span>
            </h2>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a
                href="#contact"
                className="group relative overflow-hidden flex items-center space-x-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <span className="font-medium relative z-10">
                  KONTAKTUJTE MĚ
                </span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#services"
                className="group relative border border-white/30 backdrop-blur-sm px-8 py-4 rounded-lg hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-500">
                  PROHLÉDNOUT SLUŽBY
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-blue-400 to-purple-500"></div>
          <span className="text-xs tracking-widest rotate-90 origin-center text-blue-300">
            SCROLL
          </span>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section
        id="about"
        className="py-32 px-8 bg-gradient-to-b from-gray-950 to-black relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-5xl md:text-7xl font-thin mb-8">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  O MNĚ
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-12"></div>
              <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
                <p className="relative">
                  <span className="absolute -left-4 top-0 text-blue-400 text-2xl">
                    "
                  </span>
                  Jsem David Březina, frontend developer a web designer s vášní
                  pro vytváření moderních digitálních zážitků. Specializuji se
                  na tvorbu responzivních webových stránek, které nejen skvěle
                  vypadají, ale také perfektně fungují.
                </p>
                <p>
                  Moje práce kombinuje estetiku s funkcionalitou. Věřím, že
                  dobrý web by měl být rychlý, přístupný a intuitivní pro
                  uživatele. Každý projekt beru jako příležitost vytvořit něco
                  unikátního a efektivního.
                </p>
                <p>
                  Baví mě sledovat nejnovější trendy ve webovém designu a
                  implementovat je do praktických řešení, která pomáhají firmám
                  růst a dosahovat svých cílů online.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-light mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  TECHNOLOGIE
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "React",
                    "Tailwind CSS",
                    "JavaScript",
                    "WordPress",
                    "HTML & CSS",
                    "Figma",
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 group"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full group-hover:scale-150 transition-transform"></div>
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-light mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  CERTIFIKACE
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Frontend Development",
                      org: "freeCodeCamp",
                      year: "2024",
                    },
                    {
                      title: "React Developer",
                      org: "Meta Professional Certificate",
                      year: "2024",
                    },
                    {
                      title: "UX/UI Design",
                      org: "Google UX Design Certificate",
                      year: "2023",
                    },
                  ].map((cert, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/5 hover:border-white/20 transition-all duration-300"
                    >
                      <div>
                        <div className="font-medium text-white">
                          {cert.title}
                        </div>
                        <div className="text-gray-400 text-sm">{cert.org}</div>
                      </div>
                      <div className="text-blue-400 font-mono">{cert.year}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-32 px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-950"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-7xl font-thin mb-8">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                CO NABÍZÍM
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Kompletní služby pro váš online úspěch. Od návrhu až po
              implementaci a optimalizaci.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>

                <h3 className="text-xl font-medium mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Section */}
      <section
        id="portfolio"
        className="py-32 px-8 bg-gradient-to-b from-gray-950 to-black relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-7xl font-thin mb-8">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                UKÁZKY PRÁCE
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Výběr projektů, které demonstrují moje schopnosti a přístup k
              webovému designu a vývoji.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden rounded-2xl hover:transform hover:scale-105"
              >
                <div className="aspect-video bg-gray-800 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 text-gray-300 text-sm rounded-full hover:border-white/30 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={item.link}
                    className="inline-flex items-center space-x-2 text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 group-hover:translate-x-1"
                  >
                    <span>Zobrazit projekt</span>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-32 px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-950"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-7xl font-thin mb-8">
              <span className="bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                REFERENCE
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Co říkají klienti o mé práci a spolupráci.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-transparent group-hover:border-blue-400 transition-all duration-300"
                  />
                  <div>
                    <div className="font-medium text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section
        id="contact"
        className="py-32 px-8 bg-gradient-to-b from-gray-950 via-black to-gray-900 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-thin mb-8">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                POJĎME SPOLUPRACOVAT
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Máte projekt na mysli? Napište mi a promluvme si o tom, jak můžu
              pomoci vašemu podnikání růst online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-20">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-light mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  KONTAKTNÍ ÚDAJE
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                      <EnvelopeIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Email</div>
                      <div className="text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        david.web@email.cz
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                      <DevicePhoneMobileIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Telefon</div>
                      <div className="text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        +420 123 456 789
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg">
                      <GlobeAltIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Lokalita</div>
                      <div className="text-white group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-teal-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        Praha, Česká republika
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-light mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  SOCIÁLNÍ SÍTĚ
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="group p-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <GithubIcon className="w-6 h-6 text-gray-300 group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="group p-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <LinkedinIcon className="w-6 h-6 text-gray-300 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-light mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                NAPIŠTE MI
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="block text-gray-300 mb-2">Jméno</div>
                  <div className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300">
                    Kontaktní formulář je k dispozici po kliknutí na email výše
                  </div>
                </div>
                <div>
                  <div className="block text-gray-300 mb-2">Email</div>
                  <div className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg text-white">
                    david.web@email.cz
                  </div>
                </div>
                <div>
                  <div className="block text-gray-300 mb-2">
                    Preferovaný způsob kontaktu
                  </div>
                  <div className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg text-white">
                    Email nebo telefon pro rychlou odpověď
                  </div>
                </div>
                <div className="group relative w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer">
                  <span className="font-medium relative z-10">
                    NAPSAT EMAIL
                  </span>
                  <PaperAirplaneIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-16 px-8 border-t border-white/10 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold tracking-wider mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              DAVID BŘEZINA
            </div>
            <p className="text-gray-400 mb-8">
              Frontend Developer & Web Designer
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                O mně
              </a>
              <a
                href="#services"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Služby
              </a>
              <a
                href="#portfolio"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Kontakt
              </a>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
            <p className="text-gray-500 text-sm">
              © 2024 David Březina. Všechna práva vyhrazena.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
