import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setShowTooltip(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTooltip(false);
    setDismissed(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.85 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white text-slate-800 px-4 py-3 rounded-2xl shadow-2xl border border-slate-100 max-w-[220px] relative mb-2"
          >
            <button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 w-5 h-5 bg-slate-200 hover:bg-slate-300 rounded-full flex items-center justify-center text-slate-600 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-xs font-semibold text-[#25D366] mb-0.5">W3AppDevelopers</p>
            <p className="text-sm text-slate-700">Hello! 👋 Welcome to W3AppDevelopers. Can we help you?</p>
            <div className="absolute right-[-6px] bottom-4 w-3 h-3 bg-white border-r border-b border-slate-100 transform rotate-[-45deg]" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/919698548633"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg"
        onMouseEnter={() => !dismissed && setShowTooltip(true)}
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    </div>
  );
}
