import React from "react";
import { motion } from "framer-motion";

export default function SectionCard({ 
  children, 
  title, 
  subtitle, 
  icon: Icon, 
  className = "",
  delay = 0 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={`bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden ${className}`}
    >
      {(title || subtitle || Icon) && (
        <div className="px-6 lg:px-8 pt-6 lg:pt-8 pb-4">
          <div className="flex items-start gap-4">
            {Icon && (
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1a365d] to-[#2c5282] flex items-center justify-center flex-shrink-0 shadow-lg">
                <Icon className="w-6 h-6 text-white" />
              </div>
            )}
            <div>
              {title && (
                <h2 className="text-xl lg:text-2xl font-bold text-[#1a365d]">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-slate-500 mt-1 text-sm lg:text-base">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="px-6 lg:px-8 pb-6 lg:pb-8">
        {children}
      </div>
    </motion.div>
  );
}