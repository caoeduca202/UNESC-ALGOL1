import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  History, 
  Code2, 
  GitCompare, 
  Gamepad2,
  ArrowRight,
  Sparkles,
  Terminal,
  Layers,
  Cpu
} from "lucide-react";
import FeatureCard from "@/components/algol/FeatureCard";

export default function Home() {
  const features = [
    {
      icon: History,
      title: "Origem Histórica",
      description: "Descubra como o ALGOL surgiu na década de 1950 e revolucionou a forma como algoritmos são comunicados.",
      color: "blue"
    },
    {
      icon: Terminal,
      title: "Forma Backus-Naur",
      description: "Aprenda sobre a BNF, a notação formal inventada para descrever a sintaxe do ALGOL.",
      color: "purple"
    },
    {
      icon: Layers,
      title: "Estrutura de Blocos",
      description: "Entenda o conceito de escopo lexical e como BEGIN...END mudou a programação.",
      color: "emerald"
    },
    {
      icon: Cpu,
      title: "Influência no Hardware",
      description: "Veja como ALGOL influenciou até o design de arquiteturas de computadores.",
      color: "amber"
    },
    {
      icon: GitCompare,
      title: "ALGOL 60 vs 68",
      description: "Compare as duas versões principais e suas filosofias de design distintas.",
      color: "rose"
    },
    {
      icon: Gamepad2,
      title: "Aprenda Jogando",
      description: "Teste seus conhecimentos com nosso mini-jogo interativo de sintaxe.",
      color: "indigo"
    }
  ];

  const sections = [
    { name: "História", page: "Historia", icon: History, description: "A origem e o legado do ALGOL" },
    { name: "Conceitos", page: "Conceitos", icon: Code2, description: "Sintaxe e estruturas fundamentais" },
    { name: "Comparativo", page: "Comparativo", icon: GitCompare, description: "ALGOL 60 vs ALGOL 68" },
    { name: "Mini-Jogo", page: "MiniJogo", icon: Gamepad2, description: "Desafio interativo de sintaxe" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a365d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 lg:left-20 w-16 h-16 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br from-[#d69e2e] to-[#ecc94b] opacity-20 blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 lg:right-20 w-20 h-20 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-[#1a365d] to-[#2c5282] opacity-20 blur-xl"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a365d]/5 border border-[#1a365d]/10 mb-8">
              <Sparkles className="w-4 h-4 text-[#d69e2e]" />
              <span className="text-sm font-medium text-[#1a365d]">
                Plataforma Educacional Interativa
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#1a365d] mb-6 tracking-tight">
              A Linguagem que
              <span className="block mt-2 bg-gradient-to-r from-[#1a365d] via-[#2c5282] to-[#d69e2e] bg-clip-text text-transparent">
                Definiu a Programação
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Explore a história, os conceitos e o legado duradouro do <strong>ALGOL</strong>, 
              a linguagem algorítmica que estabeleceu os fundamentos da programação estruturada 
              e influenciou todas as linguagens modernas.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={createPageUrl("Historia")}
                className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-[#1a365d] text-white font-semibold shadow-lg shadow-[#1a365d]/25 hover:shadow-xl hover:shadow-[#1a365d]/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <BookOpen className="w-5 h-5" />
                Começar a Aprender
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={createPageUrl("MiniJogo")}
                className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#1a365d] font-semibold border-2 border-[#1a365d]/10 hover:border-[#1a365d]/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Gamepad2 className="w-5 h-5" />
                Jogar Mini-Jogo
              </Link>
            </div>
          </motion.div>

          {/* Code Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 lg:mt-20"
          >
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#1a365d] to-[#d69e2e] rounded-3xl opacity-10 blur-2xl" />
              <div className="relative bg-slate-900 rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-sm text-slate-400">factorial.algol</span>
                </div>
                <pre className="code-block p-6 text-left text-sm overflow-x-auto">
                  <code className="text-slate-100">
                    <span className="syntax-keyword">real procedure</span> <span className="text-white">factorial</span>(n);{"\n"}
                    <span className="syntax-keyword">value</span> n;{"\n"}
                    <span className="syntax-type">integer</span> n;{"\n"}
                    <span className="syntax-keyword">if</span> n = <span className="syntax-number">1</span> <span className="syntax-keyword">then</span> factorial <span className="syntax-operator">:=</span> <span className="syntax-number">1</span>{"\n"}
                    <span className="syntax-keyword">else</span> factorial <span className="syntax-operator">:=</span> n * factorial(n-<span className="syntax-number">1</span>);
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a365d] mb-4">
              O que você vai aprender
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Uma jornada completa pela linguagem que estabeleceu as bases da computação moderna.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-20 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a365d] mb-4">
              Explore o Conteúdo
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Navegue pelas seções para uma experiência de aprendizado completa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={createPageUrl(section.page)}
                    className="group block bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1a365d] to-[#2c5282] flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a365d] mb-2 group-hover:text-[#2c5282] transition-colors">
                      {section.name}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      {section.description}
                    </p>
                    <div className="flex items-center text-[#d69e2e] font-medium text-sm group-hover:gap-2 transition-all">
                      Acessar
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-8 -left-4 text-8xl text-[#1a365d]/10 font-serif">"</div>
            <p className="text-2xl lg:text-3xl text-[#1a365d] font-light leading-relaxed text-center italic">
              ALGOL tornou-se a única maneira formal aceitável de comunicar algoritmos 
              na literatura em computação.
            </p>
            <footer className="mt-8 text-center">
              <div className="inline-flex items-center gap-4">
                <div className="w-12 h-px bg-[#d69e2e]" />
                <span className="text-slate-600 font-medium">
                  Sobre o legado do ALGOL 60
                </span>
                <div className="w-12 h-px bg-[#d69e2e]" />
              </div>
            </footer>
          </motion.blockquote>
        </div>
      </section>
    </div>
  );
}