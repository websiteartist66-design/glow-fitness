'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  CheckCircle2, 
  Activity, 
  Flame, 
  ArrowRight, 
  Calendar,
  RotateCcw,
  Target,
  Heart
} from 'lucide-react';

interface FitnessCalculatorProps {
  onOpenBooking: (goalOrPlan?: string) => void;
}

export default function FitnessCalculator({ onOpenBooking }: FitnessCalculatorProps) {
  const [heightCm, setHeightCm] = useState<number>(162);
  const [weightKg, setWeightKg] = useState<number>(60);
  const [age, setAge] = useState<number>(28);
  const [goal, setGoal] = useState<string>('Weight Loss & Fat Burn');
  const [showResult, setShowResult] = useState<boolean>(false);

  // Calculate BMI
  const heightMeters = heightCm / 100;
  const bmi = heightMeters > 0 ? (weightKg / (heightMeters * heightMeters)).toFixed(1) : '22.0';
  const bmiValue = parseFloat(bmi);

  let bmiCategory = 'Healthy Weight';
  let bmiColor = 'text-emerald-700 dark:text-emerald-400';
  let bmiBg = 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-900/50';

  if (bmiValue < 18.5) {
    bmiCategory = 'Underweight (Focus on Nutrition & Strength)';
    bmiColor = 'text-amber-700 dark:text-amber-400';
    bmiBg = 'bg-amber-50/70 dark:bg-amber-950/20 border-amber-300 dark:border-amber-900/50';
  } else if (bmiValue >= 25 && bmiValue < 30) {
    bmiCategory = 'Overweight (Ideal for Aerobics + Strength)';
    bmiColor = 'text-[#C49102] dark:text-[#E8D8C4]';
    bmiBg = 'bg-amber-50/70 dark:bg-amber-950/20 border-[#C49102]/40';
  } else if (bmiValue >= 30) {
    bmiCategory = 'High BMI (Supervised Cardio & Strength Plan)';
    bmiColor = 'text-amber-800 dark:text-amber-300';
    bmiBg = 'bg-amber-50/70 dark:bg-amber-950/20 border-amber-300 dark:border-amber-900/50';
  }

  // Recommended plan based on goal
  const getRecommendation = () => {
    switch (goal) {
      case 'Weight Loss & Fat Burn':
        return {
          title: 'Metabolic Fat Burn & Toning Routine',
          classes: ['2x Step Aerobics', '2x Zumba Dance', '1x Leg Press & Resistance'],
          benefits: 'Combines dynamic calorie burning with muscle retention to tone without bulking.',
          focus: 'High calorie burn, lower-body toning & stamina'
        };
      case 'Muscle Toning & Strength':
        return {
          title: 'Women\'s Progressive Strength Routine',
          classes: ['3x Machine Circuit (Leg Press/Cables)', '1x HIIT Cardio', '1x Restorative Yoga'],
          benefits: 'Builds dense, firm muscle and strengthens bone density safely.',
          focus: 'Glute, core, and back posture enhancement'
        };
      case 'Flexibility & Mind-Body Balance':
        return {
          title: 'Holistic Yoga & Mobility Routine',
          classes: ['3x Yoga Flow & Stretch', '2x Gentle Aerobics & Walking', 'Core Mat Pilates'],
          benefits: 'Releases back tightness, expands joint mobility, and lowers cortisol.',
          focus: 'Stress relief, spine alignment & pelvic flexibility'
        };
      default:
        return {
          title: 'Total Body Vitality & Energy Routine',
          classes: ['2x Aerobics', '1x Zumba Party', '2x Guided Machine Circuit'],
          benefits: 'Well-rounded blend of cardiovascular stamina and whole-body tone.',
          focus: 'Overall endurance, mood boost & sustainable health'
        };
    }
  };

  const recommendation = getRecommendation();

  return (
    <section id="calculator" className="py-16 md:py-24 bg-[#FAF8F5] dark:bg-[#0A0A0A] border-b border-[#E6DFD5] dark:border-white/5 relative font-sans-artistic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C49102]/15 text-[#C49102] dark:text-[#E8D8C4] border border-[#C49102]/30 text-[10px] font-bold uppercase tracking-[0.25em] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Assessment
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 dark:text-[#F5F5F4] tracking-tight font-serif-editorial mb-4">
            Women&apos;s Fitness Assessment &{' '}
            <span className="italic font-bold gold-gradient-text">Routine Advisor</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-[#F5F5F4]/70 leading-relaxed font-normal">
            Enter your basic parameters to receive an instant, customized studio recommendation designed for female health and sustainable body composition.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#121212] border border-[#E6DFD5] dark:border-white/10 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Form Inputs */}
            <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 border-b lg:border-b-0 lg:border-r border-[#E6DFD5] dark:border-white/5">
              
              <div className="flex items-center justify-between">
                <h3 className="text-base font-normal font-serif-editorial text-gray-900 dark:text-[#F5F5F4] flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#C49102]" />
                  <span>Your Parameters</span>
                </h3>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-[#F5F5F4]/40">100% Confidential</span>
              </div>

              {/* Height Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-gray-800 dark:text-[#F5F5F4]/90 mb-2">
                  <span>Height: {heightCm} cm</span>
                  <span className="text-gray-500 dark:text-[#F5F5F4]/40 font-normal">({(heightCm / 30.48).toFixed(1)} ft)</span>
                </div>
                <input
                  type="range"
                  min="135"
                  max="195"
                  value={heightCm}
                  onChange={(e) => setHeightCm(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 dark:bg-white/10 appearance-none cursor-pointer accent-[#C49102]"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1 uppercase tracking-widest">
                  <span>135 cm</span>
                  <span>165 cm</span>
                  <span>195 cm</span>
                </div>
              </div>

              {/* Weight Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-gray-800 dark:text-[#F5F5F4]/90 mb-2">
                  <span>Current Weight: {weightKg} kg</span>
                  <span className="text-gray-500 dark:text-[#F5F5F4]/40 font-normal">({(weightKg * 2.205).toFixed(1)} lbs)</span>
                </div>
                <input
                  type="range"
                  min="35"
                  max="125"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 dark:bg-white/10 appearance-none cursor-pointer accent-[#C49102]"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1 uppercase tracking-widest">
                  <span>35 kg</span>
                  <span>75 kg</span>
                  <span>125 kg</span>
                </div>
              </div>

              {/* Primary Fitness Goal Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-[#F5F5F4]/90 mb-2">
                  Primary Fitness Goal:
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-[#181818] border border-[#E6DFD5] dark:border-white/10 text-xs sm:text-sm font-medium text-gray-900 dark:text-[#F5F5F4] focus:outline-none focus:border-[#C49102]"
                >
                  <option value="Weight Loss & Fat Burn">Weight Loss & Active Fat Burn</option>
                  <option value="Muscle Toning & Strength">Muscle Toning & Strength Building</option>
                  <option value="Flexibility & Mind-Body Balance">Flexibility & Mind-Body Balance</option>
                  <option value="Total Body Vitality & Energy">Total Body Stamina & Energy</option>
                </select>
              </div>

              {/* Action Trigger */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setShowResult(true)}
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-[#C49102] hover:bg-[#A37801] shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 glow-gold"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Recommended Plan</span>
                </button>
              </div>

            </div>

            {/* Right Column: Custom Analysis & Recommendations */}
            <div className="lg:col-span-6 p-6 sm:p-8 bg-gray-50 dark:bg-[#141414] flex flex-col justify-between">
              
              <div className="space-y-5">
                {/* BMI Card */}
                <div className={`p-4 border ${bmiBg}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300">
                      Estimated BMI
                    </span>
                    <span className={`text-2xl font-normal font-serif-editorial ${bmiColor}`}>
                      {bmi}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-gray-800 dark:text-gray-200">
                    Category: <span className={bmiColor}>{bmiCategory}</span>
                  </div>
                </div>

                {/* Recommended Routine Box */}
                <div className="p-4 bg-white dark:bg-[#181818] border border-[#E6DFD5] dark:border-white/5 shadow-xs">
                  <div className="flex items-center gap-2 text-[#C49102] text-[10px] font-bold uppercase tracking-widest mb-2">
                    <Heart className="w-3.5 h-3.5" />
                    Ideal Weekly Class Split
                  </div>
                  
                  <h4 className="text-base font-normal font-serif-editorial text-gray-900 dark:text-[#F5F5F4] mb-2">
                    {recommendation.title}
                  </h4>

                  <div className="space-y-1.5 mb-3">
                    {recommendation.classes.map((cls, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs font-medium text-gray-800 dark:text-[#F5F5F4]/80">
                        <span className="w-1.5 h-1.5 bg-[#C49102]"></span>
                        <span>{cls}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-gray-600 dark:text-[#F5F5F4]/50 font-normal">
                    {recommendation.benefits}
                  </p>
                </div>
              </div>

              {/* Bottom CTA for Trial with this Goal */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-white/5 flex flex-col gap-2">
                <button
                  onClick={() => onOpenBooking(`Plan: ${recommendation.title}`)}
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-[#C49102] hover:bg-[#A37801] transition-colors shadow-sm flex items-center justify-center gap-2 glow-gold"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Free Trial with This Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <p className="text-[10px] uppercase tracking-wider text-center text-gray-500 dark:text-[#F5F5F4]/40">
                  Our polite trainers will guide you step-by-step during your trial.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
