import { useMemo } from "react";

/**
 * Computes years / months / days together from an ISO start date,
 * plus a couple of derived counts. Pure date math, recalculated
 * on every render so it's always accurate — no stored "days together"
 * number to go stale.
 */
export function useRelationshipStats(startDateISO, extra = {}) {
  return useMemo(() => {
    const start = new Date(startDateISO + "T00:00:00");
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const totalDays = Math.floor((now - start) / (1000 * 60 * 60 * 24));

    return {
      years,
      months,
      days,
      totalDays,
      memories: extra.memories ?? 0,
      photos: extra.photos ?? 0,
      videosCount: extra.videosCount ?? 0,
    };
  }, [startDateISO, extra.memories, extra.photos, extra.videosCount]);
}
