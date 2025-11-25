import React from "react";
import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

export default function ComparisonTable({ data }) {
  const getIcon = (value) => {
    if (value === true) return <Check className="w-5 h-5 text-green-500" />;
    if (value === false) return <X className="w-5 h-5 text-red-500" />;
    return <Minus className="w-5 h-5 text-slate-400" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto"
    >
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-4 bg-slate-50 rounded-tl-xl font-semibold text-[#1a365d]">
              Característica
            </th>
            <th className="p-4 bg-[#1a365d] text-white font-semibold">
              ALGOL 60
            </th>
            <th className="p-4 bg-[#2c5282] text-white font-semibold rounded-tr-xl">
              ALGOL 68
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr 
              key={index}
              className={`border-b border-slate-100 ${index % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
            >
              <td className="p-4 font-medium text-slate-700">
                {row.feature}
              </td>
              <td className="p-4 text-center">
                {typeof row.algol60 === "boolean" ? (
                  getIcon(row.algol60)
                ) : (
                  <span className="text-sm text-slate-600">{row.algol60}</span>
                )}
              </td>
              <td className="p-4 text-center">
                {typeof row.algol68 === "boolean" ? (
                  getIcon(row.algol68)
                ) : (
                  <span className="text-sm text-slate-600">{row.algol68}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}