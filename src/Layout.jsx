import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";
import {
  BookOpen,
  History,
  Code2,
  GitCompare,
  Gamepad2,
  Menu,
  X,
  GraduationCap } from
"lucide-react";

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
  { name: "Home", page: "Home", icon: BookOpen },
  { name: "História", page: "Historia", icon: History },
  { name: "Conceitos", page: "Conceitos", icon: Code2 },
  { name: "Comparativo", page: "Comparativo", icon: GitCompare },
  { name: "Mini-Jogo", page: "MiniJogo", icon: Gamepad2 }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <style>{`
        :root {
          --color-primary: #1a365d;
          --color-primary-light: #2c5282;
          --color-accent: #d69e2e;
          --color-accent-light: #ecc94b;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .code-block {
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
        }
        
        .syntax-keyword {
          color: #805ad5;
          font-weight: 600;
        }
        
        .syntax-type {
          color: #2b6cb0;
        }
        
        .syntax-number {
          color: #d69e2e;
        }
        
        .syntax-operator {
          color: #e53e3e;
        }
        
        .syntax-comment {
          color: #718096;
          font-style: italic;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ?
        "glass-effect shadow-lg border-b border-white/20" :
        "bg-transparent"}`
        }>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to={createPageUrl("Home")}
              className="flex items-center gap-3 group">

              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-[#1a365d] to-[#2c5282] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <GraduationCap className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-bold text-[#1a365d] tracking-tight">
                  UNESC ALGOL
                </h1>
                <p className="text-xs text-slate-500 -mt-0.5">
                  Plataforma Educacional
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPageName === item.page;
                return (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive ?
                    "bg-[#1a365d] text-white shadow-lg" :
                    "text-slate-600 hover:bg-slate-100 hover:text-[#1a365d]"}`
                    }>

                    <Icon className="w-4 h-4" />
                    {item.name}
                  </Link>);

              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">

              {mobileMenuOpen ?
              <X className="w-6 h-6" /> :

              <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`
          }>

          <div className="glass-effect border-t border-white/20 px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPageName === item.page;
              return (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive ?
                  "bg-[#1a365d] text-white" :
                  "text-slate-600 hover:bg-slate-100"}`
                  }>

                  <Icon className="w-5 h-5" />
                  {item.name}
                </Link>);

            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 lg:pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-[#1a365d] text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[#d69e2e]" />
                </div>
                <span className="text-lg font-bold">UNESC ALGOL</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Plataforma educacional interativa sobre a linguagem ALGOL, 
                desenvolvida para o curso de Sistemas de Informação.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-[#d69e2e]">Navegação</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {navItems.map((item) =>
                <li key={item.page}>
                    <Link
                    to={createPageUrl(item.page)}
                    className="hover:text-white transition-colors">

                      {item.name}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-[#d69e2e]">Referências</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>ALGOL 60 Report (1960)</li>
                <li>Revised Report on ALGOL 68</li>
                <li>Backus-Naur Form (BNF)</li>
                <li>ACM Digital Library</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-slate-400">
            <p className="">© 2025 UNESC - Centro Universitário do Espírito Santo - Câmpus Colatina</p>
            <p className="mt-1">Projeto acadêmico para Sistemas de Informação</p>
          </div>
        </div>
      </footer>
    </div>);

}