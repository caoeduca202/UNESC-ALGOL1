import React from "react";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function CodeBlock({ code, title, showLineNumbers = true }) {
  const [copied, setCopied] = useState(false);

  const highlightSyntax = (line) => {
    // Keywords
    let highlighted = line.replace(
      /\b(BEGIN|END|procedure|if|then|else|for|do|while|step|until|value|own|array|switch|go to|goto)\b/g,
      '<span class="syntax-keyword">$1</span>'
    );
    
    // Types
    highlighted = highlighted.replace(
      /\b(integer|real|boolean|string|label)\b/g,
      '<span class="syntax-type">$1</span>'
    );
    
    // Operators
    highlighted = highlighted.replace(
      /(:=|;|,|\+|-|\*|\/|=|<|>|≤|≥|≠)/g,
      '<span class="syntax-operator">$1</span>'
    );
    
    // Numbers
    highlighted = highlighted.replace(
      /\b(\d+\.?\d*)\b/g,
      '<span class="syntax-number">$1</span>'
    );
    
    // Comments (assuming comment starts with 'comment')
    highlighted = highlighted.replace(
      /(comment .+?;)/gi,
      '<span class="syntax-comment">$1</span>'
    );
    
    return highlighted;
  };

  const lines = code.trim().split("\n");

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl overflow-hidden bg-slate-900 shadow-2xl">
      {title && (
        <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
          <span className="text-sm font-medium text-slate-300">{title}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                Copiado!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copiar
              </>
            )}
          </button>
        </div>
      )}
      <div className="p-4 overflow-x-auto">
        <pre className="code-block text-sm leading-relaxed">
          {lines.map((line, index) => (
            <div key={index} className="flex">
              {showLineNumbers && (
                <span className="select-none text-slate-600 w-8 text-right pr-4 flex-shrink-0">
                  {index + 1}
                </span>
              )}
              <code
                className="text-slate-100"
                dangerouslySetInnerHTML={{ __html: highlightSyntax(line) || "&nbsp;" }}
              />
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}