import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Gamepad2, 
  Trophy, 
  RefreshCw, 
  CheckCircle2, 
  XCircle,
  Star,
  Zap,
  Target,
  ArrowRight,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const LEVELS = [
  {
    id: 1,
    title: "Estrutura Básica",
    description: "Complete a declaração do procedimento fatorial",
    code: [
      { text: "real ", blank: false },
      { text: "procedure", blank: true, answer: "procedure" },
      { text: " factorial(n);", blank: false },
      { text: "\nvalue n;", blank: false },
      { text: "\n", blank: false },
      { text: "integer", blank: true, answer: "integer" },
      { text: " n;", blank: false },
      { text: "\nif n = 1 then factorial ", blank: false },
      { text: ":=", blank: true, answer: ":=" },
      { text: " 1", blank: false },
      { text: "\nelse factorial := n * factorial(n-1);", blank: false }
    ],
    pieces: ["procedure", "integer", ":=", "function", "int", "="],
    hint: "Lembre-se: ALGOL usa 'procedure' para funções e ':=' para atribuição"
  },
  {
    id: 2,
    title: "Estrutura de Blocos",
    description: "Complete o bloco de código ALGOL",
    code: [
      { text: "", blank: false },
      { text: "BEGIN", blank: true, answer: "BEGIN" },
      { text: "\n    ", blank: false },
      { text: "integer", blank: true, answer: "integer" },
      { text: " i, sum;", blank: false },
      { text: "\n    sum ", blank: false },
      { text: ":=", blank: true, answer: ":=" },
      { text: " 0;", blank: false },
      { text: "\n    for i := 1 step 1 until 10 do", blank: false },
      { text: "\n        sum := sum + i;", blank: false },
      { text: "\n", blank: false },
      { text: "END", blank: true, answer: "END" }
    ],
    pieces: ["BEGIN", "END", "integer", ":=", "{", "}", "int", "="],
    hint: "ALGOL usa BEGIN e END para delimitar blocos, não chaves"
  },
  {
    id: 3,
    title: "Laço FOR Complexo",
    description: "Complete o laço FOR avançado do ALGOL 60",
    code: [
      { text: "for index := 1 ", blank: false },
      { text: "step", blank: true, answer: "step" },
      { text: " 2 ", blank: false },
      { text: "until", blank: true, answer: "until" },
      { text: " 50, 60, 70, 80, index + 1 until 100 ", blank: false },
      { text: "do", blank: true, answer: "do" },
      { text: "\n    process(index);", blank: false }
    ],
    pieces: ["step", "until", "do", "to", "while", "then"],
    hint: "O laço FOR do ALGOL usa 'step X until Y do'"
  },
  {
    id: 4,
    title: "Condicional",
    description: "Complete a estrutura IF-THEN-ELSE",
    code: [
      { text: "", blank: false },
      { text: "if", blank: true, answer: "if" },
      { text: " x > 0 ", blank: false },
      { text: "then", blank: true, answer: "then" },
      { text: "\n    y := sqrt(x)\n", blank: false },
      { text: "else", blank: true, answer: "else" },
      { text: "\n    y := 0;", blank: false }
    ],
    pieces: ["if", "then", "else", "IF", "THEN", "ELSE"],
    hint: "ALGOL 60 usa minúsculas para palavras-chave condicionais"
  },
  {
    id: 5,
    title: "Declaração Completa",
    description: "Complete o programa ALGOL completo",
    code: [
      { text: "", blank: false },
      { text: "BEGIN", blank: true, answer: "BEGIN" },
      { text: "\n    ", blank: false },
      { text: "real", blank: true, answer: "real" },
      { text: " x, y;", blank: false },
      { text: "\n    ", blank: false },
      { text: "boolean", blank: true, answer: "boolean" },
      { text: " flag;", blank: false },
      { text: "\n    x := 3.14;", blank: false },
      { text: "\n    flag := true;", blank: false },
      { text: "\n    if flag then y ", blank: false },
      { text: ":=", blank: true, answer: ":=" },
      { text: " x * 2;", blank: false },
      { text: "\n", blank: false },
      { text: "END", blank: true, answer: "END" }
    ],
    pieces: ["BEGIN", "END", "real", "boolean", ":=", "float", "bool", "="],
    hint: "ALGOL usa 'real' para ponto flutuante e 'boolean' para lógico"
  }
];

