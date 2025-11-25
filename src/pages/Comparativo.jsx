import React from "react";
import { motion } from "framer-motion";
import { 
  GitCompare, 
  ArrowRight,
  Lightbulb,
  Scale,
  Zap,
  BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import SectionCard from "@/components/algol/SectionCard";
import ComparisonTable from "@/components/algol/ComparisonTable";
import CodeBlock from "@/components/algol/CodeBlock";

export default function Comparativo() {
  const comparisonData = [
    {
      feature: "Filosofia Central",
      algol60: "Clássica, foco em comunicação algorítmica",
      algol68: "Moderna, foco em Ortogonalidade e completude"
    },
    {
      feature: "Definição de Sintaxe",
      algol60: "Forma Backus-Naur (BNF)",
      algol68: "Metalinguagem rigorosa e complexa"
    },
    {
      feature: "Estrutura de Bloco",
      algol60: "BEGIN/END (função dupla)",
      algol68: "Delimitadores distintos (IF...FI, DO...OD)"
    },
    {
      feature: "Passagem de Parâmetros",
      algol60: "Passagem por Nome (thunk)",
      algol68: "Tipagem forte e segura"
    },
    {
      feature: "Complexidade de Implementação",
      algol60: "Moderada",
      algol68: "Alta (dificultou compiladores)"
    },
    {
      feature: "Adoção Comercial",
      algol60: "Limitada (acadêmica)",
      algol68: "Muito limitada (nichos)"
    }
  ];

  const algol60Block = `BEGIN
    integer x;
    x := 10;
    IF x > 5 THEN
        x := x + 1
    ELSE
        x := x - 1;
END`;

  const algol68Block = `BEGIN
    INT x := 10;
    x := IF x > 5 THEN x + 1 ELSE x - 1 FI
END`;

  const influenceData = [
    {
      language: "C",
      features: ["void", "struct", "union", "long", "short", "atribuições compostas (+=)"]
    },
    {
      language: "Go",
      features: ["Sintaxe de tipos compostos", "Declaração de arrays da esquerda para direita"]
    },
    {
      language: "Ada",
      features: ["Tipagem forte", "Estruturas de controle"]
    },
    {
      language: "Bourne Shell",
      features: ["Delimitadores de fechamento (if...fi, case...esac)"]
    }
  ];

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
            <GitCompare className="w-4 h-4 text-[#d69e2e]" />
            <span className="text-sm font-medium text-[#1a365d]">Comparativo</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-[#1a365d] mb-6">
            ALGOL 60 vs ALGOL 68
            <span className="block text-[#2c5282]">Duas Filosofias de Design</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Entenda as diferenças fundamentais entre as duas versões principais do ALGOL 
            e como suas filosofias distintas moldaram a evolução das linguagens de programação.
          </p>
        </motion.div>

        {/* Philosophy Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* ALGOL 60 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#1a365d] to-[#2c5282] p-6">
              <h2 className="text-2xl font-bold text-white">ALGOL 60</h2>
              <p className="text-blue-200 mt-1">A Abordagem Clássica</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a365d]">Foco Principal</h4>
                  <p className="text-sm text-slate-600">Clareza e facilidade na comunicação de algoritmos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a365d]">Legado</h4>
                  <p className="text-sm text-slate-600">Introduziu BNF e estrutura de blocos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Scale className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a365d]">Complexidade</h4>
                  <p className="text-sm text-slate-600">Elegante e relativamente concisa</p>
                </div>
              </div>
              <CodeBlock code={algol60Block} title="Bloco em ALGOL 60" showLineNumbers={false} />
            </div>
          </motion.div>

          {/* ALGOL 68 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#553c9a] to-[#805ad5] p-6">
              <h2 className="text-2xl font-bold text-white">ALGOL 68</h2>
              <p className="text-purple-200 mt-1">O Princípio da Ortogonalidade</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a365d]">Foco Principal</h4>
                  <p className="text-sm text-slate-600">Ortogonalidade: conceitos primitivos aplicados consistentemente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <GitCompare className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a365d]">Inovações</h4>
                  <p className="text-sm text-slate-600">Orientação à expressão, delimitadores distintos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Scale className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a365d]">Complexidade</h4>
                  <p className="text-sm text-slate-600">Extremamente complexa (centenas de páginas)</p>
                </div>
              </div>
              <CodeBlock code={algol68Block} title="Bloco em ALGOL 68" showLineNumbers={false} />
            </div>
          </motion.div>
        </div>

        {/* Orthogonality Explanation */}
        <SectionCard
          icon={Scale}
          title="O Princípio da Ortogonalidade"
          subtitle="A filosofia que definiu o ALGOL 68"
          delay={0.2}
        >
          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              O princípio da <strong>ortogonalidade</strong>, conforme aplicado pelos autores do ALGOL 68, 
              buscava minimizar o número de conceitos primitivos independentes, aplicando-os de forma 
              consistente (ortogonalmente) em toda a linguagem.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Maximizar", desc: "Poder expressivo da linguagem", positive: true },
                { title: "Facilitar", desc: "Descrição e aprendizado", positive: true },
                { title: "Simplificar", desc: "Implementação de compiladores", positive: true }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full ${item.positive ? "bg-green-500" : "bg-red-500"}`} />
                    <h5 className="font-semibold text-[#1a365d]">{item.title}</h5>
                  </div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h4 className="font-semibold text-amber-900 mb-2">O Paradoxo da Ortogonalidade</h4>
              <p className="text-amber-800 text-sm leading-relaxed">
                A aplicação rigorosa do princípio de ortogonalidade levou a uma definição de linguagem 
                extremamente complexa. O <em>Revised Report on ALGOL 68</em> consistia em centenas de 
                páginas preenchidas com terminologia não-padrão. Ironicamente, a busca por um rigor 
                extremo para facilitar a descrição dificultou enormemente a implementação dos compiladores.
              </p>
            </div>
          </div>
        </SectionCard>

        {/* Comparison Table */}
        <SectionCard
          icon={GitCompare}
          title="Tabela Comparativa"
          subtitle="Diferenças estruturais entre ALGOL 60 e ALGOL 68"
          className="mt-8"
          delay={0.3}
        >
          <ComparisonTable data={comparisonData} />
        </SectionCard>

        {/* Key Differences */}
        <SectionCard
          icon={Lightbulb}
          title="Diferenças Estruturais Críticas"
          subtitle="Escopo, parâmetros e estrutura de comando"
          className="mt-8"
          delay={0.4}
        >
          <div className="space-y-8">
            {/* Pass by Name */}
            <div>
              <h4 className="text-lg font-bold text-[#1a365d] mb-3">
                Passagem por Nome (Pass by Name)
              </h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                O ALGOL 60 popularizou o mecanismo de <strong>Passagem por Nome</strong>, onde o 
                parâmetro formal é ligado a uma função especial (denominada <em>thunk</em>) que é 
                executada para retornar o endereço atual do parâmetro no momento da chamada. 
                A complexidade e as implicações semânticas inesperadas levaram a maioria das 
                linguagens subsequentes a abandonar esse mecanismo.
              </p>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <p className="text-sm text-slate-600">
                  O <strong>ALGOL 68</strong> adotou um sistema de tipagem estática, forte, seguro e 
                  estrutural, com escopo estritamente lexical, eliminando as ambiguidades do Pass by Name.
                </p>
              </div>
            </div>

            {/* Expression Orientation */}
            <div>
              <h4 className="text-lg font-bold text-[#1a365d] mb-3">
                Orientação à Expressão
              </h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                Em ALGOL 68, um bloco de código é uma <strong>expressão</strong>, e ele retorna o 
                valor da última expressão avaliada dentro dele. Isso permite que blocos sejam usados 
                em qualquer contexto onde um valor do tipo correspondente é esperado.
              </p>
            </div>

            {/* Distinct Delimiters */}
            <div>
              <h4 className="text-lg font-bold text-[#1a365d] mb-3">
                Delimitadores de Fechamento Distintos
              </h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                ALGOL 68 introduziu delimitadores de fechamento distintos para comandos compostos:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { open: "IF", close: "FI" },
                  { open: "DO", close: "OD" },
                  { open: "CASE", close: "ESAC" },
                  { open: "BEGIN", close: "END" }
                ].map((pair, i) => (
                  <div key={i} className="bg-white rounded-xl p-3 border border-slate-200 text-center">
                    <code className="text-[#1a365d] font-mono font-bold">
                      {pair.open}...{pair.close}
                    </code>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600 mt-4">
                Esta inovação eliminou o problema do <em>dangling-else</em>, onde o ELSE poderia 
                ser ambiguamente ligado a múltiplos IFs.
              </p>
            </div>
          </div>
        </SectionCard>

        {/* Influence on Modern Languages */}
        <SectionCard
          icon={Zap}
          title="Influência em Linguagens Modernas"
          subtitle="O legado que transcendeu o próprio ALGOL 68"
          className="mt-8"
          delay={0.5}
        >
          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              Apesar de sua reputação de complexidade, a contribuição do ALGOL 68 para a ciência da 
              computação foi profunda. Muitas de suas ideias avançadas migraram para o mainstream:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {influenceData.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm"
                >
                  <h4 className="text-lg font-bold text-[#1a365d] mb-3">{item.language}</h4>
                  <ul className="space-y-2">
                    {item.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d69e2e] mt-1.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
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
            to={createPageUrl("MiniJogo")}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#1a365d] text-white font-semibold shadow-lg shadow-[#1a365d]/25 hover:shadow-xl hover:shadow-[#1a365d]/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Testar Conhecimentos no Mini-Jogo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}