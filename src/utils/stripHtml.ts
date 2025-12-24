export function stripHtml(html?: string) {
  if (!html) return "";

  return html
    .replace(/<[^>]*>/g, "") // يشيل كل التاجات
    .replace(/\s+/g, " ") // ينظف المسافات
    .trim();
}
