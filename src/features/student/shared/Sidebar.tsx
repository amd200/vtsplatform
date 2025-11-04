"use client";

import { useState } from "react";
import Link from "next/link";
import { LayoutDashboard, BookOpen, Users, FileText, Wallet, Settings, User, LogOut, ShoppingCart, CalendarCheck, MessageCircle, ClipboardList, Archive, Book, CreditCard, Banknote } from "lucide-react";
export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/student", label: "حسابي", icon: <LayoutDashboard size={20} /> },
    { href: "/student/mycourses", label: "حجز السنتر", icon: <CalendarCheck size={20} /> },
    { href: "/student/courses", label: "كل المقررات", icon: <BookOpen size={20} /> },
    { href: "/student/mycourses", label: "مقرراتي", icon: <BookOpen size={20} /> },
    { href: "/student/myshedule", label: "جدولي", icon: <ClipboardList size={20} /> },
    { href: "/student/mycourses", label: "مقرراتي", icon: <Book size={20} /> },
    { href: "/student/mychapter", label: "فصولي", icon: <Users size={20} /> },
    { href: "/student/mylessons", label: "المحتوي الفرعي", icon: <Archive size={20} /> },
    { href: "/student/myexamresults", label: "نتائج الامتحانات", icon: <FileText size={20} /> },
    { href: "/student/mycourses", label: "التواصل", icon: <MessageCircle size={20} /> },
    { href: "/student/cart", label: "سلة المشتريات", icon: <ShoppingCart size={20} /> },
    { href: "/student/myinvoicesCourses", label: "فواتير المقررات", icon: <FileText size={20} /> },
    { href: "/student/myinvoicesCourses", label: "سلة مشتريات الكتب", icon: <ShoppingCart size={20} /> },
    { href: "/student/myinvoicesCourses", label: "فواتير شراء الكتب الخدمات", icon: <FileText size={20} /> },
    { href: "/wallet", label: "شحن رصيد", icon: <Wallet size={20} /> },
    { href: "/", label: "مدفوعاتي", icon: <CreditCard size={20} /> },
    { href: "/student/mysubscriptions", label: "الاشتراكات", icon: <Banknote size={20} /> },
    { href: "/student/mysessions", label: "جلساتي", icon: <CreditCard size={20} /> },
    { href: "/profile", label: "الملف الشخصي", icon: <User size={20} /> },
    { href: "/logout", label: "تسجيل خروج", icon: <LogOut size={20} /> },
  ];

  return (
    <aside className={`${isOpen ? "w-64" : "w-20"}  h-screen fixed start-0 z-40 top-0 bg-primary border-e shadow-sm transition-all duration-300 flex flex-col`}>
      <div className={`flex items-center ${!isOpen ? "justify-center" : "justify-end"}  p-3 border-b`}>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg text-white hover:bg-gray-100 hover:text-black">
          {isOpen ? "←" : "→"}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul className="flex flex-col gap-1 p-2">
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link href={item.href} className={`flex ${!isOpen && "justify-center"} text-white items-center gap-4 p-2 py-2.5 rounded-lg hover:text-gray-700 hover:bg-white`}>
                {item.icon}
                <span className={`${!isOpen && "hidden"} transition-all`}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
