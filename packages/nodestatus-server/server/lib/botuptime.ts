export const parseUptime = (item.status.uptime: number): string => {
  if (item.status.uptime >= 86400) return `${Math.floor(item.status.uptime / 86400)} 天`;

  const h = String(Math.floor(item.status.uptime / 3600)).padStart(2, '0');
  const m = String(Math.floor((item.status.uptime / 60) % 60)).padStart(2, '0');
  const s = String(Math.floor(item.status.uptime % 60)).padStart(2, '0');
  return `${h}:${m}:${s}`;
};
