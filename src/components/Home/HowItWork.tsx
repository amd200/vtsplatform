import React from 'react';
import { Search, Calendar, Award, ArrowRight, ArrowLeft } from 'lucide-react';
import TitleSection from '../shared/TitleSection';

export default function HowItWork() {
  const steps = [
    {
      icon: Search,
      title: "ابحث عن الدورة",
      description: "ابحث عن الدورة التدريبية المناسبة لك من بين أكثر من 1,238 دورة متاحة.",
      color: "bg-orange-50"
    },
    {
      icon: Calendar,
      title: "احجز مقعدك",
      description: "احجز مقعدك في الدورة التي تريدها واختر الموعد المناسب لك.",
      color: "bg-orange-50"
    },
    {
      icon: Award,
      title: "احصل على الشهادة",
      description: "أكمل الدورة واحصل على شهادة معتمدة تضيف لمسيرتك المهنية.",
      color: "bg-orange-50"
    }
  ];

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="container">
        {/* Header */}
       <TitleSection title='كيف نعمل ؟'/>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <React.Fragment key={index}>
                {/* Step Card */}
                <div className={`bg-primary/20 rounded-3xl p-8 w-full  relative overflow-hidden group hover:shadow-lg transition-shadow duration-300`}>
                  {/* Decorative curves */}
                  <div className="absolute top-4 left-4 w-16 h-16 opacity-20">
                    <svg viewBox="0 0 100 100" className="text-primary">
                      <path d="M20,80 Q50,20 80,80" stroke="currentColor" strokeWidth="3" fill="none"/>
                    </svg>
                  </div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 opacity-20">
                    <svg viewBox="0 0 100 100" className="text-amber-400">
                      <path d="M20,20 Q50,60 80,20" stroke="currentColor" strokeWidth="3" fill="none"/>
                    </svg>
                  </div>

                  {/* Icon */}
                  <div className="bg-white rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <ArrowLeft className="hidden md:block w-8 h-8 text-gray-400 flex-shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}