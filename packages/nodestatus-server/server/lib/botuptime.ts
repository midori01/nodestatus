export const parseUptime = (uptime: number): string => {
  if (uptime >= 86400) return `${Math.floor(uptime / 86400)} 天`;

  const h = String(Math.floor(uptime / 3600)).padStart(2, '0');
  const m = String(Math.floor((uptime / 60) % 60)).padStart(2, '0');
  const s = String(Math.floor(uptime % 60)).padStart(2, '0');
  return `${h}:${m}:${s}`;
};
