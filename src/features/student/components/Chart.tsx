"use client";

import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";
import { Clock, BookOpen, FileText, Video, TrendingUp, Award, Target, Zap, Trophy, Calendar, CheckCircle2, Star, Flame, Brain, Lightbulb } from "lucide-react";
import TitleSection from "../../../components/shared/TitleSection";
import { TooltipProps } from "recharts";

const data = [
  { name: "امتحانات", value: 40, color: "#10b981", icon: FileText, gradient: "from-emerald-400 to-emerald-600" },
  { name: "واجبات", value: 25, color: "#f59e0b", icon: BookOpen, gradient: "from-amber-400 to-orange-500" },
  { name: "فيديوهات", value: 20, color: "#3b82f6", icon: Video, gradient: "from-blue-400 to-blue-600" },
];

const weeklyProgress = [
  { day: "السبت", minutes: 45 },
  { day: "الأحد", minutes: 60 },
  { day: "الاثنين", minutes: 35 },
  { day: "الثلاثاء", minutes: 80 },
  { day: "الأربعاء", minutes: 55 },
  { day: "الخميس", minutes: 70 },
  { day: "الجمعة", minutes: 40 },
];

const learningGoals = [
  {
    id: 1,
    title: "إنهاء كورس البرمجة",
    progress: 75,
    deadline: "15 يناير",
    type: "course",
    color: "blue",
  },
  {
    id: 2,
    title: "حل 50 تمرين رياضيات",
    progress: 60,
    deadline: "20 يناير",
    type: "exercise",
    color: "green",
  },
  {
    id: 3,
    title: "قراءة 3 كتب",
    progress: 33,
    deadline: "31 يناير",
    type: "reading",
    color: "purple",
  },
];

const recentAchievements = [
  {
    id: 1,
    title: "أكملت 10 دروس متتالية",
    description: "استمرارية رائعة في التعلم",
    icon: Flame,
    color: "from-red-400 to-red-600",
    date: "اليوم",
    points: 50,
  },
  {
    id: 2,
    title: "حصلت على 95% في الامتحان",
    description: "أداء ممتاز في امتحان الرياضيات",
    icon: Trophy,
    color: "from-yellow-400 to-yellow-600",
    date: "أمس",
    points: 100,
  },
  {
    id: 3,
    title: "درست لمدة ساعة كاملة",
    description: "تركيز عالي وإنجاز مثمر",
    icon: Brain,
    color: "from-purple-400 to-purple-600",
    date: "منذ يومين",
    points: 25,
  },
];

