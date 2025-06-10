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
} from "@heroicons/react/24/outline";

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    {
      icon: <CodeBracketIcon className="w-8 h-8" />,
      title: "Tvorba moderních webů",
      description:
        "Kompletní vývoj webových stránek s moderními technologiemi jako React, Tailwind CSS a responsivním designem",
    },
    {
      icon: <PaintBrushIcon className="w-8 h-8" />,
      title: "Redesign stávajících webů",
      description:
        "Modernizace zastaralých webových stránek s důrazem na uživatelský zážitek a současné trendy",
    },
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
      title: "Responzivní design",
      description:
        "Weby optimalizované pro všechna zařízení - od mobilních telefonů po desktopy",
    },
    {
      icon: <MagnifyingGlassIcon className="w-8 h-8" />,
      title: "Základní SEO optimalizace",
      description:
        "Optimalizace pro vyhledávače s důrazem na rychlost načítání a správnou strukturu",
    },
    {
      icon: <CircleStackIcon className="w-8 h-8" />,
      title: "Integrace do WordPressu",
      description:
        "Převod statických designů do WordPress témat s uživatelsky přívětivým administrátorským rozhraním",
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      title: "Landing pages",
      description:
        "Efektivní prezentační stránky zaměřené na konverze a dosažení obchodních cílů",
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
    },
    {
      title: "FitApp Landing",
      description:
        "Landing page pro mobilní fitness aplikaci s animacemi a call-to-action",
      technologies: ["HTML", "CSS", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      link: "#",
    },
    {
      title: "TechCorp Redesign",
      description:
        "Redesign corporate webu s moderním designem a lepší uživatelskou navigací",
      technologies: ["React", "TypeScript", "Styled Components"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      link: "#",
    },
  ];

  const testimonials = [
    {
      name: "Jana Nováková",
      company: "Café Moments",
      text: "Alex vytvořil pro naši kavárnu fantastický web. Design je moderní a zákazníci si pochvalují jednoduchost rezervačního systému.",
      rating: 5,
    },
    {
      name: "Tomáš Dvořák",
      company: "TechStart s.r.o.",
      text: "Profesionální přístup a rychlé dodání. Náš nový web vypadá skvěle a funguje bez problémů na všech zařízeních.",
      rating: 5,
    },
    {
      name: "Marie Svobodová",
      company: "Fitness Studio",
      text: "Spolupráce s Alexem byla velmi příjemná. Rozumí tomu, co klient potřebuje, a dokáže to převést do krásného designu.",
      rating: 5,
    },
  ];

  // GitHub a LinkedIn ikony vytvoříme jako SVG komponenty
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
      {/* Custom cursor */}
      <div
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${isLoaded ? 1 : 0})`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 p-8">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wider">ALEX</div>
          <div className="hidden md:flex space-x-12 text-sm tracking-widest">
            <a href="#about" className="hover:text-gray-400 transition-colors">
              O MNĚ
            </a>
            <a
              href="#services"
              className="hover:text-gray-400 transition-colors"
            >
              SLUŽBY
            </a>
            <a
              href="#portfolio"
              className="hover:text-gray-400 transition-colors"
            >
              PORTFOLIO
            </a>
            <a
              href="#contact"
              className="hover:text-gray-400 transition-colors"
            >
              KONTAKT
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
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
              <h1 className="text-4xl md:text-6xl font-thin mb-4 tracking-wider">
                Alex Novák — Frontend Developer & Web Designer
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-light">
                Tvořím moderní a rychlé weby, které zaujmou a fungují
              </p>
            </div>

            <h2 className="text-5xl md:text-8xl font-thin mb-8 tracking-wider">
              Moderní weby
              <br />
              <span className="font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                které přinášejí zákazníky
              </span>
            </h2>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a
                href="#contact"
                className="group flex items-center space-x-4 bg-white text-black px-8 py-4 hover:bg-gray-200 transition-colors"
              >
                <span className="font-medium">KONTAKTUJTE MĚ</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="border border-white px-8 py-4 hover:bg-white hover:text-black transition-colors"
              >
                PROHLÉDNOUT SLUŽBY
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-white"></div>
          <span className="text-xs tracking-widest rotate-90 origin-center">
            SCROLL
          </span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-5xl md:text-7xl font-thin mb-8">O MNĚ</h2>
              <div className="w-24 h-px bg-white mb-12"></div>
              <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
                <p>
                  Jsem Alex Novák, frontend developer a web designer s vášní pro
                  vytváření moderních digitálních zážitků. Specializuji se na
                  tvorbu responzivních webových stránek, které nejen skvěle
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
              <div>
                <h3 className="text-2xl font-light mb-6">TECHNOLOGIE</h3>
                <div className="grid grid-cols-2 gap-4 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>React</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Tailwind CSS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>JavaScript</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>WordPress</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>HTML & CSS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Figma</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-6">CERTIFIKACE</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium">Frontend Development</div>
                      <div className="text-gray-400">freeCodeCamp</div>
                    </div>
                    <div className="text-gray-400">2024</div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium">React Developer</div>
                      <div className="text-gray-400">
                        Meta Professional Certificate
                      </div>
                    </div>
                    <div className="text-gray-400">2024</div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium">UX/UI Design</div>
                      <div className="text-gray-400">
                        Google UX Design Certificate
                      </div>
                    </div>
                    <div className="text-gray-400">2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-thin mb-8">CO NABÍZÍM</h2>
            <div className="w-24 h-px bg-white mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl">
              Kompletní služby pro váš online úspěch. Od návrhu až po
              implementaci a optimalizaci.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group border border-gray-800 p-8 hover:border-white hover:bg-gray-950 transition-all duration-500"
              >
                <div className="text-gray-400 group-hover:text-white transition-colors duration-500 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium mb-4 group-hover:text-gray-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-thin mb-8">
              UKÁZKY PRÁCE
            </h2>
            <div className="w-24 h-px bg-white mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl">
              Výběr projektů, které demonstrují moje schopnosti a přístup k
              webovému designu a vývoji.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group bg-gray-900 border border-gray-800 hover:border-white transition-all duration-500 overflow-hidden"
              >
                <div className="aspect-video bg-gray-800 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3 group-hover:text-gray-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={item.link}
                    className="inline-flex items-center space-x-2 text-white hover:text-gray-400 transition-colors"
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

      {/* Testimonials Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-thin mb-8">REFERENCE</h2>
            <div className="w-24 h-px bg-white mb-8"></div>
            <p className="text-xl text-gray-400 max-w-3xl">
              Co říkají moji klienti o spolupráci a výsledcích projektů.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="border border-gray-800 p-8 bg-gray-950 hover:border-white transition-all duration-500"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <div
                      key={starIndex}
                      className="w-5 h-5 bg-white"
                      style={{
                        clipPath:
                          "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                      }}
                    ></div>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-thin mb-12">
            MÁTE ZÁJEM O SPOLUPRÁCI?
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-16"></div>

          <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed">
            Pojďme společně vytvořit něco výjimečného. Ať už potřebujete nový
            web nebo modernizaci stávajícího, rád vám pomohu dosáhnout vašich
            cílů.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="text-left">
              <h3 className="text-2xl font-light mb-6">Kontaktní informace</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <EnvelopeIcon className="w-5 h-5 text-gray-400" />
                  <a
                    href="mailto:alex.novak@example.com"
                    className="text-lg hover:text-gray-400 transition-colors"
                  >
                    alex.novak@example.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <LinkedinIcon className="w-5 h-5 text-gray-400" />
                  <a
                    href="https://linkedin.com/in/alexnovak"
                    className="text-lg hover:text-gray-400 transition-colors"
                  >
                    linkedin.com/in/alexnovak
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <GithubIcon className="w-5 h-5 text-gray-400" />
                  <a
                    href="https://github.com/alexnovak"
                    className="text-lg hover:text-gray-400 transition-colors"
                  >
                    github.com/alexnovak
                  </a>
                </div>
              </div>
            </div>

            <div className="text-left">
              <h3 className="text-2xl font-light mb-6">Rychlý kontakt</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Vaše jméno"
                  className="w-full bg-black border border-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Váš email"
                  className="w-full bg-black border border-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors"
                />
                <textarea
                  placeholder="Vaše zpráva"
                  rows="4"
                  className="w-full bg-black border border-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors resize-none"
                ></textarea>
                <button className="w-full bg-white text-black py-3 hover:bg-gray-200 transition-colors font-medium">
                  ODESLAT ZPRÁVU
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 p-8 text-center">
            <h3 className="text-2xl font-light mb-4">Ozvěte se!</h3>
            <p className="text-gray-400 mb-6">
              Máte projekt na mysli? Pojďme si promluvit o tom, jak vám mohu
              pomoci.
            </p>
            <a
              href="mailto:alex.novak@example.com"
              className="group inline-flex items-center space-x-4 bg-white text-black px-8 py-4 hover:bg-gray-200 transition-colors"
            >
              <PaperAirplaneIcon className="w-5 h-5" />
              <span className="font-medium">NAPIŠTE MI</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold tracking-wider mb-4 md:mb-0">
            ALEX NOVÁK
          </div>
          <div className="flex space-x-8 text-sm text-gray-400">
            <a
              href="https://linkedin.com/in/alexnovak"
              className="hover:text-white transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href="https://github.com/alexnovak"
              className="hover:text-white transition-colors"
            >
              GITHUB
            </a>
            <a
              href="mailto:alex.novak@example.com"
              className="hover:text-white transition-colors"
            >
              EMAIL
            </a>
          </div>
        </div>
        <div className="text-center text-gray-600 text-sm mt-8">
          © 2025 Alex Novák. Všechna práva vyhrazena.
        </div>
      </footer>
    </div>
  );
};

export default App;
