export function formatNetwork(data: number): string {
  if (data < 1024) return `${data.toFixed(0)}B`;
  if (data < 1024 * 1024) return `${(data / 1024).toFixed(0)}K`;
  if (data < 1024 * 1024 * 1024) return `${(data / 1024 / 1024).toFixed(1)}M`;
  if (data < 1024 * 1024 * 1024 * 1024) return `${(data / 1024 / 1024 / 1024).toFixed(2)}G`;
  return `${(data / 1024 / 1024 / 1024 / 1024).toFixed(2)}T`;
}
