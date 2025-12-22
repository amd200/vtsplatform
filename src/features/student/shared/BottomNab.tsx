"use client";

import React, { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Home, BookOpen, Library, MoreHorizontal, Star, CreditCard, Users, FileText, ShoppingCart, ListChecks, GraduationCap, Wallet, ClipboardList, Table2, Settings, LogOut, User, LayoutDashboard, Banknote } from "lucide-react";
import { useRouter } from "next/navigation";

type MainTabId = "home" | "myCourses" | "allCourses" | "more";

interface MainTab {
  id: MainTabId;
  label: string;
  href?: string;
  icon: LucideIcon;
}

interface MoreItem {
  id?: string;
  label: string;
  href?: string;
  icon: LucideIcon;
}

const BottomNav: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<MainTabId>("home");
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const mainTabs: MainTab[] = [
    { id: "home", label: "الرئيسية", icon: Home, href: "/student" },
    { id: "myCourses", label: "مقرراتي", icon: BookOpen, href: "/student/mycourses" },
    { id: "allCourses", label: "كل المقررات", icon: Library, href: "/student/courses" },
    { id: "more", label: isMoreOpen ? "أقل" : "المزيد", icon: MoreHorizontal },
  ];

  const moreItems: MoreItem[] = [
    { href: "/student", label: "حسابي", icon: LayoutDashboard },
    // { id: "topStudents", label: "أوائل الطلاب", icon: Star },
    // { href: "/student/mycourses", label: "حجز السنتر", icon: Star },
    { href: "/student/myshedule", label: "جدولي", icon: Table2 },
    { href: "/student/mychapter", label: "فصولي", icon: Users },
    { href: "/student/mylessons", label: "المحتوي الفرعي", icon: GraduationCap },
    { href: "/student/myexamresults", label: "نتائج الامتحانات", icon: ListChecks },
    { href: "/student/mycourses", label: "التواصل", icon: Star },
    { href: "/student/cart", label: "سلة المشتريات", icon: ShoppingCart },
    { href: "/student/myinvoicesCourses", label: "فواتير المقررات", icon: FileText },
    // { href: "/student/myinvoicesCourses", label: "سلة مشتريات الكتب", icon: ShoppingCart },
    // { href: "/student/myinvoicesCourses", label: "فواتير شراء الكتب الخدمات", icon: ClipboardList },
    { href: "/student/mywallet", label: "شحن رصيد", icon: Wallet },
    { href: "/", label: "مدفوعاتي", icon: CreditCard },
    { href: "/student/mysubscriptions", label: "الاشتراكات", icon: Banknote },
    { href: "/student/mysessions", label: "جلساتي", icon: Settings },
    { href: "/profile", label: "الملف الشخصي", icon: User },
    // { id: "instructors", label: "المحاضرين", icon: Users },
    { id: "logoutAll", label: "تسجيل الخروج", icon: LogOut },
  ];

  const handleMainTabClick = (tab: MainTabId) => {
    const current = mainTabs.find((t) => t.id === tab);

    if (tab === "more") {
      setIsMoreOpen((prev) => !prev);
      return;
    }

    setActiveTab(tab);
    setIsMoreOpen(false);

    if (current?.href) {
      router.push(current.href);
    }
  };

  return (
    <div className="lg:hidden block fixed inset-x-0 bottom-0 z-50 bg-white" dir="rtl">
      {isMoreOpen && (
        <div className="bg-white border-t shadow-lg max-h-[70vh] overflow-y-auto animate-slide-up">
          <div className="grid grid-cols-4 gap-y-6 gap-x-3 px-4 pt-3 pb-6 text-center text-xs text-gray-700">
            {moreItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <button
                  key={i}
                  className="flex flex-col items-center"
                  onClick={() => {
                    item?.href && router.push(item.href);
                    setIsMoreOpen(false);
                  }}
                >
                  <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-full border border-gray-300">
                    <Icon className="h-5 w-5 text-gray-600" />
                  </div>
                  <span className="leading-tight">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <nav className="border-t bg-white shadow-[0_-1px_5px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between px-6 py-2.5">
          {mainTabs.map((tab) => {
            const isActive = activeTab === tab.id || (tab.id === "more" && isMoreOpen);
            const Icon = tab.icon;

            return (
              <button key={tab.id} onClick={() => handleMainTabClick(tab.id)} className="flex flex-1 flex-col items-center gap-1 text-[11px]">
                <div className={`flex h-8 w-8 items-center justify-center rounded-md border ${isActive ? "border-gray-700" : "border-gray-300"}`}>
                  <Icon className="h-5 w-5 text-gray-700" />
                </div>
                <span className={isActive ? "text-gray-800" : "text-gray-400"}>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default BottomNav;