export function Chart() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [animatedValues, setAnimatedValues] = useState(data.map(() => 0));
  const total = data.reduce((acc, cur) => acc + cur.value, 0);

  // Animation effect on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues(data.map((item) => item.value));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  interface PieData {
    name: string;
    value: number;
  }

  const onPieEnter = (_: PieData, index: number): void => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(-1);
  };

  type CustomTooltipProps = TooltipProps<number, string>;
  const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-xl shadow-2xl border border-gray-100 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: payload[0].payload.color }}></div>
            <p className="text-sm font-semibold text-gray-800">{payload[0].name}</p>
          </div>
          <p className="text-2xl font-bold mb-1" style={{ color: payload[0].payload.color }}>
            {payload[0].value} <span className="text-sm font-normal text-gray-500">دقيقة</span>
          </p>
          <p className="text-xs text-gray-500">{payload?.[0]?.value !== undefined ? ((payload[0].value / total) * 100).toFixed(1) : 0}% من إجمالي الوقت</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="container">
        <TitleSection title="إحصائياتك" />
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* الإنجاز اليومي */}
          <div className="group relative overflow-hidden bg-white rounded-3xl border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-blue-500/5 to-blue-600/10"></div>
            <div className="relative p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center opacity-30">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-gray-800 font-bold text-xl mb-2">الإنجاز اليومي</h3>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">{Math.round(total / 7)}</span>
                <span className="text-lg text-gray-600 pb-1">دقيقة</span>
              </div>
              <p className="text-gray-500 text-sm">متوسط التعلم اليومي</p>
              <div className="mt-4 bg-blue-100 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>

          {/* النشاط المفضل */}
          <div className="group relative overflow-hidden bg-white rounded-3xl  border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-emerald-500/5 to-emerald-600/10"></div>
            <div className="relative p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center opacity-30">
                  <Target className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
              <h3 className="text-gray-800 font-bold text-xl mb-2">النشاط المفضل</h3>
              <div className="mb-2">
                <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">{data[0].name}</span>
              </div>
              <p className="text-gray-500 text-sm">النشاط الأكثر استخداماً</p>
              <div className="mt-4 flex items-center gap-2">
                <div className="bg-emerald-100 rounded-full h-2 flex-1">
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full w-5/6"></div>
                </div>
                <span className="text-xs text-emerald-600 font-semibold">83%</span>
              </div>
            </div>
          </div>

          {/* معدل النمو */}
          <div className="group relative overflow-hidden bg-white rounded-3xl  border border-gray-100 hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-purple-500/5 to-purple-600/10"></div>
            <div className="relative p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center opacity-30">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <h3 className="text-gray-800 font-bold text-xl mb-2">معدل النمو</h3>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">+15%</span>
                <span className="text-green-500 text-sm pb-1 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  إيجابي
                </span>
              </div>
              <p className="text-gray-500 text-sm">تحسن هذا الأسبوع</p>
              <div className="mt-4 bg-purple-100 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full w-4/5"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* القسم الأيسر - الإحصائيات */}
          <div className="col-span-12 lg:col-span-7">
            <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-3xl p-8 border border-gray-100" dir="rtl">
              {/* Enhanced Chart Section */}
              <div className="relative">
                <div className="relative bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <div className="w-80 h-80 mx-auto relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <defs>
                          {data.map((entry, index) => (
                            <linearGradient key={`gradient-${index}`} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor={entry.color} stopOpacity={0.8} />
                              <stop offset="100%" stopColor={entry.color} stopOpacity={1} />
                            </linearGradient>
                          ))}
                        </defs>
                        <Pie data={data.map((item, index) => ({ ...item, value: animatedValues[index] }))} cx="50%" cy="50%" innerRadius={100} outerRadius={110} paddingAngle={3} dataKey="value" onMouseEnter={onPieEnter} onMouseLeave={onPieLeave}>
                          {data.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={`url(#gradient-${index})`}
                              stroke={activeIndex === index ? "#ffffff" : "transparent"}
                              strokeWidth={activeIndex === index ? 4 : 0}
                              style={{
                                filter: activeIndex === index ? "drop-shadow(0 8px 16px rgba(0,0,0,0.2))" : "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                                transform: activeIndex === index ? "scale(1.08)" : "scale(1)",
                                transformOrigin: "center",
                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                              }}
                            />
                          ))}
                        </Pie>
                        <Tooltip wrapperStyle={{ zIndex: 999999 }} content={<CustomTooltip />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Enhanced Center Content */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-gradient-to-br from-white to-gray-50 rounded-full w-36 h-36 flex flex-col items-center justify-center shadow-xl border-4 border-white">
                    <p className="text-3xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                      {Math.floor(total / 60)}h {total % 60}m
                    </p>
                    <p className="text-xs text-gray-500 font-medium">إجمالي الوقت</p>
                  </div>
                </div>
              </div>

              {/* Enhanced Stats Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {data.map((item, index) => {
                  const IconComponent = item.icon;
                  const percentage = ((item.value / total) * 100).toFixed(1);

                  return (
                    <div key={index} className={`group relative overflow-hidden bg-gradient-to-r ${item.gradient} rounded-2xl p-1 transition-all duration-500 hover:scale-[1.02] cursor-pointer ${activeIndex === index ? "ring-4 ring-white ring-opacity-60 shadow-2xl scale-[1.02]" : "hover:shadow-xl"}`} onMouseEnter={() => setActiveIndex(index)} onMouseLeave={() => setActiveIndex(-1)}>
                      <div className="bg-white rounded-xl p-5 h-full">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${item.gradient} shadow-lg`}>
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="font-bold text-sm text-gray-800">{item.name}</p>
                              <p className="text-xs text-gray-600">{item.value} دقيقة</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold" style={{ color: item.color }}>
                              {percentage}%
                            </p>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-3">
                          <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
                            <div className={`h-full transition-all duration-1000 ease-out rounded-full bg-gradient-to-r ${item.gradient} shadow-sm`} style={{ width: `${percentage}%` }}></div>
                          </div>
                        </div>

                        {/* Additional Info */}
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>متوسط: {Math.round(item.value / 7)}د</span>
                          <span>هدف: {item.value + 10}د</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* القسم الأيمن - الأهداف والإنجازات */}
          <div className="col-span-12 lg:col-span-5 space-y-8">
            {/* أهداف التعلم */}

            {/* الإنجازات الأخيرة */}
            {/* <div className="bg-gradient-to-br from-white via-yellow-50/30 to-orange-50/50 rounded-3xl p-8 border border-gray-100 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  إنجازاتك الأخيرة
                </h3>
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl p-3">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="space-y-4">
                {recentAchievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={achievement.id} className="group bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-1">
                            <h4 className="font-bold text-gray-800">{achievement.title}</h4>
                            <div className="text-right">
                              <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-bold">
                                +{achievement.points} نقطة
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">{achievement.date}</span>
                            <div className="flex items-center gap-1">
                              {[...Array(3)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div> */}

            {/* التقدم الأسبوعي */}
            <div className="bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50 rounded-3xl p-8 border border-gray-100 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">التقدم الأسبوعي</h3>
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weeklyProgress}>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                      }}
                      formatter={(value) => [`${value} دقيقة`, "وقت التعلم"]}
                    />
                    <defs>
                      <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Line type="monotone" dataKey="minutes" stroke="#10b981" strokeWidth={3} fill="url(#lineGradient)" dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }} activeDot={{ r: 6, stroke: "#10b981", strokeWidth: 2 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-center p-3 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">{weeklyProgress.reduce((acc, day) => acc + day.minutes, 0)} د</div>
                  <div className="text-sm text-gray-600">المجموع الأسبوعي</div>
                </div>
                <div className="text-center p-3 bg-emerald-50 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-600">{Math.round(weeklyProgress.reduce((acc, day) => acc + day.minutes, 0) / 7)} د</div>
                  <div className="text-sm text-gray-600">المتوسط اليومي</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
