/**
 * Formats an ISO date string into a readable format.
 * @param isoDate - The ISO date string to format (e.g., "2024-11-05T12:46:39.466153+00:00").
 * @returns A formatted, readable date string (e.g., "November 5, 2024, 12:46 PM").
 */
export const formatDate = (isoDate) => {
    if (!isoDate) return "";
    const date = new Date(isoDate);
    return date.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };