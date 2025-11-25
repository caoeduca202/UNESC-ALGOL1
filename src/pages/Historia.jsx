import React from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Users, 
  FileText, 
  Cpu, 
  Globe,
  BookOpen,
  Lightbulb,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import SectionCard from "@/components/algol/SectionCard";
import TimelineItem from "@/components/algol/TimelineItem";
import CodeBlock from "@/components/algol/CodeBlock";

export default function Historia() {
  const timelineEvents = [
    {
      year: "1958",
      title: "ALGOL 58 - O Início",
      description: "Primeiro esforço internacional para criar uma linguagem algorítmica universal, superando as limitações das linguagens proprietárias da época."
    },
    {
      year: "1960",
      title: "ALGOL 60 - O Padrão Seminal",
      description: "Publicação do relatório ALGOL 60, estabelecendo o modelo conceitual para a programação estruturada e introduzindo a Forma Backus-Naur (BNF)."
    },
    {
      year: "1962",
      title: "Revisão em Roma",
      description: "A Terceira Reunião em Roma resolve as ambiguidades do relatório inicial, focando na correção e clareza da especificação."
    },
    {
      year: "1968",
      title: "ALGOL 68 - A Evolução Radical",
      description: "Publicação do ALGOL 68, com filosofia de design baseada no princípio da ortogonalidade, buscando maior rigor e expressividade."
    },
    {
      year: "1970s+",
      title: "Legado Duradouro",
      description: "Influência direta no design de Pascal, Simula, C, Ada e praticamente todas as linguagens imperativas modernas."
    }
  ];

  const bnfExample = `<program> ::= <block>
<block> ::= BEGIN <declaration list>; <statement list> END
<declaration list> ::= <declaration> | <declaration list>; <declaration>
<statement> ::= <unconditional statement> | <conditional statement>
<conditional statement> ::= IF <boolean expression> THEN <statement>
                          | IF <boolean expression> THEN <statement> ELSE <statement>`;

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a365d]/5 border border-[#1a365d]/10 mb-6">
            <Calendar className="w-4 h-4 text-[#d69e2e]" />
            <span className="text-sm font-medium text-[#1a365d]">História do ALGOL</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-[#1a365d] mb-6">
            A Busca por uma Linguagem
            <span className="block text-[#2c5282]">Algorítmica Universal</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Descubra como um esforço internacional nas décadas de 1950 e 1960 
            criou a base filosófica e técnica para toda a programação moderna.
          </p>
        </motion.div>

        {/* Context Section */}
        <SectionCard
          icon={Globe}
          title="Contexto Histórico"
          subtitle="O nascimento de uma revolução na ciência da computação"
          delay={0.1}
        >
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed mb-4">
              O surgimento da família de linguagens <strong>ALGOL</strong> (Algorithmic Language) 
              nas décadas de 1950 e 1960 marcou um <span className="text-[#1a365d] font-semibold">divisor de águas</span> na 
              ciência da computação. O projeto, que evoluiu de ALGOL 58 para o padrão seminal ALGOL 60, 
              nasceu de um esforço internacional para criar uma linguagem que fosse verdadeiramente 
              <strong> agnóstica à máquina</strong>, superando as limitações impostas pelas linguagens 
              proprietárias da época, como o FORTRAN.
            </p>
            <p className="text-slate-600 leading-relaxed">
              O objetivo primário não era a adoção comercial imediata, mas sim estabelecer um 
              <strong> padrão universal</strong> para a descrição precisa e clara de algoritmos. 
              Embora nunca tenha alcançado o uso disseminado que COBOL ou FORTRAN desfrutaram, 
              seu sucesso residiu em se tornar <em>"a única maneira formal aceitável de comunicar 
              algoritmos na literatura em computação"</em>.
            </p>
          </div>
        </SectionCard>

        {/* Timeline */}
        <div className="my-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-3xl font-bold text-[#1a365d] text-center mb-12"
          >
            Linha do Tempo do ALGOL
          </motion.h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1a365d] via-[#2c5282] to-[#d69e2e] hidden lg:block" />
            
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <TimelineItem
                  key={index}
                  {...event}
                  isLeft={index % 2 === 0}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* BNF Section */}
        <SectionCard
          icon={FileText}
          title="A Forma Backus-Naur (BNF)"
          subtitle="A formalização que revolucionou a ciência da computação"
          delay={0.2}
        >
          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              O impacto mais profundo e duradouro do esforço de design do ALGOL 60 não se encontra 
              apenas em suas características de programação, mas na metodologia utilizada para sua 
              definição. <strong>ALGOL 60 foi a primeira linguagem de programação cuja sintaxe foi 
              descrita formalmente</strong>.
            </p>
            
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h4 className="font-semibold text-[#1a365d] mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-[#d69e2e]" />
                O que é BNF?
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                A Forma Backus-Naur (BNF) é uma metalinguagem usada para descrever a sintaxe de 
                linguagens de programação. Ela utiliza símbolos como <code className="bg-white px-1.5 py-0.5 rounded text-[#1a365d]">::=</code> (definição), 
                <code className="bg-white px-1.5 py-0.5 rounded text-[#1a365d] mx-1">|</code> (alternativa) e 
                <code className="bg-white px-1.5 py-0.5 rounded text-[#1a365d] mx-1">&lt; &gt;</code> (não-terminais) 
                para especificar regras gramaticais de forma precisa e não-ambígua.
              </p>
            </div>

            <CodeBlock code={bnfExample} title="Exemplo de BNF para ALGOL 60" />

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {[
                { title: "Linguagens Formais", desc: "Base teórica para especificação de linguagens" },
                { title: "Teoria de Parsing", desc: "Fundamentos para análise sintática" },
                { title: "Design de Compiladores", desc: "Metodologia sistemática de implementação" }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                  <h5 className="font-semibold text-[#1a365d] mb-1">{item.title}</h5>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        {/* Hardware Influence */}
        <SectionCard
          icon={Cpu}
          title="Influência no Hardware"
          subtitle="Do software ao design de computadores"
          className="mt-8"
          delay={0.3}
        >
          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              A necessidade de gerenciar eficientemente chamadas de subprogramas recursivos e a 
              estrutura de blocos aninhados influenciou diretamente o projeto de arquiteturas de máquina.
            </p>
            
            <div className="bg-gradient-to-br from-[#1a365d]/5 to-[#2c5282]/5 rounded-xl p-6 border border-[#1a365d]/10">
              <h4 className="font-semibold text-[#1a365d] mb-3">
                Máquinas Burroughs B5000, B6000 e B7000
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Uma extensão da linguagem (<strong>DCALGOL</strong>) foi utilizada como linguagem de sistema 
                para uma série de computadores de grande escala. Essas máquinas foram projetadas com uma 
                <strong> pilha de hardware dedicada</strong> para implementar eficientemente a estrutura de 
                bloco e os subprogramas recursivos de ALGOL.
              </p>
              <div className="flex items-center gap-2 text-[#d69e2e] text-sm font-medium">
                <Cpu className="w-4 h-4" />
                Primeiro exemplo de co-design software-hardware
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Legacy Section */}
        <SectionCard
          icon={Users}
          title="Linguagens Influenciadas"
          subtitle="O legado que moldou a programação moderna"
          className="mt-8"
          delay={0.4}
        >
          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              ALGOL estabeleceu o modelo conceitual para a programação estruturada, influenciando toda 
              a geração subsequente de linguagens imperativas:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {["PL/I", "SIMULA 67", "Pascal", "Ada", "C", "C++", "Java"].map((lang, i) => (
                <motion.div
                  key={lang}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-xl p-4 text-center border border-slate-200 shadow-sm hover:shadow-md hover:border-[#1a365d]/20 transition-all"
                >
                  <span className="font-semibold text-[#1a365d]">{lang}</span>
                </motion.div>
              ))}
            </div>

            <blockquote className="border-l-4 border-[#d69e2e] pl-6 py-2 italic text-slate-600 bg-slate-50 rounded-r-xl">
              "O legado do ALGOL é filosófico e arquitetural, definindo como os algoritmos deveriam 
              ser concebidos e comunicados de maneira formal e elegante."
            </blockquote>
          </div>
        </SectionCard>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            to={createPageUrl("Conceitos")}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#1a365d] text-white font-semibold shadow-lg shadow-[#1a365d]/25 hover:shadow-xl hover:shadow-[#1a365d]/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <BookOpen className="w-5 h-5" />
            Continuar para Conceitos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}