export default function MiniJogo() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const [feedback, setFeedback] = useState({});
  const [gameComplete, setGameComplete] = useState(false);
  const [draggedPiece, setDraggedPiece] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [usedPieces, setUsedPieces] = useState(new Set());

  const level = LEVELS[currentLevel];
  const blanks = level.code.filter(c => c.blank);
  const progress = ((currentLevel) / LEVELS.length) * 100;

  const handleDragStart = (e, piece) => {
    setDraggedPiece(piece);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, blankIndex) => {
    e.preventDefault();
    if (!draggedPiece) return;

    const blank = blanks[blankIndex];
    const isCorrect = draggedPiece === blank.answer;

    setAnswers(prev => ({ ...prev, [blankIndex]: draggedPiece }));
    setFeedback(prev => ({ ...prev, [blankIndex]: isCorrect ? "correct" : "incorrect" }));
    
    if (isCorrect) {
      setUsedPieces(prev => new Set([...prev, draggedPiece]));
    }

    setDraggedPiece(null);
  };

  const checkLevel = () => {
    const allCorrect = blanks.every((blank, index) => answers[index] === blank.answer);
    
    if (allCorrect) {
      const levelScore = Math.max(100 - (showHint ? 20 : 0), 60);
      setScore(prev => prev + levelScore);
      
      if (currentLevel < LEVELS.length - 1) {
        setTimeout(() => {
          setCurrentLevel(prev => prev + 1);
          setAnswers({});
          setFeedback({});
          setShowHint(false);
          setUsedPieces(new Set());
        }, 1000);
      } else {
        setGameComplete(true);
      }
    }
  };

  const resetLevel = () => {
    setAnswers({});
    setFeedback({});
    setUsedPieces(new Set());
  };

  const restartGame = () => {
    setCurrentLevel(0);
    setScore(0);
    setAnswers({});
    setFeedback({});
    setGameComplete(false);
    setShowHint(false);
    setUsedPieces(new Set());
  };

  const allAnswered = blanks.every((_, index) => answers[index] !== undefined);
  const allCorrect = blanks.every((blank, index) => answers[index] === blank.answer);

  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a365d]/5 border border-[#1a365d]/10 mb-6">
            <Gamepad2 className="w-4 h-4 text-[#d69e2e]" />
            <span className="text-sm font-medium text-[#1a365d]">Mini-Jogo Interativo</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-[#1a365d] mb-4">
            Desafio de Sintaxe ALGOL
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Arraste as peças de código para os espaços corretos e teste seus conhecimentos 
            sobre a sintaxe do ALGOL 60.
          </p>
        </motion.div>

        {/* Game Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-4 shadow-lg shadow-slate-200/50 border border-slate-100 text-center">
            <Target className="w-6 h-6 text-[#1a365d] mx-auto mb-2" />
            <p className="text-sm text-slate-500">Nível</p>
            <p className="text-2xl font-bold text-[#1a365d]">{currentLevel + 1}/{LEVELS.length}</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-lg shadow-slate-200/50 border border-slate-100 text-center">
            <Star className="w-6 h-6 text-[#d69e2e] mx-auto mb-2" />
            <p className="text-sm text-slate-500">Pontuação</p>
            <p className="text-2xl font-bold text-[#d69e2e]">{score}</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-lg shadow-slate-200/50 border border-slate-100 text-center">
            <Zap className="w-6 h-6 text-purple-500 mx-auto mb-2" />
            <p className="text-sm text-slate-500">Progresso</p>
            <p className="text-2xl font-bold text-purple-500">{Math.round(progress)}%</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
        </div>

        {/* Game Area */}
        <motion.div
          key={currentLevel}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden"
        >
          {/* Level Header */}
          <div className="bg-gradient-to-r from-[#1a365d] to-[#2c5282] p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Nível {level.id}: {level.title}</h2>
                <p className="text-blue-200 mt-1">{level.description}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowHint(!showHint)}
                className="text-white hover:bg-white/10"
              >
                <HelpCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Hint */}
          <AnimatePresence>
            {showHint && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-amber-50 border-b border-amber-200 px-6 py-4"
              >
                <p className="text-amber-800 text-sm">
                  <strong>💡 Dica:</strong> {level.hint}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Code Area */}
          <div className="p-6">
            <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto">
              <pre className="code-block text-sm leading-loose whitespace-pre-wrap">
                {level.code.map((segment, segIndex) => {
                  if (!segment.blank) {
                    return (
                      <span key={segIndex} className="text-slate-100">
                        {segment.text}
                      </span>
                    );
                  }

                  const blankIndex = level.code.slice(0, segIndex + 1).filter(c => c.blank).length - 1;
                  const answer = answers[blankIndex];
                  const feedbackState = feedback[blankIndex];

                  return (
                    <span
                      key={segIndex}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, blankIndex)}
                      className={`
                        inline-block min-w-[100px] px-3 py-1 mx-1 rounded-lg border-2 border-dashed 
                        transition-all duration-300 cursor-pointer text-center
                        ${answer 
                          ? feedbackState === "correct"
                            ? "bg-green-500/20 border-green-500 text-green-300"
                            : "bg-red-500/20 border-red-500 text-red-300"
                          : "bg-slate-800 border-slate-600 hover:border-[#d69e2e]"
                        }
                      `}
                    >
                      {answer || "___"}
                    </span>
                  );
                })}
              </pre>
            </div>

            {/* Pieces */}
            <div className="mt-6">
              <p className="text-sm text-slate-500 mb-3">Arraste as peças para os espaços:</p>
              <div className="flex flex-wrap gap-3">
                {level.pieces.map((piece, index) => {
                  const isUsed = usedPieces.has(piece);
                  return (
                    <motion.div
                      key={index}
                      draggable={!isUsed}
                      onDragStart={(e) => handleDragStart(e, piece)}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className={`
                        px-4 py-2 rounded-lg font-mono text-sm font-medium
                        transition-all duration-300 select-none
                        ${isUsed 
                          ? "bg-slate-100 text-slate-400 cursor-not-allowed" 
                          : "bg-[#1a365d] text-white cursor-grab active:cursor-grabbing hover:bg-[#2c5282] hover:scale-105 shadow-lg"
                        }
                      `}
                    >
                      {piece}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
              <Button
                variant="outline"
                onClick={resetLevel}
                className="flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Recomeçar Nível
              </Button>

              <div className="flex items-center gap-3">
                {allAnswered && (
                  <AnimatePresence>
                    {allCorrect ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 text-green-600"
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="font-medium">Correto!</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 text-red-600"
                      >
                        <XCircle className="w-5 h-5" />
                        <span className="font-medium">Tente novamente</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                <Button
                  onClick={checkLevel}
                  disabled={!allAnswered}
                  className="bg-[#1a365d] hover:bg-[#2c5282] flex items-center gap-2"
                >
                  Verificar
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Game Complete Dialog */}
        <Dialog open={gameComplete} onOpenChange={setGameComplete}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3 text-2xl">
                <Trophy className="w-8 h-8 text-[#d69e2e]" />
                Parabéns!
              </DialogTitle>
              <DialogDescription asChild>
                <div className="space-y-4 pt-4">
                  <p className="text-lg">
                    Você completou todos os níveis do desafio de sintaxe ALGOL!
                  </p>
                  
                  <div className="bg-gradient-to-br from-[#1a365d]/5 to-[#2c5282]/5 rounded-xl p-6 text-center">
                    <p className="text-sm text-slate-500 mb-2">Pontuação Final</p>
                    <p className="text-4xl font-bold text-[#d69e2e]">{score}</p>
                    <p className="text-sm text-slate-500 mt-2">de {LEVELS.length * 100} pontos possíveis</p>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      onClick={restartGame}
                      className="flex-1"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Jogar Novamente
                    </Button>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-slate-50 rounded-2xl p-6 border border-slate-200"
        >
          <h3 className="font-semibold text-[#1a365d] mb-4">Como Jogar</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { step: "1", title: "Arraste", desc: "Clique e arraste uma peça de código" },
              { step: "2", title: "Solte", desc: "Solte no espaço em branco correspondente" },
              { step: "3", title: "Verifique", desc: "Clique em verificar para conferir suas respostas" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1a365d] text-white flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-medium text-[#1a365d]">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}