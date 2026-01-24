"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ROICalculator() {
  const { t } = useLanguage();

  const [visits, setVisits] = useState(200);
  const [noShowPercent, setNoShowPercent] = useState(20);
  const [avgPrice, setAvgPrice] = useState(150);

  const calculateROI = useCallback(() => {
    const monthlyLoss = visits * (noShowPercent / 100) * avgPrice;
    const savedAfter = monthlyLoss * 0.95; // 95% reduction in no-shows
    const adminSavings = 13 * 150; // 13h * 150 PLN/h
    const totalSavings = savedAfter + adminSavings;
    const systemCost = 1299; // Professional plan
    const roi = ((totalSavings - systemCost) / systemCost) * 100;
    const paybackMonths = systemCost / totalSavings;

    return {
      monthlyLoss: Math.round(monthlyLoss),
      totalSavings: Math.round(totalSavings),
      roi: Math.round(roi),
      paybackMonths: paybackMonths.toFixed(1),
    };
  }, [visits, noShowPercent, avgPrice]);

  const results = calculateROI();

  return (
    <section id="roi-calculator" className="py-24 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#10B981]/5 via-transparent to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#10B981] text-sm font-medium px-4 py-1 rounded-full mb-4">
            <Calculator size={16} />
            {t.roiCalculator.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.roiCalculator.title}
            <span className="text-[#2563EB]">.</span>
          </h2>
          <p className="text-[#a1a1a1] text-lg max-w-2xl mx-auto">
            {t.roiCalculator.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#121212] border border-[#2a2a2a] rounded-2xl p-8"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Inputs */}
            <div className="space-y-8">
              {/* Visits slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-white font-medium">
                    {t.roiCalculator.visits}
                  </label>
                  <span className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-3 py-1 text-[#2563EB] font-semibold">
                    {visits}
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="10"
                  value={visits}
                  onChange={(e) => setVisits(Number(e.target.value))}
                  className="w-full h-2 bg-[#1a1a1a] rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-[#6b7280] mt-1">
                  <span>50</span>
                  <span>500</span>
                </div>
              </div>

              {/* No-show slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-white font-medium">
                    {t.roiCalculator.noShow}
                  </label>
                  <span className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-3 py-1 text-red-500 font-semibold">
                    {noShowPercent}%
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="40"
                  step="1"
                  value={noShowPercent}
                  onChange={(e) => setNoShowPercent(Number(e.target.value))}
                  className="w-full h-2 bg-[#1a1a1a] rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-[#6b7280] mt-1">
                  <span>5%</span>
                  <span>40%</span>
                </div>
              </div>

              {/* Price slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-white font-medium">
                    {t.roiCalculator.avgPrice}
                  </label>
                  <span className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-3 py-1 text-white font-semibold">
                    {avgPrice} PLN
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="10"
                  value={avgPrice}
                  onChange={(e) => setAvgPrice(Number(e.target.value))}
                  className="w-full h-2 bg-[#1a1a1a] rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-[#6b7280] mt-1">
                  <span>50 PLN</span>
                  <span>500 PLN</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {/* Monthly loss */}
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <div className="text-[#a1a1a1] text-sm mb-1">
                  {t.roiCalculator.monthlyLoss}
                </div>
                <div className="text-3xl font-bold text-red-500">
                  -{results.monthlyLoss.toLocaleString()} PLN
                </div>
              </div>

              {/* Savings */}
              <div className="bg-[#10B981]/10 border border-[#10B981]/20 rounded-xl p-6">
                <div className="text-[#a1a1a1] text-sm mb-1">
                  {t.roiCalculator.savings}
                </div>
                <div className="text-3xl font-bold text-[#10B981]">
                  +{results.totalSavings.toLocaleString()} PLN
                </div>
              </div>

              {/* ROI and payback */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
                  <div className="text-[#a1a1a1] text-sm mb-1">ROI</div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#2563EB]" />
                    <span className="text-2xl font-bold text-[#2563EB]">
                      {results.roi}%
                    </span>
                  </div>
                </div>
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
                  <div className="text-[#a1a1a1] text-sm mb-1">
                    {t.roiCalculator.payback}
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {results.paybackMonths} {t.roiCalculator.months}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="w-full flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#3b82f6] text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer"
              >
                {t.roiCalculator.cta}
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom slider styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: #2563eb;
          border-radius: 50%;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #2563eb;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </section>
  );
}
