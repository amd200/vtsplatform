type DateFormatType = "full" | "date" | "time";

export function formatDate(dateStr: string, format: DateFormatType = "full"): string {
  if (!dateStr) return "";

  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "";

  // أسماء الشهور بالعربية
  const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "م" : "ص";

  hours = hours % 12 || 12;
  const formattedHours = hours.toString().padStart(2, "0");

  const day = date.getDate().toString().padStart(2, "0");
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();

  // بناء الشكل حسب المطلوب
  switch (format) {
    case "date":
      return `${day}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${year}`;
    case "time":
      return `${formattedHours}:${minutes} ${ampm}`;
    default:
      return `${day}-${monthName}-${year}|${formattedHours}:${minutes} ${ampm}`;
  }
}
