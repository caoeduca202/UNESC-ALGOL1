import React from "react";
import { motion } from "framer-motion";

export default function TimelineItem({ 
  year, 
  title, 
  description, 
  isLeft = true,
  index = 0 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex items-center gap-4 lg:gap-8 ${isLeft ? "" : "flex-row-reverse"}`}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? "text-right" : "text-left"}`}>
        <div className={`inline-block bg-white rounded-2xl p-4 lg:p-6 shadow-lg shadow-slate-200/50 border border-slate-100 max-w-md ${isLeft ? "ml-auto" : "mr-auto"}`}>
          <span className="inline-block px-3 py-1 rounded-full bg-[#d69e2e]/10 text-[#d69e2e] text-sm font-bold mb-2">
            {year}
          </span>
          <h3 className="text-lg font-bold text-[#1a365d] mb-2">{title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
      
      {/* Timeline dot */}
      <div className="relative flex-shrink-0">
        <div className="w-4 h-4 rounded-full bg-[#1a365d] border-4 border-white shadow-lg z-10 relative" />
      </div>
      
      {/* Empty space for alignment */}
      <div className="flex-1 hidden lg:block" />
    </motion.div>
  );
}