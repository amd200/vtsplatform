/**
 * Returns the number of days within the given month of the given year.
 *
 * @param {number} year - The year (e.g. 2025)
 * @param {number} month - The month (1–12)
 * @returns {number} - Number of days in that month
 */
export function daysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}
