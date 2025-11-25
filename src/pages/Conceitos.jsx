import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Layers, 
  Repeat, 
  ArrowRight,
  Box,
  Hash,
  ToggleLeft,
  GitBranch
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import SectionCard from "@/components/algol/SectionCard";
import CodeBlock from "@/components/algol/CodeBlock";

export default function Conceitos() {
  const typesExample = `integer m;
real x, y, z;
boolean flag;
integer array A[1:10];`;

  const blockExample = `BEGIN
    integer i, sum;
    sum := 0;
    for i := 1 step 1 until 10 do
        sum := sum + i;
    comment O valor de sum é 55;
END`;

  const procedureExample = `real procedure factorial(n);
value n;
integer n;
if n = 1 then factorial := 1
else factorial := n * factorial(n-1);`;

  const forLoopExample = `comment Exemplo de laço FOR complexo;
for index := 1 step 2 until 50, 60, 70, 80, index + 1 until 100 do
    process(index);

comment Sequência gerada: 1, 3, 5, ..., 49, 60, 70, 80, 81, 82, ..., 100;`;

  const conditionalExample = `if x > 0 then
    y := sqrt(x)
else if x = 0 then
    y := 0
else
    y := sqrt(-x);`;

  const syntaxElements = [
    {
      syntax: "BEGIN... END",
      description: "Delimitação de bloco e escopo lexical",
      modern: "{ ... } (em C/Java)",
      significance: "Estabeleceu o conceito de escopo léxico aninhado"
    },
    {
      syntax: ":=",
      description: "Operador de atribuição",
      modern: "= (em C/Java)",
      significance: "Claridade na distinção entre atribuição e comparação"
    },
    {
      syntax: "procedure",
      description: "Declaração de subprograma",
      modern: "function ou void function",
      significance: "Suporte intrínseco à recursividade"
    },
    {
      syntax: ";",
      description: "Terminador de instrução",
      modern: "; (em C/Java)",
      significance: "Padrão adotado pela maioria das linguagens imperativas"
    },
    {
      syntax: "IF B THEN S1 ELSE S2",
      description: "Instrução condicional",
      modern: "if (B) { S1 } else { S2 }",
      significance: "Introduziu a estrutura condicional clara"
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
            <Code2 className="w-4 h-4 text-[#d69e2e]" />
            <span className="text-sm font-medium text-[#1a365d]">Conceitos Essenciais</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-[#1a365d] mb-6">
            Estrutura e Sintaxe
            <span className="block text-[#2c5282]">Fundacional do ALGOL 60</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Explore os elementos sintáticos e estruturais que definiram o paradigma 
            da programação estruturada e influenciaram todas as linguagens modernas.
          </p>
        </motion.div>

        {/* Type System */}
        <SectionCard
          icon={Box}
          title="Sistema de Tipos"
          subtitle="Tipagem estática e natureza imperativa"
          delay={0.1}
        >
          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              ALGOL 60 se consolidou como uma linguagem <strong>imperativa e estaticamente tipada</strong>. 
              Isso significa que o tipo de uma variável é definido e verificado em tempo de compilação, 
              contribuindo para a segurança e eficiência da execução.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: Hash, type: "INTEGER", desc: "Números inteiros", color: "blue" },
                { icon: Box, type: "REAL", desc: "Ponto flutuante", color: "emerald" },
                { icon: ToggleLeft, type: "BOOLEAN", desc: "Valores lógicos", color: "purple" }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.type}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-${item.color}-100 flex items-center justify-center mb-3`}>
                      <Icon className={`w-5 h-5 text-${item.color}-600`} />
                    </div>
                    <h4 className="font-bold text-[#1a365d] mb-1">{item.type}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <CodeBlock code={typesExample} title="Declaração de Tipos em ALGOL 60" />
          </div>
        </SectionCard>

        {/* Block Structure */}
        <SectionCard
          icon={Layers}
          title="Estrutura de Blocos"
          subtitle="O conceito que definiu a programação moderna"
          className="mt-8"
          delay={0.2}
        >
          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              Uma das inovações mais significativas de ALGOL 60 foi a introdução da 
              <strong> estrutura de blocos</strong> (delimitada por BEGIN...END), que permitia o 
              aninhamento de escopos. Este conceito transformador definiu o paradigma de 
              <strong> escopo lexical</strong> que domina a programação moderna.
            </p>

            <div className="bg-gradient-to-br from-[#1a365d]/5 to-[#2c5282]/5 rounded-xl p-6 border border-[#1a365d]/10">
              <h4 className="font-semibold text-[#1a365d] mb-3">Escopo Lexical</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Uma variável declarada dentro de um bloco só é visível dentro daquele bloco e em 
                seus sub-blocos, garantindo <strong>encapsulamento</strong> e <strong>modularidade</strong>. 
                Esta abordagem levou ao desenvolvimento de Tabelas de Símbolos hierárquicas para 
                garantir que as regras de visibilidade fossem corretamente aplicadas durante a compilação.
              </p>
            </div>

            <CodeBlock code={blockExample} title="Exemplo de Estrutura de Bloco" />
          </div>
        </SectionCard>

        {/* Syntax Table */}
        <SectionCard
          icon={Code2}
          title="Elementos de Sintaxe"
          subtitle="E seus equivalentes modernos"
          className="mt-8"
          delay={0.3}
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-slate-50 rounded-tl-xl font-semibold text-[#1a365d]">
                    Sintaxe ALGOL 60
                  </th>
                  <th className="text-left p-4 bg-slate-50 font-semibold text-[#1a365d]">
                    Descrição
                  </th>
                  <th className="text-left p-4 bg-slate-50 font-semibold text-[#1a365d]">
                    Equivalente Moderno
                  </th>
                  <th className="text-left p-4 bg-slate-50 rounded-tr-xl font-semibold text-[#1a365d]">
                    Significado Histórico
                  </th>
                </tr>
              </thead>
              <tbody>
                {syntaxElements.map((row, index) => (
                  <tr 
                    key={index}
                    className={`border-b border-slate-100 ${index % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                  >
                    <td className="p-4">
                      <code className="bg-slate-900 text-white px-2 py-1 rounded text-sm font-mono">
                        {row.syntax}
                      </code>
                    </td>
                    <td className="p-4 text-slate-600 text-sm">
                      {row.description}
                    </td>
                    <td className="p-4">
                      <code className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm font-mono">
                        {row.modern}
                      </code>
                    </td>
                    <td className="p-4 text-slate-600 text-sm">
                      {row.significance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        {/* Procedures */}
        <SectionCard
          icon={GitBranch}
          title="Procedimentos e Recursividade"
          subtitle="O suporte nativo a funções recursivas"
          className="mt-8"
          delay={0.4}
        >
          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              A definição de subprogramas utiliza a palavra-chave <code className="bg-slate-100 px-1.5 py-0.5 rounded">procedure</code>. 
              Um exemplo canônico que demonstra o poder da estrutura de blocos e subprogramas em ALGOL 60 
              é o cálculo recursivo do fatorial.
            </p>

            <CodeBlock code={procedureExample} title="Função Fatorial Recursiva" />

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-amber-800 text-sm">
                <strong>Nota:</strong> A capacidade de suportar subprogramas recursivos exigiu o uso de 
                arquiteturas de pilha eficientes, tanto em software quanto em hardware, influenciando 
                diretamente o design de computadores como os Burroughs B5000.
              </p>
            </div>
          </div>
        </SectionCard>

        {/* FOR Loop */}
        <SectionCard
          icon={Repeat}
          title="O Complexo Laço FOR"
          subtitle="Flexibilidade além das linguagens modernas"
          className="mt-8"
          delay={0.5}
        >
          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              A instrução <code className="bg-slate-100 px-1.5 py-0.5 rounded">FOR</code> em ALGOL 60 
              destaca-se pela sua <strong>flexibilidade e complexidade</strong>, sendo significativamente 
              mais expressiva do que os laços de repetição encontrados na maioria das linguagens modernas.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Lista de Expressões", desc: "Valores específicos a iterar" },
                { title: "Step-Until", desc: "expression step expression until expression" },
                { title: "While", desc: "expression while boolean_expression" }
              ].map((form, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                  <h5 className="font-semibold text-[#1a365d] mb-1">{form.title}</h5>
                  <p className="text-sm text-slate-600">{form.desc}</p>
                </div>
              ))}
            </div>

            <CodeBlock code={forLoopExample} title="Exemplo de FOR Complexo" />

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">Entenda a Sequência</h4>
              <p className="text-purple-800 text-sm leading-relaxed">
                No exemplo acima, o índice assume a sequência <strong>1, 3, 5, ..., 49</strong> (passo 2 até 50), 
                depois salta para os valores <strong>60, 70, 80</strong> (lista explícita), e então continua 
                a partir de <strong>81 até 100</strong> (incremento de 1). Esta expressividade não é replicada 
                em linguagens contemporâneas simplificadas.
              </p>
            </div>
          </div>
        </SectionCard>

        {/* Conditionals */}
        <SectionCard
          icon={GitBranch}
          title="Estruturas Condicionais"
          subtitle="IF-THEN-ELSE e controle de fluxo"
          className="mt-8"
          delay={0.6}
        >
          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed">
              ALGOL 60 introduziu a estrutura condicional clara com <code className="bg-slate-100 px-1.5 py-0.5 rounded">IF-THEN-ELSE</code>, 
              que se tornou o padrão para todas as linguagens imperativas subsequentes.
            </p>

            <CodeBlock code={conditionalExample} title="Exemplo de Condicional" />
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
            to={createPageUrl("Comparativo")}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#1a365d] text-white font-semibold shadow-lg shadow-[#1a365d]/25 hover:shadow-xl hover:shadow-[#1a365d]/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <GitBranch className="w-5 h-5" />
            Ver Comparativo ALGOL 60 vs 68
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}